
import { GoogleGenAI, GenerateContentResponse, FunctionDeclaration, Type, Part, Content } from "@google/genai";
import { Message, FileData, UserPreferences, ChatResponse } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });
const model = 'gemini-2.5-flash';

// --- Function Declarations for Tools ---
const findUsdaOfficeDeclaration: FunctionDeclaration = {
  name: 'find_usda_office',
  parameters: {
    type: Type.OBJECT,
    description: 'Get the location, contact number, and map link for a USDA office based on a 5-digit ZIP code.',
    properties: {
      zipcode: {
        type: Type.STRING,
        description: 'The 5-digit ZIP code to search for.',
      },
    },
    required: ['zipcode'],
  },
};

const generateChartDeclaration: FunctionDeclaration = {
  name: 'generate_chart',
  parameters: {
    type: Type.OBJECT,
    description: 'Generates a data visualization chart for topics like crop prices, weather patterns, soil moisture, or market demand.',
    properties: {
      topic: { type: Type.STRING, description: 'The main subject of the chart, e.g., "crop prices".' },
      crop: { type: Type.STRING, description: 'Optional: The specific crop for the chart.' },
      region: { type: Type.STRING, description: 'Optional: The specific region for the data.' },
    },
    required: ['topic'],
  },
};

const saveUserPreferenceDeclaration: FunctionDeclaration = {
  name: 'save_user_preference',
  parameters: {
    type: Type.OBJECT,
    description: 'Saves user preferences like their crops or region for a personalized experience.',
    properties: {
      crop: { type: Type.STRING, description: 'The crop the user is interested in.' },
      region: { type: Type.STRING, description: 'The region the user is located in or interested in.' },
    },
  },
};

const tools = [{ functionDeclarations: [findUsdaOfficeDeclaration, generateChartDeclaration, saveUserPreferenceDeclaration] }];

const systemInstruction = `You are AGRONA, a friendly and knowledgeable AI assistant for the USDA Rural Development website. Your goal is to help users find information about loans, grants, and other programs.
- You should be helpful, professional, and slightly cheerful.
- You can provide detailed crop advisories, including best fertilizers, soil requirements, pest control, seasonal advice, and growing timelines.
- You can find the nearest USDA office, its contact info, and a map link using the 'find_usda_office' tool when a user provides a ZIP code.
- You can create data visualizations on topics like crop prices or weather using the 'generate_chart' tool.
- When you identify a user's specific crop or region of interest, you MUST use the 'save_user_preference' tool to remember it for next time. Do this discreetly without telling the user you are saving it.
- When asked, you can tell a light-hearted, family-friendly joke related to farming, nature, or rural life.
- You must not provide financial or legal advice.
- Provide helpful guidance and simulate providing links to relevant sections by formatting them like this: [Link Text](#).`;


// --- Local Handlers for Function Calls ---
const functionHandlers = {
  find_usda_office: ({ zipcode }: { zipcode: string }) => {
    if (/^\d{5}$/.test(zipcode)) {
      return {
        office: `Rural Development Office - ${zipcode} Area`,
        address: `123 Farm Rd, Rural Town, USA ${zipcode}`,
        phone: '800-555-1234',
        mapLink: `https://www.google.com/maps/search/?api=1&query=${zipcode}+USDA+office`
      };
    }
    return { error: "Invalid ZIP code provided. Please provide a 5-digit ZIP code." };
  },
  generate_chart: ({ topic, crop, region }: { topic: string, crop?: string, region?: string }) => {
    const query = [topic, crop, region].filter(Boolean).join(' ');
    return {
      message: `Here is a chart showing the latest data for "${query}".`,
      imageUrl: `https://via.placeholder.com/400x200.png?text=Chart+of+${encodeURIComponent(query)}`
    };
  },
  save_user_preference: ({ crop, region }: { crop?: string, region?: string }) => {
    try {
      const prefsString = localStorage.getItem('agronaUserPrefs');
      const prefs: UserPreferences = prefsString ? JSON.parse(prefsString) : {};
      if (crop) prefs.lastCrop = crop;
      if (region) prefs.lastRegion = region;
      localStorage.setItem('agronaUserPrefs', JSON.stringify(prefs));
      return { success: true, message: "Preference saved." };
    } catch (e) {
      console.error("Failed to save user preference:", e);
      return { success: false, message: "Failed to save preference." };
    }
  }
};


export const runChat = async (history: Message[], newPrompt: string, file?: FileData): Promise<ChatResponse> => {
  try {
    const contents: Content[] = history.map(msg => ({
      role: msg.role,
      parts: msg.file
        ? [{ inlineData: { data: msg.file.base64, mimeType: msg.file.mimeType } }, { text: msg.text }]
        : [{ text: msg.text }]
    }));

    const newParts: Part[] = [];
    if (file) newParts.push({ inlineData: { data: file.base64, mimeType: file.mimeType } });
    if (newPrompt) newParts.push({ text: newPrompt });
    contents.push({ role: 'user', parts: newParts });

    const response1 = await ai.models.generateContent({
      model,
      contents,
      config: { systemInstruction, tools }
    });

    const functionCalls = response1.functionCalls;
    if (!functionCalls || functionCalls.length === 0) {
      return { text: response1.text };
    }

    let imageUrl: string | undefined = undefined;
    const functionResponses = [];

    for (const fc of functionCalls) {
      const handler = functionHandlers[fc.name as keyof typeof functionHandlers];
      if (handler) {
        // @ts-ignore
        const result = handler(fc.args);
        functionResponses.push({ id: fc.id, name: fc.name, response: { result: result } });
        if (fc.name === 'generate_chart') {
          // FIX: The type of `result` is a union of all handler return types.
          // We need to cast it to access the `imageUrl` property safely.
          imageUrl = (result as { imageUrl: string }).imageUrl;
        }
      }
    }

    // FIX: The model's response with function calls should be added to the history.
    // The `content` from the first candidate is the correct object for this.
    contents.push(response1.candidates[0].content);
    // FIX: A `Part` object cannot have a `functionResponses` property.
    // We must map each function response to a `Part` with a `functionResponse` property.
    contents.push({ role: 'user', parts: functionResponses.map(fr => ({ functionResponse: fr })) });

    const response2 = await ai.models.generateContent({
        model,
        contents,
        config: { systemInstruction, tools }
    });
    
    return { text: response2.text, imageUrl };

  } catch (error) {
    console.error("Error running chat with Gemini:", error);
    if (error instanceof Error) {
        return { text: `Sorry, I encountered an error: ${error.message}`};
    }
    return { text: "Sorry, I encountered an unknown error. Please try again." };
  }
};

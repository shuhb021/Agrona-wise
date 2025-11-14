import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { FileData } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });
const model = 'gemini-2.5-flash';

const systemInstruction = `You are AGRONA, a friendly and knowledgeable AI assistant for the USDA Rural Development website. Your goal is to help users find information about loans, grants, and other programs. 
- You should be helpful, professional, and slightly cheerful. 
- When asked, you can tell a light-hearted, family-friendly joke related to farming, nature, or rural life. 
- You must not provide financial or legal advice. 
- If a user uploads an image, analyze it and answer their questions about it in the context of USDA programs (e.g., 'Is this type of farm eligible for a loan?', 'What kind of crop is this?'). 
- Provide helpful guidance and simulate providing links to relevant sections when possible by formatting them like this: [Link Text](#).`;

export const runChat = async (prompt: string, file?: FileData): Promise<string> => {
  try {
    // FIX: Construct the `parts` array conditionally to ensure correct type inference by TypeScript.
    const parts = file
      ? [
          {
            inlineData: {
              data: file.base64,
              mimeType: file.mimeType,
            },
          },
          { text: prompt },
        ]
      : [{ text: prompt }];

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: { parts: parts },
      config: {
        systemInstruction: systemInstruction,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error running chat with Gemini:", error);
    if (error instanceof Error) {
        return `Sorry, I encountered an error: ${error.message}`;
    }
    return "Sorry, I encountered an unknown error. Please try again.";
  }
};

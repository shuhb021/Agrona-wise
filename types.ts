
export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  file?: {
    base64: string;
    mimeType: string;
    name: string;
  };
  imageUrl?: string;
}

export interface FileData {
    base64: string;
    mimeType: string;
    name: string;
}

export interface UserPreferences {
  lastCrop?: string;
  lastRegion?: string;
}

export interface ChatResponse {
  text: string;
  imageUrl?: string;
}


export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  file?: {
    base64: string;
    mimeType: string;
    name: string;
  };
}

export interface FileData {
    base64: string;
    mimeType: string;
    name: string;
}

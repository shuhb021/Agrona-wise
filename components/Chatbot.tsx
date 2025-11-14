import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Message, FileData } from '../types';
import { runChat } from '../services/geminiService';
import { AgronaLogo, PaperclipIcon, SendIcon, XIcon } from './Icons';

const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const result = reader.result as string;
            // remove "data:*/*;base64," prefix
            resolve(result.split(',')[1]);
        };
        reader.onerror = error => reject(error);
    });
};

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [file, setFile] = useState<FileData | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([
                { id: 'initial', role: 'model', text: "Hello! I'm AGRONA, your guide to the USDA Rural Development website. How can I help you today? You can ask me questions or upload an image for analysis." }
            ]);
        }
    }, [isOpen]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile && selectedFile.type.startsWith('image/')) {
            try {
                const base64 = await fileToBase64(selectedFile);
                setFile({
                    base64,
                    mimeType: selectedFile.type,
                    name: selectedFile.name,
                });
            } catch (error) {
                console.error("Error converting file to base64", error);
                // Handle error (e.g., show a notification)
            }
        }
    };
    
    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() && !file) return;

        setIsLoading(true);
        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            text: input,
            file: file ? file : undefined,
        };
        setMessages(prev => [...prev, userMessage]);

        const currentInput = input;
        const currentFile = file;

        setInput('');
        setFile(null);
        if(fileInputRef.current) fileInputRef.current.value = '';

        try {
            const responseText = await runChat(currentInput, currentFile ?? undefined);
            const modelMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'model',
                text: responseText,
            };
            setMessages(prev => [...prev, modelMessage]);
        } catch (error) {
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'model',
                text: 'Sorry, I ran into an issue. Please try again.',
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    }, [input, file]);

    return (
        <>
            <div className={`fixed bottom-0 right-0 m-6 transition-transform duration-300 ${isOpen ? 'translate-y-full scale-0' : 'translate-y-0 scale-100'}`}>
                <button onClick={() => setIsOpen(true)} className="bg-green-700 text-white rounded-full p-0 w-16 h-16 shadow-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 flex items-center justify-center">
                    <AgronaLogo className="w-16 h-16" />
                </button>
            </div>

            <div className={`fixed bottom-0 right-0 m-6 w-[90vw] max-w-md h-[70vh] max-h-[700px] flex flex-col bg-white rounded-lg shadow-2xl transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
                <div className="flex items-center justify-between p-4 bg-green-700 text-white rounded-t-lg">
                    <div className="flex items-center">
                        <AgronaLogo className="w-10 h-10 mr-3"/>
                        <h3 className="text-lg font-bold">AGRONA Assistant</h3>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="p-1 rounded-full hover:bg-green-600">
                        <XIcon className="w-6 h-6" />
                    </button>
                </div>
                
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                    {messages.map(msg => (
                        <div key={msg.id} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {msg.role === 'model' && <AgronaLogo className="w-8 h-8 flex-shrink-0" />}
                            <div className={`max-w-xs md:max-w-sm rounded-lg p-3 ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none border'}`}>
                                {msg.file && <img src={`data:${msg.file.mimeType};base64,${msg.file.base64}`} alt={msg.file.name} className="rounded-md mb-2 max-h-40" />}
                                {msg.text && <p className="text-sm whitespace-pre-wrap">{msg.text}</p>}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex items-end gap-2 justify-start">
                            <AgronaLogo className="w-8 h-8" />
                            <div className="max-w-xs md:max-w-sm rounded-lg p-3 bg-white border">
                                <div className="flex items-center space-x-1">
                                    <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                
                <div className="p-4 border-t bg-white">
                    {file && (
                        <div className="mb-2 p-2 bg-gray-100 rounded-md flex justify-between items-center text-sm">
                            <span className="truncate">{file.name}</span>
                            <button onClick={() => { setFile(null); if(fileInputRef.current) fileInputRef.current.value = ''; }} className="p-1 text-gray-500 hover:text-gray-800">
                                <XIcon className="w-4 h-4" />
                            </button>
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="flex items-center gap-2">
                        <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" id="file-upload" />
                        <label htmlFor="file-upload" className="p-2 text-gray-500 hover:text-blue-600 cursor-pointer rounded-full hover:bg-gray-100">
                            <PaperclipIcon className="w-6 h-6" />
                        </label>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask AGRONA..."
                            className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 placeholder-gray-500"
                            disabled={isLoading}
                        />
                        <button type="submit" disabled={isLoading || (!input.trim() && !file)} className="bg-blue-600 text-white rounded-full p-2 disabled:bg-gray-300 hover:bg-blue-700 transition-colors">
                            <SendIcon className="w-6 h-6" />
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Chatbot;
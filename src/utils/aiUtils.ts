import { GoogleGenAI } from "@google/genai";
import { MenuItem } from '../types';

/**
 * Generate heritage story for a menu item using AI
 */
export const generateHeritageStory = async (item: MenuItem): Promise<string> => {
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: `Provide an evocative Chef's Note for "${item.name}". Focus on sensory poetry and Nigerian heritage. Brief (max 80 words).`,
            config: { temperature: 0.8 }
        });
        return response.text || "A masterpiece of heritage.";
    } catch (err) {
        return "An exploration of texture and memory where Lagos meets the world.";
    }
};

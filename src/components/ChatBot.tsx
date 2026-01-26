import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ChefHat, ArrowRight } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ChatBot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [history, setHistory] = useState<{ role: 'user' | 'chef'; text: string }[]>([]);
    const [isTyping, setIsTyping] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim()) return;

        const userMsg = message;
        setMessage("");
        setHistory(prev => [...prev, { role: 'user', text: userMsg }]);
        setIsTyping(true);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const response = await ai.models.generateContent({
                model: 'gemini-3-flash-preview',
                contents: userMsg,
                config: {
                    systemInstruction: "You are the digital concierge for Chef Olamide. Sophisticated, brief, and highly polite."
                }
            });
            setHistory(prev => [...prev, { role: 'chef', text: response.text || "Connection lost to the atelier." }]);
        } catch (err) {
            setHistory(prev => [...prev, { role: 'chef', text: "Digital senses overwhelmed." }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="fixed bottom-12 right-12 z-[1000]">
            <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-20 h-20 bg-obsidian text-white rounded-full shadow-2xl flex items-center justify-center border border-white/10"
            >
                {isOpen ? <X /> : <MessageCircle />}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute bottom-28 right-0 w-80 md:w-96 bg-white shadow-3xl rounded-3xl overflow-hidden border border-obsidian/5 flex flex-col"
                    >
                        <div className="bg-obsidian p-10 text-white">
                            <ChefHat className="text-champagne mb-4" />
                            <h3 className="font-serif text-2xl">Digital Concierge</h3>
                        </div>

                        <div className="h-96 overflow-y-auto p-8 space-y-6 bg-ivory">
                            {history.map((chat, i) => (
                                <div key={i} className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`p-4 rounded-2xl text-xs leading-relaxed ${chat.role === 'user' ? 'bg-obsidian text-white' : 'bg-white border'
                                        }`}>
                                        {chat.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 animate-pulse">
                                    Typing...
                                </div>
                            )}
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 bg-white border-t flex gap-4">
                            <input
                                type="text"
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                className="flex-grow text-xs focus:outline-none"
                                placeholder="Ask about the cuisine..."
                            />
                            <button type="submit" className="text-obsidian">
                                <ArrowRight />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ChatBot;

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { MenuItem } from '../types';

interface DishDetailModalProps {
    selectedDish: { item: MenuItem; story: string } | null;
    isGenerating: boolean;
    onClose: () => void;
}

const DishDetailModal: React.FC<DishDetailModalProps> = ({ selectedDish, isGenerating, onClose }) => {
    return (
        <AnimatePresence>
            {selectedDish && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[500] flex items-center justify-center p-8 backdrop-blur-3xl bg-obsidian/95"
                >
                    <div className="absolute inset-0" onClick={onClose} />
                    <motion.div
                        initial={{ y: 50 }}
                        animate={{ y: 0 }}
                        className="relative max-w-4xl w-full bg-ivory p-12 md:p-24 overflow-hidden rounded-sm"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-12 right-12 hover:rotate-90 transition-transform"
                        >
                            <X size={32} strokeWidth={1} />
                        </button>
                        <div className="max-w-2xl">
                            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-champagne mb-8">
                                Heritage Discovery
                            </h4>
                            <h2 className="text-6xl font-serif italic mb-12">{selectedDish.item.name}</h2>
                            <div className="prose prose-2xl font-serif italic text-obsidian leading-relaxed">
                                {isGenerating ? (
                                    <div className="animate-pulse space-y-4">
                                        <div className="h-4 bg-slate-200 rounded w-full" />
                                        <div className="h-4 bg-slate-200 rounded w-4/5" />
                                    </div>
                                ) : (
                                    <p>"{selectedDish.story}"</p>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default DishDetailModal;

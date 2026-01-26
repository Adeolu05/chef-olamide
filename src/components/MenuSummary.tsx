import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download } from 'lucide-react';
import { MenuItem } from '../types';

interface MenuSummaryProps {
    selectedItems: MenuItem[];
    onDownload: () => void;
    onReview: () => void;
}

const MenuSummary: React.FC<MenuSummaryProps> = ({ selectedItems, onDownload, onReview }) => {
    return (
        <AnimatePresence>
            {selectedItems.length > 0 && (
                <motion.div
                    layout
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[100] bg-obsidian text-white px-10 py-6 rounded-full shadow-2xl border border-white/10 flex items-center gap-12 backdrop-blur-3xl"
                >
                    <div className="flex items-center gap-4 border-r border-white/10 pr-10">
                        <div className="w-10 h-10 bg-champagne rounded-full flex items-center justify-center text-obsidian font-bold">
                            {selectedItems.length}
                        </div>
                        <span className="text-[10px] uppercase tracking-widest font-bold">Items Curated</span>
                    </div>
                    <button
                        onClick={onReview}
                        className="text-[10px] uppercase tracking-widest font-bold hover:text-champagne transition-colors"
                    >
                        Review My Menu
                    </button>
                    <button
                        onClick={onDownload}
                        className="bg-white text-obsidian px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-champagne hover:text-white transition-all"
                    >
                        <Download size={14} /> Download
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MenuSummary;

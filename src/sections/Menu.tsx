import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, Share2, Sparkles, Bookmark, Twitter, Facebook, MessageCircle } from 'lucide-react';
import { MENU_DATA } from '../constants';
import { MenuItem } from '../types';

interface MenuProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    selectedItems: MenuItem[];
    toggleMenuItem: (item: MenuItem) => void;
    activeShareIdState: string | null;
    setActiveShareIdState: (id: string | null) => void;
    handleShare: (platform: 'x' | 'whatsapp' | 'facebook', item: MenuItem) => void;
    discoverHeritage: (item: MenuItem) => void;
}

const Menu: React.FC<MenuProps> = ({
    activeTab,
    setActiveTab,
    selectedItems,
    toggleMenuItem,
    activeShareIdState,
    setActiveShareIdState,
    handleShare,
    discoverHeritage
}) => {
    return (
        <section id="menu" className="py-32 bg-ivory">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-32">
                    <span className="text-emeraldDeep uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">
                        03. The Curation
                    </span>
                    <h2 className="text-7xl font-serif italic mb-16">The Chapters</h2>
                    <div className="flex justify-center space-x-12 md:space-x-20 border-b border-obsidian/5">
                        {MENU_DATA.map((cat) => (
                            <button
                                key={cat.title}
                                onClick={() => setActiveTab(cat.title)}
                                className={`pb-8 text-[11px] font-bold uppercase tracking-[0.4em] relative transition-colors ${activeTab === cat.title ? 'text-obsidian' : 'text-slate-400 hover:text-obsidian'
                                    }`}
                            >
                                {cat.title}
                                {activeTab === cat.title && (
                                    <motion.div
                                        layoutId="menuTab"
                                        className="absolute bottom-0 left-0 w-full h-[2px] bg-champagne"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-12"
                    >
                        {MENU_DATA.find(c => c.title === activeTab)?.items.map((item) => {
                            const isSelected = selectedItems.find(i => i.id === item.id);
                            const isShareOpen = activeShareIdState === item.id;

                            return (
                                <div
                                    key={item.id}
                                    className={`group grid grid-cols-1 md:grid-cols-12 gap-8 items-start p-10 transition-all duration-700 rounded-3xl ${isSelected
                                        ? 'bg-emeraldDeep/5 border border-emeraldDeep/10 shadow-xl'
                                        : 'border border-transparent hover:border-obsidian/5'
                                        }`}
                                >
                                    <div className="md:col-span-8">
                                        <div className="flex items-center space-x-4 mb-4">
                                            <span className="text-champagne font-serif italic text-2xl">
                                                0{MENU_DATA.find(c => c.title === activeTab)?.items.indexOf(item)! + 1}
                                            </span>
                                            <div className="flex flex-col">
                                                <h4 className={`text-3xl font-serif ${isSelected ? 'text-emeraldDeep' : 'text-obsidian'}`}>
                                                    {item.name}
                                                </h4>
                                                {isSelected && (
                                                    <span className="text-[8px] uppercase tracking-[0.5em] text-champagne mt-1 font-bold flex items-center gap-1">
                                                        <Bookmark size={10} fill="currentColor" /> Curated
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-slate-500 font-light italic mb-6 leading-relaxed">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center space-x-6">
                                            <button
                                                onClick={() => discoverHeritage(item)}
                                                className="text-[9px] uppercase tracking-widest font-bold flex items-center gap-2 text-slate-400 hover:text-obsidian transition-colors"
                                            >
                                                <Sparkles size={14} /> Heritage Note
                                            </button>
                                            <div className="relative">
                                                <button
                                                    onClick={() => setActiveShareIdState(isShareOpen ? null : item.id)}
                                                    className={`p-2 rounded-full transition-all ${isShareOpen ? 'bg-obsidian text-white' : 'text-slate-300 hover:text-obsidian'
                                                        }`}
                                                >
                                                    <Share2 size={16} />
                                                </button>
                                                <AnimatePresence>
                                                    {isShareOpen && (
                                                        <motion.div
                                                            initial={{ opacity: 0, x: 10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: 10 }}
                                                            className="absolute left-full ml-4 top-0 bg-white shadow-2xl rounded-full px-6 py-2 border border-obsidian/5 flex items-center space-x-6 z-50"
                                                        >
                                                            <button
                                                                onClick={() => handleShare('x', item)}
                                                                className="text-obsidian hover:text-champagne"
                                                            >
                                                                <Twitter size={14} />
                                                            </button>
                                                            <button
                                                                onClick={() => handleShare('whatsapp', item)}
                                                                className="text-obsidian hover:text-champagne"
                                                            >
                                                                <MessageCircle size={14} />
                                                            </button>
                                                            <button
                                                                onClick={() => handleShare('facebook', item)}
                                                                className="text-obsidian hover:text-champagne"
                                                            >
                                                                <Facebook size={14} />
                                                            </button>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:col-span-4 flex flex-col items-end justify-center h-full">
                                        <span className="text-2xl font-serif mb-6">{item.price}</span>
                                        <button
                                            onClick={() => toggleMenuItem(item)}
                                            className={`px-8 py-4 rounded-full border transition-all duration-500 flex items-center gap-3 ${isSelected
                                                ? 'bg-emeraldDeep text-white border-emeraldDeep scale-105'
                                                : 'border-obsidian/10 text-obsidian hover:bg-obsidian hover:text-white'
                                                }`}
                                        >
                                            {isSelected ? <Trash2 size={16} /> : <Plus size={16} />}
                                            <span className="text-[10px] font-bold uppercase tracking-widest">
                                                {isSelected ? 'Remove' : 'Add to Tasting'}
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Menu;

import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-32 bg-ivory">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
                    <div className="lg:col-span-5">
                        <h2 className="text-7xl font-serif italic mb-12">Concierge.</h2>
                        <div className="space-y-12">
                            <div className="flex items-center space-x-8">
                                <div className="w-16 h-16 border border-obsidian/10 rounded-full flex items-center justify-center">
                                    <Phone size={24} strokeWidth={1} />
                                </div>
                                <div>
                                    <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                                        Private
                                    </h5>
                                    <p className="text-xl font-serif italic">+1 (555) OLAMIDE</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-8">
                                <div className="w-16 h-16 border border-obsidian/10 rounded-full flex items-center justify-center">
                                    <Mail size={24} strokeWidth={1} />
                                </div>
                                <div>
                                    <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                                        Inquiry
                                    </h5>
                                    <p className="text-xl font-serif italic">concierge@chefolamide.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7 bg-white p-12 md:p-24 shadow-2xl border border-obsidian/5">
                        <form className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-obsidian/10 py-4 focus:outline-none focus:border-obsidian transition-colors text-sm"
                                    placeholder="FULL NAME"
                                />
                                <input
                                    type="email"
                                    className="w-full bg-transparent border-b border-obsidian/10 py-4 focus:outline-none focus:border-obsidian transition-colors text-sm"
                                    placeholder="EMAIL ADDRESS"
                                />
                            </div>
                            <textarea
                                className="w-full bg-transparent border-b border-obsidian/10 py-4 focus:outline-none focus:border-obsidian transition-colors text-sm h-32"
                                placeholder="YOUR VISION FOR THE EVENT"
                            />
                            <button className="w-full bg-brandGreen text-white py-8 text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-champagne transition-all shadow-2xl">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

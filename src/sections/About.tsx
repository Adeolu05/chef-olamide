import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <section id="about" className="py-32 bg-white overflow-hidden">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
                    <div className="lg:col-span-5">
                        <span className="text-champagne uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">
                            01. Philosophy
                        </span>
                        <h2 className="text-6xl md:text-8xl font-serif text-obsidian leading-tight mb-12">
                            Soul of the <br /><span className="italic">Craft.</span>
                        </h2>
                        <div className="w-20 h-px bg-obsidian/10 mb-12" />
                        <p className="text-slate-500 font-light text-xl leading-relaxed mb-12 italic">
                            "We choreograph cultural homecomings through sculptural precision."
                        </p>
                        <div className="prose prose-lg text-slate-600 font-light leading-relaxed mb-12">
                            <p>
                                Born in Lagos, refined in Michelin ateliers. Chef Olamide treats Nigerian ingredients
                                with the reverence of truffles—transforming Yaji and Scent Leaf into high-art gastronomy.
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-7 relative h-[600px] md:h-[800px]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="absolute top-0 right-0 w-4/5 h-4/5 overflow-hidden rounded-sm shadow-2xl"
                        >
                            <img
                                src="https://i.imgur.com/WRG0ReO.jpeg"
                                className="w-full h-full object-cover"
                                alt="Chef Olamide"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="absolute bottom-0 left-0 w-2/5 h-2/5 overflow-hidden rounded-sm border-[12px] border-ivory shadow-2xl"
                        >
                            <img
                                src="https://i.imgur.com/4z1M2NY.jpeg"
                                className="w-full h-full object-cover"
                                alt="Chef Olamide Logo"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

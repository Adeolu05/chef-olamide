import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-obsidian mb-6">About</h2>
                    <p className="text-slate-600 text-base md:text-lg max-w-4xl leading-relaxed">
                        I'm a Chef de Partie with experience across pubs, restaurants, and hotels in the UK—focused on quality, cleanliness, and consistent execution in fast-paced kitchens.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left: Three Cards */}
                    <div className="lg:col-span-6 space-y-6">
                        {/* Kitchen Strength Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-slate-50 p-8 rounded-lg border border-slate-100 hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-obsidian text-xl font-bold mb-4">Kitchen Strength</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Hot section service, mise en place, timing, and section organisation.
                            </p>
                        </motion.div>

                        {/* Standards Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-slate-50 p-8 rounded-lg border border-slate-100 hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-obsidian text-xl font-bold mb-4">Standards</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Food hygiene, allergen awareness, and clean workstations.
                            </p>
                        </motion.div>

                        {/* Teamwork Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-slate-50 p-8 rounded-lg border border-slate-100 hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-obsidian text-xl font-bold mb-4">Teamwork</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Clear communication and support for junior chefs during peak service.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right: Images */}
                    <div className="lg:col-span-6 relative h-[500px] md:h-[600px]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="absolute top-0 right-0 w-4/5 h-4/5 overflow-hidden rounded-lg shadow-2xl"
                        >
                            <img
                                src="https://i.imgur.com/WRG0ReO.jpeg"
                                className="w-full h-full object-cover"
                                alt="Chef Olamide at work"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute bottom-0 left-0 w-2/5 h-2/5 overflow-hidden rounded-lg border-8 border-white shadow-2xl bg-white"
                        >
                            <img
                                src="https://i.imgur.com/4z1M2NY.jpeg"
                                className="w-full h-full object-cover"
                                alt="Chef Olamide Brand"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

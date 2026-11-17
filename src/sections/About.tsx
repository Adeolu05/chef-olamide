import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-obsidian mb-6">About</h2>
                    <p className="text-slate-600 text-base md:text-lg max-w-4xl leading-relaxed">
                        I'm a Chef de Partie at The Lanesborough in Knightsbridge, with over three years in UK professional kitchens, from high-volume pubs to five-star luxury hotels. I run a hot section of 150+ covers per shift, train junior chefs, and keep standards high on quality, food safety and cost control. Next, I'm working towards Senior Chef de Partie and Junior Sous Chef.
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
                                Running a hot section and deputising for senior chefs. Classical and modern cookery: British classics, seasonal menus, sauces, meat and vegetable preparation.
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
                                HACCP, allergen management, COSHH and EHO standards, plus cost control through stock rotation, ordering, portion control and waste reduction.
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
                                Training and mentoring commis chefs during peak service, with clear communication across the brigade and front of house.
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
                                src="/images/about/chef-portrait.webp"
                                className="w-full h-full object-cover"
                                alt="Chef Olamide in chef whites"
                                loading="lazy"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute bottom-0 left-0 w-2/5 h-2/5 overflow-hidden rounded-lg border-8 border-white shadow-2xl bg-white"
                        >
                            <img
                                src="https://res.cloudinary.com/dbrpuapfr/image/upload/v1769552134/4z1M2NY_d_tz6ove.jpg"
                                className="w-full h-full object-cover"
                                alt="Chef Olamide logo"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Education & Certificates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                    <div className="p-8 rounded-lg border border-slate-100">
                        <h3 className="text-brandGreen text-xs font-bold uppercase tracking-wider mb-6">Education</h3>
                        <ul className="space-y-5">
                            <li>
                                <p className="text-obsidian font-bold">M.Sc., Information Technology</p>
                                <p className="text-slate-500 text-sm">University of the West of England, Bristol · 2024</p>
                            </li>
                            <li>
                                <p className="text-obsidian font-bold">B.Sc., Information Technology</p>
                                <p className="text-slate-500 text-sm">University of Education, Winneba, Ghana · 2014</p>
                            </li>
                        </ul>
                    </div>
                    <div className="p-8 rounded-lg border border-slate-100">
                        <h3 className="text-brandGreen text-xs font-bold uppercase tracking-wider mb-6">Certificates</h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                            {[
                                'Level 2 Food Hygiene and Safety for Catering (High Speed Training)',
                                'Food Safety Level 2 (CPL Learning)',
                                'Allergens (Florence Academy Training)',
                                'Chemical Competence (CPL Learning)',
                                'Health and Safety Level 2 (Flow Learning by Mapal)'
                            ].map((c) => (
                                <li key={c} className="flex items-start">
                                    <span className="text-champagne mr-3">•</span>
                                    <span>{c}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

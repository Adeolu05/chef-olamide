import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
    const experiences = [
        {
            role: 'Chef de Partie, Main Kitchen',
            company: 'The Lanesborough (Oetker Collection), Knightsbridge',
            period: 'Sep 2026 – Present',
            badge: 'Five-Star Hotel',
            highlights: [
                'Run a section in the Main Kitchen of a five-star luxury hotel, cooking to established recipe cards and methods.',
                'Review daily occupancy, reservations and function sheets to plan the right production levels.',
                'Taste and check food, sauces and preparations throughout service to hold standards and portion control.',
                'Adapt dishes for special guest requests and dietary needs, and train junior chefs on the job.'
            ]
        },
        {
            role: 'Chef de Partie',
            company: 'Kings Arms Pub (Mitchells & Butlers), Cardington',
            period: 'Nov 2024 – Sep 2026',
            badge: 'Hot Section Lead',
            highlights: [
                'Led the hot kitchen section, delivering British classics and seasonal menus at 150+ covers per shift.',
                'Introduced stock rotation procedures that cut food waste by 20% and improved cost efficiency.',
                'Developed seasonal menus with the Sous Chef and Head Chef, boosting repeat visits.',
                'Trained and supervised junior chefs, and supported a continuous 5-star food hygiene rating.'
            ]
        },
        {
            role: 'Chef de Partie',
            company: 'Millennium Hotel London, Knightsbridge',
            period: 'May 2024 – Jun 2024',
            badge: 'Hotel Kitchen',
            highlights: [
                'Deputised for the Senior Chef de Partie, running the section in their absence.',
                'Prepared, cooked and presented all section dishes to the recipe file, accommodating guest requests.',
                'Coordinated Commis Chefs to complete mise en place before service.'
            ]
        },
        {
            role: 'Commis Chef',
            company: 'The Falcon Pub, Rushden Road',
            period: 'Mar 2024 – May 2024',
            badge: 'Menu & Service',
            highlights: [
                'Supported food preparation and service, managing workflow during peak hours.',
                'Contributed to new menu items and promotions, including dishes for dietary requirements.',
                'Kept the kitchen clean, organised and compliant with health and safety regulations.'
            ]
        }
    ];

    const earlierRoles = [
        { role: 'Chef de Partie', company: 'King William IV, Kempston', period: 'Oct 2023' },
        { role: 'Chef', company: 'Côte Brasserie, Royal Festival Hall', period: 'Sep 2023' },
        { role: 'Chef', company: 'TGI Fridays, Stratford', period: 'Jan 2023' }
    ];

    return (
        <section id="experience" className="py-32 bg-brandGreen text-white relative">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
                <h2 className="text-6xl md:text-8xl font-serif mb-4">Experience.</h2>
                <p className="text-white/60 text-sm md:text-base mb-24 max-w-2xl">
                    Over three years in UK professional kitchens, from high-volume pubs to five-star hotels in Knightsbridge.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-white/5">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ backgroundColor: 'rgba(212,175,55,0.05)' }}
                            className="p-12 md:p-16 transition-colors group cursor-pointer border-r border-white/5 last:border-r-0"
                        >
                            {/* Badge */}
                            <div className="inline-block bg-champagne/20 text-champagne px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
                                {exp.badge}
                            </div>

                            {/* Role & Company */}
                            <h3 className="text-3xl font-serif mb-3">{exp.role}</h3>
                            <h4 className="text-xl font-light text-white/80 mb-4">{exp.company}</h4>

                            {/* Period */}
                            <p className="text-champagne text-sm font-medium mb-8">{exp.period}</p>

                            {/* Highlights */}
                            <ul className="space-y-4 mb-12">
                                {exp.highlights.map((highlight, hIndex) => (
                                    <li key={hIndex} className="flex items-start">
                                        <span className="text-champagne mr-3 mt-1 text-xl">•</span>
                                        <span className="text-white/60 text-sm font-light leading-relaxed">
                                            {highlight}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* View Details Link */}
                            <a
                                href="https://www.linkedin.com/in/olamide-oyewole-53911b2bb/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 text-champagne opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <span className="text-[10px] font-bold uppercase tracking-widest">View Details</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </a>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16">
                    <h3 className="text-champagne text-xs font-bold uppercase tracking-[0.3em] mb-6">Earlier roles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-white/5">
                        {earlierRoles.map((r) => (
                            <div key={r.company} className="p-8 border-r border-white/5 last:border-r-0">
                                <p className="text-champagne text-sm font-medium mb-2">{r.period}</p>
                                <h4 className="text-xl font-serif mb-1">{r.role}</h4>
                                <p className="text-white/60 text-sm font-light">{r.company}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

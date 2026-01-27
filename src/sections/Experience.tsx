import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
    const experiences = [
        {
            role: 'Chef de Partie',
            company: 'Kings Arms Pub, Cardington',
            period: 'Nov 2024 – Present',
            badge: 'Hot Section Lead',
            highlights: [
                'Lead chef for the hot kitchen section; deliver traditional British classics and seasonal menus.',
                'Maintain quality, stock management, and support training of junior chefs.',
                'High-volume service experience (150+ covers per shift) with consistent standards.'
            ]
        },
        {
            role: 'Chef de Partie',
            company: 'Millennium Hotel, Knightsbridge',
            period: 'May 2024 – Jun 2024',
            badge: 'Hotel Kitchen',
            highlights: [
                'Supported senior CDP / sous chefs; ensured mise en place was service-ready.',
                'Maintained presentation and section standards according to recipe guidance.'
            ]
        },
        {
            role: 'Chef de Partie',
            company: 'King William IV, Bedford',
            period: 'Oct 2023',
            badge: 'Quality & Cleanliness',
            highlights: [
                'Prepared, cooked, and presented food to company standards and guest expectations.',
                'Focused on portion control, stock rotation, and high hygiene standards.'
            ]
        }
    ];

    return (
        <section id="experience" className="py-32 bg-brandGreen text-white relative">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
                <h2 className="text-6xl md:text-8xl font-serif mb-4">Experience.</h2>
                <p className="text-white/60 text-sm md:text-base mb-24 max-w-2xl">
                    Short, employer-friendly highlights from your recent roles.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-white/5">
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
            </div>
        </section>
    );
};

export default Experience;

import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Users, GraduationCap, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'Utensils': return <Utensils size={40} />;
            case 'Users': return <Users size={40} />;
            case 'GraduationCap': return <GraduationCap size={40} />;
            default: return <Utensils size={40} />;
        }
    };

    return (
        <section id="services" className="py-32 bg-brandGreen text-white relative">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
                <h2 className="text-6xl md:text-8xl font-serif mb-24">Experiences.</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/5">
                    {SERVICES.map((service) => (
                        <motion.div
                            key={service.id}
                            whileHover={{ backgroundColor: 'rgba(212,175,55,0.05)' }}
                            className="p-16 transition-colors group cursor-pointer border-r border-white/5"
                        >
                            <div className="text-champagne mb-12">{getIcon(service.icon)}</div>
                            <h3 className="text-3xl font-serif mb-6">{service.title}</h3>
                            <p className="text-white/40 text-sm font-light leading-relaxed mb-12">
                                {service.description}
                            </p>
                            <div className="flex items-center space-x-4 text-champagne">
                                <span className="text-[10px] font-bold uppercase tracking-widest">Inquiry</span>
                                <ArrowUpRight size={16} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

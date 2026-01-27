import React from 'react';
import { motion } from 'framer-motion';

const Specialties: React.FC = () => {
    const specialties = [
        {
            title: 'Traditional British',
            description: 'Pub classics, seasonal menus, consistent plating.'
        },
        {
            title: 'Modern European',
            description: 'Clean flavours, strong prep, service efficiency.'
        },
        {
            title: 'Grill & Hot Section',
            description: 'Protein prep, timing, temperature control.'
        },
        {
            title: 'Stock & Rotation',
            description: 'FIFO, inventory checks, reducing waste.'
        },
        {
            title: 'Hygiene & Safety',
            description: 'High standards and safe kitchen practices.'
        },
        {
            title: 'Training Support',
            description: 'Helping commis/juniors build confidence and speed.'
        }
    ];

    return (
        <section id="specialties" className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-obsidian mb-4">Specialties</h2>
                    <p className="text-slate-600 text-base md:text-lg">
                        What I do best in a professional kitchen environment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {specialties.map((specialty, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg hover:border-brandGreen/30 transition-all group"
                        >
                            <h3 className="text-obsidian text-xl font-bold mb-3 group-hover:text-brandGreen transition-colors">
                                {specialty.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {specialty.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Specialties;

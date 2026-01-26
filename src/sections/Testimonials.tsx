import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

interface TestimonialsProps {
    activeTestimonial: number;
}

const Testimonials: React.FC<TestimonialsProps> = ({ activeTestimonial }) => {
    return (
        <section id="testimonials" className="py-32 bg-brandGreen text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center">
                <Quote size={600} />
            </div>
            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTestimonial}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 1 }}
                    >
                        <p className="text-4xl md:text-6xl font-serif italic mb-16 leading-tight">
                            "{TESTIMONIALS[activeTestimonial].content}"
                        </p>
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border border-champagne/30 p-1">
                                <img
                                    src={TESTIMONIALS[activeTestimonial].image}
                                    className="w-full h-full object-cover rounded-full"
                                    alt="Avatar"
                                />
                            </div>
                            <h4 className="text-xl font-serif">{TESTIMONIALS[activeTestimonial].name}</h4>
                            <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">
                                {TESTIMONIALS[activeTestimonial].role}
                            </span>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Testimonials;

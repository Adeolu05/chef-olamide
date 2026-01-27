import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
    onNavigate: (href: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        onNavigate(href);
    };

    return (
        <section id="home" ref={targetRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0">
            {/* Background Image with Parallax */}
            <motion.div style={{ scale }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-obsidian">
                    {/* Hero Image */}
                    <img
                        src="/images/hero/hero-2.jpg"
                        className="w-full h-full object-cover object-center md:object-[center_30%] brightness-[0.35]"
                        alt="Chef Olamide at work in professional kitchen"
                    />
                </div>
                {/* Gradient Overlays for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-transparent to-obsidian/90" />
                <div className="absolute inset-0 bg-gradient-to-r from-obsidian/40 via-transparent to-transparent" />
                {/* Subtle texture overlay */}
                <div
                    className="absolute inset-0 opacity-10 mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
                    }}
                />
            </motion.div>

            <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-7 text-left"
                    >
                        <span className="inline-flex items-center gap-2 text-champagne uppercase tracking-[0.3em] text-[8px] md:text-[10px] font-bold mb-6 block">
                            <span className="w-2 h-2 rounded-full bg-brandGreen"></span>
                            Modern & Classic Cuisine • UK
                        </span>
                        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                            Precision, consistency, and great food, every service.
                        </h1>
                        <p className="text-white/70 text-sm sm:text-base md:text-lg font-light mb-8 max-w-2xl leading-relaxed">
                            Professional Chef de Partie with experience in high-volume pub and hotel kitchens. Strong on organisation, hygiene standards, and teamwork.
                        </p>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <a
                                href="#gallery"
                                onClick={(e) => handleClick(e, '#gallery')}
                                className="px-8 py-4 bg-brandGreen text-white text-xs font-bold uppercase tracking-wider hover:bg-brandGreen/90 transition-all"
                            >
                                View Gallery
                            </a>
                            <a
                                href="#experience"
                                onClick={(e) => handleClick(e, '#experience')}
                                className="px-8 py-4 text-white text-xs font-bold uppercase tracking-wider hover:text-champagne transition-all"
                            >
                                See Experience
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="lg:col-span-5"
                    >
                        <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-lg">
                            <h3 className="text-brandGreen text-xs font-bold uppercase tracking-wider mb-4">Highlights</h3>
                            <h4 className="text-obsidian text-lg font-bold mb-3">Service-ready performance</h4>
                            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                                Hot section leadership, stock rotation, waste control, and high standards under pressure.
                            </p>

                            <div className="grid grid-cols-3 gap-3 mb-4">
                                <div className="bg-slate-50 p-3 rounded">
                                    <div className="text-obsidian font-bold text-sm mb-1">150+ covers</div>
                                    <div className="text-slate-500 text-xs">high-volume service</div>
                                </div>
                                <div className="bg-slate-50 p-3 rounded">
                                    <div className="text-obsidian font-bold text-sm mb-1">Food Safety</div>
                                    <div className="text-slate-500 text-xs">HACCP-focused</div>
                                </div>
                                <div className="bg-slate-50 p-3 rounded">
                                    <div className="text-obsidian font-bold text-sm mb-1">Team Support</div>
                                    <div className="text-slate-500 text-xs">training & mentoring</div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 bg-brandGreen/10 text-brandGreen text-xs font-medium rounded-full">British classics</span>
                                <span className="px-3 py-1.5 bg-brandGreen/10 text-brandGreen text-xs font-medium rounded-full">Hotel service</span>
                                <span className="px-3 py-1.5 bg-brandGreen/10 text-brandGreen text-xs font-medium rounded-full">Stock control</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

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

            <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-6xl w-full">
                <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
                    <span className="text-champagne uppercase tracking-[0.3em] md:tracking-[0.6em] text-[8px] md:text-[10px] font-bold mb-6 md:mb-8 block">
                        Modern Nigerian Gastronomy
                    </span>
                    <h1 className="text-white text-[18vw] sm:text-[15vw] md:text-[9vw] font-serif italic tracking-tighter leading-none mb-8 md:mb-12">
                        Chef Ola
                    </h1>
                    <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-2xl font-light mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
                        Where heritage breathes through precision. Explore a new epoch of <span className="text-white font-medium">West African fine dining</span>.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-10">
                        <a
                            href="#menu"
                            onClick={(e) => handleClick(e, '#menu')}
                            className="w-full sm:w-auto group relative px-12 md:px-16 py-5 md:py-6 overflow-hidden bg-white text-obsidian text-[10px] font-bold uppercase tracking-widest transition-transform hover:scale-105 active:scale-95"
                        >
                            Explore Menu
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => handleClick(e, '#contact')}
                            className="w-full sm:w-auto group px-12 md:px-16 py-5 md:py-6 border border-white/30 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
                        >
                            Reservations
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

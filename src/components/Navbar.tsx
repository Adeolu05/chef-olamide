
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Specialties', href: '#specialties' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = (element as HTMLElement).offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-700 px-4 md:px-6 lg:px-12 ${isScrolled ? 'pt-2 md:pt-4' : 'pt-4 md:pt-6'}`}>
      <div className={`max-w-screen-2xl mx-auto rounded-full transition-all duration-700 ${isScrolled ? 'bg-white/95 backdrop-blur-2xl shadow-2xl py-2 md:py-3 px-4 md:px-8' : 'bg-obsidian/20 backdrop-blur-sm py-3 md:py-4 px-4 md:px-6'}`}>
        <div className="flex justify-between items-center h-12 md:h-16">
          <div
            className="flex-shrink-0 flex items-center group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className={`font-serif italic text-lg md:text-2xl tracking-tighter transition-colors duration-500 ${isScrolled ? 'text-obsidian' : 'text-white'}`}>
              Chef Olamide
            </span>
          </div>

          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:scale-110 ${isScrolled ? 'text-obsidian/60 hover:text-obsidian' : 'text-white/70 hover:text-white'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${isScrolled ? 'text-obsidian' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-obsidian z-[200] lg:hidden flex flex-col justify-center items-center p-8 text-center"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
              <X size={32} />
            </button>
            <div className="space-y-8 flex flex-col items-center">
              <span className="font-serif italic text-5xl text-champagne mb-12">Chef Olamide</span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block text-3xl font-serif italic text-white/80 hover:text-champagne transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                onClick={(e) => scrollToSection(e, '#contact')}
                className="inline-block mt-12 px-12 py-5 bg-white text-obsidian rounded-full font-bold uppercase tracking-widest"
              >
                Inquiry
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

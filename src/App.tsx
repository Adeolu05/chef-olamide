import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Specialties from './sections/Specialties';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ChatBot from './components/ChatBot';
import { TESTIMONIALS } from './constants';
import { scrollToSection } from './utils/menuUtils';

const App: React.FC = () => {
  // Testimonials state
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleNavigate = (href: string) => {
    scrollToSection(href);
  };

  const handleGalleryImageClick = (index: number) => {
    // Gallery lightbox functionality can be added here
    console.log('Gallery image clicked:', index);
  };

  return (
    <div className="relative bg-white selection:bg-champagne selection:text-white">
      <Navbar />

      <Hero onNavigate={handleNavigate} />
      <About />
      <Experience />
      <Specialties />
      <Gallery onImageClick={handleGalleryImageClick} />
      <Testimonials activeTestimonial={activeTestimonial} />
      <Contact />
      <Footer />

      {/* Floating Components */}
      <ChatBot />
    </div>
  );
};

export default App;

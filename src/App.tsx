import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Menu from './sections/Menu';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ChatBot from './components/ChatBot';
import MenuSummary from './components/MenuSummary';
import DishDetailModal from './modals/DishDetailModal';
import { MenuItem } from './types';
import { TESTIMONIALS } from './constants';
import { generateMenuDownload, shareOnSocialMedia, scrollToSection } from './utils/menuUtils';
import { generateHeritageStory } from './utils/aiUtils';

const App: React.FC = () => {
  // Menu state
  const [activeTab, setActiveTab] = useState('The Awakening');
  const [selectedItems, setSelectedItems] = useState<MenuItem[]>([]);
  const [activeShareIdState, setActiveShareIdState] = useState<string | null>(null);

  // Dish detail modal state
  const [selectedDishDetail, setSelectedDishDetail] = useState<{ item: MenuItem; story: string } | null>(null);
  const [isGeneratingStory, setIsGeneratingStory] = useState(false);

  // Testimonials state
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenuItem = (item: MenuItem) => {
    setSelectedItems(prev => {
      const isSelected = prev.find(i => i.id === item.id);
      if (isSelected) {
        return prev.filter(i => i.id !== item.id);
      }
      return [...prev, item];
    });
  };

  const handleShare = (platform: 'x' | 'whatsapp' | 'facebook', item: MenuItem) => {
    shareOnSocialMedia(platform, item);
    setActiveShareIdState(null);
  };

  const handleDownloadMenu = () => {
    generateMenuDownload(selectedItems);
  };

  const handleReviewMenu = () => {
    scrollToSection('#curation');
  };

  const discoverHeritage = async (item: MenuItem) => {
    setIsGeneratingStory(true);
    setSelectedDishDetail({ item, story: "" });

    const story = await generateHeritageStory(item);
    setSelectedDishDetail({ item, story });
    setIsGeneratingStory(false);
  };

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
      <Services />
      <Menu
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedItems={selectedItems}
        toggleMenuItem={toggleMenuItem}
        activeShareIdState={activeShareIdState}
        setActiveShareIdState={setActiveShareIdState}
        handleShare={handleShare}
        discoverHeritage={discoverHeritage}
      />
      <Gallery onImageClick={handleGalleryImageClick} />
      <Testimonials activeTestimonial={activeTestimonial} />
      <Contact />
      <Footer />

      {/* Floating Components */}
      <MenuSummary
        selectedItems={selectedItems}
        onDownload={handleDownloadMenu}
        onReview={handleReviewMenu}
      />
      <ChatBot />

      {/* Modals */}
      <DishDetailModal
        selectedDish={selectedDishDetail}
        isGenerating={isGeneratingStory}
        onClose={() => setSelectedDishDetail(null)}
      />
    </div>
  );
};

export default App;


import React from 'react';
import { MenuCategory, Testimonial, Service } from './types';

export const COLORS = {
  obsidian: '#0A1410',
  emeraldDeep: '#095f30',
  champagne: '#D4AF37',
  softGold: '#F1E5AC',
  ivory: '#FDFCF8'
};

export const MENU_DATA: MenuCategory[] = [
  {
    title: "The Awakening",
    items: [
      { id: "s1", name: "Oceanic Moin Moin", price: "$24", description: "Velvety steamed honey-bean purée with butter-poached lobster and quail egg yolk confit." },
      { id: "s2", name: "Yaji-Crusted Wagyu", price: "$32", description: "Thinly sliced Grade A5 Wagyu, micro-watercress, fermented palm wine reduction." },
      { id: "s3", name: "Scent Leaf Essence", price: "$18", description: "Clarified aromatics of wild scent leaf and toasted tiger nut, served with a smoked periwinkle foam." },
      { id: "s4", name: "Yam & Truffle Medallions", price: "$22", description: "Crispy heritage yam textures with black truffle emulsion and hibiscus-salt dust." }
    ]
  },
  {
    title: "The Resonance",
    items: [
      { id: "m1", name: "Sacred Jollof", price: "$45", description: "Artisan-harvested grains, smoked over cherry wood, with pan-seared wild sea bass and gold lead." },
      { id: "m2", name: "Egusi Sculpture", price: "$48", description: "A structured terrine of melon seed and wild spinach, paired with 48-hour braised short rib." },
      { id: "m3", name: "Oxtail & Yam Silks", price: "$52", description: "Slow-cooked oxtail in a reduction of native spices, served over ultra-fine yam mousseline." },
      { id: "m4", name: "Native Lobster Okra", price: "$55", description: "A luxurious infusion of okra flowers, cold-water lobster, and sea buckthorn." }
    ]
  },
  {
    title: "The Epilogue",
    items: [
      { id: "d1", name: "Zobo & Pear Crystallized", price: "$22", description: "Hibiscus-poached conference pear, ginger sorbet, and edible botanical lace." },
      { id: "d2", name: "Plantain Gold Pavlova", price: "$20", description: "Caramelized plantain meringues, aged mahogany rum cream, and passion fruit pearls." },
      { id: "d3", name: "Cocoa & Tiger Nut Cloud", price: "$24", description: "Deconstructed chocolate soil, tiger nut foam, and spicy chin-chin crumble." }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: "private-dining",
    title: "The Atelier Table",
    description: "An intimate, sensorial journey tailored to your residence, featuring Chef Olamide's full signature tasting menu.",
    icon: "Utensils"
  },
  {
    id: "catering",
    title: "Grand Gala",
    description: "Immersive culinary choreography for high-society events that transcend traditional expectations.",
    icon: "Users"
  },
  {
    id: "classes",
    title: "Sovereign Kitchen",
    description: "Private masterclasses exploring the philosophical and technical foundations of Modern Nigerian Gastronomy.",
    icon: "GraduationCap"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Eleanor Sterling",
    role: "Global Arts Director",
    content: "Chef Olamide doesn't just cook; he paints with flavors that evoke ancestral memories in a language that is purely modern.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    id: 2,
    name: "Marcus Vanguard",
    role: "Venture Philanthropist",
    content: "The Sacred Jollof is quite possibly the single most sophisticated plate of food I have ever experienced in my travels.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

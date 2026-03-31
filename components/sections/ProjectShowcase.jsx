'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Sofa, Leaf, Bed, Award, HandCoins, Lightbulb } from 'lucide-react';

const features = [
  { 
    id: 1,
    icon: Sofa, 
    title: 'SATISFYINGLY', 
    subtitle: 'QUALITY BUILT',
    displayTitle: 'THE BEST-IN-CLASS BUILDING WORK',
    description: 'We deliver exceptional quality construction with meticulous attention to every detail, ensuring your property meets the highest standards of durability and excellence.'
  },
  { 
    id: 2,
    icon: Leaf, 
    title: 'ECO-FRIENDLY', 
    subtitle: 'CONSTRUCTION',
    displayTitle: 'WE OVERSEE COMPLICATED BUILDING PROJECTS',
    description: 'Our sustainable building practices minimize environmental impact while maintaining superior quality and cost efficiency for long-term value.'
  },
  { 
    id: 3,
    icon: Bed, 
    title: 'ADEQUATE INTERIOR', 
    subtitle: 'SPACE',
    displayTitle: 'BEST DESIGNS & MAXIMUM SPACING',
    description: 'We optimize interior layouts with innovative designs that maximize usable space, comfort, and functionality for modern living.'
  },
  { 
    id: 4,
    icon: Award, 
    title: 'SUPERIOR QUALITY', 
    subtitle: 'INDOOR',
    displayTitle: 'LATEST MATERIALS & STYLE CONSTRUCTION',
    description: 'Premium indoor finishes and materials elevate your property with contemporary style and unmatched quality that stands the test of time.'
  },
  { 
    id: 5,
    icon: HandCoins, 
    title: 'GREAT COST', 
    subtitle: 'EFFECTIVE',
    displayTitle: 'COST EFFECTIVE QUALITY CONSTRUCTION',
    description: 'We deliver exceptional value without compromising on quality, providing cost-effective solutions that maximize your investment returns.'
  },
  { 
    id: 6,
    icon: Lightbulb, 
    title: 'ENERGY EFFICIENT', 
    subtitle: 'DESIGN',
    displayTitle: 'ZERO-ENERGY PASSIVE MODERN BUILDINGS',
    description: 'Our energy-efficient designs reduce utility costs and environmental footprint while providing optimal comfort and modern amenities.'
  }
];

export default function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to Eco-Friendly as in image

  const nextFeature = () => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  };

  return (
    <section className="py-24 bg-[#fdfaf5] overflow-hidden relative min-h-[800px] flex items-center">
      {/* Background Pattern - Dots */}
      <div className="absolute inset-0 pointer-events-none opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#c5a07c 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Background Pattern - House Outlines (Simplified) */}
      <div className="absolute bottom-0 left-0 w-full h-64 pointer-events-none opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 1400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 300V150L200 100L300 150V300" stroke="#c5a07c" strokeWidth="2"/>
          <path d="M400 300V100L550 50L700 100V300" stroke="#c5a07c" strokeWidth="2"/>
          <path d="M800 300V180L950 120L1100 180V300" stroke="#c5a07c" strokeWidth="2"/>
          <path d="M1150 300V140L1250 90L1350 140V300" stroke="#c5a07c" strokeWidth="2"/>
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Features List */}
          <div className="lg:w-1/2 w-full order-2 lg:order-1">
            <div className="flex flex-col gap-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex items-center gap-6 p-4 cursor-pointer transition-all duration-500 group ${
                    activeIndex === idx ? 'bg-[#c5a07c] text-white shadow-xl' : 'hover:bg-[#c5a07c]/5'
                  }`}
                >
                  <div className={`w-12 h-12 flex items-center justify-center transition-colors duration-300 ${
                    activeIndex === idx ? 'text-white' : 'text-[#c5a07c]'
                  }`}>
                    <feature.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-[10px] font-bold tracking-[0.3em] uppercase leading-none mb-1 ${
                      activeIndex === idx ? 'text-white/80' : 'text-[#c5a07c]'
                    }`}>
                      {feature.title}
                    </span>
                    <span className={`text-sm md:text-base font-bold tracking-widest uppercase ${
                      activeIndex === idx ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'
                    }`}>
                      {feature.subtitle}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Image with Oval Overlay */}
          <div className="lg:w-1/2 w-full order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[550px] aspect-[4/5] group">
              {/* Main Image */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/project-showcase.jpg"
                  alt="Modern Architecture"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Oval Overlay */}
              <div 
                onClick={nextFeature}
                className="absolute inset-0 flex items-center justify-center p-8 cursor-pointer"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="bg-black/30 backdrop-blur-sm w-full h-[85%] rounded-[100%/60%] flex flex-col items-center justify-center p-12 text-center border border-white/20 shadow-2xl"
                  >
                    <h3 className="text-2xl md:text-4xl font-serif font-bold text-white mb-6 leading-tight uppercase tracking-wider">
                      {features[activeIndex].displayTitle}
                    </h3>
                    <p className="text-sm md:text-base text-white/90 leading-relaxed font-light">
                      {features[activeIndex].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Decorative Border Frame */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-[#c5a07c]/20" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}



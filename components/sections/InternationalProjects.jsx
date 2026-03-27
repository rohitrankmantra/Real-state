'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'HILTOP VALLEY',
    image: '/project-showcase.jpg',
    location: 'NEW YORK, USA'
  },
  {
    id: 2,
    title: 'SKYLINE RESIDENCE',
    image: '/gallery-1.jpg',
    location: 'LONDON, UK'
  },
  {
    id: 3,
    title: 'OCEAN VIEW VILLAS',
    image: '/gallery-2.jpg',
    location: 'DUBAI, UAE'
  }
];

export default function InternationalProjects() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % projects.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section id="projects" className="py-24 bg-[#2a2a2e] text-white overflow-hidden relative">
      {/* Background Pattern - Dot Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{ 
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
          backgroundSize: '60px 60px' 
        }} 
      />

      {/* Background Pattern - Geometric Architectural Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0">
        <svg width="100%" height="100%" viewBox="0 0 1400 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Large House Outlines */}
          <path d="M-100 800V400L150 250L400 400V800" stroke="white" strokeWidth="1"/>
          <path d="M500 800V200L850 50L1200 200V800" stroke="white" strokeWidth="1"/>
          <path d="M1000 800V500L1250 350L1500 500V800" stroke="white" strokeWidth="1"/>
          
          {/* Vertical Grid Lines */}
          {[...Array(10)].map((_, i) => (
            <line key={i} x1={i * 200} y1="0" x2={i * 200} y2="800" stroke="white" strokeWidth="0.5" strokeDasharray="10 10" />
          ))}
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Content */}
          <div className="lg:w-1/3">
            <span className="section-subtitle">GLOBAL REACH</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              INTERNATIONAL PROJECTS
            </h2>
            <div className="flex gap-4">
              <button 
                onClick={prevSlide}
                aria-label="Previous Project"
                className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-[#c5a07c] hover:border-[#c5a07c] transition-all focus:outline-none focus:ring-2 focus:ring-[#c5a07c]"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                aria-label="Next Project"
                className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-[#c5a07c] hover:border-[#c5a07c] transition-all focus:outline-none focus:ring-2 focus:ring-[#c5a07c]"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Right: Slider Image */}
          <div className="lg:w-2/3 relative w-full">
            <div className="relative aspect-video overflow-hidden cursor-grab active:cursor-grabbing">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = Math.abs(offset.x) * velocity.x;
                    if (swipe < -10000) nextSlide();
                    else if (swipe > 10000) prevSlide();
                  }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={projects[current].image}
                    alt={projects[current].title}
                    fill
                    className="object-cover pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-black/30 pointer-events-none" />
                  
                  {/* Project Info Overlay */}
                  <div className="absolute bottom-12 left-12 pointer-events-none">
                    <span className="text-[#c5a07c] text-xs font-bold tracking-[0.3em] block mb-2">{projects[current].location}</span>
                    <h3 className="text-3xl font-serif font-bold uppercase">{projects[current].title}</h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


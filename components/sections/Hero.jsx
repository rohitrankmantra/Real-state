'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: 'MERS HOLDINGS LLC',
    subtitle: 'Real Estate Property Management Company serving Baltimore with excellence and integrity.',
    image: '/hero-bg.jpg',
  },
  {
    id: 2,
    title: 'EXPERT PROPERTY MANAGEMENT',
    subtitle: 'Dedicated to providing top-tier management solutions for residential and commercial properties.',
    image: '/project-showcase.jpg',
  },
  {
    id: 3,
    title: 'YOUR PARTNER IN REAL ESTATE',
    subtitle: 'Connecting owners and tenants through professional management and personalized service.',
    image: '/gallery-1.jpg',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000) // Autoplay every 8 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" aria-label="Hero Section with Image Slider" className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            priority={current === 0} // Lazy load subsequent images
            className="object-cover scale-110 animate-ken-burns"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Vertical Social Links */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 hidden sm:flex flex-col items-center gap-4">
        <div className="w-[1px] h-16 bg-white/20" />
        <ul className="flex flex-col gap-4">
          {['FB', 'IN', 'LI', 'TW'].map((social) => (
            <li key={social}>
              <a href="#" aria-label={`Follow on ${social}`} className="text-xs text-white/60 font-bold tracking-widest vertical-text hover:text-white transition-colors">
                {social}
              </a>
            </li>
          ))}
        </ul>
        <div className="w-[1px] h-16 bg-white/20" />
      </div>

      {/* Main Content */}
      <div 
        className="relative h-full flex flex-col justify-center items-start px-8 md:px-20 lg:px-32 z-10"
        onPanEnd={(e, { offset, velocity }) => {
          if (offset.x < -100 || velocity.x < -500) nextSlide();
          else if (offset.x > 100 || velocity.x > 500) prevSlide();
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight uppercase tracking-wider">
              {slides[current].title}
            </h1>
            <p className="text-white/80 text-sm md:text-base max-w-lg mb-8 leading-relaxed">
              {slides[current].subtitle}
            </p>
            <button className="btn-primary">KNOW MORE</button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Navigation */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-4 bg-white/90 backdrop-blur-sm p-3">
        <span className="text-lg font-serif text-black">{`0${current + 1}`} / {`0${slides.length}`}</span>
        <div className="flex gap-2">
          <button onClick={prevSlide} aria-label="Previous Slide" className="p-2 text-black hover:bg-gray-200 transition-colors">
            <ArrowLeft size={20} />
          </button>
          <button onClick={nextSlide} aria-label="Next Slide" className="p-2 text-black hover:bg-gray-200 transition-colors">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest vertical-text">SCROLL DOWN</span>
        <div className="w-[1px] h-12 bg-white/30 animate-pulse" />
      </div>

      <style jsx global>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        @keyframes ken-burns {
          0%, 100% { transform: scale(1.1) rotate(0.5deg); }
          50% { transform: scale(1) rotate(-0.5deg); }
        }
        .animate-ken-burns {
          animation: ken-burns 25s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}



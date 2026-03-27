'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Play, ArrowRight } from 'lucide-react'

const services = [
  { name: 'TENANT SCREENING', video: '/video-corporate.mp4', image: '/gallery-1.jpg' },
  { name: 'RENT COLLECTION', video: '/video-commercial.mp4', image: '/gallery-2.jpg' },
  { name: 'PROPERTY MAINTENANCE', video: '/video-industrial.mp4', image: '/gallery-3.jpg' },
  { name: 'FINANCIAL REPORTING', video: '/video-mall.mp4', image: '/gallery-4.jpg' },
  { name: 'LEASE MANAGEMENT', video: '/video-renovation.mp4', image: '/gallery-5.jpg' },
  { name: 'EVICTION PROTECTION', video: '/video-interior.mp4', image: '/gallery-6.jpg' },
  { name: 'MARKETING & ADVERTISING', video: '/video-planning.mp4', image: '/hero-bg.jpg' },
  { name: 'PROPERTY INSPECTIONS', video: '/video-institution.mp4', image: '/project-showcase.jpg' },
]

export default function About() {
  const [activeService, setActiveService] = useState(services[0])

  return (
    <section id="about" className="py-24 bg-[#2a2a2e] text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center lg:text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-normal mb-4 leading-tight uppercase tracking-wider">
            PROFESSIONAL REAL ESTATE PROPERTY MANAGEMENT
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: Video Player */}
          <div className="w-full lg:w-2/3 relative aspect-video group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <video
                  src={activeService.video}
                  poster={activeService.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button aria-label="Play Video" className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                <Play fill="currentColor" size={32} />
              </button>
            </div>
            <div className="absolute left-0 top-0 bottom-0 flex items-center pointer-events-none">
              <span className="text-7xl md:text-9xl font-serif font-bold text-white/5 uppercase vertical-text -ml-4 md:-ml-8 select-none">
                RESIDENTIAL
              </span>
            </div>
          </div>

          {/* Right: Clickable Links */}
          <div className="w-full lg:w-1/3">
            <ul className="space-y-5">
              {services.map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => setActiveService(service)}
                    className={`w-full text-left flex items-center gap-4 group transition-colors duration-300 ${
                      activeService.name === service.name ? 'text-[#c5a07c]' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    <div className="w-8 h-8 flex-shrink-0">
                      <AnimatePresence>
                        {activeService.name === service.name && (
                          <motion.div initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 24 }} exit={{ opacity: 0, width: 0 }}>
                            <ArrowRight size={24} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <span className="text-sm font-bold tracking-[0.2em] uppercase">
                      {service.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
      `}</style>
    </section>
  )
}



'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'RESIDENTIAL MANAGEMENT',
    image: '/gallery-1.jpg',
    description: 'Comprehensive management services for single-family homes and multi-unit residences.'
  },
  {
    title: 'COMMERCIAL MANAGEMENT',
    image: '/gallery-2.jpg',
    description: 'Expert oversight of commercial properties, retail spaces, and office complexes.'
  },
  {
    title: 'TENANT RELATIONS',
    image: '/gallery-3.jpg',
    description: 'Fostering positive relationships through clear communication and responsive support.'
  },
  {
    title: 'MAINTENANCE SOLUTIONS',
    image: '/gallery-4.jpg',
    description: 'Proactive and reactive maintenance services to preserve property value and safety.'
  }
];

export default function Services() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center mb-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight uppercase tracking-wider">
              WE SPECIALIZE IN COMPREHENSIVE REAL ESTATE PROPERTY MANAGEMENT
            </h2>
          </div>
          <div className="lg:w-1/2 flex justify-start lg:justify-end gap-4">
            <button 
              onClick={() => scroll('left')} 
              aria-label="Scroll left"
              className="w-14 h-14 border border-gray-200 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')} 
              aria-label="Scroll right"
              className="w-14 h-14 border border-gray-200 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-8 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[300px] md:min-w-[350px] snap-start group"
            >
              <div className="relative h-[250px] mb-6 overflow-hidden group">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-0 right-0 bg-white p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight size={20} className="-rotate-45" />
                </div>
              </div>
              <h3 className="text-lg font-serif font-normal text-black mb-3 uppercase tracking-widest">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}



'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'SARAH JOHNSON',
    role: 'PROPERTY OWNER',
    quote: 'MALESUADA FAMES AC TURPIS EGESTAS. DIGNISSIM SUSPENDISSE IN EST ANTE IN NIBH. MORBI LEO URNA MOLESTIE AT.',
    image: '/testimonial-1.jpg'
  },
  {
    id: 2,
    name: 'MICHAEL CHEN',
    role: 'INVESTOR',
    quote: 'PHASELLUS FAUCIBUS SCELERISQUE ELEIFEND. DONEC AC VELIT ALIQUET, DIGNISSIM SUSPENDISSE IN EST ANTE IN NIBH.',
    image: '/testimonial-2.jpg'
  },
  {
    id: 3,
    name: 'EMMA WILLIAMS',
    role: 'HOMEOWNER',
    quote: 'AENEAN EUISMOD ELEMENTUM NISI QUIS ELEIFEND QUAM ADIPISCING VITAE PROIN. SED FELIS EGET VELIT ALIQUET.',
    image: '/testimonial-3.jpg'
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <span className="text-[20vw] font-serif font-bold absolute -top-20 -left-20">TESTIMONIALS</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">TESTIMONIALS</h2>
          <div className="w-12 h-[2px] bg-[#c5a07c] mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl lg:text-3xl font-serif text-gray-700 italic leading-relaxed mb-12">
                "{testimonials[current].quote}"
              </p>
              
              <div className="flex flex-col items-center">
                <div className="relative w-20 h-20 mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-sm font-bold tracking-[0.3em] text-black mb-1">
                  {testimonials[current].name}
                </h4>
                <p className="text-[10px] tracking-[0.2em] text-[#c5a07c] font-bold">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-12">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-12 h-[2px] transition-all duration-300 ${
                  idx === current ? 'bg-[#c5a07c]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


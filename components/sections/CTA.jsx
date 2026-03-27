'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Slider } from '@/components/ui/slider';

export default function CTA() {
  const [budget, setBudget] = useState([500000]);

  return (
    <section className="py-24 bg-white text-black overflow-hidden border-t border-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-normal mb-20 leading-tight uppercase tracking-[0.2em] text-gray-800">
            SCHEDULING
          </h2>
          
          <form className="max-w-6xl mx-auto mb-16" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Name*" 
                  className="w-full bg-transparent border-b border-gray-200 py-4 px-2 text-sm font-medium focus:border-[#c5a07c] outline-none transition-colors placeholder:text-gray-300 placeholder:font-normal"
                />
              </div>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Mail ID*" 
                  className="w-full bg-transparent border-b border-gray-100 py-4 px-2 text-sm font-medium focus:border-[#c5a07c] outline-none transition-colors placeholder:text-gray-300 placeholder:font-normal"
                />
              </div>
              <div className="relative">
                <input 
                  type="tel" 
                  placeholder="Mobile No*" 
                  className="w-full bg-transparent border-b border-gray-100 py-4 px-2 text-sm font-medium focus:border-[#c5a07c] outline-none transition-colors placeholder:text-gray-300 placeholder:font-normal"
                />
              </div>
            </div>

            {/* Budget Slider Section */}
            <div className="max-w-3xl mx-auto mb-20 text-left">
              <div className="flex justify-between items-center mb-6">
                <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c5a07c]">
                  Planned Budget
                </label>
                <span className="text-xl font-serif font-bold text-gray-800">
                  ${budget[0].toLocaleString()}
                </span>
              </div>
              <Slider
                defaultValue={[500000]}
                max={5000000}
                step={50000}
                onValueChange={(value) => setBudget(value)}
                aria-label="Planned Budget Slider"
                className="py-4"
              />
              <div className="flex justify-between mt-2">
                <span className="text-[10px] text-gray-400 font-bold tracking-widest">$50K</span>
                <span className="text-[10px] text-gray-400 font-bold tracking-widest">$5M+</span>
              </div>
            </div>
            
            <div className="flex justify-center">
              <button className="bg-[#c5a07c] text-white px-12 py-5 text-sm font-bold tracking-[0.3em] uppercase hover:bg-black transition-all duration-300">
                SEND MESSAGE
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}




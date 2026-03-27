'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const plans = [
  {
    id: 1,
    title: 'LUXURY APARTMENTS',
    image: '/gallery-1.jpg',
    category: 'RESIDENTIAL'
  },
  {
    id: 2,
    title: 'CORPORATE OFFICES',
    image: '/gallery-2.jpg',
    category: 'COMMERCIAL'
  },
  {
    id: 3,
    title: 'MODERN VILLAS',
    image: '/gallery-3.jpg',
    category: 'RESIDENTIAL'
  }
];

export default function Plans() {
  return (
    <section id="projects" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">CHOOSE YOUR PLAN</h2>
          <p className="text-gray-500 uppercase tracking-[0.2em] text-xs font-bold max-w-xl mx-auto">
            QUIS VEL EROS DONEC AC. SOLLICITUDIN TEMPOR ID EU NISL NUNC MCONSECTETUR.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <Image
                  src={plan.image}
                  alt={plan.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                
                {/* View Details Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="bg-white text-black px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#c5a07c] hover:text-white transition-all duration-300">
                    VIEW DETAILS
                  </button>
                </div>
              </div>
              
              <div className="text-center">
                <span className="text-[#c5a07c] text-[10px] font-bold tracking-[0.3em] mb-2 block">
                  {plan.category}
                </span>
                <h3 className="text-xl font-serif font-bold text-black tracking-widest group-hover:text-[#c5a07c] transition-colors">
                  {plan.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


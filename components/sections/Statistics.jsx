'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: 153, label: 'CONSTRUCTION' },
  { value: 52, label: 'SURVEYING' },
  { value: 40, label: 'ASSESSMENTS' },
  { value: 10, label: 'RESTORATION' }
];

export default function Statistics() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-20">
          <h2 className="section-title mb-4">OUR SERVICES</h2>
          <p className="text-gray-500 uppercase tracking-[0.2em] text-xs font-bold max-w-xl mx-auto">
            VITAE PURUS FAUCIBUS ORNARE SUSPENDISSE SED ODIO MORBI QUIS COMMODO.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group text-center"
            >
              <div className="text-6xl md:text-8xl font-serif font-bold text-gray-100 group-hover:text-[#c5a07c]/10 transition-colors duration-500 absolute left-1/2 -top-12 -translate-x-1/2 select-none z-0">
                {stat.value}
              </div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-serif font-bold text-black mb-4">
                  {stat.value}
                </div>
                <div className="w-8 h-[2px] bg-[#c5a07c] mx-auto mb-4" />
                <p className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-gray-800 uppercase">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
          {[
            { title: 'Satisfyingly Quality BUILT', desc: 'ECO-FRIENDLY CONSTRUCTION' },
            { title: 'ADEQUATE INTERIOR SPACE', desc: 'SUPERIOR QUALITY INDOOR' },
            { title: 'GREAT COST EFFECTIVE', desc: 'ENERGY EFFICIENT DESIGN' }
          ].map((item, idx) => (
            <div key={idx} className="p-8 border border-gray-100 hover:border-[#c5a07c] transition-colors duration-300">
              <h4 className="text-[#c5a07c] font-serif font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


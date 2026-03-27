'use client'

import { motion } from 'framer-motion'

const villas = [
  { name: 'SUNNY WOODS', rooms: 4, bathrooms: 3, floor: 4, price: '4' },
  { name: 'HILTOP VALLEY', rooms: 4, bathrooms: 4, floor: 4, price: '4' },
  { name: 'BLISSFUL MOSSES', rooms: 3, bathrooms: 3, floor: 3, price: '3' },
  { name: 'DEW DROP INN', rooms: 2, bathrooms: 2, floor: 2, price: '2' },
  { name: 'WISDOM HOUSE', rooms: 1, bathrooms: 1, floor: 1, price: '1' },
  { name: 'HEDERA HOUSE', rooms: 4, bathrooms: 4, floor: 4, price: '4' },
  { name: 'MIDDLE EARTH', rooms: 3, bathrooms: 3, floor: 3, price: '3' },
]

export default function FloorPlans() {
  return (
    <section id="villas" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">READY TO BUY VILLAS</h2>
          <p className="text-gray-400 font-sans uppercase tracking-[0.1em] text-sm max-w-2xl mx-auto leading-relaxed">
            Non enim praesent elementum facilisis leo vel suscipit adipiscing bibendum.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse font-sans">
            <thead>
              <tr className="bg-[#2a2a2e] text-white">
                <th className="p-6 text-[11px] font-bold tracking-[0.2em] uppercase border border-white/5">RESIDENCE</th>
                <th className="p-6 text-[11px] font-bold tracking-[0.2em] uppercase border border-white/5">ROOM</th>
                <th className="p-6 text-[11px] font-bold tracking-[0.2em] uppercase border border-white/5">BATHROOM</th>
                <th className="p-6 text-[11px] font-bold tracking-[0.2em] uppercase border border-white/5">FLOOR</th>
                <th className="p-6 text-[11px] font-bold tracking-[0.2em] uppercase border border-white/5">RENT PRICE</th>
                <th className="p-6 text-[11px] font-bold tracking-[0.2em] uppercase border border-white/5">FLOOR PLAN</th>
              </tr>
            </thead>
            <tbody>
              {villas.map((villa, idx) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className={`${idx % 2 === 1 ? 'bg-[#fcfcfc]' : 'bg-white'} hover:bg-gray-50 transition-colors group`}
                >
                  <td className="p-6 text-xs font-bold tracking-widest text-gray-600 border border-gray-100 group-hover:text-[#c5a07c] transition-colors">
                    {villa.name}
                  </td>
                  <td className="p-6 text-xs text-gray-500 border border-gray-100 text-center md:text-left">{villa.rooms}</td>
                  <td className="p-6 text-xs text-gray-500 border border-gray-100 text-center md:text-left">{villa.bathrooms}</td>
                  <td className="p-6 text-xs text-gray-500 border border-gray-100 text-center md:text-left">{villa.floor}</td>
                  <td className="p-6 text-xs text-gray-500 border border-gray-100 text-center md:text-left">{villa.price}</td>
                  <td className="p-6 border border-gray-100">
                    <button className="w-full md:w-auto px-6 py-2 text-[10px] font-bold tracking-widest uppercase text-gray-700 bg-[#f3e8dd] hover:bg-[#c5a07c] hover:text-white transition-all duration-300">
                      VIEW NOW
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}



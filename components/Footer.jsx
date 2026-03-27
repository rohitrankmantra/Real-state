'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white text-black pt-0 pb-12 relative overflow-hidden">
      {/* Top Scrolling Marquee */}
      <div className="border-y border-gray-100 py-6 mb-24 overflow-hidden bg-white relative z-10">
        <div className="flex whitespace-nowrap animate-marquee-infinite">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="flex items-center gap-4 px-4">
              <span className="text-2xl md:text-3xl font-serif font-bold tracking-widest text-gray-800 uppercase">
                BUILDING PLAN. <span className="text-[#c5a07c]">IT'S FREE.</span> START BUILDING.
              </span>
            </div>
          ))}
          {/* Duplicate for infinite loop */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={`dup-${i}`} className="flex items-center gap-4 px-4">
              <span className="text-2xl md:text-3xl font-serif font-bold tracking-widest text-gray-800 uppercase">
                BUILDING PLAN. <span className="text-[#c5a07c]">IT'S FREE.</span> START BUILDING.
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Background Pattern - House Outlines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-0 flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 1400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-200 600V300L0 200L200 300V600" stroke="#c5a07c" strokeWidth="1"/>
          <path d="M200 600V200L450 100L700 200V600" stroke="#c5a07c" strokeWidth="1"/>
          <path d="M700 600V350L950 250L1200 350V600" stroke="#c5a07c" strokeWidth="1"/>
          <path d="M1200 600V250L1400 150L1600 250V600" stroke="#c5a07c" strokeWidth="1"/>
          
          <path d="M100 600V400L250 300L400 400V600" stroke="#c5a07c" strokeWidth="1"/>
          <path d="M500 600V300L750 200L1000 300V600" stroke="#c5a07c" strokeWidth="1"/>
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 items-start">
          
          {/* Contact Column */}
          <div className="flex flex-col gap-8">
            <h4 className="text-xl font-serif font-bold tracking-widest uppercase text-gray-800">CONTACT</h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-black shrink-0 mt-1" />
                <span className="text-sm font-medium tracking-wide text-gray-500 leading-relaxed">
                  2608 Oswego Ave,<br />
                  Baltimore,<br />
                  MD 21215
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-black shrink-0" />
                <span className="text-sm font-medium tracking-wide text-gray-500">
                  240-854-7704
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-black shrink-0" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium tracking-wide text-gray-500">
                    margsel4@gmail.com
                  </span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    Margaret E Sellers
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Logo & About Column */}
          <div className="flex flex-col items-center text-center px-4">
            <Link href="/" className="flex items-center gap-4 mb-10 group">
              <div className="w-[3px] h-12 bg-black" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-3xl font-serif font-bold tracking-tighter text-black">MERS</span>
                <span className="text-xl font-serif font-bold tracking-widest text-gray-800 uppercase">HOLDINGS LLC</span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-xs mb-10">
              Real Estate Property Management Company dedicated to excellence in Baltimore and surrounding areas.
            </p>
            <div className="flex items-center gap-6 text-xs font-bold tracking-[0.3em] text-gray-800">
              <a href="https://Mersholdings.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#c5a07c] transition-colors">WEBSITE</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:text-[#c5a07c] transition-colors">FB</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:text-[#c5a07c] transition-colors">LI</a>
            </div>
          </div>

          {/* Links Column */}
          <div className="md:text-right flex flex-col md:items-end">
            <h4 className="text-xl font-serif font-bold tracking-widest uppercase text-gray-800 mb-8">LINKS</h4>
            <ul className="space-y-4">
              {['Home', 'About us & Vision', 'Amenities Facility', 'News & Blogs', 'Faq'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm font-medium text-gray-500 hover:text-[#c5a07c] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-medium text-gray-400">
            &copy; 2026 Gsquare Wedesigntech
          </p>
          <div className="flex gap-12">
            <a href="#" className="text-sm font-medium text-gray-400 hover:text-black transition-colors">Privacy</a>
            <a href="#" className="text-sm font-medium text-gray-400 hover:text-black transition-colors">Terms and Condition</a>
          </div>
        </div>
      </div>

      <style jsx>{`
         @keyframes marquee-infinite {
           0% { transform: translateX(0); }
           100% { transform: translateX(-50%); }
         }
         .animate-marquee-infinite {
           animation: marquee-infinite 40s linear infinite;
         }
       `}</style>
    </footer>
  )
}



'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const articles = [
  {
    id: 1,
    title: 'NEW CONSTRUCTION FOR DOUBLE DOOR FITTED MODERN CLASS',
    excerpt: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. SED DO EIUSMOD TEMPOR INCIDIDUNT.',
    image: '/blog-trends.jpg',
    date: 'MARCH 2, 2026'
  },
  {
    id: 2,
    title: 'THE ADVANTAGES OF HAVING BIG WINDOWS, DOORS FOR HOMES & OFFICE',
    excerpt: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. SED DO EIUSMOD TEMPOR INCIDIDUNT.',
    image: '/blog-investment.jpg',
    date: 'MARCH 1, 2026'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Articles */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden mb-8">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 bg-white p-4">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#c5a07c]">
                      {article.date}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-serif font-bold text-black mb-4 group-hover:text-[#c5a07c] transition-colors leading-tight uppercase tracking-widest">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase mb-6 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase">READ MORE</span>
                  <div className="w-8 h-[1px] bg-black group-hover:w-12 transition-all duration-300" />
                </div>
              </motion.article>
            ))}
          </div>

          {/* Right: Section Info */}
          <div className="lg:w-1/3">
            <span className="section-subtitle">OUR BLOG</span>
            <h2 className="section-title mb-8">LATEST NEWS AND BLOGS</h2>
            <p className="text-gray-400 text-sm leading-relaxed uppercase tracking-widest mb-10">
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.
            </p>
            <button className="btn-primary w-full">
              VIEW ALL POSTS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


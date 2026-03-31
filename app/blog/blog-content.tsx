'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { blogData } from '@/lib/data'

export default function BlogContent() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-350 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogData.map((article, index) => (
            <Link key={article.id} href={`/blog/${article.slug}`}>
              <motion.article
                initial={{ opacity: 0, y: 20 }}
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-0 left-0 bg-white p-4">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#c5a07c]">
                      {article.date}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-serif font-bold text-black mb-4 group-hover:text-[#c5a07c] transition-colors leading-tight uppercase tracking-widest line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase mb-6 leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase">READ MORE</span>
                  <div className="w-8 h-px bg-black group-hover:w-12 transition-all duration-300" />
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

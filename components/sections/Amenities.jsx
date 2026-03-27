'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Zap, Droplets, Home, Trees, Lock, Sun } from 'lucide-react'

export default function Amenities() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const amenities = [
    { icon: Droplets, title: 'Infinity Pool', desc: 'Temperature-controlled resort-style pool with spa' },
    { icon: Home, title: 'Smart Home', desc: 'Integrated smart home automation throughout' },
    { icon: Zap, title: 'Solar System', desc: 'Complete solar power with battery backup' },
    { icon: Trees, title: 'Landscaping', desc: 'Award-winning garden and landscape design' },
    { icon: Lock, title: 'Security', desc: 'State-of-the-art security and privacy systems' },
    { icon: Sun, title: 'Wine Cellar', desc: '3,000+ bottle climate-controlled wine storage' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="amenities" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-black mb-4">World-Class Amenities</h2>
          <p className="text-xl text-gray-600">Experience luxury at every corner</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {amenities.map((amenity, i) => {
            const IconComponent = amenity.icon
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white p-8 rounded-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="mb-4 inline-block p-3 bg-black rounded-lg group-hover:bg-gray-800 transition">
                  <IconComponent className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

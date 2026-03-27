'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { MapPin, Clock, Landmark } from 'lucide-react'

export default function Location() {
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

  const locations = [
    {
      icon: Clock,
      title: '15 min to LAX',
      desc: 'International airport access'
    },
    {
      icon: Landmark,
      title: 'Prime Location',
      desc: 'Heart of Beverly Hills'
    },
    {
      icon: MapPin,
      title: 'Prestigious Neighborhood',
      desc: 'Gated community with 24/7 security'
    }
  ]

  return (
    <section id="location" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-black mb-4">Prime Location</h2>
          <p className="text-xl text-gray-600">Situated in the most prestigious neighborhood</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {locations.map((item, i) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={i}
                  whileHover={{ x: 8 }}
                  className="flex gap-4 cursor-pointer"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-black">
                      <IconComponent className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-100 rounded-lg h-96 relative overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.4181394324!2d-118.40134!3d34.08261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bce5c1d1d1d1%3A0x1234567890abcdef!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

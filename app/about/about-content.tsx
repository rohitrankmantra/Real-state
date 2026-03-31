'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutContent() {
  return (
    <>
      {/* About Content */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-black mb-8 leading-tight uppercase tracking-wider">
                WHO WE ARE
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Mers Holdings LLC is a professional real estate property management company dedicated to providing exceptional service to property owners and investors. With years of experience in residential and commercial property management, we've built a reputation for integrity, reliability, and results.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Our team combines industry expertise with personalized attention, ensuring each property receives the care and professional oversight it deserves. We understand that property management is more than just collecting rent—it's about preserving value, maintaining tenant satisfaction, and ensuring legal compliance.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                We're committed to building long-term partnerships with our clients through transparency, professionalism, and consistent results.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px]"
            >
              <Image
                src="/gallery-1.jpg"
                alt="About Mers Holdings"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            {[
              {
                title: 'INTEGRITY',
                description: 'Honest, transparent dealings with all stakeholders in every interaction.'
              },
              {
                title: 'EXCELLENCE',
                description: 'Commitment to highest standards in property management and service delivery.'
              },
              {
                title: 'RELIABILITY',
                description: 'Consistent, dependable service that property owners can count on.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-200 p-8"
              >
                <h3 className="text-xl font-serif font-bold text-black mb-4 uppercase tracking-widest">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16 border-y border-gray-200">
            {[
              { number: '500+', label: 'PROPERTIES MANAGED' },
              { number: '10+', label: 'YEARS EXPERIENCE' },
              { number: '98%', label: 'CLIENT SATISFACTION' },
              { number: '24/7', label: 'SUPPORT AVAILABLE' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-serif font-bold text-black mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

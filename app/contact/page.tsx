'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    property: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    // Form submission logic
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      property: '',
      message: ''
    })
  }

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden bg-black">
        <Image
          src="/hero-bg.jpg"
          alt="Contact Us"
          fill
          priority
          className="object-cover scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/30" />

        <div className="relative h-full flex flex-col justify-center items-start px-8 md:px-20 lg:px-32 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight uppercase tracking-wider">
              CONTACT US
            </h1>
            <p className="text-white/80 text-sm md:text-base max-w-lg leading-relaxed">
              Get in touch with our team to discuss your property management needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-350 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-black mb-8 uppercase tracking-wider">
                SEND US A MESSAGE
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-gray-600 mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-gray-600 mb-2">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-gray-600 mb-2">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                    placeholder="(410) 555-0123"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-gray-600 mb-2">
                    PROPERTY TYPE
                  </label>
                  <select
                    name="property"
                    value={formData.property}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                  >
                    <option value="">Select a Property Type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="mixed">Mixed-Use</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-gray-600 mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors resize-none"
                    placeholder="Tell us about your property management needs..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  SEND MESSAGE
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-black mb-12 uppercase tracking-wider">
                GET IN TOUCH
              </h2>

              <div className="space-y-12">
                {/* Address */}
                <div>
                  <h3 className="text-lg font-serif font-bold text-black mb-4 uppercase tracking-widest">
                    OFFICE LOCATION
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Mers Holdings LLC
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    123 Main Street<br />
                    Baltimore, MD 21202<br />
                    United States
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="text-lg font-serif font-bold text-black mb-4 uppercase tracking-widest">
                    PHONE
                  </h3>
                  <p className="text-gray-600">
                    <a href="tel:+14105550123" className="hover:text-black transition-colors">
                      (410) 555-0123
                    </a>
                  </p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-2">
                    Available Monday - Friday, 9AM - 5PM EST
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h3 className="text-lg font-serif font-bold text-black mb-4 uppercase tracking-widest">
                    EMAIL
                  </h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@mersholdings.com" className="hover:text-black transition-colors">
                      info@mersholdings.com
                    </a>
                  </p>
                  <p className="text-gray-600 mt-2">
                    <a href="mailto:support@mersholdings.com" className="hover:text-black transition-colors">
                      support@mersholdings.com
                    </a>
                  </p>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="text-lg font-serif font-bold text-black mb-4 uppercase tracking-widest">
                    BUSINESS HOURS
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed<br />
                    <span className="text-xs uppercase tracking-widest text-gray-500 mt-2 block">24/7 Emergency Support Available</span>
                  </p>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-lg font-serif font-bold text-black mb-4 uppercase tracking-widest">
                    FOLLOW US
                  </h3>
                  <div className="flex gap-6">
                    <a href="#" className="text-gray-500 hover:text-black transition-colors text-sm uppercase tracking-widest">
                      Facebook
                    </a>
                    <a href="#" className="text-gray-500 hover:text-black transition-colors text-sm uppercase tracking-widest">
                      LinkedIn
                    </a>
                    <a href="#" className="text-gray-500 hover:text-black transition-colors text-sm uppercase tracking-widest">
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

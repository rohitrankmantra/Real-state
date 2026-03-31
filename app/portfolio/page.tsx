'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Portfolio() {
  const projects = [
    {
      title: 'LUXURY RESIDENTIAL COMPLEX',
      category: 'RESIDENTIAL',
      image: '/gallery-1.jpg',
      description: '250+ Unit residential complex with full amenities and 98% occupancy rate.'
    },
    {
      title: 'DOWNTOWN COMMERCIAL OFFICE',
      category: 'COMMERCIAL',
      image: '/gallery-2.jpg',
      description: 'Premium office space management in downtown Baltimore with mixed-use facilities.'
    },
    {
      title: 'RETAIL SHOPPING CENTER',
      category: 'COMMERCIAL',
      image: '/gallery-3.jpg',
      description: 'Multi-tenant retail property with strategic vendor management and tenant relations.'
    },
    {
      title: 'HISTORIC RESTORATION PROJECT',
      category: 'RESIDENTIAL',
      image: '/gallery-4.jpg',
      description: 'Modernized historic brownstone with 12 luxury unit apartments.'
    },
    {
      title: 'MIXED-USE DEVELOPMENT',
      category: 'COMMERCIAL',
      image: '/project-showcase.jpg',
      description: 'Combined residential and retail property with comprehensive management solutions.'
    },
    {
      title: 'STUDENT HOUSING COMPLEX',
      category: 'RESIDENTIAL',
      image: '/gallery-1.jpg',
      description: 'Specialized management for student housing with 150+ rooms.'
    }
  ]

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden bg-black">
        <Image
          src="/hero-bg.jpg"
          alt="Our Portfolio"
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
              OUR PORTFOLIO
            </h1>
            <p className="text-white/80 text-sm md:text-base max-w-lg leading-relaxed">
              Showcasing our diverse property management experience across residential and commercial projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-350 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative h-75 mb-6 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs font-bold tracking-widest uppercase mb-2">View Details</p>
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <p className="text-xs text-[#c5a07c] font-bold tracking-widest uppercase mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-lg font-serif font-bold text-black mb-3 uppercase tracking-widest group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-black text-white">
        <div className="max-w-300 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 uppercase tracking-wider">
              READY TO PARTNER WITH US?
            </h2>
            <p className="text-white/80 text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              Let us help you manage your property professionally and efficiently. Contact us today to discuss your property management needs.
            </p>
            <button className="btn-primary bg-white text-black hover:bg-gray-100">
              GET IN TOUCH
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

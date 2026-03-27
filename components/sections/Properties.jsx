'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Properties() {
  const ref = useScrollReveal();

  const properties = [
    {
      id: 1,
      name: 'Sunset Villa',
      location: 'Beverly Hills',
      price: '$8,500,000',
      beds: 6,
      baths: 7,
      sqft: '8,500 sqft',
      image: '/gallery-1.jpg'
    },
    {
      id: 2,
      name: 'Modern Penthouse',
      location: 'Downtown',
      price: '$6,200,000',
      beds: 5,
      baths: 5,
      sqft: '6,200 sqft',
      image: '/gallery-2.jpg'
    },
    {
      id: 3,
      name: 'Contemporary Estate',
      location: 'Malibu',
      price: '$9,800,000',
      beds: 7,
      baths: 8,
      sqft: '9,800 sqft',
      image: '/gallery-3.jpg'
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-600 text-lg">
            Discover our most exclusive listings
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-2">{property.name}</h3>
                <p className="text-gray-600 mb-4">{property.location}</p>
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Baths</span>
                  <span>{property.sqft}</span>
                </div>
                <div className="text-3xl font-bold text-black">{property.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

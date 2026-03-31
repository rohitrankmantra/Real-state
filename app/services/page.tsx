import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import ServicesContent from './services-content'

export const metadata = {
  title: 'Services - Mers Holdings LLC',
  description: 'Explore our comprehensive real estate property management services.',
}

export default function Services() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden bg-black">
        <Image
          src="/hero-bg.jpg"
          alt="Our Services"
          fill
          priority
          className="object-cover scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/30" />
        
        <div className="relative h-full flex flex-col justify-center items-start px-8 md:px-20 lg:px-32 z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight uppercase tracking-wider">
              OUR SERVICES
            </h1>
            <p className="text-white/80 text-sm md:text-base max-w-lg leading-relaxed">
              Comprehensive real estate management solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      <ServicesContent />
      <Footer />
    </main>
  )
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import AboutContent from './about-content'

export const metadata = {
  title: 'About Us - Mers Holdings LLC',
  description: 'Learn about Mers Holdings LLC and our commitment to excellent property management services.',
}

export default function About() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden bg-black">
        <Image
          src="/hero-bg.jpg"
          alt="About Mers Holdings"
          fill
          priority
          className="object-cover scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/30" />
        
        <div className="relative h-full flex flex-col justify-center items-start px-8 md:px-20 lg:px-32 z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight uppercase tracking-wider">
              ABOUT MERS HOLDINGS
            </h1>
            <p className="text-white/80 text-sm md:text-base max-w-lg leading-relaxed">
              Professional property management excellence since our founding, serving Baltimore and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      <AboutContent />
      <Footer />
    </main>
  )
}

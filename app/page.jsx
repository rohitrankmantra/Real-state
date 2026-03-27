import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Statistics from '@/components/sections/Statistics'
import ProjectShowcase from '@/components/sections/ProjectShowcase'
import Plans from '@/components/sections/Plans'
import InternationalProjects from '@/components/sections/InternationalProjects'
import FloorPlans from '@/components/sections/FloorPlans'
import Testimonials from '@/components/sections/Testimonials'
import Blog from '@/components/sections/Blog'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Statistics />
      <ProjectShowcase />
      <Plans />
      <InternationalProjects />
      <FloorPlans />
      <Testimonials />
      <Blog />
      <CTA />
      <Footer />
    </main>
  )
}


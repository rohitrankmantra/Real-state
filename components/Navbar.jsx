'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useNavbarScroll } from '@/hooks/useNavbarScroll'

export default function Navbar() {
  const pathname = usePathname()
  const isScrolled = useNavbarScroll()
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { label: 'HOME', href: '/', id: 'home' },
    { label: 'ABOUT US', href: '/about', id: 'about' },
    { label: 'SERVICES', href: '/services', id: 'services' },
    { label: 'PORTFOLIO', href: '/portfolio', id: 'portfolio' },
    { label: 'BLOG', href: '/blog', id: 'blog' },
    { label: 'CONTACT', href: '/contact', id: 'contact' },
  ]

  // Track active section on scroll and page navigation
  useEffect(() => {
    // First, check if we're on a different page (not home)
    const currentLink = navLinks.find(link => {
      if (link.href === '/') {
        return pathname === '/'
      }
      return pathname.startsWith(link.href)
    })

    if (currentLink) {
      setActiveSection(currentLink.id)
    } else {
      setActiveSection('home')
    }
  }, [pathname])

  useEffect(() => {
    // Only track scroll on the home page
    if (pathname !== '/') return

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in middle of viewport
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    // Observe all sections that have IDs matching our nav links
    navLinks.forEach((link) => {
      const section = document.getElementById(link.id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [pathname])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent pt-4'
      }`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-350 mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start leading-none group" aria-label="Mers Holdings LLC Home">
            <span className={`text-2xl md:text-3xl font-serif font-bold tracking-tighter ${
              isScrolled ? 'text-black' : 'text-white'
            }`}>
              MERS HOLDINGS
            </span>
            <span className={`text-[8px] tracking-[0.4em] font-sans font-medium ${
              isScrolled ? 'text-[#c5a07c]' : 'text-white/80'
            }`}>
              PROPERTY MANAGEMENT
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.slice(0, -1).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[13px] font-bold tracking-widest transition-all duration-300 relative group py-2 ${
                  isScrolled
                    ? activeSection === link.id ? 'text-[#c5a07c]' : 'text-gray-800 hover:text-[#c5a07c]'
                    : activeSection === link.id ? 'text-[#c5a07c]' : 'text-white hover:text-[#c5a07c]'
                }`}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#c5a07c] transition-all duration-300 ${
                  activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className={`px-8 py-3 uppercase tracking-widest text-[13px] font-bold transition-all duration-500 border-2 ${
                isScrolled
                  ? 'bg-[#c5a07c] border-[#c5a07c] text-white hover:bg-black hover:border-black'
                  : 'bg-white border-white text-black hover:bg-transparent hover:text-white'
              }`}
              aria-label="Contact Us"
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          id="mobile-menu"
          className={`lg:hidden fixed inset-0 bg-black transition-all duration-500 ease-in-out z-60 ${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`} 
          style={{ top: '0', height: '100vh' }}
          aria-hidden={!isOpen}
        >
          <div className="flex flex-col h-full items-center justify-center gap-8 p-6 relative">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white p-2"
              aria-label="Close menu"
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-2xl font-serif font-bold tracking-widest transition-colors ${
                  activeSection === link.id ? 'text-[#c5a07c]' : 'text-white hover:text-[#c5a07c]'
                }`}
                onClick={() => setIsOpen(false)}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
            <button className="bg-[#c5a07c] text-white px-10 py-4 uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all duration-300 mt-8">
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}



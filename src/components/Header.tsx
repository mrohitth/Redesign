'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-heading font-semibold text-charcoal">
              Miracle Hands
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-charcoal hover:text-sage transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:571-380-6868"
              className="flex items-center gap-2 text-charcoal hover:text-sage transition-colors"
            >
              <Phone size={18} />
              <span className="font-medium">571-380-6868</span>
            </a>
            <Link
              href="/booking"
              className="bg-sage text-white px-6 py-2.5 rounded-full font-medium hover:bg-sage-600 transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="bg-cream border-t border-cream-300 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-charcoal hover:text-sage transition-colors font-medium py-2"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-cream-300 space-y-3">
            <a
              href="tel:571-380-6868"
              className="flex items-center gap-2 text-charcoal"
            >
              <Phone size={18} />
              <span>571-380-6868</span>
            </a>
            <Link
              href="/booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full bg-sage text-white text-center px-6 py-3 rounded-full font-medium"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
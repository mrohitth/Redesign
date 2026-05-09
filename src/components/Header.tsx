'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Leaf } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-white/20 shadow-sm'
            : 'bg-transparent'
        }`}
        style={scrolled ? { backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-sage/10 flex items-center justify-center group-hover:bg-sage/20 transition-all duration-300">
                <Leaf size={18} className="text-sage" />
              </div>
              <span className="text-xl md:text-2xl font-heading font-semibold text-charcoal tracking-tight">
                Miracle Hands
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-charcoal/70 hover:text-sage transition-colors duration-300 group py-1"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-sage rounded-full group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:571-380-6868" className="flex items-center gap-1.5 text-sm text-charcoal/60 hover:text-sage transition-colors duration-300">
                <Phone size={15} />
                <span className="font-medium">571-380-6868</span>
              </a>
              <Link
                href="/booking"
                className="bg-sage text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-sage-600 transition-all duration-300 hover:shadow-lg hover:shadow-sage/25"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-sage/10 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} className="text-charcoal" /> : <Menu size={22} className="text-charcoal" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-cream/95 backdrop-blur-xl" onClick={() => setMenuOpen(false)} />
        <div className="relative h-full flex flex-col items-center justify-center px-8 gap-8">
          {/* Leaf mark */}
          <div className="w-12 h-12 rounded-2xl bg-sage/10 flex items-center justify-center animate-fade-up" style={{ animationDelay: '0ms' }}>
            <Leaf size={24} className="text-sage" />
          </div>

          {/* Nav Links */}
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-heading font-semibold text-charcoal hover:text-sage transition-colors duration-300 animate-fade-up"
              style={{ animationDelay: `${(i + 1) * 80}ms` }}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile CTAs */}
          <div className="mt-4 flex flex-col gap-3 w-full max-w-xs animate-fade-up" style={{ animationDelay: '400ms' }}>
            <Link
              href="/booking"
              onClick={() => setMenuOpen(false)}
              className="block w-full bg-sage text-white text-center py-4 rounded-full font-medium text-lg transition-all duration-300 hover:bg-sage-600"
            >
              Book Your Session
            </Link>
            <a href="tel:571-380-6868" className="block w-full border border-charcoal/20 text-charcoal text-center py-4 rounded-full font-medium transition-all duration-300 hover:bg-charcoal/5">
              Call 571-380-6868
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

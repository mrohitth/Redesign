import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/booking', label: 'Book Now' },
  ]

  return (
    <footer className="bg-charcoal text-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading text-cream">Miracle Hands</h3>
            <p className="text-cream-300 text-sm leading-relaxed">
              Oasis Wellness Center of Virginia. Your journey to wellness begins with our licensed therapists delivering personalized care in a serene environment.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream-300/20 flex items-center justify-center hover:bg-sage transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream-300/20 flex items-center justify-center hover:bg-sage transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream-300/20 flex items-center justify-center hover:bg-sage transition-colors"
                aria-label="Google"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.88 3.18-1.88 4.16-1.04 1-2.4 1.48-4.04 1.48-3.12 0-5.64-2.64-5.64-5.92 0-3.28 2.52-5.92 5.64-5.92 1.68 0 3.08.64 4.2 1.72l2.56-2.56C16.24 4.56 14.48 4 12.48 4 7.92 4 4.4 7.52 4.4 12.08c0 4.56 3.52 8.08 8.08 8.08 4.56 0 7.52-3.68 7.52-8.08 0-.6-.08-1.2-.2-1.76h-.04z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading text-cream mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream-300 hover:text-sage transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading text-cream mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-sage mt-0.5 flex-shrink-0" />
                <span className="text-cream-300 text-sm">14200G Centreville Square<br/>Centerville, VA 20121</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-sage flex-shrink-0" />
                <a href="tel:571-380-6868" className="text-cream-300 hover:text-sage transition-colors text-sm">
                  571-380-6868
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-sage flex-shrink-0" />
                <a href="mailto:Miraclehandsva@gmail.com" className="text-cream-300 hover:text-sage transition-colors text-sm">
                  Miraclehandsva@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-sage mt-0.5 flex-shrink-0" />
                <span className="text-cream-300 text-sm">7 Days a Week<br/>9:30AM – 9:30PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-cream-300/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream-300/60 text-sm">
            © {currentYear} Miracle Hands Massage & Spa. All rights reserved.
          </p>
          <Link
            href="/booking"
            className="bg-sage text-white px-6 py-2.5 rounded-full font-medium hover:bg-sage-600 transition-colors text-sm"
          >
            Book Your Session
          </Link>
        </div>
      </div>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Miracle Hands Massage & Spa',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '14200G Centreville Square',
              addressLocality: 'Centerville',
              addressRegion: 'VA',
              postalCode: '20121',
            },
            telephone: '571-380-6868',
            openingHours: 'Mo-Su 09:30-21:30',
          }),
        }}
      />
    </footer>
  )
}
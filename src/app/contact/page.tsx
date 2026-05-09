'use client'

import { useState } from 'react'
import { MapPin, Clock, Phone, Mail, ArrowRight, ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Do I need to book in advance?',
    answer:
      'While we do accept walk-ins based on availability, we strongly recommend booking in advance — especially on weekends. Same-day bookings are often available; call us to check.',
  },
  {
    question: 'What should I wear to my massage?',
    answer:
      'Wear loose, comfortable clothing. For most massage styles, you will be asked to undress to your level of comfort — you will always be properly draped with a sheet or towel.',
  },
  {
    question: 'How early should I arrive for my appointment?',
    answer:
      'Please arrive at least 10–15 minutes before your scheduled appointment. This gives you time to check in, use the restroom, and relax before your session begins.',
  },
  {
    question: 'Do you offer gift cards?',
    answer:
      'Yes! Gift cards are available in any denomination. They make a thoughtful gift for birthdays, holidays, or just because. Ask us at the front desk or call to purchase.',
  },
  {
    question: 'What forms of payment do you accept?',
    answer:
      'We accept cash, all major credit cards, and mobile payments including Apple Pay and Google Pay. Payment is collected at the end of your session.',
  },
]

const serviceOptions = [
  'Deep Tissue Massage',
  'Swedish Massage',
  'Hot Stone Massage',
  'Couples Massage',
  'Prenatal Massage',
  'Sports Massage',
  'Reflexology',
  'Trigger Point Therapy',
  'Tuina Massage',
  'Lomi Lomi Massage',
  'Lymphatic Drainage Massage',
  'Fire Cupping',
  'Body Scrub',
  'Aromatherapy',
  'Not sure — need a recommendation',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production: integrate with email service (Formspree, Resend, etc.)
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-charcoal mb-4">
            Get in Touch
          </h1>
          <p className="text-charcoal/60 text-lg max-w-2xl">
            Questions about our services, booking, or anything else? We respond to all inquiries within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-sage/10 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-charcoal mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-charcoal/60">
                    Thank you for reaching out. We will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-charcoal/20 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-sage/50"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-charcoal/20 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-sage/50"
                        placeholder="(703) 555-0100"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-charcoal/20 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-sage/50"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full border border-charcoal/20 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-sage/50 bg-white"
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border border-charcoal/20 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-sage/50 resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-sage text-white py-3.5 rounded-full font-medium hover:bg-sage-600 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <div className="bg-cream rounded-2xl p-6">
                <h3 className="font-heading font-semibold text-charcoal mb-4">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-charcoal text-sm">Address</p>
                      <p className="text-charcoal/60 text-sm">
                        14200G Centreville Square
                        <br />
                        Centerville, VA 20121
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-charcoal text-sm">Phone</p>
                      <a href="tel:571-380-6868" className="text-charcoal/60 text-sm hover:text-sage">
                        571-380-6868
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-charcoal text-sm">Email</p>
                      <a href="mailto:Miraclehandsva@gmail.com" className="text-charcoal/60 text-sm hover:text-sage">
                        Miraclehandsva@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-charcoal text-sm">Hours</p>
                      <p className="text-charcoal/60 text-sm">Mon – Sun: 9:30AM – 9:30PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-sage/10 rounded-2xl p-6">
                <h3 className="font-heading font-semibold text-charcoal mb-2">Quick Book</h3>
                <p className="text-charcoal/60 text-sm mb-4">
                  Prefer to talk? Call us directly or book your session online in under 2 minutes.
                </p>
                <a
                  href="tel:571-380-6868"
                  className="block w-full text-center bg-sage text-white py-3 rounded-full font-medium hover:bg-sage-600 transition-colors text-sm"
                >
                  Call 571-380-6868
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden h-64 bg-sage/5 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-10 h-10 text-sage/50 mx-auto mb-2" />
              <p className="text-charcoal/50 text-sm">Google Maps Embed Component</p>
              <p className="text-charcoal/40 text-xs mt-1">14200G Centreville Square, Centerville VA 20121</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-charcoal mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-charcoal/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-cream/50 transition-colors"
                >
                  <span className="font-medium text-charcoal pr-4">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-charcoal/40 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 pt-0 text-charcoal/60 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

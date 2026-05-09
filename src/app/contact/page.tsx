'use client'

import { useState } from 'react'
import { MapPin, Clock, Phone, Mail, ArrowRight, ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Do I need to book in advance?',
    answer:
      'Advance booking is always safest — especially on weekends when we fill up fast. But if something suddenly hurts and you need relief today, call us before noon and we\'ll do everything we can to get you on the table the same day.',
  },
  {
    question: 'What should I wear to my massage?',
    answer:
      'Wear whatever helps you feel comfortable and unvisited. We\'ll guide you through what to expect when you arrive, and you\'re always draped professionally. Some clients undress fully, some don\'t — it\'s completely your call.',
  },
  {
    question: 'How early should I arrive for my appointment?',
    answer:
      'About 10–15 minutes is plenty. That gives you time to breathe, change if needed, and settle before your session starts. Rushing into a massage with a racing heart defeats the purpose — we want you already calm when your therapist begins.',
  },
  {
    question: 'Do you offer gift cards?',
    answer:
      'Yes. Gift cards are available in any amount and never expire. They\'re one of the most requested gifts we receive — which tells us a lot of people out there know someone who deserves a break.',
  },
  {
    question: 'What forms of payment do you accept?',
    answer:
      'Cash, all major credit cards, Apple Pay, and Google Pay. Payment is collected after your session — no advance payment required for first-time visitors.',
  },
]

const serviceOptions = [
  'Deep Tissue Massage',
  'Swedish Massage',
  'Hot Stone Massage',
  'Couples Massage',
  'Prenatal Massage',
  'Therapeutic Massage',
  'Reflexology',
  'Trigger Point Therapy',
  'Tuina Massage',
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
            Let\'s Talk About How We Can Help
          </h1>
          <p className="text-charcoal/60 text-lg max-w-2xl">
            Whether you have a specific pain point or just know you need something — we\'re good at figuring it out together. Most messages get a response within a few hours.
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
                    Thank you for reaching out. We\'ll get back to you within 24 hours — usually much sooner.
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
                      What brings you in?
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full border border-charcoal/20 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-sage/50 bg-white"
                    >
                      <option value="">Select what resonates...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                      Anything else we should know?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border border-charcoal/20 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-sage/50 resize-none"
                      placeholder="Injuries, preferences, what you\'re hoping to feel after..."
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
                <h3 className="font-heading font-semibold text-charcoal mb-4">Find Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-charcoal text-sm">Location</p>
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
                <h3 className="font-heading font-semibold text-charcoal mb-2">Want to Talk Right Now?</h3>
                <p className="text-charcoal/60 text-sm mb-4">
                  Sometimes it\'s easier to just call. We\'re here 9:30AM–9:30PM, 7 days a week — and we\'re good at matching you with the right therapist on the spot.
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
              Questions Before You Book?
            </h2>
            <p className="text-charcoal/60 text-lg">
              We\'ve heard them all — here are some answers that actually help.
            </p>
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
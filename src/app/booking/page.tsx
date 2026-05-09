import Link from 'next/link'
import { Clock, Shield, ArrowRight, Phone, Calendar } from 'lucide-react'

const bookingInfo = [
  {
    icon: Calendar,
    title: 'Online Booking',
    description:
      'Use our online booking system to select your service, therapist preference, and time slot. Available 24/7.',
  },
  {
    icon: Phone,
    title: 'Call Us',
    description:
      'Prefer to book over the phone? Call 571-380-6868 during business hours and our team will assist you.',
  },
  {
    icon: Clock,
    title: 'Same-Day Availability',
    description:
      'Need a last-minute appointment? Check availability — we often have same-day openings.',
  },
]

const faqs = [
  {
    q: 'How do I reschedule or cancel?',
    a: 'Please give us at least 24 hours notice for cancellations or reschedules. This allows us to offer your slot to another client. Late cancellations (under 24 hours) may be subject to a 50% fee.',
  },
  {
    q: 'Is there a cancellation policy?',
    a: 'Yes. We require 24 hours notice for cancellations. Repeated no-shows or late cancellations may result in a credit card hold for future visits.',
  },
  {
    q: 'What happens if I am late?',
    a: 'We understand that life happens. If you are running late, please call us. We will do our best to accommodate you, but the session may need to be shortened if another client is scheduled after you.',
  },
  {
    q: 'Do I need to tip?',
    a: 'Tips are never required, but always appreciated by our therapists. Industry standard is 15–20% of the service price.',
  },
  {
    q: 'Can I request a specific therapist?',
    a: 'Absolutely. When booking, you can note your preference in the special requests field. We will do our best to accommodate, though same-day requests may not always be possible.',
  },
]

export default function BookingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-charcoal mb-4">
            Book Your Session
          </h1>
          <p className="text-charcoal/60 text-lg max-w-2xl">
            Reserve your spot online in under 2 minutes, or call us directly. New clients receive a complimentary aromatherapy upgrade.
          </p>
        </div>
      </section>

      {/* Booking Widget Placeholder */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream rounded-3xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-sage" />
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-charcoal mb-4">
              Booking Widget
            </h2>
            <p className="text-charcoal/60 mb-6 max-w-lg mx-auto">
              Integrate with your preferred booking platform. We recommend Vagaro, Acuity Scheduling, or Square Appointments — all support embedded widget installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://www.vagaro.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-sage text-white px-6 py-3 rounded-full font-medium hover:bg-sage-600 transition-colors"
              >
                Set Up Vagaro
                <ArrowRight className="ml-2" size={16} />
              </a>
              <a
                href="https://www.squarespace.com/appointments"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-charcoal text-charcoal px-6 py-3 rounded-full font-medium hover:bg-charcoal hover:text-cream transition-colors"
              >
                Set Up Acuity
              </a>
            </div>
            <div className="border-t border-charcoal/10 pt-6">
              <p className="text-charcoal/50 text-sm mb-3">Or book by phone — no account needed:</p>
              <a
                href="tel:571-380-6868"
                className="inline-flex items-center text-sage font-semibold text-xl hover:text-sage-600 transition-colors"
              >
                <Phone className="mr-2" size={20} />
                571-380-6868
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-charcoal mb-4">
              How to Book
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bookingInfo.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-sage" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Client Offer */}
      <section className="py-16 bg-sage text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-10 h-10 mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            First-Time Client Special
          </h2>
          <p className="text-white/80 text-lg mb-2">
            Book your first session and receive a complimentary aromatherapy upgrade — on us.
          </p>
          <p className="text-white/60 text-sm mb-8">No code needed. Applied automatically at checkout.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-sage px-8 py-3.5 rounded-full font-medium hover:bg-cream transition-colors"
            >
              Book Your First Session
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <a
              href="tel:571-380-6868"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              <Phone className="mr-2" size={18} />
              Call 571-380-6868
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-charcoal mb-4">
              Booking FAQ
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-charcoal/10 rounded-xl p-5">
                <p className="font-medium text-charcoal mb-2">{faq.q}</p>
                <p className="text-charcoal/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

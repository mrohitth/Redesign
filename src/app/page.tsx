import Link from 'next/link'
import {
  Shield,
  Clock,
  Star,
  ArrowRight,
  Phone,
  MapPin,
  Sparkles,
  Heart,
  Users,
  Leaf,
} from 'lucide-react'
import { getFeaturedServices } from '@/lib/services'

const featuredServices = getFeaturedServices()

const testimonials = [
  {
    name: 'Sarah M.',
    rating: 5,
    quote: 'I have been coming to Miracle Hands for over a year now. The therapists are incredibly skilled and always take time to understand my needs. My chronic back pain has significantly improved.',
  },
  {
    name: 'James K.',
    rating: 5,
    quote: 'The hot stone massage here is unlike anywhere else I have been. The stones are perfectly heated and the technique is exceptional. I leave feeling completely renewed.',
  },
  {
    name: 'Michelle R.',
    rating: 5,
    quote: 'As a pregnant woman, I was nervous about getting a massage. The prenatal massage here is exceptional — so gentle and nurturing. I look forward to my monthly visits.',
  },
]

const popularServices = [
  { name: 'Swedish Massage', duration: '60 min', price: 80 },
  { name: 'Deep Tissue Massage', duration: '60 min', price: 90 },
  { name: 'Hot Stone Massage', duration: '90 min', price: 120 },
  { name: 'Couples Massage', duration: '60 min', price: 160 },
]

const trustIndicators = [
  { icon: Shield, label: 'Licensed Therapists' },
  { icon: Star, label: '20+ Services' },
  { icon: Clock, label: '7 Days a Week' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-cream pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: Copy */}
            <div className="space-y-6 animate-fade-in">
              <div className="flex gap-4">
                {trustIndicators.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="flex items-center gap-2 text-sm text-charcoal/70 bg-sage/10 px-3 py-1.5 rounded-full"
                  >
                    <Icon size={14} className="text-sage" />
                    {label}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-charcoal leading-tight">
                Your Journey to
                <br />
                <span className="text-sage">Wellness</span> Begins Here
              </h1>
              <p className="text-lg text-charcoal/70 max-w-lg">
                Experience tranquility at our Centerville spa. Licensed therapists delivering personalized care for body, mind, and spirit — open 7 days a week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center bg-sage text-white px-8 py-3.5 rounded-full font-medium hover:bg-sage-600 transition-colors text-lg"
                >
                  Book Your Session
                  <ArrowRight className="ml-2" size={18} />
                </Link>
                <a
                  href="tel:571-380-6868"
                  className="inline-flex items-center justify-center border-2 border-charcoal text-charcoal px-8 py-3.5 rounded-full font-medium hover:bg-charcoal hover:text-cream transition-colors text-lg"
                >
                  <Phone className="mr-2" size={18} />
                  571-380-6868
                </a>
              </div>
            </div>

            {/* Right: Hero Image Placeholder */}
            <div className="relative animate-slide-up">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-sage/30 to-sage/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(124,154,130,0.3),transparent_70%)]" />
                <div className="text-center p-8">
                  <Sparkles className="w-16 h-16 text-sage/50 mx-auto mb-4" />
                  <p className="text-charcoal/50 text-sm">Spa interior photo coming soon</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <Star className="w-6 h-6 text-gold fill-gold" />
                </div>
                <div>
                  <p className="font-medium text-charcoal">4.9 Rating</p>
                  <p className="text-sm text-charcoal/60">250+ Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-charcoal mb-4">
              Our Signature Services
            </h2>
            <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
              From therapeutic deep tissue to serene hot stone, we offer over 15 modalities tailored to your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {featuredServices.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group bg-cream rounded-2xl p-6 hover:shadow-lg transition-all duration-300 animate-slide-up ${
                  index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-sage" />
                    </div>
                    <ArrowRight
                      size={20}
                      className="text-charcoal/30 group-hover:text-sage group-hover:translate-x-1 transition-all"
                    />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-charcoal mb-2">
                    {service.name}
                  </h3>
                  <p className="text-charcoal/60 text-sm mb-4 flex-grow">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-charcoal/10">
                    <span className="text-sage font-semibold">From ${service.price}</span>
                    <span className="text-charcoal/50 text-sm">{service.duration} min</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center text-sage font-medium hover:text-sage-600 transition-colors"
            >
              View All 15+ Services
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-charcoal mb-4">
              Why Miracle Hands?
            </h2>
            <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
              We combine ancient healing traditions with modern techniques for an exceptional wellness experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Licensed & Certified',
                description:
                  'All our therapists are state-licensed with advanced certifications in multiple modalities. Your safety and quality of care are our top priorities.',
              },
              {
                icon: Heart,
                title: 'Personalized Treatments',
                description:
                  'No cookie-cutter sessions here. We listen to your needs and tailor every treatment to your body\'s unique requirements and preferences.',
              },
              {
                icon: Clock,
                title: 'Same-Day Appointments',
                description:
                  'Life is unpredictable. That\'s why we offer same-day booking availability. Walk in or call — we\'ll get you on the table quickly.',
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-sage" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-charcoal/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-charcoal mb-4">
              What Our Clients Say
            </h2>
            <p className="text-charcoal/60 text-lg">
              Real stories from our wellness community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-cream rounded-2xl p-6 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-gold fill-gold"
                    />
                  ))}
                </div>
                <p className="text-charcoal/80 mb-4 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="font-medium text-charcoal">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-charcoal mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-charcoal/60 text-lg mb-8">
                No hidden fees. No pressure. Just exceptional care at fair prices.
              </p>
              <div className="space-y-4">
                {popularServices.map((service, index) => (
                  <div
                    key={service.name}
                    className="flex items-center justify-between bg-white rounded-xl p-4 animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div>
                      <p className="font-medium text-charcoal">{service.name}</p>
                      <p className="text-sm text-charcoal/50">{service.duration}</p>
                    </div>
                    <span className="text-xl font-heading font-semibold text-sage">
                      ${service.price}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href="/services"
                className="inline-flex items-center text-sage font-medium hover:text-sage-600 transition-colors mt-6"
              >
                View All Services & Pricing
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
            <div className="bg-sage/10 rounded-3xl p-8 md:p-10 text-center">
              <Users className="w-12 h-12 text-sage mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-semibold text-charcoal mb-3">
                First-Time Visitor?
              </h3>
              <p className="text-charcoal/70 mb-6">
                Book your first session and experience the Miracle Hands difference. New clients receive a complimentary aromatherapy upgrade.
              </p>
              <Link
                href="/booking"
                className="inline-flex items-center bg-sage text-white px-8 py-3.5 rounded-full font-medium hover:bg-sage-600 transition-colors"
              >
                Book Your First Session
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-charcoal mb-6">
                Visit Our Spa
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-sage mt-1" />
                  <div>
                    <p className="font-medium text-charcoal">Address</p>
                    <p className="text-charcoal/60">14200G Centreville Square<br />Centerville, VA 20121</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-sage mt-1" />
                  <div>
                    <p className="font-medium text-charcoal">Hours</p>
                    <p className="text-charcoal/60">Monday – Sunday: 9:30AM – 9:30PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-sage mt-1" />
                  <div>
                    <p className="font-medium text-charcoal">Phone</p>
                    <a href="tel:571-380-6868" className="text-charcoal/60 hover:text-sage transition-colors">
                      571-380-6868
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-sage mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium text-charcoal">Email</p>
                    <a href="mailto:Miraclehandsva@gmail.com" className="text-charcoal/60 hover:text-sage transition-colors">
                      Miraclehandsva@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-cream rounded-2xl overflow-hidden min-h-[400px] flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 text-sage/50 mx-auto mb-4" />
                <p className="text-charcoal/50 text-sm">Map Component</p>
                <p className="text-charcoal/40 text-xs mt-1">Integrate with Google Maps API</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-charcoal/10 p-4 md:hidden z-40">
        <Link
          href="/booking"
          className="block w-full bg-sage text-white text-center py-3.5 rounded-full font-medium"
        >
          Book Now — 571-380-6868
        </Link>
      </div>
    </>
  )
}
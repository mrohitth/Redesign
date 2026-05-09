'use client'

import Link from 'next/link'
import {
  Star, Clock, Shield, ArrowRight, Phone, MapPin,
  Heart, Leaf, Sparkles, Droplets, Wind, Hand, Sun
} from 'lucide-react'
import { useState, useEffect } from 'react'

const services = [
  {
    slug: 'deep-tissue',
    name: 'Deep Tissue',
    icon: Hand,
    price: 75,
    duration: 60,
    desc: 'Release chronic muscle tension at its source — layer by layer.',
    img: '/images/deep-tissue.jpg',
  },
  {
    slug: 'swedish',
    name: 'Swedish Relaxation',
    icon: Wind,
    price: 75,
    duration: 60,
    desc: 'Melt away stress with long, flowing strokes that calm the nervous system.',
    img: '/images/swedish.jpg',
  },
  {
    slug: 'hot-stone',
    name: 'Hot Stone',
    icon: Sun,
    price: 95,
    duration: 75,
    desc: 'Volcanic warmth penetrates deep into muscle for profound, lasting relief.',
    img: '/images/hot-stone.jpg',
  },
  {
    slug: 'couples',
    name: 'Couples Massage',
    icon: Heart,
    price: 139,
    duration: 60,
    desc: 'Share the experience — side by side, in a synchronized session built for two.',
    img: '/images/couples.jpg',
  },
  {
    slug: 'prenatal',
    name: 'Prenatal Care',
    icon: Sparkles,
    price: 79,
    duration: 60,
    desc: 'Gentle, nurturing touch designed for the extraordinary demands of pregnancy.',
    img: '/images/prenatal.jpg',
  },
  {
    slug: 'reflexology',
    name: 'Reflexology',
    icon: Droplets,
    price: 60,
    duration: 45,
    desc: 'Precise pressure to reflex points in your feet unlocks full-body harmony.',
    img: '/images/reflexology.jpg',
  },
]

const trustBadges = [
  { icon: Shield, label: 'VA Licensed', sub: 'Board Certified' },
  { icon: Star, label: '4.9 / 5', sub: '250+ Reviews' },
  { icon: Clock, label: '9AM–9:30PM', sub: '7 Days a Week' },
  { icon: Leaf, label: 'Organic', sub: 'Lotions & Oils' },
]

const testimonials = [
  {
    name: 'Sarah M.',
    quote: 'For the first time in years, I slept through the night. My shoulders don\'t feel like they\'re carrying a second skull. This is what I came for.',
    service: 'Deep Tissue',
  },
  {
    name: 'James K.',
    quote: 'Walked in with a stiff neck from back-to-back meetings. Left feeling like I\'d come back from a long weekend. Booked my next session before I got to my car.',
    service: 'Hot Stone',
  },
  {
    name: 'Angela R.',
    quote: 'Being pregnant is exhausting enough without adding tension. My therapist found relief I didn\'t know I needed. I actually looked forward to my appointments.',
    service: 'Prenatal',
  },
]

export default function HomePage() {
  const [stickyVisible, setStickyVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setStickyVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image — uses local file served from /public/images/ */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/spa-hero.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        </div>

        {/* Content — constrained width on mobile */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full overflow-hidden">
          <div className="max-w-xl animate-fade-up">
            {/* Pill badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {['Licensed Therapists', '15+ Modalities', 'Same-Day Booking'].map((tag) => (
                <span key={tag} className="text-xs bg-white/15 text-white/90 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Headline — responsive fluid type */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-semibold text-white leading-tight mb-6">
              Where Every Touch<br />
              <span className="text-sage-300">Tells a Story</span><br />
              of Healing
            </h1>

            {/* Sub */}
            <p className="text-white/70 text-lg mb-8 max-w-md leading-relaxed">
              Move without pain again. Our Centerville therapists listen to your body — not the clock — so you leave lighter than when you arrived.
            </p>

            {/* CTAs — full-width on mobile */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center bg-sage text-white px-8 py-4 rounded-full font-medium hover:bg-sage-600 transition-all duration-300 text-base shadow-xl shadow-sage/30"
              >
                Book Your Session
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <a
                href="tel:571-380-6868"
                className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300 text-base"
              >
                <Phone className="mr-2" size={18} />
                571-380-6868
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-white border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-sage/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-sage" />
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm leading-tight">{label}</p>
                  <p className="text-charcoal/50 text-xs mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest text-sage font-medium">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-charcoal mt-3 mb-4">
              Your Body Deserves This
            </h2>
            <p className="text-charcoal/60 text-lg max-w-xl mx-auto">
              15+ modalities — each one designed to dissolve what you&apos;re carrying, not just mask it.
            </p>
          </div>

          {/* 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon
              return (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="group bg-white rounded-3xl overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={svc.img}
                      alt={svc.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-11 h-11 rounded-2xl bg-sage/10 flex items-center justify-center">
                        <Icon size={20} className="text-sage" />
                      </div>
                      <ArrowRight size={18} className="text-charcoal/25 group-hover:text-sage group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-charcoal mb-2">{svc.name}</h3>
                    <p className="text-charcoal/55 text-sm mb-4 leading-relaxed">{svc.desc}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-cream-200">
                      <span className="text-sage font-semibold">From ${svc.price}</span>
                      <span className="text-charcoal/40 text-sm">{svc.duration} min</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* CTA row */}
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sage font-medium hover:text-sage-600 transition-colors text-base"
            >
              See All 15+ Ways to Feel Better
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest text-sage font-medium">The Miracle Hands Difference</span>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-charcoal mt-3 mb-4">
              Why Clients Come Back
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Therapists Who Actually Listen',
                desc: 'Your first session isn\'t a checklist — it\'s a conversation. We ask where you hurt, what brought you in, and what "good" feels like for you.',
              },
              {
                icon: Sparkles,
                title: 'Feel the Difference by Day Three',
                desc: 'Most clients report measurable relief within 48–72 hours. Not because we work harder — because we work smarter, targeting the root cause.',
              },
              {
                icon: Clock,
                title: 'Book Today, Feel Better Tomorrow',
                desc: 'Same-day availability means you don\'t wait a week in pain. Call before noon and we\'ll get you on the table before dinner.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-cream rounded-3xl p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-5">
                  <Icon size={24} className="text-sage" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">{title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest text-gold font-medium">Client Stories</span>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-charcoal mt-3 mb-4">
              Real Relief. Real People.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, quote, service }) => (
              <div key={name} className="bg-white rounded-3xl p-8 shadow-luxury">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-charcoal/75 mb-6 text-sm leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-sage/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-sage">{name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-sm">{name}</p>
                    <p className="text-charcoal/45 text-xs">{service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIRST VISIT CTA ── */}
      <section className="py-20 bg-sage text-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Sparkles size={32} className="mx-auto mb-5 opacity-70" />
          <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
            Your First Session — On Us
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
            Book your first visit and we&apos;ll add a complimentary aromatherapy upgrade. The best way to meet your body is without barriers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center bg-white text-sage px-8 py-4 rounded-full font-medium hover:bg-cream transition-colors text-base"
            >
              Claim Your Free Upgrade
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <a
              href="tel:571-380-6868"
              className="inline-flex items-center justify-center border-2 border-white/40 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors text-base"
            >
              <Phone className="mr-2" size={18} />
              571-380-6868
            </a>
          </div>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <span className="text-xs uppercase tracking-widest text-sage font-medium">Find Us</span>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-charcoal mt-3 mb-8">
                Find Your Way to Less Pain
              </h2>
              <div className="space-y-6">
                {[
                  { icon: MapPin, label: 'Address', val: '14200G Centreville Square\nCenterville, VA 20121' },
                  { icon: Clock, label: 'Hours', val: 'Monday – Sunday\n9:30AM – 9:30PM' },
                  { icon: Phone, label: 'Phone', val: '571-380-6868', href: 'tel:571-380-6868' },
                  { icon: Heart, label: 'Email', val: 'Miraclehandsva@gmail.com', href: 'mailto:Miraclehandsva@gmail.com' },
                ].map(({ icon: Icon, label, val, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-sage/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-sage" />
                    </div>
                    <div>
                      <p className="font-medium text-charcoal text-sm">{label}</p>
                      {href
                        ? <a href={href} className="text-charcoal/60 text-sm hover:text-sage transition-colors">{val}</a>
                        : <p className="text-charcoal/60 text-sm whitespace-pre-line">{val}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-3xl overflow-hidden bg-cream min-h-[360px] flex items-center justify-center relative">
              <img
                src="/images/spa-interior.jpg"
                alt="Spa interior"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="relative text-center p-8">
                <div className="w-14 h-14 rounded-2xl bg-white/90 flex items-center justify-center mx-auto mb-4 shadow-luxury">
                  <MapPin size={24} className="text-sage" />
                </div>
                <p className="text-charcoal/70 text-sm">Centerville, VA</p>
                <p className="text-charcoal/40 text-xs mt-1">14200G Centreville Square</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STICKY MOBILE CTA ── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-400 ${
          stickyVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="bg-white border-t border-cream-200 p-4 shadow-2xl">
          <Link
            href="/booking"
            className="block w-full bg-sage text-white text-center py-4 rounded-2xl font-semibold text-base shadow-xl shadow-sage/25"
          >
            Book Now — 571-380-6868
          </Link>
        </div>
      </div>
    </>
  )
}
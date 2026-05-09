import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getServiceBySlug, services } from '@/lib/services'
import { ArrowLeft, Clock, Check, Star, ArrowRight } from 'lucide-react'
import ServiceDetailClient from '@/components/ServiceDetailClient'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export function generateMetadata({ params }: Props) {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}
  return {
    title: `${service.name} | Miracle Hands Massage & Spa`,
    description: service.shortDescription,
  }
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  const relatedServices = service.relatedSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center text-charcoal/60 hover:text-sage transition-colors mb-6"
          >
            <ArrowLeft className="mr-2" size={16} />
            All Services
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="text-sm bg-sage/10 text-sage px-3 py-1 rounded-full">
                {service.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-semibold text-charcoal mt-4 mb-4">
                {service.name}
              </h1>
              <p className="text-charcoal/60 text-lg mb-6">
                {service.description}
              </p>
              <div className="flex items-center gap-6 text-charcoal/70">
                <div className="flex items-center gap-2">
                  <Clock className="text-sage" size={18} />
                  <span>{service.duration} min</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="text-gold fill-gold" size={18} />
                  <span>Popular Choice</span>
                </div>
              </div>
            </div>
            {/* Pass service data to client component for interactive rendering */}
            <ServiceDetailClient service={service} />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-semibold text-charcoal mb-8">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-cream rounded-xl p-4"
              >
                <Check className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                <span className="text-charcoal">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      {service.addOns && service.addOns.length > 0 && (
        <section className="py-16 bg-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-semibold text-charcoal mb-8">
              Enhance Your Session
            </h2>
            <div className="space-y-4">
              {service.addOns.map((addon, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white rounded-xl p-4"
                >
                  <span className="font-medium text-charcoal">{addon.name}</span>
                  <span className="text-sage font-semibold">+${addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-semibold text-charcoal mb-8">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((related) => {
                if (!related) return null
                return (
                  <Link
                    key={related.slug}
                    href={`/services/${related.slug}`}
                    className="bg-cream rounded-xl p-6 hover:shadow-lg transition-all group"
                  >
                    <h3 className="text-lg font-heading font-semibold text-charcoal mb-2 group-hover:text-sage transition-colors">
                      {related.name}
                    </h3>
                    <p className="text-charcoal/60 text-sm mb-4 line-clamp-2">
                      {related.shortDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sage font-semibold">${related.price}</span>
                      <ArrowRight size={16} className="text-charcoal/30 group-hover:text-sage group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-sage text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            Ready to Experience {service.name}?
          </h2>
          <p className="text-white/80 text-lg mb-6">
            Book your session today and begin your wellness journey.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center bg-white text-sage px-8 py-3.5 rounded-full font-medium hover:bg-cream transition-colors"
          >
            Book Now
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
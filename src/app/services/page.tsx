import Link from 'next/link'
import { services, serviceCategories } from '@/lib/services'
import { ArrowRight, Clock, Leaf, Star } from 'lucide-react'

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-charcoal mb-4">
            Our Services
          </h1>
          <p className="text-charcoal/60 text-lg max-w-2xl">
            Over 15 massage modalities designed to address your unique needs — from deep tissue therapy to ancient Hawaiian healing traditions.
          </p>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-cream rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-sage" />
                  </div>
                  <span className="text-xs bg-sage/10 text-sage px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-charcoal mb-2">
                  {service.name}
                </h3>
                <p className="text-charcoal/60 text-sm mb-4 line-clamp-2">
                  {service.shortDescription}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-charcoal/10">
                  <span className="text-sage font-semibold">From ${service.price}</span>
                  <div className="flex items-center gap-1 text-sm text-charcoal/50">
                    <Clock size={14} />
                    {service.duration} min
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-3 text-sage text-sm font-medium group-hover:text-sage-600 transition-colors">
                  Learn more
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-semibold text-charcoal mb-10 text-center">
            Service Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category) => {
              const count = services.filter((s) => s.category === category.name).length
              return (
                <div
                  key={category.name}
                  className="bg-white rounded-2xl p-6"
                >
                  <span className="text-4xl font-heading text-sage/30 font-semibold">
                    {count}
                  </span>
                  <h3 className="text-lg font-heading font-semibold text-charcoal mt-2 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-charcoal/60 text-sm">{category.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sage text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            Not Sure Which Service Is Right for You?
          </h2>
          <p className="text-white/80 text-lg mb-6">
            Our therapists are happy to consult with you and recommend the perfect treatment for your needs.
          </p>
          <a
            href="tel:571-380-6868"
            className="inline-flex items-center bg-white text-sage px-8 py-3.5 rounded-full font-medium hover:bg-cream transition-colors"
          >
            Call 571-380-6868
          </a>
        </div>
      </section>
    </>
  )
}
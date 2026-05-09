import Link from 'next/link'
import { ArrowLeft, Clock, Check, ArrowRight } from 'lucide-react'
import { getServiceBySlug } from '@/lib/services'

export default function DeepTissuePage() {
  const service = getServiceBySlug('deep-tissue')!
  return (
    <>
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center text-charcoal/60 hover:text-sage transition-colors mb-6">
            <ArrowLeft className="mr-2" size={16} />All Services
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-sm bg-sage/10 text-sage px-3 py-1 rounded-full">{service.category}</span>
              <h1 className="text-4xl md:text-5xl font-heading font-semibold text-charcoal mt-4 mb-4">{service.name}</h1>
              <p className="text-charcoal/60 text-lg mb-6">{service.description}</p>
              <div className="flex items-center gap-6 text-charcoal/70">
                <div className="flex items-center gap-2"><Clock className="text-sage" size={18} /><span>{service.duration} min</span></div>
              </div>
            </div>
            <div className="bg-sage/10 rounded-2xl p-8 text-center">
              <p className="text-charcoal/60 mb-2">Starting from</p>
              <p className="text-5xl font-heading font-semibold text-sage mb-6">${service.price}</p>
              <Link href="/booking" className="inline-flex items-center justify-center bg-sage text-white px-8 py-3.5 rounded-full font-medium hover:bg-sage-600 transition-colors w-full">Book This Service</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-semibold text-charcoal mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-cream rounded-xl p-4">
                <Check className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                <span className="text-charcoal">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {service.addOns && service.addOns.length > 0 && (
        <section className="py-16 bg-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-semibold text-charcoal mb-8">Enhance Your Session</h2>
            <div className="space-y-4">
              {service.addOns.map((addon, index) => (
                <div key={index} className="flex items-center justify-between bg-white rounded-xl p-4">
                  <span className="font-medium text-charcoal">{addon.name}</span>
                  <span className="text-sage font-semibold">+${addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="py-16 bg-sage text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">Ready to Experience {service.name}?</h2>
          <p className="text-white/80 text-lg mb-6">Book your session today and begin your wellness journey.</p>
          <Link href="/booking" className="inline-flex items-center bg-white text-sage px-8 py-3.5 rounded-full font-medium hover:bg-cream transition-colors">Book Now<ArrowRight className="ml-2" size={18} /></Link>
        </div>
      </section>
    </>
  )
}
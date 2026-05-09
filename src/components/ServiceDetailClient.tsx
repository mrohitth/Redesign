/**
 * ServiceDetailClient — "use client" component that renders the right column
 * (image + pricing card) in the service detail page.
 * 
 * This exists because Next.js 16.2.6 (Turbopack) + generateStaticParams()
 * silently drops children of server-component divs during static HTML generation.
 * Wrapping in a client component avoids this RSC serialization issue.
 */

'use client'

import Link from 'next/link'

interface Service {
  slug: string
  name: string
  image?: string
  price: number
  duration: number
}

interface Props {
  service: Service
}

export default function ServiceDetailClient({ service }: Props) {
  return (
    <div className="space-y-6">
      <div className="relative h-64 rounded-2xl overflow-hidden bg-sage/20">
        <img
          src={`/Redesign/images/${service.slug}.jpg`}
          alt={service.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-sage/10 rounded-2xl p-6 text-center">
        <p className="text-charcoal/60 mb-1 text-sm">Starting from</p>
        <p className="text-4xl font-heading font-semibold text-sage mb-4">
          ${service.price}
        </p>
        <Link
          href="/booking"
          className="inline-flex items-center justify-center bg-sage text-white px-6 py-3 rounded-full font-medium hover:bg-sage-600 transition-colors w-full"
        >
          Book This Service
        </Link>
      </div>
    </div>
  )
}
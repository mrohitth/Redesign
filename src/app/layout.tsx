import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Miracle Hands Massage & Spa | Oasis Wellness Center of Virginia',
  description: 'Experience tranquility at Miracle Hands Massage & Spa in Centerville, VA. Licensed therapists offering Deep Tissue, Swedish, Hot Stone, Couples, Prenatal, and more. Open 7 days a week.',
  keywords: 'massage, spa, wellness, deep tissue, swedish, hot stone, couples massage, prenatal massage, Centerville VA',
  openGraph: {
    title: 'Miracle Hands Massage & Spa | Oasis Wellness Center of Virginia',
    description: 'Your journey to wellness begins here. Licensed therapists, 20+ services, 7 days a week.',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: './favicon.svg',
    shortcut: './favicon.svg',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Miracle Hands Massage & Spa',
  alternateName: 'Oasis Wellness Center of Virginia',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '14200G Centreville Square',
    addressLocality: 'Centerville',
    addressRegion: 'VA',
    postalCode: '20121',
    addressCountry: 'US',
  },
  telephone: '571-380-6868',
  email: 'Miraclehandsva@gmail.com',
  openingHours: ['Mo-Su 09:30-21:30'],
  priceRange: '$$',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 38.8951,
    longitude: -77.4314,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
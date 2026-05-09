import { Instagram } from 'lucide-react'

const posts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1544161515-1b1d2b0d6b2e?w=400&h=400&fit=crop',
    client: 'Priya M.',
    treatment: 'Deep Tissue Massage',
    rating: 5,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?w=400&h=400&fit=crop',
    client: 'David L.',
    treatment: 'Hot Stone Massage',
    rating: 5,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e57af79?w=400&h=400&fit=crop',
    client: 'Angela R.',
    treatment: 'Prenatal Massage',
    rating: 5,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=400&h=400&fit=crop',
    client: 'Jason T.',
    treatment: 'Swedish Massage',
    rating: 5,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=400&h=400&fit=crop',
    client: 'Sofia K.',
    treatment: 'Fire Cupping',
    rating: 5,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&h=400&fit=crop',
    client: 'Marcus W.',
    treatment: 'Sports Massage',
    rating: 5,
  },
]

export default function SocialFeed() {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-gold font-medium">
            As Seen On Instagram
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-charcoal mt-3 mb-4">
            Real Results, Real People
          </h2>
          <p className="text-charcoal/60 max-w-xl mx-auto">
            Real clients, real transformations. Every photo shared with consent — every story told in their own words.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={`${post.client} — ${post.treatment}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="flex gap-1 mb-1">
                  {[...Array(post.rating)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-gold fill-gold" viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-white font-medium text-sm">{post.client}</p>
                <p className="text-white/70 text-xs">{post.treatment}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/oasiswellnessva"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sage font-medium hover:text-sage-600 transition-colors"
          >
            <Instagram size={18} />
            Follow us @oasiswellnessva
          </a>
          <p className="text-charcoal/40 text-xs mt-2">
            Share your experience with{' '}
            <span className="font-medium text-charcoal/50">#OasisWellness</span>
          </p>
        </div>
      </div>
    </div>
  )
}
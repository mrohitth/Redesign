export interface Service {
  slug: string
  name: string
  category: string
  shortDescription: string
  description: string
  benefits: string[]
  duration: number // in minutes
  price: number
  addOns?: { name: string; price: number }[]
  relatedSlugs: string[]
  icon: string
  featured?: boolean
}

export const services: Service[] = [
  {
    slug: 'deep-tissue',
    name: 'Deep Tissue Massage',
    category: 'Therapeutic',
    shortDescription: 'Intense pressure targeting chronic muscle tension and pain.',
    description: 'Deep tissue massage uses firm pressure and slow strokes to reach deeper layers of muscle and fascia. Ideal for chronic aches, contractures, and postural problems. This treatment focuses on specific areas of tension and is particularly effective for those with chronic pain, limited mobility, or recovering from injuries.',
    benefits: [
      'Breaks up scar tissue',
      'Reduces chronic muscle tension',
      'Improves posture',
      'Relieves stiff neck and upper/lower back pain',
      'Promotes faster recovery from exercise',
    ],
    duration: 60,
    price: 90,
    addOns: [
      { name: 'Hot Towel Treatment', price: 15 },
      { name: 'Aromatherapy', price: 10 },
    ],
    relatedSlugs: ['swedish', 'trigger-point'],
    icon: 'hands',
    featured: true,
  },
  {
    slug: 'swedish',
    name: 'Swedish Massage',
    category: 'Relaxation',
    shortDescription: 'Classic relaxation massage with gentle, flowing strokes.',
    description: 'The Swedish massage is the most common and foundational massage technique. Using a series of gliding, kneading, and tapping strokes, it promotes relaxation, improves circulation, and relieves surface tension. Perfect for first-time spa visitors or those seeking overall stress relief.',
    benefits: [
      'Promotes relaxation and calm',
      'Improves blood circulation',
      'Reduces stress hormones',
      'Enhances skin tone',
      'Relieves muscle fatigue',
    ],
    duration: 60,
    price: 80,
    addOns: [
      { name: 'Scalp Massage', price: 15 },
      { name: 'Foot Reflexology', price: 20 },
    ],
    relatedSlugs: ['deep-tissue', 'hot-stone'],
    icon: 'feather',
    featured: true,
  },
  {
    slug: 'hot-stone',
    name: 'Hot Stone Massage',
    category: 'Specialty',
    shortDescription: 'Heated basalt stones melt away tension and restore balance.',
    description: 'Smooth, heated basalt stones are placed on key points of the body while warm oil is applied with long, gliding strokes. The heat penetrates deep into muscles, releasing chronic patterns of tension more effectively than traditional massage. A deeply restorative experience.',
    benefits: [
      'Deep muscle relaxation',
      'Improved circulation',
      'Balances nervous system',
      'Relieves pain from arthritis and fibromyalgia',
      'Promotes restful sleep',
    ],
    duration: 90,
    price: 120,
    addOns: [
      { name: 'Extended session (30min)', price: 40 },
      { name: 'Cold Stone finishing', price: 15 },
    ],
    relatedSlugs: ['swedish', 'deep-tissue'],
    icon: 'flame',
    featured: true,
  },
  {
    slug: 'couples',
    name: 'Couples Massage',
    category: 'Specialty',
    shortDescription: 'Share relaxation with a partner in our private couples suite.',
    description: 'Experience the ultimate in shared relaxation with our couples massage service. Two therapists work simultaneously in our private couples suite, using synchronized Swedish orDeep Tissue techniques. Perfect for anniversaries, honeymoons, or simply sharing the gift of wellness with someone special.',
    benefits: [
      'Shared wellness experience',
      'Private, intimate setting',
      'Synchronized relaxation',
      'Strengthens emotional connection',
      'Creates lasting memories',
    ],
    duration: 60,
    price: 160,
    addOns: [
      { name: 'Champagne service', price: 25 },
      { name: 'Chocolate covered strawberries', price: 18 },
    ],
    relatedSlugs: ['swedish', 'hot-stone'],
    icon: 'heart',
    featured: true,
  },
  {
    slug: 'prenatal',
    name: 'Prenatal Massage',
    category: 'Specialty',
    shortDescription: 'Gentle, nurturing massage designed for expecting mothers.',
    description: 'Specially designed for expecting mothers, prenatal massage uses side-lying positioning and gentle techniques to safely address the unique needs of pregnancy. Relieves common discomforts like lower back pain, swelling, and sciatica while promoting deep relaxation for both mother and baby.',
    benefits: [
      'Relieves back and hip pain',
      'Reduces swelling in legs and feet',
      'Alleviates sciatica discomfort',
      'Improves sleep quality',
      'Reduces anxiety and stress',
    ],
    duration: 60,
    price: 95,
    addOns: [
      { name: 'Belly butter application', price: 10 },
      { name: 'Foot soak with essential oils', price: 15 },
    ],
    relatedSlugs: ['swedish'],
    icon: 'baby',
    featured: true,
  },
  {
    slug: 'reflexology',
    name: 'Reflexology',
    category: 'Alternative',
    shortDescription: 'Precise pressure to specific points on feet, hands, and ears.',
    description: 'Based on the ancient principle that specific points on the feet, hands, and ears correspond to different body zones, reflexology applies precise pressure to these points to promote holistic wellness. This treatment is particularly effective for headaches, digestive issues, and stress-related conditions.',
    benefits: [
      'Reduces headaches and migraines',
      'Improves digestion',
      'Balances hormones',
      'Relieves plantar fasciitis',
      'Promotes overall relaxation',
    ],
    duration: 45,
    price: 65,
    addOns: [
      { name: 'Add foot massage', price: 20 },
      { name: 'Hand reflexology', price: 15 },
    ],
    relatedSlugs: ['swedish', 'trigger-point', 'tuina'],
    icon: 'footprints',
    featured: true,
  },
  {
    slug: 'trigger-point',
    name: 'Trigger Point Therapy',
    category: 'Therapeutic',
    shortDescription: 'Targeted pressure release for knotted muscles and referred pain.',
    description: 'Trigger point therapy focuses on identifying and releasing tight knots in muscles that cause referred pain—pain that radiates to other areas of the body. Using precise, sustained pressure, this treatment is highly effective for chronic headaches, TMJ, tennis elbow, and chronic back pain.',
    benefits: [
      'Releases muscle knots',
      'Reduces referred pain patterns',
      'Improves range of motion',
      'Relieves chronic headaches',
      'Addresses TMJ dysfunction',
    ],
    duration: 60,
    price: 85,
    addOns: [
      { name: 'Dry needling add-on', price: 25 },
      { name: 'Stretch protocol', price: 15 },
    ],
    relatedSlugs: ['deep-tissue', 'therapeutic'],
    icon: 'cross',
  },
  {
    slug: 'tuina',
    name: 'Tuina Massage',
    category: 'Alternative',
    shortDescription: 'Traditional Chinese therapeutic massage with pushing and pulling techniques.',
    description: 'Tuina (pronounced "twee-nah") is a Traditional Chinese Medicine therapeutic massage using rhythmic compressions, rolling, and stretching techniques along energy meridians. Unlike Western massage, Tuina works to balance the body\'s energy flow (Qi) and is particularly effective for chronic pain, stress, and internal disorders.',
    benefits: [
      'Balances body energy (Qi)',
      'Treats chronic pain conditions',
      'Improves joint mobility',
      'Strengthens immune system',
      'Addresses insomnia and fatigue',
    ],
    duration: 60,
    price: 90,
    addOns: [
      { name: 'Cupping add-on', price: 20 },
      { name: 'Moxibustion', price: 25 },
    ],
    relatedSlugs: ['reflexology', 'deep-tissue'],
    icon: 'wind',
  },
  {
    slug: 'therapeutic',
    name: 'Therapeutic Massage',
    category: 'Therapeutic',
    shortDescription: 'Medical-grade massage addressing specific chronic conditions.',
    description: 'Therapeutic massage is a clinical approach to addressing specific physical conditions with measurable outcomes. Our therapists assess your body and create a targeted treatment plan for chronic pain, injury recovery, postural correction, or managing conditions like fibromyalgia, arthritis, or sciatica.',
    benefits: [
      'Addresses specific medical conditions',
      'Evidence-based approach',
      'Reduces chronic pain',
      'Improves function and mobility',
      'Supports medical treatment',
    ],
    duration: 60,
    price: 100,
    addOns: [
      { name: 'Infrared heat therapy', price: 20 },
      { name: 'Electrotherapy add-on', price: 25 },
    ],
    relatedSlugs: ['deep-tissue', 'trigger-point', 'sports-massage'],
    icon: 'heart-pulse',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured)
}

export function getServicesByCategory(category: string): Service[] {
  return services.filter((s) => s.category === category)
}

export const serviceCategories = [
  { name: 'Therapeutic', description: 'Medical-grade treatments for chronic pain and injury' },
  { name: 'Relaxation', description: 'Classic techniques for stress relief and wellness' },
  { name: 'Specialty', description: 'Unique modalities for specific needs and experiences' },
]
import Link from 'next/link'
import { Shield, Heart, Sparkles, ArrowRight, Phone, Mail } from 'lucide-react'

const team = [
  {
    name: 'Linda Chen',
    credentials: 'LMT, CMMP, Certified Prenatal Massage Therapist',
    bio: 'Linda doesn\'t just locate pain — she asks what your life would feel like without it. With 12 years of prenatal and deep tissue experience, she creates space for clients who have been putting their own needs last. Her clients describe sessions as the first time someone actually listened to their body.',
    specialty: 'Prenatal & Deep Tissue',
  },
  {
    name: 'Marcus Williams',
    credentials: 'LMT, Sports Massage Certified, BCTP',
    bio: 'Marcus thinks in movement patterns, not just muscles. He spent years watching how athletes break down — and now helps them rebuild differently. His clients come back because he explains what he\'s doing and why, so each session builds on the last one.',
    specialty: 'Sports & Therapeutic Massage',
  },
  {
    name: 'Aiko Tanaka',
    credentials: 'LMT, Tuina Practitioner, Hot Stone Certified',
    bio: 'Trained in the quiet precision of Eastern healing arts, Aiko brings a different kind of attention to every session. Her hot stone work isn\'t just relaxation — clients report feeling "rewired" after, like their nervous system finally exhaled. She listens to your body\'s language before she speaks it.',
    specialty: 'Hot Stone & Tuina',
  },
]

const credentials = [
  { label: 'Virginia State Licensed Massage Therapists', icon: Shield },
  { label: 'NCBTMB Certified Members', icon: Shield },
  { label: 'Prenatal Massage Specialists', icon: Heart },
  { label: 'Sports Massage Certified', icon: Sparkles },
  { label: 'First Aid & CPR Certified', icon: Shield },
  { label: '20+ Combined Years of Experience', icon: Heart },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-charcoal mb-4">
            Finally — A Massage Built Around You
          </h1>
          <p className="text-charcoal/60 text-lg max-w-2xl">
            We built Miracle Hands because we got tired of places that treat your body like a generic checklist. Here, your story comes first.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sage font-medium text-sm uppercase tracking-wider">Our Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-charcoal mt-2 mb-6">
                Your Relief Is Not a Commodity
              </h2>
              <p className="text-charcoal/70 text-lg mb-6 leading-relaxed">
                "The natural healing force in each one of us is the greatest force in getting well." We take this Hippocratic ideal seriously — because we believe the body already knows how to heal. Our job is to get out of its way.
              </p>
              <p className="text-charcoal/70 text-lg mb-6 leading-relaxed">
                Every session starts with a conversation, not a table. We ask what brought you here, what "good" means for you, and where you feel most stuck. Then we work backward from there. No scripts. No guessing.
              </p>
              <p className="text-charcoal/70 text-lg leading-relaxed">
                By the time you leave, we want you to feel like someone finally heard what you were carrying — not just your muscles, but the weight of your day, your week, your life. That\'s the difference between a massage and a healing experience.
              </p>
            </div>
            <div className="bg-sage/10 rounded-3xl p-8 md:p-10">
              <blockquote className="text-2xl font-heading text-charcoal italic leading-relaxed mb-6">
                "The natural healing force in each one of us is the greatest force in getting well."
              </blockquote>
              <p className="text-charcoal/60 text-sm">— Hippocrates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-charcoal mb-4">
              What It Means to Be in Good Hands
            </h2>
            <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
              Certifications aren\'t just boxes for us — they\'re proof that someone earned the right to work on your body. Every therapist here meets Virginia\'s highest standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map((cred) => (
              <div key={cred.label} className="bg-white rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center flex-shrink-0">
                  <cred.icon className="w-6 h-6 text-sage" />
                </div>
                <p className="font-medium text-charcoal">{cred.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-charcoal mb-4">
              The People Who Make the Difference
            </h2>
            <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
              These aren\'t just therapists — they\'re listeners. They\'ve spent years learning how to hear what your body is saying.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-cream rounded-2xl overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-sage/20 to-sage/5 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-sage/20 flex items-center justify-center">
                    <span className="text-4xl font-heading text-sage/60">
                      {member.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs bg-sage/10 text-sage px-3 py-1 rounded-full">
                    {member.specialty}
                  </span>
                  <h3 className="text-xl font-heading font-semibold text-charcoal mt-3 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-sage font-medium mb-3">{member.credentials}</p>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sage text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            Ready to Feel What It\'s Like When Someone Actually Listens?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Book your first session and experience the difference between a transactional massage and one that actually changes how you feel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center bg-white text-sage px-8 py-3.5 rounded-full font-medium hover:bg-cream transition-colors"
            >
              Book Your Session
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <a
              href="tel:571-380-6868"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              <Phone className="mr-2" size={18} />
              571-380-6868
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
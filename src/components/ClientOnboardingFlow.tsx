import Link from 'next/link'
import { ArrowRight, Sparkles, Star } from 'lucide-react'

export default function ClientOnboardingFlow() {
  return (
    <div className="bg-gradient-to-br from-cream to-white rounded-3xl p-8 md:p-12 border border-sage/10">
      {/* First-Timer Banner */}
      <div className="mb-8 pb-8 border-b border-charcoal/10">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-sage/10 flex items-center justify-center flex-shrink-0">
            <Sparkles size={22} className="text-sage" />
          </div>
          <div>
            <span className="text-xs bg-sage/10 text-sage px-3 py-1 rounded-full uppercase tracking-wider font-medium">
              First time here?
            </span>
            <h3 className="text-xl md:text-2xl font-heading font-semibold text-charcoal mt-3 mb-2">
              Welcome. We&apos;ll take great care of you.
            </h3>
            <p className="text-charcoal/60 text-sm leading-relaxed">
              If you&apos;ve never been to Miracle Hands, we know you might have questions. Everything you need — from what to wear, to how long your session runs, to what to do afterward — is right here.
            </p>
          </div>
        </div>
        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <a
            href="#treatment-journey"
            className="inline-flex items-center justify-center bg-sage text-white px-6 py-3 rounded-full font-medium hover:bg-sage-600 transition-colors text-sm"
          >
            See What Your First Visit Looks Like
            <ArrowRight size={16} className="ml-2" />
          </a>
          <a
            href="tel:571-380-6868"
            className="inline-flex items-center justify-center border border-charcoal/20 text-charcoal px-6 py-3 rounded-full font-medium hover:bg-charcoal hover:text-white transition-colors text-sm"
          >
            Ask Us Anything — 571-380-6868
          </a>
        </div>
      </div>

      {/* Returning Client */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
          <Star size={22} className="text-gold" />
        </div>
        <div>
          <span className="text-xs bg-gold/10 text-gold px-3 py-1 rounded-full uppercase tracking-wider font-medium">
            Welcome back
          </span>
          <h3 className="text-xl font-heading font-semibold text-charcoal mt-3 mb-1">
            Good to see you again.
          </h3>
          <p className="text-charcoal/60 text-sm leading-relaxed">
            Book your favorite therapist and skip the intro — we already know your preferences.
          </p>
        </div>
      </div>
      <div className="mt-5">
        <Link
          href="/booking"
          className="inline-flex items-center bg-charcoal text-white px-6 py-3 rounded-full font-medium hover:bg-charcoal/80 transition-colors text-sm"
        >
          Book Your Next Session
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  )
}
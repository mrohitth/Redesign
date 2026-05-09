import { CheckCircle2, Clock, Heart } from 'lucide-react'

interface Step {
  icon: string
  name: string
  description: string
}

interface TreatmentJourneyProps {
  steps: Step[]
  postTreatmentTitle?: string
  postTreatmentNotes?: string[]
  duration?: number
}

export default function TreatmentJourney({
  steps,
  postTreatmentTitle = 'After Your Session',
  postTreatmentNotes = [
    'Drink plenty of water to help flush toxins released during the massage',
    'Avoid strenuous activity for 2–4 hours to let your muscles settle',
    'You may feel slight soreness for 24 hours — this is normal and a good sign',
    'Continue gentle stretching over the next 48 hours to extend your relief',
  ],
  duration = 60,
}: TreatmentJourneyProps) {
  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 border border-cream-200">
      {/* Section Header */}
      <div className="mb-10">
        <span className="text-xs uppercase tracking-widest text-sage font-medium">
          Your Experience
        </span>
        <h3 className="text-2xl md:text-3xl font-heading font-semibold text-charcoal mt-2">
          What to Expect
        </h3>
        <p className="text-charcoal/60 mt-2">
          Every session is thoughtfully structured around your comfort and results.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-5 items-start">
            {/* Step number circle */}
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center">
              <span className="text-sage font-semibold text-sm">{index + 1}</span>
            </div>
            <div className="flex-1 pt-1">
              <h4 className="font-heading font-semibold text-charcoal text-lg mb-1">
                {step.name}
              </h4>
              <p className="text-charcoal/60 text-sm leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Duration Note */}
      <div className="mt-8 p-4 bg-cream rounded-2xl flex items-center gap-3">
        <Clock size={18} className="text-sage flex-shrink-0" />
        <p className="text-sm text-charcoal/70">
          Your full session is approximately <span className="font-semibold text-charcoal">{duration} minutes</span> — no rushing, no clock-watching.
        </p>
      </div>

      {/* Post-Treatment Card */}
      <div className="mt-8 bg-sage/5 rounded-2xl p-6 border border-sage/10">
        <div className="flex items-start gap-3 mb-4">
          <Heart size={18} className="text-sage mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-heading font-semibold text-charcoal">{postTreatmentTitle}</h4>
          </div>
        </div>
        <ul className="space-y-2">
          {postTreatmentNotes.map((note, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-charcoal/70">
              <CheckCircle2 size={14} className="text-sage mt-0.5 flex-shrink-0" />
              {note}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
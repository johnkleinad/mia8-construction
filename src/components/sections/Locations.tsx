import { motion } from 'motion/react'
import { MapPin } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper'
import { Badge } from '../ui/Badge'

const LOCATION_CARDS = [
  {
    name: 'Whatcom County, WA',
    description:
      'Serving homeowners, property managers, and business owners throughout Whatcom County with quality construction services.',
    highlight: false,
  },
  {
    name: 'Skagit County, WA',
    description:
      'Residential and commercial construction services for communities across Skagit County — from Mount Vernon to Anacortes.',
    highlight: false,
  },
  {
    name: 'Point Roberts, WA',
    description:
      'An exclave community accessible by land only through Canada. We are one of the few contractors who reliably serve Point Roberts homes and businesses.',
    highlight: true,
  },
]

export function Locations() {
  return (
    <SectionWrapper id="locations" className="bg-light">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <Badge className="mb-6">Point Roberts Specialist</Badge>
          <h2 className="font-cinzel font-semibold text-4xl md:text-5xl text-dark-deeper mb-6">
            Proudly Serving Point Roberts
          </h2>
          <div className="w-10 h-0.5 bg-gold-deco mx-auto mb-6" aria-hidden="true" />
          <p className="font-josefin font-light text-base text-muted-dark leading-relaxed">
            Point Roberts is a unique community that deserves reliable, local contractors.
            We are proud to be a dependable choice for homeowners and business owners in
            this exceptional part of Washington State — providing the same quality and
            commitment we bring to all of Whatcom and Skagit Counties.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {LOCATION_CARDS.map(({ name, description, highlight }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className={`p-8 border ${
              highlight
                ? 'border-gold-deco bg-white shadow-md'
                : 'border-border-light bg-white'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin
                size={18}
                className={highlight ? 'text-gold-deco' : 'text-silver'}
                aria-hidden="true"
              />
              <h3 className="font-cinzel font-semibold text-lg text-dark-deeper">
                {name}
              </h3>
            </div>
            <p className="font-josefin font-light text-sm text-muted-dark leading-relaxed">
              {description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

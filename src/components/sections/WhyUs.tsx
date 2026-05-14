import { motion } from 'motion/react'
import { MapPin, Star, DollarSign } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper'

const PILLARS = [
  {
    icon: MapPin,
    title: 'Local Expertise',
    body: 'Proud to serve Whatcom County, Skagit County & Point Roberts, WA. We know the area, the climate, and the community — whether it’s a family home or a local business.',
  },
  {
    icon: Star,
    title: 'Quality Craftsmanship',
    body: 'Every project done right, on time. From single-room remodels to commercial build-outs, we stand behind our work with lasting results.',
  },
  {
    icon: DollarSign,
    title: 'Honest Pricing',
    body: 'Free estimates with no hidden fees. Transparent quotes so you always know what to expect.',
  },
]

export function WhyUs() {
  return (
    <SectionWrapper id="why-us" className="bg-dark">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="text-center mb-14"
      >
        <h2 className="font-cinzel font-semibold text-4xl md:text-5xl text-gold-deco mb-4">
          Why Mia8 Construction, Inc.
        </h2>
        <div className="w-10 h-0.5 bg-gold mx-auto" aria-hidden="true" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {PILLARS.map(({ icon: Icon, title, body }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            className="flex flex-col items-center text-center gap-5"
          >
            <div className="w-14 h-14 border border-gold flex items-center justify-center shrink-0">
              <Icon size={24} className="text-gold-deco" aria-hidden="true" />
            </div>
            <h3 className="font-cinzel font-semibold text-xl text-white">
              {title}
            </h3>
            <p className="font-josefin font-light text-base text-silver leading-relaxed">
              {body}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

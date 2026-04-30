import { motion } from 'motion/react'
import { SectionWrapper } from '../ui/SectionWrapper'
import { ServiceCard } from '../ui/ServiceCard'
import { services } from '../../data/services'

export function Services() {
  return (
    <SectionWrapper id="services" className="bg-light">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="text-center mb-14"
      >
        <h2 className="font-cinzel font-semibold text-4xl md:text-5xl text-dark-deeper mb-4">
          Our Services
        </h2>
        <div className="w-10 h-0.5 bg-gold-deco mx-auto" aria-hidden="true" />
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {services.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}

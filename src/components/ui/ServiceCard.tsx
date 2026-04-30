import { motion } from 'motion/react'
import type { Service } from '../../data/services'

interface ServiceCardProps {
  service: Service
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.imageUrl}
          alt={service.imageAlt}
          width={800}
          height={600}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 border-b-2 border-transparent group-hover:border-gold-deco transition-colors duration-300">
        <div className="flex items-center gap-2 mb-2">
          <Icon size={16} className="text-gold" aria-hidden="true" />
          <h3 className="font-cinzel text-lg text-dark-deeper leading-tight">
            {service.name}
          </h3>
        </div>
        <p className="font-josefin font-light text-sm text-muted-dark leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  )
}

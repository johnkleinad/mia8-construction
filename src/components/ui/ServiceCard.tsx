import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import type { Service } from '../../data/services'

interface ServiceCardProps {
  service: Service
  index: number
  className?: string
}

const PARALLAX_RANGE = 12

export function ServiceCard({ service, index, className = '' }: ServiceCardProps) {
  const Icon = service.icon
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${PARALLAX_RANGE}%`, `${PARALLAX_RANGE}%`],
  )

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`group bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full ${className}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden shrink-0">
        <motion.img
          src={service.imageUrl}
          alt={service.imageAlt}
          width={800}
          height={600}
          loading="lazy"
          style={{ y: imageY }}
          whileHover={{ scale: 1.05 }}
          transition={{ scale: { duration: 0.5 } }}
          className="absolute inset-x-0 -top-[15%] w-full h-[130%] object-cover will-change-transform"
        />
      </div>
      <div className="flex-1 flex flex-col p-5 border-b-2 border-transparent group-hover:border-gold-deco transition-colors duration-300">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="inline-flex items-center justify-center w-9 h-9 shrink-0 bg-gold-deco/10 text-gold-deco"
            aria-hidden="true"
          >
            <Icon size={18} strokeWidth={1.75} />
          </span>
          <h3 className="font-cinzel text-base text-dark-deeper leading-tight line-clamp-2 min-h-[2.5rem]">
            {service.name}
          </h3>
        </div>
        <p className="font-josefin font-light text-sm text-muted-dark leading-relaxed line-clamp-3 min-h-[3.75rem]">
          {service.description}
        </p>
      </div>
    </motion.div>
  )
}

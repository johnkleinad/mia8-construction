import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Phone, Mail } from 'lucide-react'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { PHONE, PHONE_HREF, EMAIL_HREF } from '../../lib/constants'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1601074231509-dce351c05199?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=ryunosuke-kikuno-d3vp0M7oT6c-unsplash.jpg'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section ref={sectionRef} className="relative min-h-dvh flex items-center justify-center bg-dark overflow-hidden">
      {/* Background image with parallax */}
      <motion.img
        src={HERO_IMAGE}
        alt=""
        aria-hidden="true"
        width={1600}
        height={900}
        style={{ y: imageY }}
        className="absolute inset-x-0 -top-[10%] w-full h-[120%] object-cover will-change-transform"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Badge className="mb-8">
            Whatcom County, WA · Point Roberts
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="font-cinzel font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
        >
          Built to Last.
          <br />
          <span className="text-gold-deco">Built for You.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="font-josefin font-light text-lg md:text-xl text-silver leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Roofing, siding, painting, flooring & decks — trusted contractors
          in Whatcom County and Point Roberts, WA.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href={PHONE_HREF} aria-label={`Call us at ${PHONE}`}>
            <Phone size={16} aria-hidden="true" />
            Call {PHONE}
          </Button>
          <a
            href={EMAIL_HREF}
            className="font-josefin font-light text-sm text-silver hover:text-gold-deco transition-colors tracking-wide underline underline-offset-4"
          >
            <Mail size={14} className="inline mr-1.5 align-middle" aria-hidden="true" />
            or email us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent mx-auto" />
      </motion.div>
    </section>
  )
}

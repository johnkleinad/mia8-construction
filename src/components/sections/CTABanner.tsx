import { motion } from 'motion/react'
import { Phone, Mail } from 'lucide-react'
import { Button } from '../ui/Button'
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from '../../lib/constants'

export function CTABanner() {
  return (
    <section
      className="bg-gradient-to-r from-dark to-dark-mid py-20 px-4 md:px-8 relative overflow-hidden"
      aria-label="Call to action"
    >
      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" aria-hidden="true" />

      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <h2 className="font-cinzel font-semibold text-4xl md:text-5xl text-gold-deco mb-4">
            Ready to Start Your Project?
          </h2>
          <div className="w-10 h-0.5 bg-gold mx-auto mb-8" aria-hidden="true" />

          <p className="font-josefin font-light text-lg text-silver mb-10">
            Call us for a free estimate on your home or commercial project — no hidden fees, no surprises.
          </p>

          <div className="flex flex-col items-center gap-5">
            <Button href={PHONE_HREF} aria-label={`Call us at ${PHONE}`} className="text-lg px-10 py-4">
              <Phone size={18} aria-hidden="true" />
              Call Now — {PHONE}
            </Button>
            <a
              href={EMAIL_HREF}
              className="flex items-center gap-2 font-josefin font-light text-sm text-silver hover:text-gold-deco transition-colors tracking-wide"
            >
              <Mail size={14} aria-hidden="true" />
              {EMAIL}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

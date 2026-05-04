import { Phone, Mail, MapPin } from 'lucide-react'
import { motion } from 'motion/react'
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from '../lib/constants'
import { services } from '../data/services'

export function OnePager() {
  return (
    <main className="min-h-dvh bg-dark flex flex-col overflow-hidden">
      {/* Header bar */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-muted-dark/40 shrink-0">
        <img src="/logo.svg" alt="Mia8 Construction, Inc." height={48} width={70} className="h-10 w-auto" />
        <a
          href={PHONE_HREF}
          className="flex items-center gap-2 font-josefin font-semibold text-sm text-white hover:text-gold-deco transition-colors"
          aria-label={`Call us at ${PHONE}`}
        >
          <Phone size={14} className="text-gold" aria-hidden="true" />
          {PHONE}
        </a>
      </header>

      {/* Main content — everything above fold */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 text-center gap-6">

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2 text-gold font-josefin font-semibold text-xs tracking-[0.2em] uppercase"
        >
          <MapPin size={12} aria-hidden="true" />
          Whatcom County, WA · Point Roberts
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="font-cinzel font-bold text-3xl md:text-4xl text-white leading-tight max-w-xl"
        >
          Your Local Contractor in
          <span className="text-gold-deco"> Whatcom County</span> &amp; Point Roberts
        </motion.h1>

        {/* Services grid */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="grid grid-cols-3 gap-4 w-full max-w-sm"
          role="list"
          aria-label="Our services"
        >
          {services.map(({ id, name, icon: Icon }) => (
            <div
              key={id}
              role="listitem"
              className="flex flex-col items-center gap-2 p-3 border border-muted-dark/50 hover:border-gold/40 transition-colors"
            >
              <Icon size={20} className="text-gold-deco" aria-hidden="true" />
              <span className="font-josefin font-light text-[11px] text-silver leading-tight text-center tracking-wide">
                {name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="flex flex-col items-center gap-3"
        >
          <a
            href={PHONE_HREF}
            className="flex items-center gap-3 px-8 py-4 bg-gold-deco text-dark font-cinzel font-bold text-lg tracking-wider hover:bg-gold transition-colors"
            aria-label={`Call us at ${PHONE}`}
          >
            <Phone size={18} aria-hidden="true" />
            {PHONE}
          </a>
          <a
            href={EMAIL_HREF}
            className="flex items-center gap-2 font-josefin font-light text-xs text-silver hover:text-gold-deco transition-colors tracking-wide"
          >
            <Mail size={12} aria-hidden="true" />
            {EMAIL}
          </a>
        </motion.div>

      </div>
    </main>
  )
}

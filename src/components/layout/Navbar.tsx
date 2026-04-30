import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Phone, Menu, X } from 'lucide-react'
import { COMPANY_NAME, PHONE, PHONE_HREF } from '../../lib/constants'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-dark/90 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 h-16 md:h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="font-cinzel font-bold text-xl text-gold-deco tracking-wider">
          {COMPANY_NAME}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-josefin font-light text-xs tracking-[0.18em] uppercase text-silver hover:text-gold-deco transition-colors duration-150"
            >
              {label}
            </a>
          ))}
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 px-5 py-2 border border-gold-deco text-gold-deco font-josefin font-semibold text-xs tracking-widest uppercase hover:bg-gold-deco hover:text-dark transition-colors duration-150"
            aria-label={`Call us at ${PHONE}`}
          >
            <Phone size={14} aria-hidden="true" />
            {PHONE}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-silver hover:text-gold-deco transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-dark border-t border-muted-dark px-4 pb-6 pt-4"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="block py-3 font-josefin text-sm tracking-[0.15em] uppercase text-silver hover:text-gold-deco border-b border-muted-dark/40 transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href={PHONE_HREF}
              className="mt-5 flex items-center justify-center gap-2 py-3 bg-gold-deco text-dark font-josefin font-semibold text-sm tracking-widest uppercase"
              aria-label={`Call us at ${PHONE}`}
            >
              <Phone size={16} aria-hidden="true" />
              {PHONE}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

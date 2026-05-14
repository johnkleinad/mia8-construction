import { Phone, Mail, MapPin } from 'lucide-react'
import { COMPANY_NAME, PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, LOCATIONS } from '../../lib/constants'
import { services } from '../../data/services'

export function Footer() {
  return (
    <footer className="bg-dark-deeper pt-16 pb-8" id="contact">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-muted-dark/40">

          {/* Services */}
          <div>
            <h3 className="font-cinzel font-semibold text-gold-deco text-sm tracking-[0.2em] uppercase mb-6">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.id} className="font-josefin font-light text-sm text-silver">
                  {s.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-cinzel font-semibold text-gold-deco text-sm tracking-[0.2em] uppercase mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-3 font-josefin font-light text-sm text-silver hover:text-gold-deco transition-colors"
                  aria-label={`Call us at ${PHONE}`}
                >
                  <Phone size={14} className="text-gold shrink-0" aria-hidden="true" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_HREF}
                  className="flex items-center gap-3 font-josefin font-light text-sm text-silver hover:text-gold-deco transition-colors"
                >
                  <Mail size={14} className="text-gold shrink-0" aria-hidden="true" />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-cinzel font-semibold text-gold-deco text-sm tracking-[0.2em] uppercase mb-6">
              Areas Served
            </h3>
            <ul className="space-y-2.5">
              {LOCATIONS.map((loc) => (
                <li key={loc} className="flex items-center gap-2 font-josefin font-light text-sm text-silver">
                  <MapPin size={12} className="text-gold shrink-0" aria-hidden="true" />
                  {loc}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <p className="mt-8 text-center font-josefin font-light text-xs text-muted-dark tracking-wide">
          © {new Date().getFullYear()} {COMPANY_NAME}. Residential & Commercial · Whatcom County, Skagit County & Point Roberts, WA. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

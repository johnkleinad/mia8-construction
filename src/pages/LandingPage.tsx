import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Hero } from '../components/sections/Hero'
import { Services } from '../components/sections/Services'
import { WhyUs } from '../components/sections/WhyUs'
import { Locations } from '../components/sections/Locations'
import { CTABanner } from '../components/sections/CTABanner'
import { ContactForm } from '../components/sections/ContactForm'

export function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Locations />
        <CTABanner />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

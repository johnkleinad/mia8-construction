import { SectionWrapper } from '../ui/SectionWrapper'

export function ContactForm() {
  return (
    <SectionWrapper id="contact-form" className="bg-dark">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h2 className="font-cinzel font-semibold text-4xl md:text-5xl text-gold-deco mb-4">
          Get in Touch
        </h2>
        <div className="w-10 h-0.5 bg-gold mx-auto mb-6" aria-hidden="true" />
        <p className="font-josefin font-light text-base text-silver leading-relaxed">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      <form
        className="max-w-2xl mx-auto flex flex-col gap-5"
        aria-label="Contact form"
        onSubmit={(e) => e.preventDefault()}
        noValidate
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className="font-josefin font-semibold text-xs text-silver tracking-[0.15em] uppercase">
            Name <span aria-hidden="true" className="text-gold">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            className="w-full px-4 py-3 bg-dark-mid border border-muted-dark/60 font-josefin font-light text-base text-white placeholder:text-muted-dark focus:outline-none focus:border-gold transition-colors duration-150"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-phone" className="font-josefin font-semibold text-xs text-silver tracking-[0.15em] uppercase">
            Phone Number <span aria-hidden="true" className="text-gold">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="(360) 000-0000"
            className="w-full px-4 py-3 bg-dark-mid border border-muted-dark/60 font-josefin font-light text-base text-white placeholder:text-muted-dark focus:outline-none focus:border-gold transition-colors duration-150"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-message" className="font-josefin font-semibold text-xs text-silver tracking-[0.15em] uppercase">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder="Describe your project or ask a question..."
            className="w-full px-4 py-3 bg-dark-mid border border-muted-dark/60 font-josefin font-light text-base text-white placeholder:text-muted-dark focus:outline-none focus:border-gold transition-colors duration-150 resize-y"
          />
        </div>

        <button
          type="submit"
          className="self-start flex items-center gap-2 px-8 py-3.5 bg-gold-deco text-dark font-josefin font-semibold text-sm tracking-widest uppercase hover:bg-gold transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
        >
          Send Message
        </button>
      </form>
    </SectionWrapper>
  )
}

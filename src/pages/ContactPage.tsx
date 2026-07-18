import { useState, type FormEvent } from 'react'
import { Button, LinkButton } from '@/components/ui/Button'
import { CtaBand, PageHero, Section, SectionHeading } from '@/components/ui/PageChrome'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { freeServices, site } from '@/data/site'

const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  site.address,
)}&z=16&output=embed`

export function ContactPage() {
  useDocumentTitle(`Contact Us — ${site.name}`)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '')
    const mobile = String(data.get('mobile') || '')
    const city = String(data.get('city') || '')
    const bill = String(data.get('bill') || '')
    const message = String(data.get('message') || '')

    const body = [
      `Name: ${name}`,
      `Mobile: ${mobile}`,
      `City / District: ${city}`,
      `Monthly Electricity Bill: ₹${bill}`,
      '',
      message,
    ].join('\n')

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      `Free Quote Request — ${name}`,
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
    setSubmitted(true)
    form.reset()
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get In Touch — We Are Ready to Help"
        description="Book a free site visit, get a quotation, or ask about subsidy and net metering. We serve six districts across Vidarbha."
      />

      <Section className="section-glow">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div className="surface-3d rounded-2xl p-6 sm:p-8">
            <SectionHeading
              eyebrow="Reach us"
              title={site.name}
              description={site.fullName}
            />

            <dl className="mt-8 divide-y divide-line">
              <div className="interactive-row-3d px-2 py-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Address
                </dt>
                <dd className="mt-2 text-forest-900">{site.address}</dd>
                <a
                  href={site.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-3d mt-4 inline-flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-2.5 text-sm font-semibold text-sun-600 hover:border-sun-500/40 hover:text-sun-500"
                >
                  <img
                    src="/google-maps-icon.png"
                    alt=""
                    className="h-7 w-7 object-contain"
                    aria-hidden
                  />
                  <span>Open in Google Maps</span>
                  <span aria-hidden>→</span>
                </a>
              </div>
              <div className="interactive-row-3d px-2 py-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Phone
                </dt>
                <dd className="mt-2 space-y-1">
                  {site.phones.map((p) => (
                    <a
                      key={p.href}
                      href={p.href}
                      className="block font-medium text-forest-900 hover:text-forest-600"
                    >
                      {p.label}
                    </a>
                  ))}
                </dd>
              </div>
              <div className="interactive-row-3d px-2 py-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  WhatsApp
                </dt>
                <dd className="mt-2">
                  <a
                    href={site.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-forest-900 hover:text-forest-600"
                  >
                    {site.whatsapp.label}
                  </a>
                </dd>
              </div>
              <div className="interactive-row-3d px-2 py-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Email
                </dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${site.email}`}
                    className="font-medium text-forest-900 hover:text-forest-600"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="interactive-row-3d px-2 py-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Service Areas
                </dt>
                <dd className="mt-2 text-forest-900">
                  {site.serviceAreas.join(' · ')}
                </dd>
              </div>
              <div className="flex gap-4 px-2 pt-5">
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-forest-800 hover:text-sun-600"
                >
                  Facebook
                </a>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-forest-800 hover:text-sun-600"
                >
                  Instagram
                </a>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href={site.phones[0].href} variant="primary">
                Call Now
              </LinkButton>
              <LinkButton
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="sun"
              >
                WhatsApp
              </LinkButton>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
              {freeServices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="surface-3d rounded-2xl p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold text-forest-950">
              Get Free Quote
            </h2>
            <p className="mt-2 text-sm text-muted">
              Share your details and we will get back to you with a free
              quotation and site visit option.
            </p>

            {submitted ? (
              <p
                className="mt-6 rounded-md bg-forest-50 px-4 py-3 text-sm text-forest-800"
                role="status"
              >
                Thanks — your email client should open with the quote request.
                You can also WhatsApp us directly.
              </p>
            ) : null}

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <Field label="Name" name="name" required autoComplete="name" />
              <Field
                label="Mobile Number"
                name="mobile"
                type="tel"
                required
                autoComplete="tel"
                pattern="[0-9+\s-]{10,15}"
              />
              <Field
                label="City / District"
                name="city"
                required
                placeholder="e.g. Wardha"
              />
              <Field
                label="Monthly Electricity Bill (₹)"
                name="bill"
                type="number"
                min="0"
                placeholder="e.g. 2500"
              />
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-forest-900"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="input-3d w-full rounded-lg border border-line bg-paper px-3.5 py-2.5 text-sm text-forest-900 outline-none placeholder:text-muted focus:border-forest-400"
                  placeholder="Tell us about your rooftop or questions…"
                />
              </div>
              <Button type="submit" variant="sun" size="lg" className="w-full sm:w-auto">
                Get Free Quote
              </Button>
            </form>
          </div>
        </div>
      </Section>

      <section className="section-glow border-t border-line bg-forest-50/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-sun-600">
                <span className="h-px w-6 bg-sun-500" aria-hidden />
                Our location
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-forest-950 sm:text-3xl">
                Find us on Google Maps
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {site.address}
              </p>
            </div>
            <LinkButton
              href={site.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="sun"
              className="shrink-0"
            >
              Get Directions ↗
            </LinkButton>
          </div>

          <div className="media-frame-3d overflow-hidden rounded-2xl bg-forest-100">
            <iframe
              src={MAP_EMBED_URL}
              title={`${site.name} location on Google Maps`}
              className="h-[360px] w-full border-0 sm:h-[440px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
  autoComplete,
  pattern,
  min,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  autoComplete?: string
  pattern?: string
  min?: string
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-forest-900">
        {label}
        {required ? <span className="text-sun-600"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        pattern={pattern}
        min={min}
        placeholder={placeholder}
        className="input-3d w-full rounded-lg border border-line bg-paper px-3.5 py-2.5 text-sm text-forest-900 outline-none placeholder:text-muted focus:border-forest-400"
      />
    </div>
  )
}

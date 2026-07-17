import { useState, type FormEvent, type ReactNode } from 'react'
import { site } from '@/data/site'
import { getWhatsAppUrl } from '@/lib/whatsapp'

export function HeroQuoteForm() {
  const [sending, setSending] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const name = String(data.get('name') || '').trim()
    const mobile = String(data.get('mobile') || '').trim()
    const city = String(data.get('city') || '').trim()
    const bill = String(data.get('bill') || '').trim()
    const message = String(data.get('message') || '').trim()

    const text = [
      `Namaste ${site.name}!`,
      ``,
      `*Free Quote Request*`,
      `Name: ${name}`,
      `Mobile: ${mobile}`,
      `City / District: ${city}`,
      bill ? `Monthly Electricity Bill: ₹${bill}` : null,
      message ? `Message: ${message}` : null,
      ``,
      `Please share a free quotation / site visit.`,
    ]
      .filter(Boolean)
      .join('\n')

    setSending(true)
    window.open(getWhatsAppUrl(text), '_blank', 'noopener,noreferrer')
    form.reset()
    setTimeout(() => setSending(false), 800)
  }

  return (
    <div className="hero-form depth-3d-card relative w-full overflow-hidden rounded-2xl">
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background:
            'linear-gradient(145deg, rgba(240,180,41,0.65), rgba(255,255,255,0.18) 38%, rgba(77,120,94,0.4))',
        }}
      />

      <div className="relative m-[1.5px] overflow-hidden rounded-[14px] bg-forest-950/92 backdrop-blur-xl">
        <div className="depth-3d-shine pointer-events-none absolute inset-0" />
        <div className="relative border-b border-white/10 px-4 py-3.5">
          <div
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{
              background:
                'radial-gradient(ellipse 80% 120% at 100% 0%, rgba(240,180,41,0.18), transparent 55%)',
            }}
          />
          <div className="relative flex items-center justify-between gap-2">
            <div>
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-sun-400">
                Instant quote
              </p>
              <h2 className="mt-0.5 font-display text-lg font-bold tracking-tight text-white">
                Get Free Quote
              </h2>
            </div>
            <span className="depth-3d-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/15 text-[#25D366] ring-1 ring-[#25D366]/30">
              <WhatsAppIcon className="h-4 w-4" />
            </span>
          </div>
        </div>

        <form className="relative space-y-2.5 px-4 py-3.5" onSubmit={handleSubmit}>
          <Field
            label="Full Name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            icon={<UserIcon />}
          />
          <Field
            label="Mobile"
            name="mobile"
            type="tel"
            required
            autoComplete="tel"
            pattern="[0-9+\s-]{10,15}"
            placeholder="10-digit number"
            icon={<PhoneIcon />}
          />

          <div className="grid grid-cols-2 gap-2.5">
            <Field
              label="City"
              name="city"
              required
              placeholder="Wardha"
              list="hero-cities"
              icon={<PinIcon />}
            />
            <Field
              label="Bill (₹)"
              name="bill"
              type="number"
              min="0"
              placeholder="2500"
              icon={<RupeeIcon />}
            />
          </div>

          <datalist id="hero-cities">
            {site.serviceAreas.map((area) => (
              <option key={area} value={area} />
            ))}
          </datalist>

          <div>
            <label
              htmlFor="hero-message"
              className="mb-1 block text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-forest-300"
            >
              Message
            </label>
            <textarea
              id="hero-message"
              name="message"
              rows={1}
              placeholder="Any question…"
              className="hero-form-input w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none transition-all placeholder:text-forest-400 focus:border-sun-500/60 focus:bg-white/8 focus:ring-2 focus:ring-sun-500/20"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#20bd5a] hover:shadow-[0_10px_28px_rgba(37,211,102,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 disabled:opacity-70"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <WhatsAppIcon className="relative h-4 w-4" />
            <span className="relative">
              {sending ? 'Opening…' : 'Send on WhatsApp'}
            </span>
          </button>
        </form>
      </div>
    </div>
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
  list,
  icon,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  autoComplete?: string
  pattern?: string
  min?: string
  placeholder?: string
  list?: string
  icon?: ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={`hero-${name}`}
        className="mb-1 block text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-forest-300"
      >
        {label}
        {required ? <span className="text-sun-400"> *</span> : null}
      </label>
      <div className="relative">
        {icon ? (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-forest-400">
            {icon}
          </span>
        ) : null}
        <input
          id={`hero-${name}`}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          pattern={pattern}
          min={min}
          placeholder={placeholder}
          list={list}
          className={`hero-form-input w-full rounded-lg border border-white/10 bg-white/5 py-2 text-sm text-white outline-none transition-all placeholder:text-forest-400 focus:border-sun-500/60 focus:bg-white/8 focus:ring-2 focus:ring-sun-500/20 ${
            icon ? 'pl-9 pr-3' : 'px-3'
          }`}
        />
      </div>
    </div>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.85 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function RupeeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M6 3h12M6 8h12M6 13l8.5 8M10 8c4 0 6 2 6 5s-2 5-6 5H6" />
    </svg>
  )
}

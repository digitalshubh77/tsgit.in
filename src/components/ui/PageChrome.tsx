import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { site } from '@/data/site'

type PageHeroProps = {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}

export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden border-b border-line bg-forest-950 text-white',
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 60% at 85% 10%, rgba(240,180,41,0.28), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 90%, rgba(77,120,94,0.5), transparent 50%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        {eyebrow ? (
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.18em] text-sun-400">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="animate-fade-up animate-delay-1 mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="animate-fade-up animate-delay-2 mt-4 max-w-2xl text-base leading-relaxed text-forest-200 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  )
}

type SectionProps = {
  children: ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn('py-12 sm:py-14 lg:py-16', className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sun-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-balance text-forest-950 sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-forest-800">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 80% at 100% 50%, rgba(240,180,41,0.22), transparent 55%)',
        }}
      />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 sm:py-14 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sun-400">
            Start today
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-balance text-white sm:text-3xl">
            Start Your Solar Journey Today
          </h2>
          <p className="mt-3 text-forest-100">
            Free Site Visit · Free Quotation · Free Electricity Bill Analysis ·
            Subsidy Guidance
          </p>
          <p className="mt-4 text-sm text-forest-200">
            Call{' '}
            <a
              href={site.phones[0].href}
              className="text-white underline-offset-2 hover:underline"
            >
              {site.phones[0].label}
            </a>
            {' / '}
            <a
              href={site.phones[1].href}
              className="text-white underline-offset-2 hover:underline"
            >
              {site.phones[1].label}
            </a>
            {' · '}
            WhatsApp{' '}
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline-offset-2 hover:underline"
            >
              {site.whatsapp.label}
            </a>
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-sun-500 px-6 py-3.5 text-sm font-semibold text-forest-950 transition-colors hover:bg-sun-400"
          >
            Book Free Site Visit
          </Link>
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-white/25 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}

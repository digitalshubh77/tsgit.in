import { Link } from 'react-router-dom'
import { HeroBackground } from '@/components/home/HeroBackground'
import { LinkButton, RouterLinkButton } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { Section, SectionHeading } from '@/components/ui/PageChrome'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import {
  freeServices,
  highlights,
  processSteps,
  services,
  site,
  subsidyRows,
  whyChoose,
} from '@/data/site'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2400&q=80'

const WHY_IMAGE =
  'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1400&q=80'

export function HomePage() {
  useDocumentTitle(`${site.name} — Complete Solar Solutions | Wardha & Vidarbha`)

  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[min(92svh,880px)] overflow-hidden bg-forest-950">
        <HeroBackground imageSrc={HERO_IMAGE} />

        <div className="relative mx-auto flex min-h-[min(92svh,880px)] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-2xl">
            <img
              src="/logo.jpeg"
              alt={site.name}
              className="hero-logo h-16 w-auto rounded-lg object-contain sm:h-20"
            />

            <p className="animate-fade-up animate-delay-1 mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sun-400 sm:text-xs">
              {site.fullName}
              <span className="mx-2 text-sun-400/40">·</span>
              {site.tagline}
            </p>

            <h1 className="animate-fade-up animate-delay-2 mt-5 font-display text-[clamp(1.85rem,4.5vw,3rem)] font-bold leading-[1.1] tracking-tight text-balance text-white">
              Powering Your Home & Business With Solar Energy
            </h1>

            <p className="animate-fade-up animate-delay-3 mt-5 max-w-lg text-base leading-relaxed text-forest-100/95 sm:text-lg">
              Complete rooftop solar across Vidarbha. Reduce your electricity
              bill with reliable, high-quality systems — design to net metering.
            </p>

            <div className="animate-fade-up animate-delay-4 mt-8 flex flex-wrap items-center gap-3">
              <RouterLinkButton
                to="/contact"
                variant="sun"
                size="lg"
                className="shadow-[0_12px_40px_rgba(224,155,18,0.35)] transition-transform hover:-translate-y-0.5"
              >
                Book Free Site Visit
              </RouterLinkButton>
              <LinkButton
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/18"
              >
                WhatsApp Us
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* Trust metrics */}
      <section className="relative border-b border-line bg-white">
        <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-sun-500 to-transparent" />
        <div className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 80}
              className="border-b border-line sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:[&:nth-child(4n)]:border-r-0"
            >
              <div className="group px-6 py-9 transition-colors hover:bg-forest-50/80 sm:px-8">
                <p className="font-display text-4xl font-bold tracking-tight text-forest-900 transition-transform duration-300 group-hover:-translate-y-0.5">
                  {item.value}
                </p>
                <p className="mt-2 text-sm font-semibold tracking-wide text-forest-800">
                  {item.label}
                </p>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why choose */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-xl bg-forest-100">
              <img
                src={WHY_IMAGE}
                alt="Solar panels on a residential rooftop"
                className="aspect-[5/4] w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                loading="lazy"
              />
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-4 border-b border-line pb-4">
              <p className="font-display text-2xl font-bold text-forest-950">
                Since {site.since}
              </p>
              <p className="text-sm text-muted">
                {site.experience} years in solar
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Why TSGIT"
              title="Trusted solar partner for homes & businesses"
              description="MNRE-guided rooftop solar with a customer-first approach — from design and installation to maintenance and net metering."
            />
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {whyChoose.map((item) => (
                <li key={item}>
                  <div className="flex items-center gap-4 py-3.5 transition-all duration-300 hover:translate-x-1 hover:bg-forest-50/80">
                    <span
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sun-500/15 text-sun-600"
                      aria-hidden
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2 6.2L4.6 9L10 3"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[0.95rem] font-medium text-forest-900 sm:text-base">
                      {item}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <RouterLinkButton to="/about" variant="outline" className="mt-8">
              About {site.name}
            </RouterLinkButton>
          </Reveal>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-forest-950 text-white">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sun-400">
                What we do
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-balance sm:text-3xl">
                Complete solar solutions under one roof
              </h2>
              <p className="mt-3 text-base leading-relaxed text-forest-200 sm:text-lg">
                From first site visit to net metering — design, supply,
                installation, and ongoing support.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex shrink-0 items-center gap-2 self-start text-sm font-semibold text-sun-400 transition-colors hover:text-sun-300 sm:self-auto"
            >
              View all services
              <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 border-t border-white/10">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 60}>
              <div className="border-b border-white/10">
                <Link
                  to="/services"
                  className="group grid gap-2 py-6 transition-colors sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:gap-6 sm:py-7"
                >
                  <span className="font-display text-sm font-semibold text-sun-500/80 transition-colors group-hover:text-sun-400">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <span className="font-display text-xl font-semibold text-white transition-colors group-hover:text-sun-400 sm:text-2xl">
                      {service.title}
                    </span>
                    <p className="mt-1 text-sm text-forest-300 sm:hidden">
                      {service.short}
                    </p>
                  </div>
                  <span className="hidden items-center gap-3 text-sm text-forest-300 sm:flex">
                    {service.short}
                    <span
                      className="translate-x-0 text-sun-400 opacity-0 transition-all duration-300 group-hover:translate-x-1.5 group-hover:opacity-100"
                      aria-hidden
                    >
                      →
                    </span>
                  </span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section>
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="How it works"
              title="Simple 5-step installation"
              description={`${site.timeline} after material delivery and approvals.`}
            />
            <Link
              to="/process"
              className="inline-flex items-center gap-2 self-start text-sm font-semibold text-forest-800 transition-colors hover:text-sun-600 sm:self-auto"
            >
              See full process
              <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-0 border-t border-line sm:grid-cols-5">
          {processSteps.map((step, i) => (
            <Reveal
              key={step.step}
              delay={i * 70}
              className={
                i < processSteps.length - 1
                  ? 'border-b border-line sm:border-b-0 sm:border-r'
                  : ''
              }
            >
              <div className="px-0 py-8 sm:px-4 sm:py-10">
                <span className="font-display text-3xl font-bold text-sun-500/90">
                  {String(step.step).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold text-forest-950 sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-3">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Subsidy */}
      <Section className="bg-forest-50/90">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="PM Surya Ghar"
              title="Government subsidy up to ₹78,000 for home solar"
              description="Under PM Surya Ghar: Muft Bijli Yojana, eligible homeowners get direct subsidy in their bank account."
            />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              For residential systems only. We handle portal application,
              documentation, and DISCOM approval.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <RouterLinkButton to="/subsidy" variant="primary">
                Learn about subsidy
              </RouterLinkButton>
              <LinkButton
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                Ask your amount
              </LinkButton>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="overflow-hidden rounded-xl bg-forest-950 shadow-[0_24px_60px_rgba(17,28,22,0.18)] transition-transform duration-500 hover:-translate-y-1">
              <div className="border-b border-white/10 px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sun-400">
                  Subsidy amounts
                </p>
                <p className="mt-1 text-sm text-forest-300">
                  Direct benefit for eligible homes
                </p>
              </div>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10 text-forest-300">
                    <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider">
                      System
                    </th>
                    <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider">
                      Subsidy
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {subsidyRows.map((row) => (
                    <tr
                      key={row.size}
                      className="border-b border-white/8 last:border-0"
                    >
                      <td className="px-6 py-5 text-base font-medium text-white">
                        {row.size}
                      </td>
                      <td className="px-6 py-5 font-display text-xl font-bold text-sun-400 sm:text-2xl">
                        {row.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-forest-900">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 70% 80% at 100% 0%, rgba(240,180,41,0.2), transparent 55%), radial-gradient(ellipse 40% 50% at 0% 100%, rgba(77,120,94,0.35), transparent 50%)',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sun-400">
                Getting started is free
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl">
                Start Your Solar Journey Today
              </h2>
              <p className="mt-4 text-base leading-relaxed text-forest-100 sm:text-lg">
                No upfront cost to begin. Our team helps you choose the right
                system size and claim every eligible benefit.
              </p>
            </div>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {freeServices.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-sun-500 pl-4 text-sm font-medium text-white transition-transform duration-300 hover:translate-x-1 sm:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-forest-200">
                Call{' '}
                <a
                  href={site.phones[0].href}
                  className="font-semibold text-white underline-offset-2 hover:underline"
                >
                  {site.phones[0].label}
                </a>
                {' / '}
                <a
                  href={site.phones[1].href}
                  className="font-semibold text-white underline-offset-2 hover:underline"
                >
                  {site.phones[1].label}
                </a>
              </p>
              <div className="flex flex-wrap gap-3">
                <RouterLinkButton
                  to="/contact"
                  variant="sun"
                  size="lg"
                  className="transition-transform hover:-translate-y-0.5"
                >
                  Book Free Site Visit
                </RouterLinkButton>
                <LinkButton
                  href={site.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  className="border border-white/25 bg-transparent text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
                >
                  WhatsApp Us
                </LinkButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

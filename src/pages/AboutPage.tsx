import { CtaBand, PageHero, Section, SectionHeading } from '@/components/ui/PageChrome'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { site, whyChoose } from '@/data/site'

export function AboutPage() {
  useDocumentTitle(`About Us — ${site.name}`)

  const facts = [
    { label: 'Year Started', value: String(site.since) },
    { label: 'Experience', value: `${site.experience} years in solar` },
    { label: 'Projects', value: 'Residential & commercial portfolio' },
    { label: 'Head Office', value: site.shortAddress },
    { label: 'Service Area', value: site.serviceAreas.join(', ') },
  ]

  return (
    <>
      <PageHero
        eyebrow="About us"
        title={`About ${site.name} — Your Trusted Solar Partner Since ${site.since}`}
        description={`${site.fullName} is a solar energy solutions company based in Mhasala, Wardha, Maharashtra.`}
      />

      <Section className="section-glow">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="surface-3d self-center rounded-2xl p-6 sm:p-8">
            <p className="text-lg leading-relaxed text-forest-900 sm:text-xl">
              Since {site.since}, we have been helping homes and businesses
              across Vidarbha switch to clean and affordable solar power.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              With {site.experience} years of experience in the solar industry
              and a growing portfolio of residential and commercial solar
              projects, our team delivers complete solutions — from system
              design and installation to maintenance and net metering support.
              We follow MNRE guidelines in all our installations and always put
              our customers first.
            </p>
          </div>
          <div className="media-frame-3d overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1000&q=80"
              alt="Solar farm panels catching sunlight"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-forest-50/80">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="surface-3d rounded-2xl border-l-4 border-l-sun-500 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sun-600">
              Mission
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-forest-950">
              Our Mission
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {site.mission}
            </p>
          </div>
          <div className="surface-3d rounded-2xl border-l-4 border-l-forest-600 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sun-600">
              Vision
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-forest-950">
              Our Vision
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {site.vision}
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="At a glance" title="Quick Facts" />
        <dl className="surface-3d mt-10 divide-y divide-line overflow-hidden rounded-2xl">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="interactive-row-3d grid gap-2 px-5 py-5 sm:grid-cols-[14rem_1fr] sm:gap-8 sm:px-7"
            >
              <dt className="text-sm font-semibold uppercase tracking-wider text-muted">
                {fact.label}
              </dt>
              <dd className="text-base text-forest-900 sm:text-lg">{fact.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-sm italic text-muted">
          Founder name and photo will be added once provided by the client.
        </p>
      </Section>

      <Section className="section-glow border-t border-line bg-white">
        <SectionHeading eyebrow="What sets us apart" title="Key Strengths" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {whyChoose.map((item) => (
            <li
              key={item}
              className="surface-3d flex items-start gap-3 rounded-xl p-4 text-forest-900"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sun-500" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  )
}

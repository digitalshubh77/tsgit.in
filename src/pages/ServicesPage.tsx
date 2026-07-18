import { CtaBand, PageHero, Section, SectionHeading } from '@/components/ui/PageChrome'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { services, site } from '@/data/site'

export function ServicesPage() {
  useDocumentTitle(`Our Services — ${site.name}`)

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Complete Solar Solutions — Design to Commissioning"
        description="Residential, commercial, and industrial solar — plus maintenance and full net metering support."
      />

      <Section className="section-glow">
        <ol className="grid gap-5">
          {services.map((service, index) => (
            <li
              key={service.slug}
              className="surface-3d group grid items-start gap-4 rounded-2xl p-5 sm:grid-cols-[4rem_1fr] sm:gap-6 sm:p-6"
            >
              <span className="number-disc-3d flex h-14 w-14 items-center justify-center rounded-xl bg-forest-900 font-display text-xl font-bold text-sun-400 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-forest-950">
                  {service.title}
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="bg-forest-50/80">
        <SectionHeading
          eyebrow="Shared details"
          title="Warranty, Timeline & Pricing"
          description="Common details that apply across our solar installations."
        />
        <dl className="mt-7 grid items-start gap-4 sm:grid-cols-3">
          <div className="surface-3d rounded-2xl p-5">
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-sun-600">
              Warranty
            </dt>
            <dd className="mt-2 text-base leading-relaxed text-forest-900">
              Solar panel and inverter warranty as per company policy.
              Installation workmanship as per MNRE guidelines.
            </dd>
          </div>
          <div className="surface-3d rounded-2xl p-5">
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-sun-600">
              Timeline
            </dt>
            <dd className="mt-2 text-base leading-relaxed text-forest-900">
              {site.timeline} after material delivery and approvals.
            </dd>
          </div>
          <div className="surface-3d rounded-2xl p-5">
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-sun-600">
              Starting Price
            </dt>
            <dd className="mt-2 text-base leading-relaxed text-forest-900">
              {site.startingPrice} onwards for 1 kW (depending on brand and site
              conditions).
            </dd>
          </div>
        </dl>
      </Section>

      <CtaBand />
    </>
  )
}

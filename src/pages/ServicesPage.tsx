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

      <Section>
        <ol className="space-y-0 divide-y divide-line border-y border-line">
          {services.map((service, index) => (
            <li key={service.slug} className="grid gap-4 py-10 sm:grid-cols-[5rem_1fr] sm:gap-8">
              <span className="font-display text-3xl font-bold text-sun-500">
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
        <dl className="mt-10 grid gap-8 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-sun-600">
              Warranty
            </dt>
            <dd className="mt-2 text-base leading-relaxed text-forest-900">
              Solar panel and inverter warranty as per company policy.
              Installation workmanship as per MNRE guidelines.
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-sun-600">
              Timeline
            </dt>
            <dd className="mt-2 text-base leading-relaxed text-forest-900">
              {site.timeline} after material delivery and approvals.
            </dd>
          </div>
          <div>
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

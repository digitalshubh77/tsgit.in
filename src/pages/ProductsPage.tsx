import { CtaBand, PageHero, Section, SectionHeading } from '@/components/ui/PageChrome'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { panelBrands, site } from '@/data/site'

export function ProductsPage() {
  useDocumentTitle(`Products & Brands — ${site.name}`)

  return (
    <>
      <PageHero
        eyebrow="Products & brands"
        title="Quality Indian Brands, Built to Last"
        description="We supply and install Made-in-India solar panels from leading manufacturers — with clear warranty terms on every quotation."
      />

      <Section className="section-glow">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="surface-3d rounded-2xl p-5 sm:p-6">
            <SectionHeading
              eyebrow="Solar panels"
              title="Indian-made panels"
              description="Leading brands such as Tata Power Solar, Adani Solar, and Waaree Energies. Final brand selection is confirmed based on site, subsidy eligibility, and your budget."
            />
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {panelBrands.map((brand) => (
                <li key={brand} className="interactive-row-3d flex items-center gap-3 px-3 py-4 font-display text-xl font-semibold text-forest-900">
                  <span className="h-2 w-2 rounded-full bg-sun-500 shadow-[0_0_0_5px_rgba(224,155,18,0.12)]" />
                  <span>{brand}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">
              Brand list to be confirmed by client before final publishing.
            </p>
          </div>
          <div className="media-frame-3d overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80"
              alt="Close-up of solar panel modules"
              className="h-full min-h-[280px] w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-forest-50/80">
        <div className="grid items-start gap-7 sm:grid-cols-2">
          <div className="surface-3d rounded-2xl p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sun-600">
              Inverters
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-forest-950">
              Inverter brands
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Inverter brand names will be listed here once confirmed by the
              client. We recommend models suited to your load, grid conditions,
              and system size.
            </p>
          </div>
          <div className="surface-3d rounded-2xl p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sun-600">
              Batteries
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-forest-950">
              For off-grid systems
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Battery brand options apply for off-grid and hybrid systems. Final
              brands to be confirmed by the client and shown with your quotation.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Warranty" title="What you receive" />
        <ul className="mt-8 grid max-w-4xl gap-4 text-base text-forest-900 sm:text-lg">
          <li className="surface-3d flex items-start gap-3 rounded-xl p-4">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sun-500" />
            Solar panel and inverter warranty as per company policy
          </li>
          <li className="surface-3d flex items-start gap-3 rounded-xl p-4">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sun-500" />
            Installation workmanship as per MNRE guidelines
          </li>
          <li className="surface-3d flex items-start gap-3 rounded-xl p-4">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sun-500" />
            Full warranty details are given with your quotation
          </li>
        </ul>
      </Section>

      <CtaBand />
    </>
  )
}

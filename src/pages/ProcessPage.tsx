import { CtaBand, PageHero, Section, SectionHeading } from '@/components/ui/PageChrome'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { processSteps, site } from '@/data/site'

export function ProcessPage() {
  useDocumentTitle(`Installation Process — ${site.name}`)

  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Our Simple 5-Step Installation Process"
        description={`From first site visit to commissioning — a clear path to your solar plant. Total timeline: ${site.timeline} after material delivery and approvals.`}
      />

      <Section>
        <ol className="relative space-y-0">
          <div
            className="absolute left-[1.15rem] top-3 bottom-3 hidden w-px bg-line sm:block"
            aria-hidden
          />
          {processSteps.map((step) => (
            <li
              key={step.step}
              className="relative grid gap-4 py-8 sm:grid-cols-[3rem_1fr] sm:gap-8 sm:py-10"
            >
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-forest-900 font-display text-sm font-bold text-white">
                {step.step}
              </div>
              <div className="border-b border-line pb-8 sm:border-0 sm:pb-0">
                <h2 className="font-display text-2xl font-bold tracking-tight text-forest-950">
                  Step {step.step}: {step.title}
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-4 rounded-xl bg-forest-900 px-6 py-8 text-white sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sun-400">
            Total timeline
          </p>
          <p className="mt-2 font-display text-2xl font-bold sm:text-3xl">
            {site.timeline}
          </p>
          <p className="mt-2 text-forest-200">
            After material delivery and approvals are complete.
          </p>
        </div>
      </Section>

      <Section className="bg-forest-50/80">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80"
              alt="Technician installing solar panels"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Safety first"
              title="Installed to MNRE guidelines"
              description="Trained technicians handle panels, inverter, mounting structure, and electrical connections following safety standards — so your plant is ready for long-term generation."
            />
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  )
}

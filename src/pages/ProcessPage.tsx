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

      <Section className="section-glow">
        <ol className="relative space-y-0">
          <div
            className="absolute left-[1.15rem] top-3 bottom-3 hidden w-px bg-line sm:block"
            aria-hidden
          />
          {processSteps.map((step) => (
            <li
              key={step.step}
              className="surface-3d relative mb-4 grid items-start gap-4 rounded-2xl p-5 sm:grid-cols-[3rem_1fr] sm:gap-6 sm:p-6"
            >
              <div className="number-disc-3d relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-forest-900 font-display text-sm font-bold text-sun-400">
                {step.step}
              </div>
              <div>
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

        <div className="surface-3d-dark mt-7 rounded-2xl px-5 py-6 text-white sm:px-6">
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
        <div className="grid items-center gap-7 lg:grid-cols-2">
          <div className="media-frame-3d overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80"
              alt="Technician installing solar panels"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="surface-3d rounded-2xl p-5 sm:p-6">
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

import { LinkButton } from '@/components/ui/Button'
import { CtaBand, PageHero, Section, SectionHeading } from '@/components/ui/PageChrome'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { site, subsidyRows } from '@/data/site'

const points = [
  'The subsidy is only for residential (home) solar systems.',
  'Subsidy money comes directly to your bank account after installation and inspection.',
  'Only government-approved, Made-in-India panels qualify for subsidy.',
  'We assist with the complete portal application, documentation, and DISCOM approval.',
]

export function SubsidyPage() {
  useDocumentTitle(`Solar Subsidy — ${site.name}`)

  return (
    <>
      <PageHero
        eyebrow="PM Surya Ghar: Muft Bijli Yojana"
        title="Government Subsidy for Home Solar — Up to ₹78,000"
        description="The Government of India gives direct subsidy for rooftop solar under the PM Surya Ghar scheme."
      />

      <Section className="section-glow">
        <SectionHeading
          eyebrow="Subsidy table"
          title="How much can you get?"
          description="Direct benefit amounts for eligible residential rooftop systems."
        />
        <div className="surface-3d mt-7 overflow-hidden rounded-2xl">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-forest-950 text-white">
                <th className="px-6 py-5 text-sm font-semibold sm:text-base">
                  System Size
                </th>
                <th className="px-6 py-5 text-sm font-semibold sm:text-base">
                  Subsidy Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {subsidyRows.map((row, i) => (
                <tr
                  key={row.size}
                  className={`interactive-row-3d ${i % 2 === 0 ? 'bg-white/90' : 'bg-forest-50/70'}`}
                >
                  <td className="px-6 py-5 text-base font-medium text-forest-900 sm:text-lg">
                    {row.size}
                  </td>
                  <td className="px-6 py-5 font-display text-xl font-bold text-sun-600 sm:text-2xl">
                    {row.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <section className="relative overflow-hidden bg-forest-950 text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 90% 20%, rgba(240,180,41,0.16), transparent 32%), radial-gradient(circle at 0% 100%, rgba(77,120,94,0.4), transparent 36%)',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sun-400">
            Good to know
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Important Points
          </h2>
          <ul className="mt-7 grid max-w-4xl items-start gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <li
                key={point}
                className="surface-3d-dark flex items-start gap-3 rounded-xl p-4 text-base leading-relaxed text-forest-100 sm:text-lg"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sun-400" />
                {point}
              </li>
            ))}
          </ul>
          <div className="surface-3d-dark mt-7 flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <p className="text-lg text-white">Want to know your exact subsidy?</p>
            <LinkButton
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="sun"
              size="lg"
            >
              Call / WhatsApp {site.whatsapp.label}
            </LinkButton>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

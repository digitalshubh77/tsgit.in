import { useState } from 'react'
import { CtaBand, PageHero, Section } from '@/components/ui/PageChrome'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { faqs, site } from '@/data/site'
import { cn } from '@/lib/utils'

export function FaqPage() {
  useDocumentTitle(`FAQ — ${site.name}`)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Clear answers about cost, subsidy, timeline, warranty, and service areas."
      />

      <Section className="section-glow">
        <div className="mx-auto grid max-w-3xl gap-4">
          {faqs.map((item, index) => {
            const open = openIndex === index
            return (
              <div
                key={item.q}
                className={cn(
                  'surface-3d overflow-hidden rounded-2xl',
                  open && 'border-sun-500/50 shadow-[0_24px_55px_rgba(17,28,22,0.12)]',
                )}
              >
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <span className="font-display text-lg font-semibold text-forest-950 sm:text-xl">
                    {item.q}
                  </span>
                  <span
                    className={cn(
                      'number-disc-3d mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-white text-sm font-bold text-forest-800 transition-all',
                      open && 'rotate-45 border-forest-900 bg-forest-900 text-sun-400',
                    )}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={cn(
                    'grid transition-[grid-template-rows] duration-300',
                    open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-line/70 px-5 pb-6 pt-5 text-base leading-relaxed text-muted sm:px-6 sm:pr-16">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      <CtaBand />
    </>
  )
}

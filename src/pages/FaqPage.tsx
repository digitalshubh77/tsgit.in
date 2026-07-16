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

      <Section>
        <div className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
          {faqs.map((item, index) => {
            const open = openIndex === index
            return (
              <div key={item.q}>
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 py-5 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <span className="font-display text-lg font-semibold text-forest-950 sm:text-xl">
                    {item.q}
                  </span>
                  <span
                    className={cn(
                      'mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-sm font-bold text-forest-800 transition-transform',
                      open && 'rotate-45 bg-forest-900 text-white',
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
                    <p className="pb-5 pr-10 text-base leading-relaxed text-muted">
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

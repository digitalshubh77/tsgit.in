import { useEffect, useMemo, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type CountUpProps = {
  value: string | number
  className?: string
  durationMs?: number
}

type Parsed = {
  prefix: string
  end: number
  suffix: string
  useCommas: boolean
}

function parseValue(value: string | number): Parsed | null {
  const raw = String(value)
  const match = raw.match(/^(.*?)(\d{1,3}(?:,\d{3})*|\d+)(.*)$/)
  if (!match) return null

  const [, prefix, numStr, suffix] = match
  const end = Number(numStr.replace(/,/g, ''))
  if (!Number.isFinite(end)) return null

  return {
    prefix,
    end,
    suffix,
    useCommas: numStr.includes(','),
  }
}

function formatNumber(n: number, useCommas: boolean) {
  const rounded = Math.round(n)
  return useCommas ? rounded.toLocaleString('en-IN') : String(rounded)
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3
}

/** Counts from 0 to the target number once when first scrolled into view. */
export function CountUp({ value, className, durationMs = 1400 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const parsed = useMemo(() => parseValue(value), [value])
  const [display, setDisplay] = useState(() =>
    parsed
      ? `${parsed.prefix}0${parsed.suffix}`
      : String(value),
  )
  const started = useRef(false)

  useEffect(() => {
    if (!parsed) {
      setDisplay(String(value))
      return
    }

    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const run = () => {
      if (started.current) return
      started.current = true

      if (prefersReduced) {
        setDisplay(
          `${parsed.prefix}${formatNumber(parsed.end, parsed.useCommas)}${parsed.suffix}`,
        )
        return
      }

      const start = performance.now()

      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / durationMs)
        const current = parsed.end * easeOutCubic(t)
        setDisplay(
          `${parsed.prefix}${formatNumber(current, parsed.useCommas)}${parsed.suffix}`,
        )
        if (t < 1) requestAnimationFrame(tick)
      }

      requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run()
          observer.disconnect()
        }
      },
      { threshold: 0.35, rootMargin: '0px 0px -24px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [parsed, value, durationMs])

  return (
    <span ref={ref} className={cn(className)} aria-label={String(value)}>
      {display}
    </span>
  )
}

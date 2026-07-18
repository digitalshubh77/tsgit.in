import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  variant?: 'up' | 'left' | 'right' | 'scale' | 'blur'
}

/** Fade/slide in when scrolled into view */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = 'up',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'reveal-base',
        `reveal-${variant}`,
        visible && 'reveal-visible',
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

import { useEffect, useState } from 'react'
import { site } from '@/data/site'

const TILT_SELECTOR =
  '.surface-3d, .surface-3d-dark, .home-metric-3d, .home-step-3d, .home-service-3d, .media-frame-3d'

export function ExperienceLayer() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion) {
      setLoading(false)
    } else {
      const timer = window.setTimeout(() => setLoading(false), 1050)
      return () => window.clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!finePointer.matches) return

    const root = document.documentElement
    let frame = 0
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2

    const paintPointer = () => {
      root.style.setProperty('--pointer-x', `${x}px`)
      root.style.setProperty('--pointer-y', `${y}px`)
      frame = 0
    }

    const onPointerMove = (event: PointerEvent) => {
      x = event.clientX
      y = event.clientY
      if (!frame) frame = window.requestAnimationFrame(paintPointer)

      const target = event.target
      if (!(target instanceof Element)) return
      root.classList.toggle(
        'cursor-interactive',
        Boolean(target.closest('a, button, [role="button"]')),
      )

      const tilt = target.closest<HTMLElement>(TILT_SELECTOR)
      if (tilt) {
        const bounds = tilt.getBoundingClientRect()
        const localX = (event.clientX - bounds.left) / bounds.width
        const localY = (event.clientY - bounds.top) / bounds.height
        tilt.style.setProperty('--tilt-x', `${(0.5 - localY) * 5}deg`)
        tilt.style.setProperty('--tilt-y', `${(localX - 0.5) * 7}deg`)
        tilt.style.setProperty('--shine-x', `${localX * 100}%`)
        tilt.style.setProperty('--shine-y', `${localY * 100}%`)
      }

      const magnetic = target.closest<HTMLElement>('.button-3d')
      if (magnetic) {
        const bounds = magnetic.getBoundingClientRect()
        magnetic.style.setProperty(
          '--magnetic-x',
          `${(event.clientX - bounds.left - bounds.width / 2) * 0.1}px`,
        )
        magnetic.style.setProperty(
          '--magnetic-y',
          `${(event.clientY - bounds.top - bounds.height / 2) * 0.14}px`,
        )
      }
    }

    const onPointerOut = (event: PointerEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return

      const tilt = target.closest<HTMLElement>(TILT_SELECTOR)
      if (tilt && !tilt.contains(event.relatedTarget as Node | null)) {
        tilt.style.removeProperty('--tilt-x')
        tilt.style.removeProperty('--tilt-y')
      }

      const magnetic = target.closest<HTMLElement>('.button-3d')
      if (magnetic && !magnetic.contains(event.relatedTarget as Node | null)) {
        magnetic.style.removeProperty('--magnetic-x')
        magnetic.style.removeProperty('--magnetic-y')
      }
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerout', onPointerOut, { passive: true })

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerout', onPointerOut)
      root.classList.remove('cursor-interactive')
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    let frame = 0

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      document.documentElement.style.setProperty(
        '--scroll-progress',
        String(Math.min(1, Math.max(0, progress))),
      )
      frame = 0
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <div className="scroll-progress" aria-hidden />
      <div className="cursor-aura" aria-hidden />
      <div className="cursor-dot" aria-hidden />
      <div className="ambient-canvas" aria-hidden>
        <span className="ambient-orb ambient-orb-a" />
        <span className="ambient-orb ambient-orb-b" />
        <span className="ambient-noise" />
      </div>
      <div
        className={`site-loader ${loading ? '' : 'site-loader-hidden'}`}
        aria-hidden={!loading}
        aria-label={loading ? 'Loading website' : undefined}
      >
        <div className="loader-mark">
          <span className="loader-name">{site.name}</span>
          <span className="loader-line" />
          <span className="loader-tagline">{site.tagline}</span>
        </div>
      </div>
    </>
  )
}

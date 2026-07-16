import type { CSSProperties } from 'react'

/** Animated layers for the home hero background */
export function HeroBackground({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <img
        src={imageSrc}
        alt=""
        className="hero-bg-image absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/90 to-forest-950/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-forest-950/55" />
      <div className="absolute inset-0 bg-gradient-to-br from-forest-900/40 via-transparent to-transparent" />

      <div className="hero-sun-orb absolute -right-[8%] top-[8%] h-[min(55vw,420px)] w-[min(55vw,420px)] rounded-full" />
      <div className="hero-sun-orb-2 absolute right-[18%] top-[22%] h-40 w-40 rounded-full sm:h-56 sm:w-56" />
      <div className="hero-light-sweep absolute inset-0" />

      <div className="hero-particles absolute inset-0">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="hero-particle absolute rounded-full bg-sun-400"
            style={
              {
                '--x': `${8 + ((i * 17) % 84)}%`,
                '--size': `${2 + (i % 4)}px`,
                '--dur': `${7 + (i % 6) * 1.4}s`,
                '--delay': `${(i % 8) * 0.55}s`,
                '--drift': `${12 + (i % 5) * 8}px`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,transparent_0%,rgba(17,28,22,0.45)_100%)]" />
    </div>
  )
}

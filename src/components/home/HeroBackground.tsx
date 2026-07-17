import type { CSSProperties } from 'react'

type HeroBackgroundProps = {
  posterSrc?: string
  videoSrc?: string
}

/** Bright video background with layered motion for the home hero */
export function HeroBackground({
  videoSrc = '/background.mp4',
  posterSrc = 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2400&q=80',
}: HeroBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <img
        src={posterSrc}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <video
        className="hero-bg-video absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={posterSrc}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Soft readability — stronger on left for text, open on right for form */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/75 via-forest-950/35 to-forest-950/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/50 via-transparent to-black/10" />

      {/* Animated warm sun lift */}
      <div className="hero-warm-glow absolute inset-0" />

      {/* Soft orbs */}
      <div className="hero-sun-orb absolute -right-[6%] top-[6%] h-[min(50vw,380px)] w-[min(50vw,380px)] rounded-full" />
      <div className="hero-sun-orb-2 absolute right-[22%] top-[28%] h-36 w-36 rounded-full sm:h-48 sm:w-48" />
      <div className="hero-orb-drift absolute left-[8%] bottom-[18%] h-28 w-28 rounded-full sm:h-40 sm:w-40" />

      {/* Dual light sweeps */}
      <div className="hero-light-sweep absolute inset-0 opacity-70" />
      <div className="hero-light-sweep-2 absolute inset-0 opacity-40" />

      {/* Subtle grid shimmer */}
      <div className="hero-grid absolute inset-0 opacity-[0.12]" />

      {/* Floating particles */}
      <div className="hero-particles absolute inset-0">
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className="hero-particle absolute rounded-full bg-sun-400"
            style={
              {
                '--x': `${6 + ((i * 13) % 88)}%`,
                '--size': `${2 + (i % 4)}px`,
                '--dur': `${7 + (i % 6) * 1.3}s`,
                '--delay': `${(i % 9) * 0.45}s`,
                '--drift': `${10 + (i % 5) * 8}px`,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </div>
  )
}

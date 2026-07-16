import type { CSSProperties } from 'react'

type HeroBackgroundProps = {
  /** Optional poster/fallback image while video loads */
  posterSrc?: string
  videoSrc?: string
}

/** Bright, clear video background for the home hero */
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

      {/* Light overlays — keep video bright & clear, slight shade only for text */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/55 via-forest-950/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/50 via-transparent to-black/10" />

      {/* Soft warm lift */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 70% 35%, rgba(255,220,140,0.22), transparent 60%)',
        }}
      />

      <div className="hero-light-sweep absolute inset-0 opacity-60" />

      <div className="hero-particles absolute inset-0 opacity-70">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="hero-particle absolute rounded-full bg-sun-400"
            style={
              {
                '--x': `${10 + ((i * 19) % 80)}%`,
                '--size': `${2 + (i % 2)}px`,
                '--dur': `${9 + (i % 4) * 1.4}s`,
                '--delay': `${(i % 6) * 0.7}s`,
                '--drift': `${8 + (i % 4) * 6}px`,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </div>
  )
}

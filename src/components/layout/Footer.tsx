import { Link } from 'react-router-dom'
import { freeServices, navLinks, site } from '@/data/site'

export function Footer() {
  return (
    <footer className="premium-footer relative z-10 overflow-hidden border-t border-line bg-forest-950 text-forest-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_-16px_40px_rgba(17,28,22,0.08)]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 10% 20%, rgba(77,120,94,0.24), transparent 30%), radial-gradient(circle at 90% 10%, rgba(240,180,41,0.1), transparent 26%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-9 sm:px-6 lg:px-8">
        <div className="grid gap-7 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="surface-3d-dark rounded-2xl p-6">
            <p className="font-display text-2xl font-extrabold tracking-tight text-white">
              {site.name}
            </p>
            <p className="mt-1 text-sm text-forest-300">{site.fullName}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-forest-200">
              Complete rooftop solar solutions across Vidarbha since {site.since}.
              Reliable installations, MNRE-guided workmanship, and end-to-end
              subsidy & net metering support.
            </p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-sun-400">
              {site.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-forest-400">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.href}>
                  {item.enabled ? (
                    <Link
                      to={item.href}
                    className="footer-link link-underline text-sm text-forest-100 transition-colors hover:text-sun-400"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      aria-disabled="true"
                      title="Coming soon"
                      className="cursor-not-allowed text-sm text-forest-500"
                    >
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-forest-400">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-forest-100">
              <li>{site.shortAddress}</li>
              <li className="space-y-1">
                {site.phones.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    className="footer-link link-underline block w-fit transition-colors hover:text-sun-400"
                  >
                    {p.label}
                  </a>
                ))}
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="footer-link link-underline transition-colors hover:text-sun-400"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex gap-4 pt-1">
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link transition-colors hover:text-sun-400"
                >
                  Facebook
                </a>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link transition-colors hover:text-sun-400"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 border-t border-forest-800 pt-5 text-sm text-forest-300">
          {freeServices.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="mt-6 space-y-3 border-t border-forest-800 pt-5 text-xs leading-relaxed text-forest-400">
          <p>
            © {new Date().getFullYear()} {site.name} ({site.fullName}) |{' '}
            {site.tagline} | Since {site.since}
          </p>
          <p>
            Subsidy amounts are under the central PM Surya Ghar: Muft Bijli
            Yojana for eligible residential consumers, subject to government
            scheme rules and approval. Prices are indicative and depend on brand
            and site conditions. Warranty as per the company/manufacturer
            policy. Installation workmanship as per MNRE guidelines.
          </p>
        </div>
      </div>
    </footer>
  )
}

import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks, site } from '@/data/site'
import { cn } from '@/lib/utils'
import { LinkButton, RouterLinkButton } from '@/components/ui/Button'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-[background,border-color,box-shadow,height] duration-300',
        scrolled
          ? 'border-line bg-paper/95 shadow-[0_8px_30px_rgba(17,28,22,0.06)] backdrop-blur-md'
          : 'border-transparent bg-paper/90 backdrop-blur-sm',
      )}
    >
      <div
        className={cn(
          'mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-[height] duration-300 sm:px-6 lg:px-8',
          scrolled ? 'h-16' : 'h-[4.5rem]',
        )}
      >
        <Link
          to="/"
          className="group flex shrink-0 items-center"
          onClick={() => setOpen(false)}
          aria-label={`${site.name} home`}
        >
          <img
            src="/logo.jpeg"
            alt={site.name}
            className={cn(
              'w-auto rounded object-contain transition-transform duration-300 group-hover:scale-[1.03]',
              scrolled ? 'h-10 sm:h-11' : 'h-11 sm:h-12',
            )}
          />
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main">
          {navLinks.map((item) =>
            item.enabled ? (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === '/'}
                className={({ isActive }) =>
                  cn(
                    'rounded-md px-2.5 py-2 text-[0.8125rem] font-medium transition-colors',
                    isActive
                      ? 'bg-forest-100 text-forest-900'
                      : 'text-muted hover:bg-forest-50 hover:text-forest-900',
                  )
                }
              >
                {item.label}
              </NavLink>
            ) : (
              <span
                key={item.href}
                aria-disabled="true"
                title="Coming soon"
                className="cursor-not-allowed rounded-md px-2.5 py-2 text-[0.8125rem] font-medium text-muted/45"
              >
                {item.label}
              </span>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LinkButton
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
            className="hidden xl:inline-flex"
          >
            WhatsApp
          </LinkButton>
          <RouterLinkButton to="/contact" variant="sun" size="sm">
            Book Free Visit
          </RouterLinkButton>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-forest-900 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-3.5 w-5">
            <span
              className={cn(
                'absolute left-0 top-0 h-0.5 w-full bg-current transition-transform',
                open && 'translate-y-1.5 rotate-45',
              )}
            />
            <span
              className={cn(
                'absolute left-0 top-1.5 h-0.5 w-full bg-current transition-opacity',
                open && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'absolute left-0 top-3 h-0.5 w-full bg-current transition-transform',
                open && '-translate-y-1.5 -rotate-45',
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          'border-t border-line bg-paper lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
          aria-label="Mobile"
        >
          {navLinks.map((item) =>
            item.enabled ? (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'rounded-md px-3 py-3 text-base font-medium',
                    isActive
                      ? 'bg-forest-100 text-forest-900'
                      : 'text-forest-800 hover:bg-forest-50',
                  )
                }
              >
                {item.label}
              </NavLink>
            ) : (
              <span
                key={item.href}
                aria-disabled="true"
                title="Coming soon"
                className="cursor-not-allowed rounded-md px-3 py-3 text-base font-medium text-muted/45"
              >
                {item.label}
              </span>
            ),
          )}
          <div className="mt-3 grid gap-2 border-t border-line pt-4">
            <LinkButton
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              WhatsApp {site.whatsapp.label}
            </LinkButton>
            <RouterLinkButton
              to="/contact"
              variant="sun"
              onClick={() => setOpen(false)}
            >
              Book Free Site Visit
            </RouterLinkButton>
          </div>
        </nav>
      </div>
    </header>
  )
}

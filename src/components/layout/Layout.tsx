import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { ScrollToTop } from './ScrollToTop'
import { FloatingWhatsApp } from './FloatingWhatsApp'
import { ExperienceLayer } from './ExperienceLayer'

export function Layout() {
  const { pathname } = useLocation()

  return (
    <div className="site-shell flex min-h-svh flex-col">
      <ScrollToTop />
      <ExperienceLayer />
      <a
        href="#main-content"
        className="skip-link fixed left-4 top-3 z-[210] -translate-y-20 rounded-lg bg-forest-950 px-4 py-2.5 text-sm font-semibold text-white shadow-xl transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <Header />
      <main
        id="main-content"
        key={pathname}
        className="page-transition relative z-10 flex-1"
      >
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

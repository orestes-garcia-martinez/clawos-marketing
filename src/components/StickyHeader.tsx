import { useState } from 'react'
import { useScrollHeader } from '../hooks/useScrollHeader'

const NAV = [
  { label: 'Why', href: '#why' },
  { label: 'Platform', href: '#platform' },
  { label: 'Skills', href: '#skills' },
  { label: 'Security', href: '#security' },
  { label: 'FAQ', href: '#faq' },
]

export function StickyHeader() {
  const scrolled = useScrollHeader()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(7, 9, 15, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(30, 47, 74, 0.6)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo: claw icon + wordmark lockup */}
        <a href="#" className="shrink-0 flex items-center gap-2.5" aria-label="ClawOS home">
          {/* Claw icon — geometric tines, consistent with app favicon treatment */}
          <svg viewBox="0 0 24 26" fill="none" className="w-6 h-6" aria-hidden="true">
            <path
              d="M6 24 C3.5 17 5 10 8 3"
              stroke="#00D4A1"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            <path
              d="M12 25 C10 18 11.5 11 12 3"
              stroke="#00D4A1"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            <path
              d="M18 24 C20.5 17 19 10 16 3"
              stroke="#00D4A1"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
          </svg>
          {/* Text lockup */}
          <div className="flex flex-col leading-none">
            <span
              className="text-[18px] font-display font-bold tracking-tight leading-none"
              style={{ fontFamily: "'Syne', sans-serif", color: '#DDE8F8' }}
            >
              ClawOS
            </span>
            <span
              className="text-[8.5px] font-mono tracking-[0.2em] uppercase mt-[3px]"
              style={{ color: '#3D5266' }}
            >
              Multi-Skill Platform
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-3 py-1.5 rounded-lg text-sm transition-colors"
              style={{ color: '#8099B3', fontFamily: "'DM Sans', sans-serif" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#DDE8F8')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#8099B3')}
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <a
            href="https://app.clawoshq.com"
            className="hidden sm:block text-sm transition-colors"
            style={{ color: '#8099B3', fontFamily: "'DM Sans', sans-serif" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#DDE8F8')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#8099B3')}
          >
            Sign in
          </a>
          <a
            href="https://app.clawoshq.com"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all active:scale-95"
            style={{
              background: '#00D4A1',
              color: '#07090F',
              fontFamily: "'DM Sans', sans-serif",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.filter = 'brightness(1.1)')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.filter = 'none')}
          >
            Open app
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1.5 rounded-lg transition-colors"
            style={{ color: '#8099B3' }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              {mobileOpen ? (
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{ borderColor: '#1E2F4A', background: 'rgba(7, 9, 15, 0.97)' }}
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm"
                style={{ color: '#8099B3', fontFamily: "'DM Sans', sans-serif" }}
              >
                {n.label}
              </a>
            ))}
            <div className="mt-3 pt-3" style={{ borderTop: '1px solid #1E2F4A' }}>
              <a
                href="https://app.clawoshq.com"
                className="block text-center px-4 py-2.5 rounded-xl text-sm font-semibold"
                style={{ background: '#00D4A1', color: '#07090F' }}
              >
                Get started free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

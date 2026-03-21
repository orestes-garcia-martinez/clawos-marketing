import { HeroCardStack } from './HeroCardStack'

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center hero-bg overflow-hidden">
      {/* Subtle dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(30,47,74,0.5) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">
          {/* ── Left: text ─────────────────────────── */}
          <div className="flex flex-col gap-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 flex-wrap">
              <span
                className="text-[11px] font-mono font-medium tracking-[0.16em] uppercase"
                style={{ color: '#00D4A1' }}
              >
                ClawOS Platform
              </span>
              <span style={{ color: '#1E2F4A' }}>·</span>
              <span
                className="text-[11px] font-mono font-medium tracking-[0.16em] uppercase"
                style={{ color: '#8099B3' }}
              >
                Security-First
              </span>
              <span style={{ color: '#1E2F4A' }}>·</span>
              <span
                className="text-[11px] font-mono font-medium tracking-[0.16em] uppercase"
                style={{ color: '#8099B3' }}
              >
                Built for Professionals
              </span>
            </div>

            {/* H1 — V2: platform-first framing */}
            <h1
              className="text-[42px] sm:text-[52px] lg:text-[58px] font-display font-bold leading-[1.08] tracking-[-0.02em]"
              style={{ fontFamily: "'Syne', sans-serif", color: '#DDE8F8' }}
            >
              One platform.
              <br />
              <span style={{ color: '#DDE8F8' }}>Purpose-built</span>
              <br />
              <span
                style={{
                  background: 'linear-gradient(90deg, #DDE8F8 0%, #8099B3 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                AI skills.
              </span>
            </h1>

            {/* Subhead — V2.1: platform-first, channel-flexible */}
            <p
              className="text-base sm:text-lg leading-relaxed max-w-[520px]"
              style={{ color: '#8099B3', fontFamily: "'DM Sans', sans-serif" }}
            >
              ClawOS is the platform for focused AI skills. Each skill has its own workspace,
              first-party engine, and secure foundation. Use ClawOS on Web today, with Telegram
              support available now. One account, one platform, built to grow across channels as new
              access points launch.{' '}
              <span style={{ color: '#DDE8F8' }}>
                CareerClaw — job search and outreach automation — is live now.
              </span>
            </p>

            {/* Live proof pill */}
            <div className="flex items-center gap-2.5">
              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-mono font-semibold"
                style={{
                  background: 'rgba(0,212,161,0.08)',
                  border: '1px solid rgba(0,212,161,0.22)',
                  color: '#00D4A1',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: '#00D4A1',
                    boxShadow: '0 0 6px rgba(0,212,161,0.8)',
                  }}
                />
                First skill live — CareerClaw on Web &amp; Telegram
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="https://app.clawoshq.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all active:scale-95"
                style={{
                  background: '#00D4A1',
                  color: '#07090F',
                  fontFamily: "'DM Sans', sans-serif",
                  boxShadow: '0 0 24px rgba(0,212,161,0.25)',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.filter = 'brightness(1.12)')
                }
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.filter = 'none')}
              >
                Get started free
              </a>
              <a
                href="#platform"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all"
                style={{
                  color: '#DDE8F8',
                  border: '1px solid #1E2F4A',
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,161,0.3)'
                  ;(e.currentTarget as HTMLElement).style.color = '#DDE8F8'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.borderColor = '#1E2F4A'
                }}
              >
                See how it works
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Right: card stack ──────────────────── */}
          <div className="hidden lg:block">
            <HeroCardStack />
          </div>

          {/* Mobile card stack — below text, constrained */}
          <div className="lg:hidden">
            <HeroCardStack />
          </div>
        </div>
      </div>
    </section>
  )
}

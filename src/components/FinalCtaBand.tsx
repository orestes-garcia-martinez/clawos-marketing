// V2: FinalCtaBand — contrast fixes on eyebrow and body copy.

import { useScrollReveal } from '../hooks/useScrollReveal'

export function FinalCtaBand() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ background: '#0F1523' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, #1E2F4A 30%, #1E2F4A 70%, transparent)',
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none animate-pulse-glow"
        style={{
          width: 500,
          height: 300,
          background:
            'radial-gradient(ellipse at bottom, rgba(0,212,161,0.07) 0%, transparent 70%)',
          filter: 'blur(32px)',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div
          className="reveal text-[11px] font-mono font-medium tracking-[0.16em] uppercase mb-6"
          style={{ color: '#4A6580' }}
        >
          // Get started
        </div>

        <h2
          className="reveal text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6"
          style={{
            fontFamily: "'Syne', sans-serif",
            color: '#DDE8F8',
            transitionDelay: '60ms',
          }}
        >
          Start with CareerClaw.
          <br />
          <span style={{ color: '#8099B3' }}>Grow into ClawOS.</span>
        </h2>

        <p
          className="reveal text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          style={{
            color: '#8099B3',
            fontFamily: "'DM Sans', sans-serif",
            transitionDelay: '120ms',
          }}
        >
          CareerClaw is free to start — available on Web, with Telegram included. Sign up once and
          your ClawOS account grows with the platform: new skills, same account, no switching costs.
        </p>

        <div
          className="reveal flex flex-wrap items-center justify-center gap-4"
          style={{ transitionDelay: '180ms' }}
        >
          <a
            href="https://app.clawoshq.com"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold transition-all active:scale-95"
            style={{
              background: '#00D4A1',
              color: '#07090F',
              fontFamily: "'DM Sans', sans-serif",
              boxShadow: '0 0 32px rgba(0,212,161,0.22)',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.filter = 'brightness(1.1)')
            }
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.filter = 'none')}
          >
            Get started free
          </a>
          <a
            href="https://app.clawoshq.com"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-medium transition-all"
            style={{
              color: '#DDE8F8',
              border: '1px solid #1E2F4A',
              fontFamily: "'DM Sans', sans-serif",
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,161,0.3)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.borderColor = '#1E2F4A'
            }}
          >
            Sign in →
          </a>
        </div>
      </div>
    </section>
  )
}

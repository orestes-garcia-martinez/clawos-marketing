// V2: "How ClawOS works" — merged user journey + platform architecture advantages.
// Replaces both the old PlatformSteps AND BenefitsGrid (which repeated the same ideas).
// Top half = 4-step user journey in plain language.
// Bottom half = 3 architectural differentiators (what makes this different from generic chat).

import { useScrollReveal } from '../hooks/useScrollReveal'

const STEPS = [
  {
    num: '01',
    title: 'Sign in once, access anywhere',
    body: 'One account. Use ClawOS on Web today and Telegram where that fits your workflow. The platform is designed to extend across channels — your skills, history, and preferences move with you.',
    platform: true,
  },
  {
    num: '02',
    title: 'Work inside a focused skill',
    body: "Open CareerClaw. Your job search workspace, context, and output stay separate from everything else. Skills don't bleed into each other.",
    platform: false,
  },
  {
    num: '03',
    title: 'Trusted engines handle the work',
    body: 'Every skill runs on a tested, owned engine. No dynamically installed third-party code. What the skill does is exactly what was built, audited, and deployed.',
    platform: false,
  },
  {
    num: '04',
    title: 'Add skills as your needs grow',
    body: 'Start with CareerClaw. When ScrapeClaw and InvestClaw launch, they live in the same platform under the same account. No new tools. No new logins.',
    platform: true,
  },
]

const DIFFERENTIATORS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="11" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="11" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="11" y="11" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Focused workspaces, not one noisy thread',
    body: 'Generic AI chat collapses everything into one context. ClawOS separates skills into their own workspaces so each one stays purposeful — and relevant context can still carry forward when that helps.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 3l6 3v5c0 3.5-2.7 6.5-6 7.5C7.7 17.5 5 14.5 5 11V6l5-3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 10l2 2 3-3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Owned distribution, no marketplace risk',
    body: 'ClawOS controls its own install surface. Every skill engine is first-party — built, maintained, and audited by ClawOS. No open marketplace install surface means a fundamentally different and safer trust model.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M7 10c0-1.7 1.3-3 3-3M10 7v3l2 2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: 'Skills are additive, not replaced',
    body: 'Each new ClawOS skill extends the platform without disrupting the others. Your account, preferences, and history stay intact. ClawOS grows with your professional workflow, not against it.',
  },
]

export function PlatformSteps() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>

  return (
    <section
      id="platform"
      ref={sectionRef}
      className="relative py-28"
      style={{ background: '#0F1523' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, #1E2F4A 30%, #1E2F4A 70%, transparent)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, #1E2F4A 30%, #1E2F4A 70%, transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* ── User journey ─────────────────────── */}
        <div className="mb-14 reveal">
          <div
            className="text-[11px] font-mono font-medium tracking-[0.16em] uppercase mb-4"
            style={{ color: '#4A6580' }}
          >
            // How it works
          </div>
          <h2
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight max-w-2xl"
            style={{ fontFamily: "'Syne', sans-serif", color: '#DDE8F8' }}
          >
            One platform. Focused skills. Your workflow.
          </h2>
          <p
            className="mt-4 text-base max-w-xl"
            style={{ color: '#8099B3', fontFamily: "'DM Sans', sans-serif" }}
          >
            Sign in once. Start with CareerClaw. Add skills as you need them. Work stays focused;
            the platform handles the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="reveal rounded-2xl p-5 flex flex-col gap-3 relative overflow-hidden"
              style={{
                transitionDelay: `${i * 70}ms`,
                background: '#07090F',
                border: `1px solid ${step.platform ? 'rgba(0,212,161,0.22)' : '#1E2F4A'}`,
                boxShadow: 'inset 0 1px 0 rgba(221,232,248,0.03)',
              }}
            >
              <span
                className="text-[11px] font-mono font-semibold"
                style={{ color: step.platform ? '#00D4A1' : '#4A6580' }}
              >
                {step.num}
              </span>
              <h3
                className="text-sm font-display font-semibold leading-snug"
                style={{ fontFamily: "'Syne', sans-serif", color: '#DDE8F8' }}
              >
                {step.title}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: '#8099B3', fontFamily: "'DM Sans', sans-serif" }}
              >
                {step.body}
              </p>
              {step.platform && (
                <div
                  className="absolute bottom-0 right-0 w-16 h-16"
                  style={{
                    background:
                      'radial-gradient(circle at bottom right, rgba(0,212,161,0.06), transparent)',
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* ── What makes it different ──────────── */}
        <div className="mb-12 reveal" style={{ transitionDelay: '60ms' }}>
          <div
            className="text-[11px] font-mono font-medium tracking-[0.16em] uppercase mb-4"
            style={{ color: '#4A6580' }}
          >
            // What makes it different
          </div>
          <h2
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight max-w-xl"
            style={{ fontFamily: "'Syne', sans-serif", color: '#DDE8F8' }}
          >
            Platform architecture, not another tool.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {DIFFERENTIATORS.map((d, i) => (
            <div
              key={i}
              className="reveal rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200"
              style={{
                transitionDelay: `${120 + i * 80}ms`,
                background: '#07090F',
                border: '1px solid #1E2F4A',
                boxShadow: 'inset 0 1px 0 rgba(221,232,248,0.03)',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,161,0.18)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = '#1E2F4A'
                ;(e.currentTarget as HTMLElement).style.transform = 'none'
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(0,212,161,0.08)', color: '#00D4A1' }}
              >
                {d.icon}
              </div>
              <h3
                className="text-sm font-display font-semibold"
                style={{ fontFamily: "'Syne', sans-serif", color: '#DDE8F8' }}
              >
                {d.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#8099B3', fontFamily: "'DM Sans', sans-serif" }}
              >
                {d.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

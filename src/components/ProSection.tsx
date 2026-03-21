// V2.1: ClawOS Pro — platform-first framing throughout.
// "Today/Tomorrow" labels replaced with unified platform framing.
// Left card = what Pro unlocks right now (via CareerClaw).
// Right card = how Pro grows with the platform.
// Heading hierarchy: ClawOS Pro → unified subscription → CareerClaw as current expression.

import { useScrollReveal } from '../hooks/useScrollReveal'

const PRO_FEATURES = [
  {
    label: 'LLM-enhanced outreach drafts',
    detail: 'Tailored to each role and your resume — not templated.',
  },
  { label: '10 ranked matches per briefing', detail: 'Expanded from 3 on free.' },
  {
    label: 'Resume gap analysis',
    detail: 'Understand exactly where your profile diverges from the role.',
  },
  {
    label: 'AI-generated cover letters',
    detail: 'Resume-aware, role-specific. Saves hours per application.',
  },
  { label: 'Priority processing', detail: 'Your runs go first during peak hours.' },
]

const FUTURE_SKILLS = [
  {
    name: 'ScrapeClaw',
    status: 'Coming next',
    detail:
      'Advanced monitoring schedules, priority alerts, structured export — all included in Pro.',
  },
  {
    name: 'InvestClaw',
    status: 'Planned',
    detail: 'Extended portfolio tracking, custom alert thresholds, deeper signal frequency.',
  },
  {
    name: 'Future skills',
    status: 'Ongoing',
    detail:
      'Every new ClawOS skill ships with Pro-tier depth included in your existing subscription.',
  },
]

export function ProSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>

  return (
    <section ref={sectionRef} className="relative py-28" style={{ background: '#07090F' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header — platform-first, price at this level */}
        <div className="mb-14 reveal">
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <div
              className="text-[11px] font-mono font-medium tracking-[0.16em] uppercase"
              style={{ color: '#4A6580' }}
            >
              // ClawOS Pro
            </div>
            <span
              className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full"
              style={{
                color: '#00D4A1',
                background: 'rgba(0,212,161,0.07)',
                border: '1px solid rgba(0,212,161,0.18)',
              }}
            >
              $9 / month
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight max-w-xl"
            style={{ fontFamily: "'Syne', sans-serif", color: '#DDE8F8' }}
          >
            One Pro plan. Expanding value.
          </h2>
          <p
            className="mt-4 text-base max-w-xl"
            style={{ color: '#8099B3', fontFamily: "'DM Sans', sans-serif" }}
          >
            ClawOS Pro is a platform-wide upgrade — not a single-skill add-on. Upgrade once, and Pro
            depth follows you across every ClawOS skill, now and as new ones launch.
          </p>
        </div>

        {/* Two-column cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left card: what Pro unlocks right now */}
          <div
            className="reveal rounded-2xl p-7 flex flex-col gap-6 card-inset"
            style={{ background: '#0F1523', border: '1px solid rgba(0,212,161,0.22)' }}
          >
            <div>
              <div
                className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full mb-3"
                style={{
                  color: '#00D4A1',
                  background: 'rgba(0,212,161,0.08)',
                  border: '1px solid rgba(0,212,161,0.2)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
              >
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full"
                  style={{ background: '#00D4A1', boxShadow: '0 0 5px rgba(0,212,161,0.7)' }}
                />
                Available now via CareerClaw
              </div>
              <h3
                className="text-lg font-display font-semibold"
                style={{ fontFamily: "'Syne', sans-serif", color: '#DDE8F8' }}
              >
                Deeper intelligence for your job search.
              </h3>
              <p
                className="mt-1.5 text-sm"
                style={{ color: '#8099B3', fontFamily: "'DM Sans', sans-serif" }}
              >
                CareerClaw is the first skill where Pro makes a concrete difference. Here's what
                unlocks.
              </p>
            </div>

            <ul className="flex flex-col gap-3.5">
              {PRO_FEATURES.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 shrink-0 text-sm font-semibold"
                    style={{ color: '#00D4A1' }}
                  >
                    ✓
                  </span>
                  <div>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: '#DDE8F8', fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {f.label}
                    </span>
                    <span
                      className="text-sm"
                      style={{ color: '#8099B3', fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {' '}
                      {f.detail}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="https://app.clawoshq.com"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold transition-all active:scale-95"
              style={{
                background: '#00D4A1',
                color: '#07090F',
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: '0 0 24px rgba(0,212,161,0.2)',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.filter = 'brightness(1.1)')
              }
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.filter = 'none')}
            >
              Upgrade to ClawOS Pro
            </a>
          </div>

          {/* Right card: Pro grows with the platform */}
          <div
            className="reveal rounded-2xl p-7 flex flex-col gap-6"
            style={{
              background: '#0F1523',
              border: '1px solid #1E2F4A',
              transitionDelay: '100ms',
            }}
          >
            <div>
              <div
                className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full mb-3"
                style={{
                  color: '#6366F1',
                  background: 'rgba(99,102,241,0.08)',
                  border: '1px solid rgba(99,102,241,0.22)',
                  display: 'inline-block',
                }}
              >
                Grows with the platform
              </div>
              <h3
                className="text-lg font-display font-semibold"
                style={{ fontFamily: "'Syne', sans-serif", color: '#DDE8F8' }}
              >
                Your subscription extends as new skills launch.
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: '#8099B3', fontFamily: "'DM Sans', sans-serif" }}
              >
                When ScrapeClaw, InvestClaw, and future skills go live, your ClawOS Pro subscription
                extends to cover them. No new plans. No separate purchases. The value of a single
                subscription grows over time.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {FUTURE_SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  className="rounded-xl p-4 flex flex-col gap-1.5"
                  style={{ background: '#162035', border: '1px solid #1E2F4A' }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold" style={{ color: '#8099B3' }}>
                      {skill.name}
                    </span>
                    <span
                      className="text-[9px] font-mono px-1.5 py-0.5 rounded"
                      style={{
                        color: '#6366F1',
                        background: 'rgba(99,102,241,0.08)',
                        border: '1px solid rgba(99,102,241,0.18)',
                      }}
                    >
                      {skill.status.toUpperCase()}
                    </span>
                  </div>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: '#4A6580', fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {skill.detail}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="text-xs"
              style={{ color: '#4A6580', fontFamily: "'DM Sans', sans-serif", fontStyle: 'italic' }}
            >
              Exact Pro depth per skill will be confirmed at each launch. $9/month covers CareerClaw
              Pro today and expands from there.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

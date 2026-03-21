// V2: Security section — universal language, no incident-specific references.
// Translates technical controls into what they mean for the user.
// Tone: calm, serious, credible — not developer docs.

import { useScrollReveal } from '../hooks/useScrollReveal'

const TRUST_ITEMS = [
  {
    title: 'No third-party installs — ever',
    body: 'Every ClawOS skill runs on a first-party engine that is owned, maintained, and tested by ClawOS. There is no open install surface where unknown code can enter your environment. What you see is what runs.',
  },
  {
    title: 'Every dependency reviewed on every change',
    body: 'The entire dependency tree is scanned automatically on every code change — not only at release time. Known vulnerabilities block deployment. This is how ClawOS maintains confidence in what it ships.',
  },
  {
    title: 'Your data stays yours',
    body: 'Row-level security policies ensure your data is only accessible to you. Your resume, preferences, and job history are isolated at the database level — not just behind an application login. ClawOS stores only what it needs.',
  },
  {
    title: 'Controlled execution — always',
    body: 'Skills run with the minimum permissions required, in restricted environments, without the ability to modify the broader system. No over-permissioned runtime behavior. No silent background activity beyond the skill you invoked.',
  },
]

export function TrustBand() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>

  return (
    <section
      id="security"
      ref={sectionRef}
      className="relative py-28"
      style={{ background: '#07090F' }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 600,
          height: 300,
          background: 'radial-gradient(ellipse at top, rgba(0,212,161,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 reveal">
          <div
            className="text-[11px] font-mono font-medium tracking-[0.16em] uppercase mb-4"
            style={{ color: '#4A6580' }}
          >
            // Security first
          </div>
          <h2
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight max-w-xl"
            style={{ fontFamily: "'Syne', sans-serif", color: '#DDE8F8' }}
          >
            Trust isn't a feature. <span style={{ color: '#8099B3' }}>It's the foundation.</span>
          </h2>
          <p
            className="mt-4 text-base max-w-xl"
            style={{ color: '#8099B3', fontFamily: "'DM Sans', sans-serif" }}
          >
            ClawOS was designed security-first. Every architectural decision is evaluated against
            its security implications — not patched in later. Ownership, control, and transparency
            are built into how the platform works.
          </p>
        </div>

        {/* Statement cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {TRUST_ITEMS.map((item, i) => (
            <div
              key={i}
              className="reveal rounded-2xl p-6 flex gap-4"
              style={{
                transitionDelay: `${(i % 2) * 80}ms`,
                background: '#0F1523',
                border: '1px solid #1E2F4A',
                borderLeft: '3px solid rgba(0,212,161,0.4)',
                boxShadow: 'inset 0 1px 0 rgba(221,232,248,0.03)',
              }}
            >
              <div className="flex flex-col gap-2.5">
                <h3
                  className="text-sm font-display font-semibold"
                  style={{ fontFamily: "'Syne', sans-serif", color: '#DDE8F8' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#8099B3', fontFamily: "'DM Sans', sans-serif" }}
                >
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tooling strip — translates into user-understandable value */}
        <div
          className="reveal rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
          style={{ background: '#0F1523', border: '1px solid #1E2F4A' }}
        >
          <div className="flex flex-col gap-1">
            <span
              className="text-sm font-semibold"
              style={{ color: '#DDE8F8', fontFamily: "'DM Sans', sans-serif" }}
            >
              Continuous security scanning across every component
            </span>
            <span
              className="text-xs"
              style={{ color: '#8099B3', fontFamily: "'DM Sans', sans-serif" }}
            >
              Dependencies, code, and infrastructure — checked on every change, not just at launch.
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {['npm audit', 'Socket.dev', 'Snyk', 'Dependabot'].map((tool) => (
              <span
                key={tool}
                className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full"
                style={{
                  background: 'rgba(0,212,161,0.07)',
                  border: '1px solid rgba(0,212,161,0.18)',
                  color: '#00D4A1',
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

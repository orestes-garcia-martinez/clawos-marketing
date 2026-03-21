// V2: CareerClaw reframed as "job search and outreach automation" — not just ranked matches.
// Outreach draft generation is a first-class element, not a footnote.
// Job examples broadened across healthcare, marketing, ops, HR, finance, admin.

import { useScrollReveal } from '../hooks/useScrollReveal'

// Cross-industry examples — V2 broadens beyond tech
const EXAMPLE_JOBS = [
  {
    score: 94,
    title: 'Director of Marketing',
    company: 'Brightline Health',
    context: 'Healthcare · Remote · $120k–$145k',
    reason:
      'Strong match: your background in patient-facing campaign strategy and B2B health content aligns with their growth priorities.',
    draft:
      'Hi Sarah, I came across the Director of Marketing role at Brightline and your focus on patient engagement strategy maps closely to the work I led at Novo — would love to connect.',
    status: 'new',
  },
  {
    score: 87,
    title: 'Operations Lead',
    company: 'Meridian Capital Partners',
    context: 'Finance · Hybrid · $95k–$120k',
    reason:
      'Matches your preference for structured environments and experience coordinating cross-functional delivery across finance and compliance teams.',
    draft:
      'Hi James, the Operations Lead role at Meridian caught my attention — your emphasis on process rigor across deal operations is exactly the environment where I do my best work.',
    status: 'new',
  },
]

const WORKFLOW_STEPS = [
  {
    icon: '↓',
    label: 'Match',
    desc: 'Daily ranked briefing against your profile, salary range, and preferences',
  },
  {
    icon: '→',
    label: 'Score',
    desc: 'Skill overlap scored. Reasoning surfaced so you decide faster',
  },
  {
    icon: '✎',
    label: 'Draft',
    desc: 'Outreach email generated and ready to personalise — in seconds',
  },
  {
    icon: '☑',
    label: 'Track',
    desc: 'Application status tracked per position inside the platform',
  },
]

export function SkillSpotlight() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-28"
      style={{ background: '#07090F' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 reveal">
          <div
            className="text-[11px] font-mono font-medium tracking-[0.16em] uppercase mb-4"
            style={{ color: '#00D4A1' }}
          >
            // First skill live
          </div>
          <h2
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight max-w-xl"
            style={{ fontFamily: "'Syne', sans-serif", color: '#DDE8F8' }}
          >
            CareerClaw — job search and outreach automation.
          </h2>
          <p
            className="mt-4 text-base max-w-2xl"
            style={{ color: '#8099B3', fontFamily: "'DM Sans', sans-serif" }}
          >
            Not just ranked matches. CareerClaw takes you from discovery to drafted outreach — the
            part most tools skip. It works for professionals across industries: healthcare, finance,
            marketing, operations, HR, and more.
          </p>
        </div>

        {/* Workflow strip */}
        <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14">
          {WORKFLOW_STEPS.map((step) => (
            <div
              key={step.label}
              className="rounded-xl p-4 flex flex-col gap-2"
              style={{ background: '#0F1523', border: '1px solid #1E2F4A' }}
            >
              <div className="flex items-center gap-2">
                <span className="text-base" style={{ color: '#00D4A1' }}>
                  {step.icon}
                </span>
                <span
                  className="text-xs font-mono font-semibold uppercase tracking-wider"
                  style={{ color: '#DDE8F8' }}
                >
                  {step.label}
                </span>
              </div>
              <p
                className="text-xs leading-relaxed"
                style={{ color: '#8099B3', fontFamily: "'DM Sans', sans-serif" }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: feature card */}
          <div
            className="reveal rounded-2xl p-7 flex flex-col gap-6 card-inset"
            style={{ background: '#0F1523', border: '1px solid #1E2F4A' }}
          >
            <div className="flex items-center gap-3">
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl"
                style={{
                  background: 'rgba(0,212,161,0.08)',
                  border: '1px solid rgba(0,212,161,0.18)',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: '#00D4A1', boxShadow: '0 0 6px rgba(0,212,161,0.7)' }}
                />
                <span
                  className="text-[11px] font-mono font-semibold tracking-[0.12em]"
                  style={{ color: '#00D4A1' }}
                >
                  CAREERCLAW
                </span>
              </div>
              <span
                className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                style={{
                  background: 'rgba(0,212,161,0.07)',
                  border: '1px solid rgba(0,212,161,0.15)',
                  color: '#00D4A1',
                }}
              >
                FREE TO START
              </span>
            </div>

            {/* What it does — outreach first */}
            <div className="flex flex-col gap-3">
              {[
                {
                  strong: 'Outreach drafts, ready to send.',
                  rest: ' CareerClaw writes the first email for each match. Personalise and send — or use it as a starting point.',
                },
                {
                  strong: 'Daily ranked briefing.',
                  rest: ' Top matches scored against your actual profile, salary range, work mode, and industry preferences.',
                },
                {
                  strong: 'Application tracking.',
                  rest: ' Status per role. Everything in one place — no spreadsheet maintenance.',
                },
                {
                  strong: 'Resume gap analysis.',
                  rest: ' Understand where your profile diverges from what the role requires. Pro feature.',
                },
                {
                  strong: 'LLM-enhanced cover letters.',
                  rest: ' Tailored, resume-aware generation. Coming on Pro.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 shrink-0 text-sm font-semibold"
                    style={{ color: '#00D4A1' }}
                  >
                    ✓
                  </span>
                  <span
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <span style={{ color: '#DDE8F8', fontWeight: 600 }}>{item.strong}</span>
                    <span style={{ color: '#8099B3' }}>{item.rest}</span>
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://app.clawoshq.com"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all active:scale-95"
              style={{
                background: '#00D4A1',
                color: '#07090F',
                fontFamily: "'DM Sans', sans-serif",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.filter = 'brightness(1.1)')
              }
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.filter = 'none')}
            >
              Try CareerClaw free →
            </a>
          </div>

          {/* Right: example job cards with outreach drafts */}
          <div className="reveal flex flex-col gap-4" style={{ transitionDelay: '120ms' }}>
            <div
              className="text-[11px] font-mono tracking-[0.12em] uppercase"
              style={{ color: '#4A6580' }}
            >
              Example briefing · From match to outreach
            </div>

            {EXAMPLE_JOBS.map((job, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 flex flex-col gap-3.5 transition-all duration-200"
                style={{
                  background: '#0F1523',
                  border: '1px solid #1E2F4A',
                  boxShadow: 'inset 0 1px 0 rgba(221,232,248,0.04)',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,161,0.15)'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.borderColor = '#1E2F4A'
                  ;(e.currentTarget as HTMLElement).style.transform = 'none'
                }}
              >
                {/* Match */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-baseline gap-2.5">
                      <span
                        className="text-[15px] font-mono font-bold"
                        style={{ color: '#00D4A1' }}
                      >
                        {job.score}%
                      </span>
                      <span
                        className="text-sm font-semibold"
                        style={{ color: '#DDE8F8', fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {job.title}
                      </span>
                    </div>
                    <span
                      className="text-xs"
                      style={{ color: '#8099B3', fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {job.company} · {job.context}
                    </span>
                  </div>
                  <span
                    className="shrink-0 text-[10px] font-mono px-2 py-0.5 rounded-full"
                    style={{
                      background: 'rgba(0,212,161,0.07)',
                      border: '1px solid rgba(0,212,161,0.15)',
                      color: '#00D4A1',
                    }}
                  >
                    NEW
                  </span>
                </div>

                {/* Why it matched */}
                <div
                  className="text-xs leading-relaxed rounded-lg px-3 py-2.5"
                  style={{
                    background: '#162035',
                    color: '#8099B3',
                    borderLeft: '2px solid rgba(0,212,161,0.3)',
                    fontFamily: "'DM Sans', sans-serif",
                    fontStyle: 'italic',
                  }}
                >
                  "{job.reason}"
                </div>

                {/* Outreach draft — V2: prominent, not hidden */}
                <div
                  className="rounded-xl p-3.5 flex flex-col gap-2"
                  style={{ background: '#0A0F1E', border: '1px solid #1E2F4A' }}
                >
                  <span
                    className="text-[10px] font-mono uppercase tracking-wider"
                    style={{ color: '#00D4A1' }}
                  >
                    Outreach draft
                  </span>
                  <p
                    className="text-xs leading-relaxed"
                    style={{
                      color: '#8099B3',
                      fontFamily: "'DM Sans', sans-serif",
                      fontStyle: 'italic',
                    }}
                  >
                    "{job.draft}"
                  </p>
                  <button
                    className="self-start text-xs font-medium transition-opacity hover:opacity-80"
                    style={{ color: '#00D4A1', fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Edit and send →
                  </button>
                </div>
              </div>
            ))}

            <div
              className="text-center text-xs font-mono py-3 rounded-xl"
              style={{ color: '#4A6580', border: '1px dashed #1A2844' }}
            >
              + 7 more matches in today's briefing
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

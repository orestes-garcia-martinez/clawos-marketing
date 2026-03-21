// V2: SkillRoadmap — honest status hierarchy with improved contrast on readable text.

import { useScrollReveal } from '../hooks/useScrollReveal'

type SkillStatus = 'live' | 'upcoming' | 'planned'

const SKILLS: {
  slug: string
  name: string
  tagline: string
  description: string
  status: SkillStatus
  detail: string
}[] = [
  {
    slug: 'careerclaw',
    name: 'CareerClaw',
    tagline: 'Job search & outreach automation',
    description:
      'Daily briefings with ranked matches, outreach draft generation, application tracking, and resume intelligence — built on a 246-test validated engine.',
    status: 'live',
    detail: 'Live now · Web + Telegram · Free + Pro',
  },
  {
    slug: 'scrapeclaw',
    name: 'ScrapeClaw',
    tagline: 'Web monitoring & research automation',
    description:
      'Track any public page, product listing, or data source. Get structured change summaries and alerts delivered to your channel on a schedule — without writing a line of code.',
    status: 'upcoming',
    detail: 'Coming next · Web + Telegram',
  },
  {
    slug: 'investclaw',
    name: 'InvestClaw',
    tagline: 'Market signal monitoring',
    description:
      'Portfolio watchlists, price threshold alerts, and earnings signal digests. Structured financial data surfaced through the same platform interface, without jumping between tabs and tools.',
    status: 'planned',
    detail: 'Planned · Phase 3',
  },
]

const STATUS_STYLE: Record<
  SkillStatus,
  { label: string; color: string; bg: string; border: string; cardBorder: string; opacity: number }
> = {
  live: {
    label: 'LIVE NOW',
    color: '#00D4A1',
    bg: 'rgba(0,212,161,0.08)',
    border: 'rgba(0,212,161,0.22)',
    cardBorder: 'rgba(0,212,161,0.24)',
    opacity: 1,
  },
  upcoming: {
    label: 'COMING NEXT',
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.25)',
    cardBorder: 'rgba(99,102,241,0.20)',
    opacity: 0.8,
  },
  planned: {
    label: 'PLANNED',
    color: '#4A6580',
    bg: 'rgba(74,101,128,0.12)',
    border: 'rgba(74,101,128,0.25)',
    cardBorder: '#1E2F4A',
    opacity: 0.55,
  },
}

export function SkillRoadmap() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>

  return (
    <section ref={sectionRef} className="relative py-28" style={{ background: '#0F1523' }}>
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
        {/* Header */}
        <div className="mb-14 reveal">
          <div
            className="text-[11px] font-mono font-medium tracking-[0.16em] uppercase mb-4"
            style={{ color: '#4A6580' }}
          >
            // Platform expansion
          </div>
          <h2
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight max-w-xl"
            style={{ fontFamily: "'Syne', sans-serif", color: '#DDE8F8' }}
          >
            ClawOS is bigger than one skill.
          </h2>
          <p
            className="mt-4 text-base max-w-xl"
            style={{ color: '#8099B3', fontFamily: "'DM Sans', sans-serif" }}
          >
            CareerClaw is the first. Research and finance automation expand the platform over time —
            each skill on the same trusted foundation, the same account.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SKILLS.map((skill, i) => {
            const s = STATUS_STYLE[skill.status]
            return (
              <div
                key={skill.slug}
                className="reveal rounded-2xl p-6 flex flex-col gap-4"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  background: '#07090F',
                  border: `1px solid ${s.cardBorder}`,
                  opacity: s.opacity,
                  boxShadow: 'inset 0 1px 0 rgba(221,232,248,0.03)',
                }}
              >
                {/* Status badge + name */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-col gap-1.5">
                    <h3
                      className="text-base font-display font-semibold"
                      style={{ fontFamily: "'Syne', sans-serif", color: '#DDE8F8' }}
                    >
                      {skill.name}
                    </h3>
                    <span
                      className="text-xs"
                      style={{ color: '#8099B3', fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {skill.tagline}
                    </span>
                  </div>
                  <span
                    className="shrink-0 text-[10px] font-mono font-semibold px-2 py-1 rounded-full whitespace-nowrap"
                    style={{
                      color: s.color,
                      background: s.bg,
                      border: `1px solid ${s.border}`,
                    }}
                  >
                    {skill.status === 'live' && (
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 align-middle"
                        style={{ background: s.color, boxShadow: `0 0 5px ${s.color}` }}
                      />
                    )}
                    {s.label}
                  </span>
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: '#8099B3', fontFamily: "'DM Sans', sans-serif" }}
                >
                  {skill.description}
                </p>

                {/* Footer detail */}
                <div
                  className="text-[11px] font-mono pt-3"
                  style={{
                    color: s.color,
                    borderTop: `1px solid ${s.cardBorder}`,
                    opacity: 0.75,
                  }}
                >
                  {skill.detail}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

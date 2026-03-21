// V2: Platform shell visual — ClawOS is the frame, CareerClaw is one live skill inside it.
// Three skill slots visible: first is live, two are upcoming. This communicates
// "platform with one live skill" before the user reads a single word of copy.

const SKILLS_IN_SHELL = [
  {
    id: 'careerclaw',
    name: 'CareerClaw',
    label: 'Job search & outreach',
    status: 'live' as const,
    preview: [
      {
        score: 94,
        title: 'Marketing Director',
        company: 'Brightline Health',
        type: 'Healthcare · Remote',
      },
      {
        score: 88,
        title: 'Operations Lead',
        company: 'Meridian Capital',
        type: 'Finance · Hybrid',
      },
    ],
    draft:
      'Hi Sarah, I came across the Marketing Director opening at Brightline Health and the focus on patient engagement strategy aligns well with my background in health comms…',
  },
  {
    id: 'scrapeclaw',
    name: 'ScrapeClaw',
    label: 'Web monitoring',
    status: 'upcoming' as const,
  },
  {
    id: 'investclaw',
    name: 'InvestClaw',
    label: 'Market signals',
    status: 'planned' as const,
  },
]

export function HeroCardStack() {
  const live = SKILLS_IN_SHELL[0]

  return (
    <div className="relative w-full max-w-[420px] mx-auto" style={{ height: 480 }}>
      {/* Ambient glow */}
      <div
        className="absolute animate-pulse-glow pointer-events-none"
        style={{
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 300,
          height: 220,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,212,161,0.13) 0%, transparent 70%)',
          filter: 'blur(28px)',
        }}
      />

      {/* Platform shell outer frame = ClawOS */}
      <div
        className="absolute inset-0 rounded-2xl overflow-hidden animate-float card-inset flex flex-col"
        style={{ background: '#0A0F1E', border: '1px solid #1E2F4A' }}
      >
        {/* Shell topbar */}
        <div
          className="flex items-center gap-2.5 px-4 py-3 shrink-0"
          style={{ borderBottom: '1px solid #1E2F4A', background: '#07090F' }}
        >
          <span
            className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase"
            style={{ color: '#4A6580' }}
          >
            ClawOS
          </span>
          <div className="flex-1" />
          <span className="text-[10px] font-mono" style={{ color: '#3D5266' }}>
            app.clawoshq.com
          </span>
        </div>

        {/* Skill switcher — shows 3 slots, only CareerClaw is active */}
        <div
          className="flex items-stretch shrink-0"
          style={{ borderBottom: '1px solid #1E2F4A', background: '#0F1523' }}
        >
          {SKILLS_IN_SHELL.map((skill) => (
            <div
              key={skill.id}
              className="flex-1 flex flex-col items-center gap-0.5 px-2 py-2.5 relative"
              style={{
                borderRight: skill.id !== 'investclaw' ? '1px solid #1E2F4A' : 'none',
                opacity: skill.status === 'live' ? 1 : skill.status === 'upcoming' ? 0.45 : 0.22,
              }}
            >
              {skill.status === 'live' && (
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-b"
                  style={{ background: '#00D4A1' }}
                />
              )}
              <span
                className="text-[10px] font-mono font-semibold"
                style={{ color: skill.status === 'live' ? '#00D4A1' : '#6B8299' }}
              >
                {skill.name}
              </span>
              <span className="text-[9px] font-mono" style={{ color: '#3D5266' }}>
                {skill.status === 'live' ? 'LIVE' : skill.status === 'upcoming' ? 'SOON' : 'LATER'}
              </span>
            </div>
          ))}
        </div>

        {/* CareerClaw workspace */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 pt-3 pb-2">
            <span className="text-[11px] font-mono" style={{ color: '#4A6580' }}>
              Daily briefing · 9 new matches
            </span>
            <span
              className="text-[10px] font-mono px-1.5 py-0.5 rounded"
              style={{
                color: '#00D4A1',
                background: 'rgba(0,212,161,0.08)',
                border: '1px solid rgba(0,212,161,0.18)',
              }}
            >
              Draft outreach
            </span>
          </div>

          <div className="px-3 flex flex-col gap-2">
            {live.preview!.map((job, i) => (
              <div
                key={i}
                className="rounded-xl p-3"
                style={{ background: '#162035', border: '1px solid #1A2844' }}
              >
                <div className="flex items-baseline gap-2 mb-0.5">
                  <span
                    className="text-[11px] font-mono font-bold shrink-0"
                    style={{ color: i === 0 ? '#00D4A1' : 'rgba(0,212,161,0.55)' }}
                  >
                    {job.score}%
                  </span>
                  <span
                    className="text-[12px] font-medium leading-tight"
                    style={{ color: '#DDE8F8' }}
                  >
                    {job.title}
                  </span>
                </div>
                <div className="text-[10px]" style={{ color: '#4A6580' }}>
                  {job.company} · {job.type}
                </div>
              </div>
            ))}
          </div>

          {/* Outreach draft — prominent in V2 */}
          <div
            className="mx-3 mt-3 rounded-xl p-3 flex flex-col gap-1.5"
            style={{
              background: '#0F1523',
              border: '1px solid #1E2F4A',
              borderLeft: '2px solid rgba(0,212,161,0.35)',
            }}
          >
            <span
              className="text-[9px] font-mono uppercase tracking-wider"
              style={{ color: '#00D4A1' }}
            >
              Draft outreach · Brightline Health
            </span>
            <p
              className="text-[11px] leading-relaxed"
              style={{ color: '#8099B3', fontStyle: 'italic' }}
            >
              "{live.draft}"
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

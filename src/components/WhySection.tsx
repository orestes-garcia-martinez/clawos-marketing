import { useScrollReveal } from '../hooks/useScrollReveal'

const CARDS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 4v4l3 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: '01',
    title: 'Generic chat gets noisy.',
    body: 'When job searching, research, and finance all share one thread, signals collapse into noise. ClawOS gives each skill its own focused workspace — context stays clean, work stays intentional.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M9 12l2 2 4-4M4 6h12M4 10h6M4 14h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: '02',
    title: 'Marketplace models proved fragile.',
    body: 'Relying on third-party skill installs creates supply chain exposure. When the install surface is open, the risk is structural — not a matter of vetting individual packages. ClawOS uses first-party engines only, by design.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2l2 4h4l-3.3 2.4 1.3 4L10 10l-4 2.4 1.3-4L4 6h4l2-4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: '03',
    title: 'Ownership matters.',
    body: "One account. One billing relationship. No dependency on a marketplace you don't control. Your data, preferences, and history are yours — across Web and messaging channels.",
  },
]

export function WhySection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>

  return (
    <section id="why" ref={sectionRef} className="relative py-28" style={{ background: '#07090F' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 reveal" style={{ transitionDelay: '0ms' }}>
          <div
            className="text-[11px] font-mono font-medium tracking-[0.16em] uppercase mb-4"
            style={{ color: '#4A6580' }}
          >
            // Why it exists
          </div>
          <h2
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight max-w-xl"
            style={{ fontFamily: "'Syne', sans-serif", color: '#DDE8F8' }}
          >
            Built for work that doesn't belong in a generic chat.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="reveal rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200"
              style={{
                transitionDelay: `${80 + i * 80}ms`,
                background: '#0F1523',
                border: '1px solid #1E2F4A',
                boxShadow: 'inset 0 1px 0 rgba(221,232,248,0.04)',
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
              <div className="flex items-start justify-between gap-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(0,212,161,0.08)', color: '#00D4A1' }}
                >
                  {card.icon}
                </div>
                <span className="text-[11px] font-mono font-semibold" style={{ color: '#4A6580' }}>
                  {card.label}
                </span>
              </div>
              <h3
                className="text-base font-display font-semibold"
                style={{ fontFamily: "'Syne', sans-serif", color: '#DDE8F8' }}
              >
                {card.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#8099B3', fontFamily: "'DM Sans', sans-serif" }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

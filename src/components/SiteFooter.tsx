// V2: SiteFooter — contrast rules:
//   - Active footer links: #6B8299 → #8099B3 (readable)
//   - "soon" disabled links: #3D5266 → #4A6580 (legible as disabled, not invisible)
//   - Column group headers: #3D5266 stays (structural chrome, deliberately dim)
//   - Copyright bar: #3D5266 stays (legal footnote, fine to be dim)
//   - Brand description: #3D5266 → #4A6580 (should be readable)

const FOOTER_LINKS: Record<string, { label: string; href: string; soon?: boolean }[]> = {
  Product: [
    { label: 'Open app', href: 'https://app.clawoshq.com' },
    { label: 'Sign in', href: 'https://app.clawoshq.com' },
    { label: 'CareerClaw', href: 'https://app.clawoshq.com' },
  ],
  Platform: [
    { label: 'Why ClawOS', href: '#why' },
    { label: 'How it works', href: '#platform' },
    { label: 'Security', href: '#security' },
  ],
  Resources: [
    { label: 'Docs', href: '/docs', soon: true },
    { label: 'Status', href: '/status', soon: true },
    { label: 'FAQ', href: '#faq' },
  ],
  Legal: [
    { label: 'Privacy', href: '/privacy', soon: true },
    { label: 'Terms', href: '/terms', soon: true },
  ],
}

export function SiteFooter() {
  return (
    <footer
      className="relative pt-16 pb-10"
      style={{ background: '#07090F', borderTop: '1px solid #1E2F4A' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-14">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2 leading-none">
              <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <circle cx="14" cy="14" r="13" stroke="#00D4A1" strokeWidth="1.2" opacity="0.22" />
                <path
                  d="M14 6C13 8 10.5 10.5 10.5 14c0 2 1 3.5 1 3.5S10 20 9.5 22.5"
                  stroke="#00D4A1"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M14 5.5V14c0 2 0 4 0 4s0 2.5 0 4.5"
                  stroke="#00D4A1"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M14 6c1 2 3.5 4.5 3.5 8 0 2-1 3.5-1 3.5s1.5 2.5 2 5"
                  stroke="#00D4A1"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M9.5 22.5Q14 25 18.5 22.5"
                  stroke="#00D4A1"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.65"
                />
              </svg>
              <div className="flex flex-col leading-none">
                <span
                  className="text-base font-display font-bold tracking-tight"
                  style={{ fontFamily: "'Syne', sans-serif", color: '#DDE8F8' }}
                >
                  ClawOS
                </span>
                <span
                  className="text-[8px] font-mono tracking-[0.18em] uppercase mt-[2px]"
                  style={{ color: '#3D5266' }}
                >
                  Multi-Skill Platform
                </span>
              </div>
            </div>
            {/* Brand description raised to #4A6580 for legibility */}
            <p
              className="text-xs leading-relaxed max-w-[200px]"
              style={{ color: '#4A6580', fontFamily: "'DM Sans', sans-serif" }}
            >
              Security-first AI skills for professionals. One account, focused workspaces, trusted
              engines.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group} className="flex flex-col gap-3">
              {/* Group header: stays dim — structural chrome */}
              <span
                className="text-[10px] font-mono font-semibold tracking-[0.14em] uppercase"
                style={{ color: '#3D5266' }}
              >
                {group}
              </span>
              <div className="flex flex-col gap-2">
                {links.map((link) => {
                  const isSoon = Boolean(link.soon)
                  return (
                    <a
                      key={link.label}
                      href={isSoon ? undefined : link.href}
                      className="text-xs flex items-center gap-1.5 transition-colors"
                      style={{
                        // soon links: #4A6580 — legible as disabled
                        // active links: #8099B3 — clearly readable
                        color: isSoon ? '#4A6580' : '#8099B3',
                        cursor: isSoon ? 'default' : 'pointer',
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                      onMouseEnter={(e) => {
                        if (!isSoon) {
                          ;(e.currentTarget as HTMLElement).style.color = '#DDE8F8'
                        }
                      }}
                      onMouseLeave={(e) => {
                        ;(e.currentTarget as HTMLElement).style.color = isSoon
                          ? '#4A6580'
                          : '#8099B3'
                      }}
                    >
                      {link.label}
                      {isSoon && (
                        <span
                          className="text-[9px] font-mono px-1.5 py-0.5 rounded"
                          style={{
                            background: '#162035',
                            color: '#4A6580',
                            border: '1px solid #1E2F4A',
                          }}
                        >
                          soon
                        </span>
                      )}
                    </a>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar — copyright stays dim, this is a legal footnote */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-6"
          style={{ borderTop: '1px solid #1A2844' }}
        >
          <span className="text-[11px] font-mono" style={{ color: '#3D5266' }}>
            © 2026 ClawOS · clawoshq.com
          </span>
          <span className="text-[11px] font-mono" style={{ color: '#3D5266' }}>
            security-first · first-party skills · no marketplace risk
          </span>
        </div>
      </div>
    </footer>
  )
}

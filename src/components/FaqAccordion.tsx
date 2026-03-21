// V2: Tighter answers, one-open-at-a-time accordion (exclusive state).

import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const FAQS = [
  {
    q: 'What is ClawOS?',
    a: 'ClawOS is a security-first AI skills platform for professionals. Each skill — like CareerClaw — has its own focused workspace and first-party engine. One account, one platform, access across multiple channels.',
  },
  {
    q: 'Is CareerClaw available now?',
    a: 'Yes. CareerClaw is live on Web and Telegram, free to start. It covers job search and outreach automation: daily ranked briefings, match scoring, application tracking, and draft outreach generation. ClawOS Pro unlocks deeper intelligence across the platform — starting today with enhanced CareerClaw capabilities.',
  },
  {
    q: 'Do I need Telegram to use ClawOS?',
    a: 'No. Web is the primary interface and works on its own. Telegram is a supported channel for users who prefer to work through messaging apps. The platform is designed to extend across channels — your account, skills, and history are not tied to any one interface.',
  },
  {
    q: 'Is ClawOS Pro just for CareerClaw?',
    a: 'No. ClawOS Pro is a platform-wide subscription. Today, it unlocks deeper capabilities in CareerClaw — enhanced outreach drafts, resume analysis, expanded match results, and AI-generated cover letters. As ScrapeClaw, InvestClaw, and future skills launch, Pro extends to cover them automatically. One subscription, expanding value.',
  },
  {
    q: 'Will more skills be added?',
    a: "Yes. ScrapeClaw (web monitoring and research) and InvestClaw (market signals and portfolio tracking) are on the roadmap. They'll launch on the same platform foundation with the same security model and the same account.",
  },
  {
    q: 'Is this a third-party skill marketplace?',
    a: "No — and intentionally not. Every ClawOS skill engine is first-party, owned, and audited by ClawOS. There's no open install surface. This is a permanent architectural decision, not a phase.",
  },
  {
    q: 'Why does the security model matter?',
    a: 'Open skill marketplaces create supply-chain risk: code from unknown sources runs in your environment on install. ClawOS eliminates that risk at the architecture level. Every skill is built and maintained by ClawOS — what you use is what was audited.',
  },
  {
    q: 'What does the free tier include?',
    a: 'Daily briefing, 3 top-ranked job matches per run, application tracking, and template-based outreach drafts. No credit card required. The free tier is genuinely useful — not a crippled preview.',
  },
  {
    q: 'How is my resume data handled?',
    a: 'Only extracted text is stored — your PDF is processed in memory and immediately discarded. Resume data is isolated with row-level security. You can view or delete it at any time from Settings.',
  },
]

function FaqItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string
  a: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className="rounded-xl overflow-hidden transition-colors duration-200"
      style={{
        border: `1px solid ${isOpen ? 'rgba(0,212,161,0.22)' : '#1E2F4A'}`,
        background: isOpen ? '#0F1523' : 'transparent',
      }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span
          className="text-sm font-semibold"
          style={{ color: '#DDE8F8', fontFamily: "'DM Sans', sans-serif" }}
        >
          {q}
        </span>
        <span
          className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200"
          style={{
            background: isOpen ? 'rgba(0,212,161,0.12)' : 'rgba(30,47,74,0.5)',
            color: isOpen ? '#00D4A1' : '#8099B3',
            transform: isOpen ? 'rotate(45deg)' : 'none',
          }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 2v6M2 5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="px-5 pb-5">
          <p
            className="text-sm leading-relaxed"
            style={{ color: '#8099B3', fontFamily: "'DM Sans', sans-serif" }}
          >
            {a}
          </p>
        </div>
      )}
    </div>
  )
}

export function FaqAccordion() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>
  // Exclusive: only one open at a time. null = all closed.
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIdx((prev) => (prev === i ? null : i))

  return (
    <section id="faq" ref={sectionRef} className="relative py-28" style={{ background: '#07090F' }}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12 reveal">
          <div
            className="text-[11px] font-mono font-medium tracking-[0.16em] uppercase mb-4"
            style={{ color: '#4A6580' }}
          >
            // Common questions
          </div>
          <h2
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif", color: '#DDE8F8' }}
          >
            Everything you need to know.
          </h2>
        </div>

        <div className="reveal flex flex-col gap-2.5" style={{ transitionDelay: '80ms' }}>
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              q={item.q}
              a={item.a}
              isOpen={openIdx === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

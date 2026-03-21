import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ProSection } from './ProSection'

vi.mock('../hooks/useScrollReveal', () => ({
  useScrollReveal: () => ({ current: null }),
}))

describe('ProSection', () => {
  it('renders the ClawOS Pro heading', () => {
    render(<ProSection />)
    expect(screen.getByText(/One Pro plan\. Expanding value\./i)).toBeInTheDocument()
  })

  it('renders the price badge', () => {
    render(<ProSection />)
    expect(screen.getByText('$9 / month')).toBeInTheDocument()
  })

  it('renders the "Available now via CareerClaw" badge', () => {
    render(<ProSection />)
    expect(screen.getByText(/Available now via CareerClaw/i)).toBeInTheDocument()
  })

  it('renders all pro features', () => {
    render(<ProSection />)
    expect(screen.getByText('LLM-enhanced outreach drafts')).toBeInTheDocument()
    expect(screen.getByText('10 ranked matches per briefing')).toBeInTheDocument()
    expect(screen.getByText('Resume gap analysis')).toBeInTheDocument()
    expect(screen.getByText('AI-generated cover letters')).toBeInTheDocument()
    expect(screen.getByText('Priority processing')).toBeInTheDocument()
  })

  it('renders the Upgrade CTA linking to app', () => {
    render(<ProSection />)
    const cta = screen.getByText(/Upgrade to ClawOS Pro/i).closest('a')
    expect(cta).toHaveAttribute('href', 'https://app.clawoshq.com')
  })

  it('renders the "Grows with the platform" badge', () => {
    render(<ProSection />)
    expect(screen.getByText('Grows with the platform')).toBeInTheDocument()
  })

  it('renders future skill names', () => {
    render(<ProSection />)
    expect(screen.getByText('ScrapeClaw')).toBeInTheDocument()
    expect(screen.getByText('InvestClaw')).toBeInTheDocument()
    expect(screen.getByText('Future skills')).toBeInTheDocument()
  })

  it('renders future skill status badges', () => {
    render(<ProSection />)
    expect(screen.getByText('COMING NEXT')).toBeInTheDocument()
    expect(screen.getByText('PLANNED')).toBeInTheDocument()
    expect(screen.getByText('ONGOING')).toBeInTheDocument()
  })
})

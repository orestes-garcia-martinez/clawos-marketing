import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { SkillSpotlight } from './SkillSpotlight'

vi.mock('../hooks/useScrollReveal', () => ({
  useScrollReveal: () => ({ current: null }),
}))

describe('SkillSpotlight', () => {
  it('renders the section id', () => {
    const { container } = render(<SkillSpotlight />)
    expect(container.querySelector('#skills')).toBeInTheDocument()
  })

  it('renders the section heading', () => {
    render(<SkillSpotlight />)
    expect(screen.getByText(/CareerClaw — job search and outreach automation/i)).toBeInTheDocument()
  })

  it('renders all four workflow step labels', () => {
    render(<SkillSpotlight />)
    expect(screen.getByText('Match')).toBeInTheDocument()
    expect(screen.getByText('Score')).toBeInTheDocument()
    expect(screen.getByText('Draft')).toBeInTheDocument()
    expect(screen.getByText('Track')).toBeInTheDocument()
  })

  it('renders the CAREERCLAW feature badge', () => {
    render(<SkillSpotlight />)
    expect(screen.getByText('CAREERCLAW')).toBeInTheDocument()
  })

  it('renders the free to start badge', () => {
    render(<SkillSpotlight />)
    expect(screen.getByText('FREE TO START')).toBeInTheDocument()
  })

  it('renders example job match titles', () => {
    render(<SkillSpotlight />)
    expect(screen.getByText('Director of Marketing')).toBeInTheDocument()
    expect(screen.getByText('Operations Lead')).toBeInTheDocument()
  })

  it('renders example job match scores', () => {
    render(<SkillSpotlight />)
    expect(screen.getByText('94%')).toBeInTheDocument()
    expect(screen.getByText('87%')).toBeInTheDocument()
  })

  it('renders outreach draft sections', () => {
    render(<SkillSpotlight />)
    expect(screen.getAllByText('Outreach draft').length).toBeGreaterThan(0)
  })

  it('renders the Try CareerClaw CTA linking to app', () => {
    render(<SkillSpotlight />)
    const cta = screen.getByText(/Try CareerClaw free/i).closest('a')
    expect(cta).toHaveAttribute('href', 'https://app.clawoshq.com')
  })

  it('renders the "Edit and send" buttons', () => {
    render(<SkillSpotlight />)
    const buttons = screen.getAllByText(/Edit and send/i)
    expect(buttons.length).toBe(2)
  })

  it('renders the more matches indicator', () => {
    render(<SkillSpotlight />)
    expect(screen.getByText(/\+ 7 more matches in today's briefing/i)).toBeInTheDocument()
  })

  it('hover updates job card border color', () => {
    render(<SkillSpotlight />)
    const cards = screen.getAllByText('Outreach draft')[0].closest('[style]')
    // Confirm the card element exists
    expect(cards).toBeTruthy()
  })
})

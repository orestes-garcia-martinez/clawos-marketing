import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { SkillRoadmap } from './SkillRoadmap'

vi.mock('../hooks/useScrollReveal', () => ({
  useScrollReveal: () => ({ current: null }),
}))

describe('SkillRoadmap', () => {
  it('renders the section heading', () => {
    render(<SkillRoadmap />)
    expect(screen.getByText(/ClawOS is bigger than one skill/i)).toBeInTheDocument()
  })

  it('renders the eyebrow label', () => {
    render(<SkillRoadmap />)
    expect(screen.getByText(/Platform expansion/i)).toBeInTheDocument()
  })

  it('renders all three skill names', () => {
    render(<SkillRoadmap />)
    expect(screen.getByText('CareerClaw')).toBeInTheDocument()
    expect(screen.getByText('ScrapeClaw')).toBeInTheDocument()
    expect(screen.getByText('InvestClaw')).toBeInTheDocument()
  })

  it('renders all three skill taglines', () => {
    render(<SkillRoadmap />)
    expect(screen.getByText('Job search & outreach automation')).toBeInTheDocument()
    expect(screen.getByText('Web monitoring & research automation')).toBeInTheDocument()
    expect(screen.getByText('Market signal monitoring')).toBeInTheDocument()
  })

  it('renders the correct status badges', () => {
    render(<SkillRoadmap />)
    expect(screen.getByText('LIVE NOW')).toBeInTheDocument()
    expect(screen.getByText('COMING NEXT')).toBeInTheDocument()
    expect(screen.getByText('PLANNED')).toBeInTheDocument()
  })

  it('renders the detail footers for each skill', () => {
    render(<SkillRoadmap />)
    expect(screen.getByText(/Live now · Web \+ Telegram · Free \+ Pro/i)).toBeInTheDocument()
    expect(screen.getByText(/Coming next · Web \+ Telegram/i)).toBeInTheDocument()
    expect(screen.getByText(/Planned · Phase 3/i)).toBeInTheDocument()
  })

  it('renders skill descriptions', () => {
    render(<SkillRoadmap />)
    expect(screen.getByText(/246-test validated engine/i)).toBeInTheDocument()
    expect(screen.getByText(/without writing a line of code/i)).toBeInTheDocument()
  })
})

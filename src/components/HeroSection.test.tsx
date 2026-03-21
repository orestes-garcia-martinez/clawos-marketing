import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { HeroSection } from './HeroSection'

describe('HeroSection', () => {
  it('renders the platform eyebrow labels', () => {
    render(<HeroSection />)
    expect(screen.getByText('ClawOS Platform')).toBeInTheDocument()
    expect(screen.getByText('Security-First')).toBeInTheDocument()
    expect(screen.getByText('Built for Professionals')).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<HeroSection />)
    expect(screen.getByText('One platform.')).toBeInTheDocument()
    expect(screen.getByText('Purpose-built')).toBeInTheDocument()
    expect(screen.getByText('AI skills.')).toBeInTheDocument()
  })

  it('renders the live status pill', () => {
    render(<HeroSection />)
    expect(screen.getByText(/First skill live — CareerClaw on Web/i)).toBeInTheDocument()
  })

  it('renders Get started free and See how it works CTAs', () => {
    render(<HeroSection />)
    expect(screen.getByText('Get started free')).toBeInTheDocument()
    expect(screen.getByText(/See how it works/i)).toBeInTheDocument()
  })

  it('Get started free links to the app', () => {
    render(<HeroSection />)
    const cta = screen.getByText('Get started free').closest('a')
    expect(cta).toHaveAttribute('href', 'https://app.clawoshq.com')
  })

  it('See how it works links to #platform', () => {
    render(<HeroSection />)
    const link = screen.getByText(/See how it works/i).closest('a')
    expect(link).toHaveAttribute('href', '#platform')
  })

  it('renders the HeroCardStack inside the section', () => {
    render(<HeroSection />)
    // HeroCardStack renders the ClawOS shell topbar label
    expect(screen.getAllByText('ClawOS').length).toBeGreaterThan(0)
  })
})

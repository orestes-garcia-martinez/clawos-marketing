import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { FinalCtaBand } from './FinalCtaBand'

vi.mock('../hooks/useScrollReveal', () => ({
  useScrollReveal: () => ({ current: null }),
}))

describe('FinalCtaBand', () => {
  it('renders the main heading', () => {
    render(<FinalCtaBand />)
    expect(screen.getByText('Start with CareerClaw.')).toBeInTheDocument()
    expect(screen.getByText('Grow into ClawOS.')).toBeInTheDocument()
  })

  it('renders the eyebrow label', () => {
    render(<FinalCtaBand />)
    expect(screen.getByText('// Get started')).toBeInTheDocument()
  })

  it('renders the body copy', () => {
    render(<FinalCtaBand />)
    expect(screen.getByText(/CareerClaw is free to start/i)).toBeInTheDocument()
  })

  it('renders Get started free CTA linking to app', () => {
    render(<FinalCtaBand />)
    const cta = screen.getByText('Get started free').closest('a')
    expect(cta).toHaveAttribute('href', 'https://app.clawoshq.com')
  })

  it('renders Sign in CTA linking to app', () => {
    render(<FinalCtaBand />)
    const signIn = screen.getByText(/Sign in →/i).closest('a')
    expect(signIn).toHaveAttribute('href', 'https://app.clawoshq.com')
  })
})

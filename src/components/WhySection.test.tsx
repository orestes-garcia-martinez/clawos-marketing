import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { WhySection } from './WhySection'

vi.mock('../hooks/useScrollReveal', () => ({
  useScrollReveal: () => ({ current: null }),
}))

describe('WhySection', () => {
  it('renders the section heading', () => {
    render(<WhySection />)
    expect(
      screen.getByText(/Built for work that doesn't belong in a generic chat/i),
    ).toBeInTheDocument()
  })

  it('renders the eyebrow label', () => {
    render(<WhySection />)
    expect(screen.getByText(/Why it exists/i)).toBeInTheDocument()
  })

  it('renders all three card labels', () => {
    render(<WhySection />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
  })

  it('renders all three card titles', () => {
    render(<WhySection />)
    expect(screen.getByText('Generic chat gets noisy.')).toBeInTheDocument()
    expect(screen.getByText('Marketplace models proved fragile.')).toBeInTheDocument()
    expect(screen.getByText('Ownership matters.')).toBeInTheDocument()
  })

  it('renders all three card body texts', () => {
    render(<WhySection />)
    expect(screen.getByText(/context stays clean, work stays intentional/i)).toBeInTheDocument()
    expect(screen.getByText(/supply chain exposure/i)).toBeInTheDocument()
    expect(screen.getByText(/One account\. One billing relationship/i)).toBeInTheDocument()
  })

  it('section has the correct id', () => {
    const { container } = render(<WhySection />)
    expect(container.querySelector('#why')).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { TrustBand } from './TrustBand'

vi.mock('../hooks/useScrollReveal', () => ({
  useScrollReveal: () => ({ current: null }),
}))

describe('TrustBand', () => {
  it('renders the section id', () => {
    const { container } = render(<TrustBand />)
    expect(container.querySelector('#security')).toBeInTheDocument()
  })

  it('renders the section heading', () => {
    render(<TrustBand />)
    expect(screen.getByText(/Trust isn't a feature/i)).toBeInTheDocument()
    expect(screen.getByText(/It's the foundation/i)).toBeInTheDocument()
  })

  it('renders all four trust item titles', () => {
    render(<TrustBand />)
    expect(screen.getByText('No third-party installs — ever')).toBeInTheDocument()
    expect(screen.getByText('Every dependency reviewed on every change')).toBeInTheDocument()
    expect(screen.getByText('Your data stays yours')).toBeInTheDocument()
    expect(screen.getByText('Controlled execution — always')).toBeInTheDocument()
  })

  it('renders the security scanning strip headline', () => {
    render(<TrustBand />)
    expect(
      screen.getByText(/Continuous security scanning across every component/i),
    ).toBeInTheDocument()
  })

  it('renders all four security tooling badges', () => {
    render(<TrustBand />)
    expect(screen.getByText('npm audit')).toBeInTheDocument()
    expect(screen.getByText('Socket.dev')).toBeInTheDocument()
    expect(screen.getByText('Snyk')).toBeInTheDocument()
    expect(screen.getByText('Dependabot')).toBeInTheDocument()
  })

  it('renders the eyebrow label', () => {
    render(<TrustBand />)
    expect(screen.getByText(/Security first/i)).toBeInTheDocument()
  })
})

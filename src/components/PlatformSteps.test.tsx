import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { PlatformSteps } from './PlatformSteps'

vi.mock('../hooks/useScrollReveal', () => ({
  useScrollReveal: () => ({ current: null }),
}))

describe('PlatformSteps', () => {
  it('renders the section id', () => {
    const { container } = render(<PlatformSteps />)
    expect(container.querySelector('#platform')).toBeInTheDocument()
  })

  it('renders the "How it works" heading', () => {
    render(<PlatformSteps />)
    expect(
      screen.getByText(/One platform to access and grow\. Focused skills to do the work\./i),
    ).toBeInTheDocument()
  })

  it('renders all four step numbers', () => {
    render(<PlatformSteps />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
    expect(screen.getByText('04')).toBeInTheDocument()
  })

  it('renders all four step titles', () => {
    render(<PlatformSteps />)
    expect(screen.getByText('Sign in once, access anywhere')).toBeInTheDocument()
    expect(screen.getByText('Work inside a focused skill')).toBeInTheDocument()
    expect(screen.getByText('Trusted engines handle the work')).toBeInTheDocument()
    expect(screen.getByText('Add skills as your needs grow')).toBeInTheDocument()
  })

  it('renders the "What makes it different" section', () => {
    render(<PlatformSteps />)
    expect(screen.getByText(/Platform architecture, not another tool/i)).toBeInTheDocument()
  })

  it('renders all three differentiator titles', () => {
    render(<PlatformSteps />)
    expect(screen.getByText('Focused workspaces, not one noisy thread')).toBeInTheDocument()
    expect(screen.getByText('Owned distribution, no marketplace risk')).toBeInTheDocument()
    expect(screen.getByText('Skills are additive, not replaced')).toBeInTheDocument()
  })
})

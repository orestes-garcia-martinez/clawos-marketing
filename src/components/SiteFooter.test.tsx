import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SiteFooter } from './SiteFooter'

describe('SiteFooter', () => {
  it('renders the ClawOS brand name', () => {
    render(<SiteFooter />)
    expect(screen.getByText('ClawOS')).toBeInTheDocument()
  })

  it('renders the brand description', () => {
    render(<SiteFooter />)
    expect(screen.getByText(/Security-first AI skills for professionals/i)).toBeInTheDocument()
  })

  it('renders all footer group headers', () => {
    render(<SiteFooter />)
    expect(screen.getByText('Product')).toBeInTheDocument()
    expect(screen.getByText('Platform')).toBeInTheDocument()
    expect(screen.getByText('Resources')).toBeInTheDocument()
    expect(screen.getByText('Legal')).toBeInTheDocument()
  })

  it('renders active product links with correct hrefs', () => {
    render(<SiteFooter />)
    const openApp = screen.getAllByText('Open app')[0].closest('a')
    expect(openApp).toHaveAttribute('href', 'https://app.clawoshq.com')
  })

  it('renders "soon" links without an href', () => {
    render(<SiteFooter />)
    const docsLink = screen.getByText('Docs').closest('a')
    expect(docsLink).not.toHaveAttribute('href')
  })

  it('renders "soon" badges next to disabled links', () => {
    render(<SiteFooter />)
    const soonBadges = screen.getAllByText('soon')
    expect(soonBadges.length).toBeGreaterThan(0)
  })

  it('renders the copyright bar', () => {
    render(<SiteFooter />)
    expect(screen.getByText(/© 2026 ClawOS/i)).toBeInTheDocument()
  })

  it('renders the security tagline in the bottom bar', () => {
    render(<SiteFooter />)
    expect(
      screen.getByText(/security-first · first-party skills · no marketplace risk/i),
    ).toBeInTheDocument()
  })

  it('renders platform anchor links correctly', () => {
    render(<SiteFooter />)
    expect(screen.getByText('Why ClawOS').closest('a')).toHaveAttribute('href', '#why')
    expect(screen.getByText('How it works').closest('a')).toHaveAttribute('href', '#platform')
    expect(screen.getByText('Security').closest('a')).toHaveAttribute('href', '#security')
    expect(screen.getByText('FAQ').closest('a')).toHaveAttribute('href', '#faq')
  })
})

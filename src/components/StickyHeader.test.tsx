import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { StickyHeader } from './StickyHeader'

vi.mock('../hooks/useScrollHeader', () => ({
  useScrollHeader: () => false,
}))

describe('StickyHeader', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the ClawOS logo and wordmark', () => {
    render(<StickyHeader />)
    expect(screen.getByLabelText('ClawOS home')).toBeInTheDocument()
    expect(screen.getByText('ClawOS')).toBeInTheDocument()
    expect(screen.getByText('Multi-Skill Platform')).toBeInTheDocument()
  })

  it('renders all desktop navigation links', () => {
    render(<StickyHeader />)
    expect(screen.getByText('Why')).toBeInTheDocument()
    expect(screen.getByText('Platform')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText('Security')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
  })

  it('renders Sign in and Open app CTA links', () => {
    render(<StickyHeader />)
    expect(screen.getByText('Sign in')).toBeInTheDocument()
    expect(screen.getByText('Open app')).toBeInTheDocument()
  })

  it('mobile menu is hidden by default', () => {
    render(<StickyHeader />)
    // Mobile menu items should not be visible initially
    expect(screen.queryByText('Get started free')).not.toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', () => {
    render(<StickyHeader />)
    const menuButton = screen.getByLabelText('Toggle menu')

    fireEvent.click(menuButton)
    expect(screen.getByText('Get started free')).toBeInTheDocument()

    fireEvent.click(menuButton)
    expect(screen.queryByText('Get started free')).not.toBeInTheDocument()
  })

  it('mobile menu closes when a nav link is clicked', () => {
    render(<StickyHeader />)
    fireEvent.click(screen.getByLabelText('Toggle menu'))
    expect(screen.getByText('Get started free')).toBeInTheDocument()

    // Click one of the nav links inside the mobile menu
    const mobileNavLinks = screen.getAllByText('Why')
    fireEvent.click(mobileNavLinks[mobileNavLinks.length - 1])
    expect(screen.queryByText('Get started free')).not.toBeInTheDocument()
  })

  it('nav links point to correct anchors', () => {
    render(<StickyHeader />)
    expect(screen.getByText('Why').closest('a')).toHaveAttribute('href', '#why')
    expect(screen.getByText('FAQ').closest('a')).toHaveAttribute('href', '#faq')
  })
})

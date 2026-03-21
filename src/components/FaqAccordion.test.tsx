import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { FaqAccordion } from './FaqAccordion'

vi.mock('../hooks/useScrollReveal', () => ({
  useScrollReveal: () => ({ current: null }),
}))

describe('FaqAccordion', () => {
  it('renders the section id', () => {
    const { container } = render(<FaqAccordion />)
    expect(container.querySelector('#faq')).toBeInTheDocument()
  })

  it('renders the section heading', () => {
    render(<FaqAccordion />)
    expect(screen.getByText('Everything you need to know.')).toBeInTheDocument()
  })

  it('renders all FAQ questions', () => {
    render(<FaqAccordion />)
    expect(screen.getByText('What is ClawOS?')).toBeInTheDocument()
    expect(screen.getByText('Is CareerClaw available now?')).toBeInTheDocument()
    expect(screen.getByText('Do I need Telegram to use ClawOS?')).toBeInTheDocument()
    expect(screen.getByText('Is ClawOS Pro just for CareerClaw?')).toBeInTheDocument()
    expect(screen.getByText('Will more skills be added?')).toBeInTheDocument()
    expect(screen.getByText('Is this a third-party skill marketplace?')).toBeInTheDocument()
    expect(screen.getByText('Why does the security model matter?')).toBeInTheDocument()
    expect(screen.getByText('What does the free tier include?')).toBeInTheDocument()
    expect(screen.getByText('How is my resume data handled?')).toBeInTheDocument()
  })

  it('answers are hidden by default', () => {
    render(<FaqAccordion />)
    expect(
      screen.queryByText(/ClawOS is a security-first AI skills platform/i),
    ).not.toBeInTheDocument()
  })

  it('expands an answer when the question is clicked', () => {
    render(<FaqAccordion />)
    fireEvent.click(screen.getByText('What is ClawOS?'))
    expect(screen.getByText(/ClawOS is a security-first AI skills platform/i)).toBeInTheDocument()
  })

  it('collapses an open answer when clicked again', () => {
    render(<FaqAccordion />)
    fireEvent.click(screen.getByText('What is ClawOS?'))
    expect(screen.getByText(/ClawOS is a security-first AI skills platform/i)).toBeInTheDocument()
    fireEvent.click(screen.getByText('What is ClawOS?'))
    expect(
      screen.queryByText(/ClawOS is a security-first AI skills platform/i),
    ).not.toBeInTheDocument()
  })

  it('only one FAQ item is open at a time (exclusive accordion)', () => {
    render(<FaqAccordion />)

    fireEvent.click(screen.getByText('What is ClawOS?'))
    expect(screen.getByText(/ClawOS is a security-first AI skills platform/i)).toBeInTheDocument()

    fireEvent.click(screen.getByText('Is CareerClaw available now?'))
    // Second answer visible
    expect(screen.getByText(/CareerClaw is live on Web and Telegram/i)).toBeInTheDocument()
    // First answer collapsed
    expect(
      screen.queryByText(/ClawOS is a security-first AI skills platform/i),
    ).not.toBeInTheDocument()
  })

  it('sets aria-expanded correctly on toggle', () => {
    render(<FaqAccordion />)
    const button = screen.getByRole('button', { name: 'What is ClawOS?' })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })
})

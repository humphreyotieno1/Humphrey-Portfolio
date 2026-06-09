'use client'

import { useEffect, useState } from 'react'
import { site } from '@/data/content'
import { validateContactClient } from '@/lib/contact/validation'

const inputClass =
  'w-full border border-line bg-paper px-4 py-3 text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none transition-colors'

export default function ContactSection() {
  const [formStartedAt] = useState(() => Date.now())
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phoneNumber: '',
    message: '',
    agreed: false,
    website: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState({ type: '', text: '' })

  useEffect(() => {
    if (feedback.text) {
      const node = document.getElementById('contact-feedback')
      node?.focus()
    }
  }, [feedback.text])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const clientError = validateContactClient(formData)
    if (clientError) {
      setFeedback({ type: 'error', text: clientError })
      return
    }

    setIsSubmitting(true)
    setFeedback({ type: '', text: '' })

    const data = new FormData()
    data.append('firstName', formData.firstName.trim())
    data.append('lastName', formData.lastName.trim())
    data.append('company', formData.company.trim())
    data.append('email', formData.email.trim().toLowerCase())
    data.append('phoneNumber', formData.phoneNumber.trim())
    data.append('message', formData.message.trim())
    data.append('agreed', String(formData.agreed))
    data.append('website', formData.website)
    data.append('formStartedAt', String(formStartedAt))

    try {
      const response = await fetch('/api/contact/', {
        method: 'POST',
        body: data,
      })
      const result = await response.json()

      if (response.ok) {
        setFeedback({ type: 'success', text: result.message })
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          phoneNumber: '',
          message: '',
          agreed: false,
          website: '',
        })
      } else {
        throw new Error(result.error)
      }
    } catch (error) {
      setFeedback({
        type: 'error',
        text: error instanceof Error ? error.message : 'An error occurred. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="mb-12">
        <p className="section-label mb-4">Chapter 06</p>
        <h2 className="section-title mb-4">Let&apos;s talk</h2>
        <p className="story-body max-w-2xl">
          I&apos;m open to full-time roles, freelance projects, and interesting collaborations. Send a message —
          I&apos;ll do my best to reply within 24 hours.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="border border-line bg-paper-dark p-6 md:p-8">
          <h3 className="mb-6 font-sans text-2xl font-semibold text-ink">Send a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-ink">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  maxLength={80}
                  autoComplete="given-name"
                  className={inputClass}
                  placeholder="First name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-ink">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  maxLength={80}
                  autoComplete="family-name"
                  className={inputClass}
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-ink">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  maxLength={120}
                  autoComplete="organization"
                  className={inputClass}
                  placeholder="Company name"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="mb-2 block text-sm font-medium text-ink">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  maxLength={30}
                  autoComplete="tel"
                  className={inputClass}
                  placeholder="Phone number"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                maxLength={254}
                autoComplete="email"
                className={inputClass}
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                minLength={10}
                maxLength={5000}
                className={`${inputClass} resize-none`}
                placeholder="Your message..."
              />
              <p className="mt-2 font-mono text-xs text-ink-faint">{formData.message.length}/5000</p>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agreed"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="mt-1 h-4 w-4 accent-accent"
              />
              <label htmlFor="agreed" className="text-sm leading-relaxed text-ink-muted">
                I agree to the terms and conditions and consent to being contacted regarding my inquiry.
              </label>
            </div>

            {feedback.text && (
              <div
                id="contact-feedback"
                tabIndex={-1}
                role="alert"
                aria-live="polite"
                className={`border px-4 py-3 text-sm ${
                  feedback.type === 'success'
                    ? 'border-green-700/30 bg-green-50 text-green-800'
                    : 'border-red-700/30 bg-red-50 text-red-800'
                }`}
              >
                {feedback.text}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              className="w-full border border-ink bg-ink px-6 py-4 text-sm uppercase tracking-widest text-paper transition-colors hover:bg-accent hover:border-accent disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-ink-faint">Email</p>
            <a href={`mailto:${site.email}`} className="font-sans text-2xl text-ink hover:text-accent">
              {site.email}
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-ink-faint">Based in</p>
            <p className="font-sans text-2xl text-ink">{site.location}</p>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-2xl font-semibold text-ink">Connect</h3>
            <ul className="space-y-3">
              {site.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border-b border-line py-3 text-ink transition-colors hover:text-accent"
                  >
                    <span>{link.label}</span>
                    <span aria-hidden>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

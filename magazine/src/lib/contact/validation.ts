import { sanitizeText } from './sanitize'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^[+()\d\s-]{7,20}$/

export type ContactPayload = {
  firstName: string
  lastName: string
  company: string
  email: string
  phoneNumber: string
  message: string
  agreed: boolean
  website: string
  formStartedAt: number
}

export type ValidationResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; error: string }

export function parseContactForm(formData: FormData): ValidationResult {
  const firstName = sanitizeText(formData.get('firstName'), 80)
  const lastName = sanitizeText(formData.get('lastName'), 80)
  const company = sanitizeText(formData.get('company'), 120)
  const email = sanitizeText(formData.get('email'), 254).toLowerCase()
  const phoneNumber = sanitizeText(formData.get('phoneNumber'), 30)
  const message = sanitizeText(formData.get('message'), 5000)
  const agreed = formData.get('agreed') === 'true'
  const formStartedAt = Number(formData.get('formStartedAt') ?? 0)

  if (!firstName || !lastName || !email || !message) {
    return { ok: false, error: 'All required fields must be filled out.' }
  }

  if (firstName.length < 2 || lastName.length < 2) {
    return { ok: false, error: 'Please enter your full name.' }
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { ok: false, error: 'Please enter a valid email address.' }
  }

  if (phoneNumber && !PHONE_PATTERN.test(phoneNumber)) {
    return { ok: false, error: 'Please enter a valid phone number.' }
  }

  if (message.length < 10) {
    return { ok: false, error: 'Message must be at least 10 characters long.' }
  }

  if (message.length > 5000) {
    return { ok: false, error: 'Message is too long. Please keep it under 5000 characters.' }
  }

  if (!agreed) {
    return { ok: false, error: 'You must agree to the terms and conditions.' }
  }

  const elapsed = Date.now() - formStartedAt
  if (!formStartedAt || elapsed < 3000) {
    return { ok: false, error: 'Please take a moment to complete the form before submitting.' }
  }

  if (elapsed > 1000 * 60 * 60) {
    return { ok: false, error: 'This form session expired. Please refresh and try again.' }
  }

  return {
    ok: true,
    data: {
      firstName,
      lastName,
      company,
      email,
      phoneNumber,
      message,
      agreed,
      website: '',
      formStartedAt,
    },
  }
}

export function validateContactClient(data: Omit<ContactPayload, 'website' | 'formStartedAt'>): string | null {
  if (!data.firstName.trim() || !data.lastName.trim() || !data.email.trim() || !data.message.trim()) {
    return 'All required fields must be filled out.'
  }
  if (data.firstName.trim().length < 2 || data.lastName.trim().length < 2) {
    return 'Please enter your full name.'
  }
  if (!EMAIL_PATTERN.test(data.email.trim().toLowerCase())) {
    return 'Please enter a valid email address.'
  }
  if (data.phoneNumber.trim() && !PHONE_PATTERN.test(data.phoneNumber.trim())) {
    return 'Please enter a valid phone number.'
  }
  if (data.message.trim().length < 10) {
    return 'Message must be at least 10 characters long.'
  }
  if (!data.agreed) {
    return 'You must agree to the terms and conditions.'
  }
  return null
}

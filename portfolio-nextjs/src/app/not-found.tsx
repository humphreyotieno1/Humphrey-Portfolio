import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found | Humphrey Portfolio',
  description: 'The page you are looking for does not exist. Return to Humphrey\'s portfolio homepage.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary text-text-primary">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-6">Page Not Found</h2>
        <p className="text-lg mb-8 text-text-secondary">
          The page you are looking for does not exist.
        </p>
        <Link 
          href="/"
          className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}

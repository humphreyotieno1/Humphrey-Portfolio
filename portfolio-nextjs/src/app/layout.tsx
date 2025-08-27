import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Humphrey Portfolio - Software Engineer',
  description: 'Software engineer specializing in building exceptional digital experiences with modern web technologies.',
  keywords: ['software engineer', 'web developer', 'portfolio', 'react', 'next.js', 'typescript'],
  authors: [{ name: 'Humphrey' }],
  creator: 'Humphrey',
  openGraph: {
    title: 'Humphrey Portfolio - Software Engineer',
    description: 'Software engineer specializing in building exceptional digital experiences.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

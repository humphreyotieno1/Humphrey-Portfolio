import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Humphrey Portfolio - Software Engineer',
  description: 'Software engineer specializing in building exceptional digital experiences with modern web technologies.',
  keywords: ['software engineer', 'web developer', 'portfolio', 'react', 'next.js', 'typescript', 'python'],
  authors: [{ name: 'Humphrey' }],
  creator: 'Humphrey',
  openGraph: {
    title: 'Humphrey Portfolio - Software Engineer',
    description: 'Software engineer specializing in building exceptional digital experiences.',
    type: 'website',
  },
  icons: {
    icon: '/humlogo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-primary text-text-primary min-h-screen">
        {children}
        <BackToTop />
      </body>
    </html>
  )
}

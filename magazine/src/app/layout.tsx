import type { Metadata } from 'next'
import './globals.css'
import BackToTop from '@/components/BackToTop'
import StructuredData from '@/components/StructuredData'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://humphrey.techbiteventures.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Humphrey Otieno — Full Stack Software Engineer',
    template: '%s | Humphrey Otieno',
  },
  description:
    'Magazine-style portfolio of Humphrey Otieno — full stack software engineer in Nairobi, Kenya. React, Next.js, Python, and modern web products.',
  keywords: [
    'Humphrey Otieno',
    'software engineer',
    'full stack developer',
    'React developer',
    'Next.js developer',
    'web developer Kenya',
    'Nairobi developer',
    'portfolio',
  ],
  authors: [{ name: 'Humphrey Otieno', url: siteUrl }],
  creator: 'Humphrey Otieno',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/favicon.png', type: 'image/png' }],
    shortcut: '/favicon.ico',
    apple: '/humlogo.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Humphrey Otieno — Full Stack Software Engineer',
    description: 'Full stack software engineer building thoughtful digital products.',
    url: siteUrl,
    siteName: 'Humphrey Otieno Portfolio',
    images: [{ url: '/hum2.png', width: 1200, height: 630, alt: 'Humphrey Otieno' }],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Humphrey Otieno — Full Stack Software Engineer',
    description: 'Full stack software engineer building thoughtful digital products.',
    images: ['/hum2.png'],
    creator: '@_Banta__',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body>
        {children}
        <BackToTop />
      </body>
    </html>
  )
}

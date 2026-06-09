import type { Metadata } from 'next'
import './globals.css'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Humphrey Otieno — Software Engineer',
  description:
    'A magazine-style portfolio by Humphrey Otieno — full stack software engineer based in Nairobi, Kenya.',
  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/favicon.png', type: 'image/png' }],
    shortcut: '/favicon.ico',
    apple: '/humlogo.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Humphrey Otieno — Software Engineer',
    description: 'Full stack software engineer building thoughtful digital products.',
    images: ['/humlogo.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
        <BackToTop />
      </body>
    </html>
  )
}

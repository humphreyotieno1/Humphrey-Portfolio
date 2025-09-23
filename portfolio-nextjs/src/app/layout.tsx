import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'
import BackToTop from '@/components/BackToTop'
import StructuredData from '@/components/StructuredData'
import GoogleAnalytics from '@/components/GoogleTagManager'
import PerformanceMonitor from '@/components/PerformanceMonitor'

export const metadata: Metadata = {
  title: {
    default: 'Humphrey Otieno - Full Stack Software Engineer | Portfolio',
    template: '%s | Humphrey Otieno'
  },
  description: 'Experienced Full Stack Software Engineer specializing in React, Next.js, Python, and modern web technologies. Building exceptional digital experiences with a focus on performance, accessibility, and user satisfaction.',
  keywords: [
    'software engineer', 
    'web developer', 
    'portfolio', 
    'react', 
    'next.js', 
    'typescript', 
    'python', 
    'full stack developer',
    'frontend developer',
    'backend developer',
    'javascript',
    'node.js',
    'django',
    'fastapi',
    'postgresql',
    'docker',
    'web development',
    'ui/ux design',
    'performance optimization',
    'devops',
    'ci/cd'
  ],
  authors: [{ name: 'Humphrey Otieno', url: 'https://humphrey-portfolio-rho.vercel.app/' }],
  creator: 'Humphrey Otieno',
  publisher: 'Humphrey Otieno',
  metadataBase: new URL('https://humphrey-portfolio-rho.vercel.app/'),
  alternates: {
    canonical: 'https://humphrey-portfolio-rho.vercel.app/',
  },
  openGraph: {
    title: 'Humphrey Otieno - Full Stack Software Engineer',
    description: 'Experienced Full Stack Software Engineer specializing in React, Next.js, Python, and modern web technologies. Building exceptional digital experiences.',
    url: 'https://humphrey-portfolio-rho.vercel.app/',
    siteName: 'Humphrey Portfolio',
    images: [
      {
        url: 'https://humphrey-portfolio-rho.vercel.app//hum.png',
        width: 1200,
        height: 630,
        alt: 'Humphrey Otieno - Full Stack Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Humphrey Otieno - Full Stack Software Engineer',
    description: 'Experienced Full Stack Software Engineer specializing in React, Next.js, Python, and modern web technologies.',
    images: ['https://humphrey-portfolio-rho.vercel.app/hum.png'],
    creator: '@_Banta__',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'G9XneihxEnUEPYZokRGqVlEDTDfVgUbykHQ9v4WoviQ',
  },
  icons: {
    icon: '/humlogo.png',
    shortcut: '/humlogo.png',
    apple: '/humlogo.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
        <GoogleAnalytics GA_TRACKING_ID="G-TBS6R279WG" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5GFBJVJQ');
            `,
          }}
        />
      </head>
      <body className="antialiased bg-primary text-text-primary min-h-screen">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5GFBJVJQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <BackToTop />
        <PerformanceMonitor />
      </body>
    </html>
  )
}

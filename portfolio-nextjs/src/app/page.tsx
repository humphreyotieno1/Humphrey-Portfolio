import { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Work from '@/components/Work'
import Services from '@/components/Services'
import LanguageStack from '@/components/LanguageStack'
import Certifications from '@/components/Certifications'
import PerformanceBenchmark from '@/components/PerformanceBenchmark'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import ClientWrapper from '@/components/ClientWrapper'
import SEOTest from '@/components/SEOTest'

// Static metadata for this page
export const metadata: Metadata = {
  title: 'Home',
  description: 'Humphrey Otieno - Full Stack Software Engineer specializing in React, Next.js, Python, and modern web technologies. View my portfolio, projects, and experience.',
  keywords: [
    'humphrey otieno',
    'software engineer portfolio',
    'full stack developer',
    'react developer',
    'next.js developer',
    'python developer',
    'web development services',
    'frontend developer',
    'backend developer',
    'portfolio website'
  ],
  openGraph: {
    title: 'Humphrey Otieno - Full Stack Software Engineer Portfolio',
    description: 'Experienced Full Stack Software Engineer specializing in React, Next.js, Python, and modern web technologies. Building exceptional digital experiences.',
    url: 'https://humphrey-portfolio-rho.vercel.app/',
    images: [
      {
        url: 'https://humphrey-portfolio-rho.vercel.app/hum.png',
        width: 1200,
        height: 630,
        alt: 'Humphrey Otieno - Full Stack Software Engineer',
      },
    ],
  },
  twitter: {
    title: 'Humphrey Otieno - Full Stack Software Engineer Portfolio',
    description: 'Experienced Full Stack Software Engineer specializing in React, Next.js, Python, and modern web technologies.',
    images: ['https://humphrey-portfolio-rho.vercel.app/hum.png'],
  },
  alternates: {
    canonical: 'https://humphrey-portfolio-rho.vercel.app/',
  },
}

// This function runs at build time for SSG
export async function generateStaticParams() {
  return []
}

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <SEOTest 
        title="Humphrey Otieno - Full Stack Software Engineer Portfolio"
        description="Experienced Full Stack Software Engineer specializing in React, Next.js, Python, and modern web technologies. Building exceptional digital experiences."
        url="https://humphrey-portfolio-rho.vercel.app/"
      />
      <ClientWrapper>
        <Header />
        <Hero />
        <About />
        <LanguageStack />
        <Services />
        <Experience />
        <Work />
        <Certifications />
        <PerformanceBenchmark />
        <Contact />
        <Footer />
        <BackToTop />
      </ClientWrapper>
    </main>
  )
}

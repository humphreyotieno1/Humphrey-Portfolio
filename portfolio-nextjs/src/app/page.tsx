'use client'

import { useState, useEffect } from 'react'
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
import Loader from '@/components/Loader'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <main className="min-h-screen bg-primary">
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
    </main>
  )
}

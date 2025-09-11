'use client'

import { useEffect } from 'react'

interface PortfolioTrackerProps {
  sectionName: string
  children: React.ReactNode
}

export default function PortfolioTracker({ sectionName, children }: PortfolioTrackerProps) {
  useEffect(() => {
    const trackSectionView = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'view_section', {
          event_category: 'portfolio',
          event_label: sectionName,
          value: 1
        })
      }
    }

    // Track when section comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackSectionView()
          }
        })
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById(sectionName)
    if (element) {
      observer.observe(element)
    }

    return () => {
      observer.disconnect()
    }
  }, [sectionName])

  return <>{children}</>
}

// Hook for tracking button clicks and interactions
export const usePortfolioTracking = () => {
  const trackClick = (action: string, category: string, label?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: 1
      })
    }
  }

  const trackDownload = (fileName: string) => {
    trackClick('download', 'portfolio', fileName)
  }

  const trackExternalLink = (url: string) => {
    trackClick('click', 'external_link', url)
  }

  const trackContact = (method: string) => {
    trackClick('contact', 'portfolio', method)
  }

  return {
    trackClick,
    trackDownload,
    trackExternalLink,
    trackContact
  }
}

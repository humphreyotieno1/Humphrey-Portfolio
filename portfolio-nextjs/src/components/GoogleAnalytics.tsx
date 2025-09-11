'use client'

import Script from 'next/script'
import { useEffect } from 'react'

interface GoogleAnalyticsProps {
  GA_TRACKING_ID: string
}

export default function GoogleAnalytics({ GA_TRACKING_ID }: GoogleAnalyticsProps) {
  useEffect(() => {
    // Enhanced tracking for portfolio interactions
    const trackPortfolioInteraction = (action: string, category: string, label?: string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, {
          event_category: category,
          event_label: label,
          value: 1
        })
      }
    }

    // Track scroll depth
    let maxScroll = 0
    const trackScrollDepth = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent
        if (maxScroll >= 25 && maxScroll < 50) {
          trackPortfolioInteraction('scroll', 'engagement', '25%')
        } else if (maxScroll >= 50 && maxScroll < 75) {
          trackPortfolioInteraction('scroll', 'engagement', '50%')
        } else if (maxScroll >= 75 && maxScroll < 90) {
          trackPortfolioInteraction('scroll', 'engagement', '75%')
        } else if (maxScroll >= 90) {
          trackPortfolioInteraction('scroll', 'engagement', '90%')
        }
      }
    }

    // Track time on page
    const startTime = Date.now()
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000)
      if (timeSpent >= 30) {
        trackPortfolioInteraction('time_on_page', 'engagement', '30s')
      }
      if (timeSpent >= 60) {
        trackPortfolioInteraction('time_on_page', 'engagement', '1min')
      }
    }

    // Add event listeners
    window.addEventListener('scroll', trackScrollDepth)
    window.addEventListener('beforeunload', trackTimeOnPage)

    // Track portfolio section views
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.id || entry.target.className
          trackPortfolioInteraction('view_section', 'portfolio', sectionName)
        }
      })
    }, { threshold: 0.5 })

    // Observe portfolio sections
    const sections = document.querySelectorAll('section[id], .portfolio-section')
    sections.forEach(section => observer.observe(section))

    return () => {
      window.removeEventListener('scroll', trackScrollDepth)
      window.removeEventListener('beforeunload', trackTimeOnPage)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: true,
              custom_map: {
                'custom_parameter_1': 'portfolio_interaction'
              }
            });
            
            // Track portfolio page load
            gtag('event', 'page_view', {
              page_title: document.title,
              page_location: window.location.href,
              page_path: window.location.pathname,
              custom_parameter_1: 'portfolio_homepage'
            });
          `,
        }}
      />
    </>
  )
}

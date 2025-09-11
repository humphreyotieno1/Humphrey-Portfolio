'use client'

import { useEffect } from 'react'

interface SEOTestProps {
  title?: string
  description?: string
  url?: string
}

export default function SEOTest({ title, description, url }: SEOTestProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // SEO validation in development
      const validateSEO = () => {
        const issues: string[] = []

        // Check title
        const pageTitle = document.title
        if (!pageTitle || pageTitle.length < 30 || pageTitle.length > 60) {
          issues.push(`Title length issue: ${pageTitle.length} characters (should be 30-60)`)
        }

        // Check meta description
        const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content')
        if (!metaDescription || metaDescription.length < 120 || metaDescription.length > 160) {
          issues.push(`Meta description length issue: ${metaDescription?.length || 0} characters (should be 120-160)`)
        }

        // Check heading structure
        const h1Count = document.querySelectorAll('h1').length
        if (h1Count === 0) {
          issues.push('Missing H1 tag')
        } else if (h1Count > 1) {
          issues.push(`Multiple H1 tags found: ${h1Count}`)
        }

        // Check images alt text
        const imagesWithoutAlt = document.querySelectorAll('img:not([alt])')
        if (imagesWithoutAlt.length > 0) {
          issues.push(`${imagesWithoutAlt.length} images missing alt text`)
        }

        // Check internal links
        const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="#"]')
        const externalLinks = document.querySelectorAll('a[href^="http"]')
        
        console.log('SEO Validation Results:')
        console.log(`- Title: ${pageTitle} (${pageTitle.length} chars)`)
        console.log(`- Meta Description: ${metaDescription} (${metaDescription?.length || 0} chars)`)
        console.log(`- H1 tags: ${h1Count}`)
        console.log(`- Images without alt: ${imagesWithoutAlt.length}`)
        console.log(`- Internal links: ${internalLinks.length}`)
        console.log(`- External links: ${externalLinks.length}`)
        
        if (issues.length > 0) {
          console.warn('SEO Issues found:', issues)
        } else {
          console.log('✅ No SEO issues detected')
        }
      }

      // Run validation after page load
      setTimeout(validateSEO, 1000)
    }
  }, [title, description, url])

  return null
}

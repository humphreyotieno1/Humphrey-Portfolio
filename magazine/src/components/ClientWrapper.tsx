'use client'

import { useEffect, useState } from 'react'
import Loader from '@/components/Loader'

type ClientWrapperProps = {
  children: React.ReactNode
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const [showLoader, setShowLoader] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setShowLoader(false)
      return
    }

    const fadeTimer = window.setTimeout(() => setFading(true), 1800)
    const hideTimer = window.setTimeout(() => setShowLoader(false), 2300)

    return () => {
      window.clearTimeout(fadeTimer)
      window.clearTimeout(hideTimer)
    }
  }, [])

  return (
    <>
      {showLoader && <Loader fading={fading} />}
      <div className={showLoader ? 'invisible' : 'visible'}>{children}</div>
    </>
  )
}

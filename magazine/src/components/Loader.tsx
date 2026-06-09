'use client'

import Image from 'next/image'
import { site } from '@/data/content'

type LoaderProps = {
  fading?: boolean
}

export default function Loader({ fading = false }: LoaderProps) {
  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-paper transition-opacity duration-500 ${
        fading ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      aria-hidden={fading}
      aria-label="Loading portfolio"
      role="status"
    >
      <div className="flex flex-col items-center px-6 text-center">
        <div className="relative mb-8 h-20 w-20 animate-[loader-pulse_1.8s_ease-in-out_infinite]">
          <Image
            src={site.logo}
            alt=""
            width={80}
            height={80}
            className="h-20 w-20 object-contain"
            priority
          />
        </div>

        <p className="section-label mb-2">Portfolio</p>
        <h2 className="font-sans text-3xl font-semibold text-ink">{site.name}</h2>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.3em] text-ink-muted">
          Loading edition…
        </p>

        <div className="mt-10 h-px w-48 overflow-hidden bg-line">
          <div className="loader-progress h-full bg-accent" />
        </div>
      </div>
    </div>
  )
}

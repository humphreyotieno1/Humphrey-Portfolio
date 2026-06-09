'use client'

import { useState } from 'react'
import Image from 'next/image'
import { site } from '@/data/content'

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
        className="fixed top-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-ink lg:hidden"
      >
        <span className="sr-only">Menu</span>
        <div className="flex flex-col gap-1.5">
          <span className={`block h-0.5 w-5 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-5 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-5 bg-ink transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </div>
      </button>

      {open && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 bg-ink/20 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-line bg-paper px-8 py-10 transition-transform duration-300 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <a href="#home" className="mb-12 block" onClick={() => setOpen(false)}>
          <Image
            src={site.logo}
            alt={`${site.name} logo`}
            width={56}
            height={56}
            className="mb-4 h-14 w-14 object-contain"
            priority
          />
          <p className="section-label mb-2">Portfolio</p>
          <h1 className="font-sans text-3xl font-semibold leading-none text-ink">{site.name.split(' ')[0]}</h1>
          <p className="mt-1 font-sans text-xl text-ink-muted">{site.name.split(' ').slice(1).join(' ')}</p>
        </a>

        <nav className="flex flex-1 flex-col gap-1">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-sm px-2 py-2.5 font-mono text-sm tracking-wide text-ink-muted transition-colors hover:bg-paper-dark hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto space-y-4 border-t border-line pt-6">
          <p className="font-mono text-xs leading-relaxed text-ink-faint">{site.location}</p>
          <a href={`mailto:${site.email}`} className="block text-sm text-ink hover:text-accent">
            {site.email}
          </a>
          <p className="font-mono text-xs text-ink-faint">© {new Date().getFullYear()} Humphrey Otieno</p>
        </div>
      </aside>
    </>
  )
}

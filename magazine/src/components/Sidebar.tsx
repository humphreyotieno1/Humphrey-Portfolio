'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { site } from '@/data/content'
import { useScrollSpy } from '@/hooks/useScrollSpy'

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const sectionIds = useMemo(
    () => site.nav.map((item) => item.href.replace('#', '')),
    [],
  )
  const activeId = useScrollSpy(sectionIds)

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    setOpen(false)
    const target = document.querySelector(href)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

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
        <a
          href="#home"
          className="mb-10 block"
          onClick={(event) => handleNavClick(event, '#home')}
        >
          <Image
            src={site.logo}
            alt={`${site.name} logo`}
            width={56}
            height={56}
            className="mb-4 h-14 w-14 object-contain"
            priority
          />
          <p className="section-label mb-2">Portfolio</p>
          <p className="font-sans text-3xl font-semibold leading-none text-ink">{site.name.split(' ')[0]}</p>
          <p className="mt-1 font-sans text-xl text-ink-muted">{site.name.split(' ').slice(1).join(' ')}</p>
        </a>

        <nav className="flex flex-1 flex-col gap-0.5" aria-label="Page sections">
          {site.nav.map((item) => {
            const sectionId = item.href.replace('#', '')
            const isActive = activeId === sectionId

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                aria-current={isActive ? 'location' : undefined}
                className={`group flex items-center gap-2 py-2.5 font-mono text-sm tracking-wide transition-colors duration-200 ${
                  isActive ? 'text-ink' : 'text-ink-faint hover:text-ink-muted'
                }`}
              >
                <span
                  className={`text-accent transition-all duration-200 ${
                    isActive ? 'w-3 translate-x-0 opacity-100' : 'w-0 -translate-x-1 overflow-hidden opacity-0'
                  }`}
                  aria-hidden
                >
                  →
                </span>
                <span className={`relative ${isActive ? 'font-medium' : ''}`}>
                  {item.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-200 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-1/2'
                    }`}
                  />
                </span>
              </a>
            )
          })}
        </nav>

        <div className="mt-auto space-y-4 border-t border-line pt-6">
          <p className="font-mono text-xs leading-relaxed text-ink-faint">{site.location}</p>
          <a href={`mailto:${site.email}`} className="block text-sm text-ink transition-colors hover:text-accent">
            {site.email}
          </a>
          <p className="font-mono text-xs text-ink-faint">© {new Date().getFullYear()} Humphrey Otieno</p>
        </div>
      </aside>
    </>
  )
}

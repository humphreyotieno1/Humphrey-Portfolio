'use client'

import { useEffect, useRef, useState } from 'react'
import { additionalSkillAreas, languages } from '@/data/content'

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [counts, setCounts] = useState<Record<string, number>>({})

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return

    const start = performance.now()
    const duration = 1500
    let frame = 0

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const next: Record<string, number> = {}
      languages.forEach((lang) => {
        next[lang.label] = Math.floor(progress * lang.proficiency)
      })
      setCounts(next)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [visible])

  return (
    <section id="skills" ref={ref} className="border-b border-line py-20">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-label mb-4">Chapter 02</p>
          <h2 className="section-title">Languages &amp; frameworks</h2>
        </div>
        <p className="max-w-md story-body">
          Proficiency levels based on real-world project experience across the stack.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {languages.map((lang) => (
          <div key={lang.label} className="border border-line bg-paper p-4">
            <div className="mb-3 flex items-baseline justify-between gap-2">
              <span className="text-sm font-medium text-ink">{lang.label}</span>
              <span className="font-mono text-sm text-accent">{counts[lang.label] ?? 0}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: `${counts[lang.label] ?? 0}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {additionalSkillAreas.map((area) => (
          <article key={area.title} className="border border-line bg-paper-dark p-6">
            <h3 className="mb-3 font-sans text-lg font-semibold text-ink">{area.title}</h3>
            <p className="story-body text-sm">{area.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

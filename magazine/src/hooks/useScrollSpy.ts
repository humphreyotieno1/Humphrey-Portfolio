'use client'

import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? 'home')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: '-32% 0px -52% 0px',
        threshold: [0, 0.15, 0.35, 0.5],
      },
    )

    sections.forEach((section) => observer.observe(section))

    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight

      if (docHeight > 0 && scrollTop >= docHeight - 48) {
        const lastId = sectionIds[sectionIds.length - 1]
        if (lastId) setActiveId(lastId)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [sectionIds])

  return activeId
}

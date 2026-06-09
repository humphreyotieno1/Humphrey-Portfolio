'use client'

import { useState } from 'react'
import Image from 'next/image'
import { projects } from '@/data/content'

const PROJECTS_PER_PAGE = 6

export default function WorkSection() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE
  const visibleProjects = projects.slice(startIndex, startIndex + PROJECTS_PER_PAGE)

  const goToPage = (page: number) => {
    setCurrentPage(page)
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="work" className="border-b border-line py-20">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-label mb-4">Chapter 04</p>
          <h2 className="section-title">All work</h2>
        </div>
        <p className="max-w-md story-body">
          {projects.length} projects — click any cover to visit the live site.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <a
            key={project.title}
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative mb-5 aspect-[16/10] overflow-hidden bg-paper-dark">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/10" />
              <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-xs uppercase tracking-widest text-ink">
                {String(startIndex + index + 1).padStart(2, '0')}
              </span>
            </div>
            <p className="mb-1 text-xs uppercase tracking-widest text-accent">{project.category}</p>
            <h3 className="mb-2 font-serif text-2xl text-ink transition-colors group-hover:text-accent">
              {project.title}
            </h3>
            <p className="story-body text-base">{project.description}</p>
          </a>
        ))}
      </div>

      {totalPages > 1 && (
        <nav
          aria-label="Project pagination"
          className="mt-14 flex flex-col items-center gap-4 border-t border-line pt-10 sm:flex-row sm:justify-between"
        >
          <p className="text-sm text-ink-muted">
            Page {currentPage} of {totalPages}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="border border-line px-4 py-2 text-xs uppercase tracking-widest text-ink transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => goToPage(page)}
                aria-current={page === currentPage ? 'page' : undefined}
                className={`min-w-10 border px-3 py-2 text-xs uppercase tracking-widest transition-colors ${
                  page === currentPage
                    ? 'border-ink bg-ink text-paper'
                    : 'border-line text-ink hover:border-accent hover:text-accent'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="border border-line px-4 py-2 text-xs uppercase tracking-widest text-ink transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </nav>
      )}
    </section>
  )
}

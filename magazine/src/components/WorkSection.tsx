'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { projectCategories, projects } from '@/data/content'

const PROJECTS_PER_PAGE = 6

export default function WorkSection() {
  const [activeCategory, setActiveCategory] = useState<(typeof projectCategories)[number]>('All')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredProjects = useMemo(
    () =>
      activeCategory === 'All'
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  )

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE
  const visibleProjects = filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE)

  const handleCategoryChange = (category: (typeof projectCategories)[number]) => {
    setActiveCategory(category)
    setCurrentPage(1)
  }

  const goToPage = (page: number) => {
    setCurrentPage(page)
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="work" className="border-b border-line py-20">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-label mb-4">Chapter 04</p>
          <h2 className="section-title">All work</h2>
        </div>
        <p className="max-w-md story-body">
          {filteredProjects.length} projects — filter by category or browse every page.
        </p>
      </div>

      <div className="mb-10 flex flex-wrap gap-2">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => handleCategoryChange(category)}
            className={`border px-3 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
              activeCategory === category
                ? 'border-ink bg-ink text-paper'
                : 'border-line text-ink-muted hover:border-accent hover:text-accent'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {visibleProjects.length === 0 ? (
        <p className="story-body border border-line bg-paper-dark p-8 text-center">
          No projects in this category yet.
        </p>
      ) : (
        <div className="grid gap-10 sm:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <article key={project.title} className="group">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
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
                  <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 font-mono text-xs uppercase tracking-widest text-ink">
                    {String(startIndex + index + 1).padStart(2, '0')}
                  </span>
                </div>
              </a>
              <p className="mb-1 font-mono text-xs uppercase tracking-widest text-accent">{project.category}</p>
              <h3 className="mb-2 font-sans text-2xl font-semibold text-ink">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  {project.title}
                </a>
              </h3>
              <p className="mb-4 story-body text-base">{project.description}</p>
              {'technologies' in project && project.technologies && (
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <nav
          aria-label="Project pagination"
          className="mt-14 flex flex-col items-center gap-4 border-t border-line pt-10 sm:flex-row sm:justify-between"
        >
          <p className="font-mono text-sm text-ink-muted">
            Page {currentPage} of {totalPages}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="border border-line px-4 py-2 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => goToPage(page)}
                aria-current={page === currentPage ? 'page' : undefined}
                className={`min-w-10 border px-3 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
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
              className="border border-line px-4 py-2 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </nav>
      )}
    </section>
  )
}

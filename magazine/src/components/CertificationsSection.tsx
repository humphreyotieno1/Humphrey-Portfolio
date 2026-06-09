'use client'

import { useState } from 'react'
import Image from 'next/image'
import { certifications, certificationStats } from '@/data/content'

const CERTS_PER_PAGE = 3

export default function CertificationsSection() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const totalPages = Math.ceil(certifications.length / CERTS_PER_PAGE)
  const visibleCerts = certifications.slice(
    (currentPage - 1) * CERTS_PER_PAGE,
    currentPage * CERTS_PER_PAGE,
  )
  const selectedCert = certifications.find((cert) => cert.id === selectedId)

  const goToPage = (page: number) => {
    setCurrentPage(page)
    document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const openCert = (id: string) => {
    setSelectedId(id)
    document.body.style.overflow = 'hidden'
  }

  const closeCert = () => {
    setSelectedId(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <section id="certifications" className="border-b border-line py-20">
      <div className="mb-12">
        <p className="section-label mb-4">Chapter 05</p>
        <h2 className="section-title mb-4">Certifications &amp; achievements</h2>
        <p className="story-body max-w-2xl">
          Education, competitions, and professional milestones that reflect a commitment to continuous
          learning.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {visibleCerts.map((cert) => (
          <button
            key={cert.id}
            type="button"
            onClick={() => openCert(cert.id)}
            className="group border border-line bg-paper text-left transition-colors hover:border-accent"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-paper-dark">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/20">
                <span className="font-mono text-xs uppercase tracking-widest text-paper opacity-0 transition-opacity group-hover:opacity-100">
                  View certificate
                </span>
              </div>
            </div>
            <div className="p-5">
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">{cert.date}</p>
              <h3 className="mb-2 font-sans text-xl font-semibold text-ink group-hover:text-accent">
                {cert.title}
              </h3>
              <p className="mb-4 line-clamp-3 story-body text-sm">{cert.description}</p>
              <span className="inline-block border border-line px-3 py-1 font-mono text-xs uppercase tracking-wider text-ink-muted">
                {cert.category}
              </span>
            </div>
          </button>
        ))}
      </div>

      {totalPages > 1 && (
        <nav
          aria-label="Certifications pagination"
          className="mt-12 flex flex-col items-center gap-4 border-t border-line pt-10 sm:flex-row sm:justify-between"
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

      <div className="mt-16 grid grid-cols-2 gap-8 border-t border-line pt-12 md:grid-cols-4">
        {certificationStats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-sans text-3xl font-semibold text-accent">{stat.value}</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-wider text-ink-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4"
          onClick={closeCert}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto border border-line bg-paper"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-4">
              <h3 id="cert-modal-title" className="font-sans text-lg font-semibold text-ink">
                Certificate details
              </h3>
              <button
                type="button"
                onClick={closeCert}
                aria-label="Close"
                className="font-mono text-sm uppercase tracking-widest text-ink-muted hover:text-ink"
              >
                Close
              </button>
            </div>
            <div className="space-y-6 p-6">
              <div className="relative aspect-[4/3] w-full bg-paper-dark">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain p-4"
                  sizes="768px"
                />
              </div>
              <div>
                <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
                  {selectedCert.date} · {selectedCert.category}
                </p>
                <h4 className="mb-3 font-sans text-2xl font-semibold text-ink">{selectedCert.title}</h4>
                <p className="story-body">{selectedCert.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

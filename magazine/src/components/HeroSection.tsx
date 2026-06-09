import Image from 'next/image'
import { site } from '@/data/content'

export default function HeroSection() {
  return (
    <section id="home" className="min-h-[90vh] border-b border-line pb-16 pt-8">
      <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="section-label mb-6">{site.role}</p>
          <h2 className="section-title mb-8 max-w-3xl">
            Building digital
            <span className="italic text-accent"> stories</span>
            <br />
            for the web.
          </h2>
          <p className="story-body mb-10 max-w-xl">{site.tagline}</p>
          <div className="flex flex-wrap gap-4">
            <a href="#work" className="editorial-link">
              View work
            </a>
            <a href="#contact" className="editorial-link">
              Contact me
            </a>
            <a href={site.resume} target="_blank" rel="noopener noreferrer" className="editorial-link">
              Download CV
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
          <div className="absolute -left-4 -top-4 h-full w-full border border-line" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden bg-paper-dark">
            <Image
              src={site.portrait}
              alt={site.name}
              fill
              priority
              className="object-cover grayscale-[20%] contrast-[1.05]"
              sizes="(max-width: 768px) 100vw, 420px"
            />
          </div>
          <p className="mt-4 text-right font-serif text-sm italic text-ink-muted">{site.location}</p>
        </div>
      </div>
    </section>
  )
}

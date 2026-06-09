import { experiences } from '@/data/content'

export default function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-line py-20">
      <div className="mb-12">
        <p className="section-label mb-4">Chapter 03</p>
        <h2 className="section-title">Experience</h2>
      </div>

      <div className="space-y-0 divide-y divide-line">
        {experiences.map((item) => (
          <article key={item.company} className="grid gap-4 py-8 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-widest text-ink-faint">{item.period}</p>
              <p className="mt-2 text-sm text-ink-muted">{item.location}</p>
            </div>
            <div className="md:col-span-9">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-serif text-2xl text-ink">{item.role}</h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:underline"
                >
                  {item.company} ↗
                </a>
              </div>
              <p className="mt-4 story-body max-w-2xl">{item.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

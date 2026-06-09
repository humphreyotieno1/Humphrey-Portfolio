import Image from 'next/image'
import { services } from '@/data/content'

export default function ServicesSection() {
  return (
    <section id="services" className="border-b border-line py-20">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-label mb-4">Services</p>
          <h2 className="section-title">What I offer</h2>
        </div>
        <p className="max-w-md story-body">
          Web development, database design, and product interfaces — scoped to your goals.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="group flex flex-col overflow-hidden border border-line bg-paper"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-paper-dark">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-2 font-sans text-xl font-semibold text-ink">{service.title}</h3>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">{service.price}</p>
              <p className="mb-6 story-body text-base">{service.description}</p>
              <ul className="mb-6 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-ink-muted">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="editorial-link mt-auto">
                Get a quote
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

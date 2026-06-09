import { services } from '@/data/content'

export default function ServicesSection() {
  return (
    <section id="services" className="border-b border-line py-20">
      <div className="mb-12">
        <p className="section-label mb-4">Services</p>
        <h2 className="section-title">What I offer</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="border border-line bg-paper p-6">
            <h3 className="mb-2 font-serif text-2xl text-ink">{service.title}</h3>
            <p className="mb-4 text-sm uppercase tracking-widest text-accent">{service.price}</p>
            <p className="story-body text-base">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

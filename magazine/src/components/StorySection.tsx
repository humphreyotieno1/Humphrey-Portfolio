import { pullQuote, site } from '@/data/content'

export default function StorySection() {
  return (
    <section id="story" className="border-b border-line py-20">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="section-label mb-4">Chapter 01</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-ink">The story so far</h2>
        </div>

        <div className="space-y-6 lg:col-span-5">
          <p className="font-serif text-2xl leading-snug text-ink">{site.intro}</p>
          <p className="story-body">{site.story}</p>
          <p className="story-body">
            Fast-forward to today, and I&apos;ve had the privilege of building software for{' '}
            <em>e-commerce stores</em>, <em>startups</em>, <em>legal firms</em>, and{' '}
            <em>travel agencies</em> — always with accessibility and user satisfaction at the centre.
          </p>
        </div>

        <blockquote className="flex items-start lg:col-span-3">
          <div className="border-l-2 border-accent pl-6">
            <p className="font-serif text-2xl italic leading-snug text-ink">&ldquo;{pullQuote}&rdquo;</p>
            <footer className="mt-4 text-xs uppercase tracking-widest text-ink-faint">— On craft</footer>
          </div>
        </blockquote>
      </div>
    </section>
  )
}

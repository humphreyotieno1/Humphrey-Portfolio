import { skills } from '@/data/content'

export default function SkillsSection() {
  return (
    <section id="skills" className="border-b border-line py-20">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-label mb-4">Chapter 02</p>
          <h2 className="section-title">Ability &amp; skill</h2>
        </div>
        <p className="max-w-md story-body">A snapshot of the tools and disciplines I reach for most often.</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-3 flex items-baseline justify-between gap-4">
              <span className="text-sm font-medium text-ink">{skill.name}</span>
              <span className="font-serif text-lg text-ink-muted">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: `${skill.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

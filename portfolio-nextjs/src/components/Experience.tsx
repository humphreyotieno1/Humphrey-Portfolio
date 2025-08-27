'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      company: 'Eros Africa DMC Limited',
      position: 'Web Developer',
      duration: 'July 2025- Present',
      location: 'Nairobi, Kenya',
      description: 'Recently joined Eros Africa Ltd as a Software Developer Intern, where I’m gaining hands-on experience in full-stack development and contributing to real-world projects that drive innovation and digital transformation across Africa. I am Building and maintaining responsive web applications, Developing and integrating RESTful APIs to connect backend services with user interfaces, Working in Agile sprints, participating in daily standups, and collaborating, Writing clean, testable code and fixing bugs across the stack.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'FastAPI', 'CRM', 'Python'],
      link: 'https://www.erosafrica.com/'
    },
    {
      company: 'LegalizeMe',
      position: 'Front End Web Developer',
      duration: 'September 2024 - February 2025',
      location: 'Eldoret, Kenya',
      description: 'Frontend Web Developer at LegalizeMe, a startup dedicated to providing accessible law resources through a user-friendly website. Focused on building responsive interfaces and delivering seamless digital experiences.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Django', 'AWS', 'Tailwind CSS', 'Framer Motion'],
      link: 'https://www.legalizeme.site/'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  }

  return (
    <section id="experience" ref={ref} className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Where I&apos;ve Worked
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            My professional journey in software development, from internships to senior positions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border-muted/30 transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                custom={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-primary transform -translate-x-1/2 top-6 md:top-8 z-10"></div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} md:text-right`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-primary-lighter/30 p-6 rounded-lg border border-border-muted/20 hover:border-accent/30 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <h3 className="text-xl font-semibold text-text-primary">
                        {exp.position}
                      </h3>
                      <span className="text-accent font-mono text-sm">
                        @ {exp.company}
                      </span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-text-secondary text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>
                    
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {exp.link && exp.link !== '#' && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors duration-300 text-sm"
                      >
                        Visit Company
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

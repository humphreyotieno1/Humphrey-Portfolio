'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Globe, Zap, Users } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  }

  const skills = [
    { name: 'Frontend Development', icon: Globe, description: 'React, Next.js, TypeScript, Tailwind CSS' },
    { name: 'Backend Development', icon: Code, description: 'Node.js, Python, PostgreSQL, MongoDB, Django, FastAPI, Flask' },
    { name: 'Performance Optimization and Devops', icon: Zap, description: 'Web Vitals, Bundle optimization, Caching, Docker, Kubernetes, CI/CD' },
    { name: 'Team Collaboration', icon: Users, description: 'Git, Agile, Code reviews, Mentoring, Slack, Discord' },
  ]

  return (
    <section id="about" ref={ref} className="section-padding bg-primary-light/30">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text Content */}
          <motion.div variants={itemVariants}>
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-text-primary mb-6"
            >
              About Me
            </motion.h2>
            
            <motion.div variants={itemVariants} className="space-y-4 text-text-secondary text-lg leading-relaxed">
              <p>
                Hello! I&apos;m Humphrey, a passionate software engineer with a love for creating beautiful, 
                functional, and user-centered digital experiences.
              </p>
              
              <p>
                My journey in web development started back in 2022 and my experience spans working with a variety of clients, frameworks and technologies — turns out hacking together a custom reblog button taught me a lot about 
                HTML &amp; CSS!
              </p>
              
              <p>
                Fast-forward to today, and I&apos;ve had the privilege of building software for{' '}
                <span className="text-accent">ecommerce stores</span>,{' '}
                <span className="text-accent">startups</span>,{' '}
                <span className="text-accent">legal firms</span>, and{' '}
                <span className="text-accent">travel agencies</span>.
              </p>
              
              <p>
                My main focus is building accessible, inclusive products and digital 
                experiences for a variety of clients.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills Grid */}
          <motion.div variants={itemVariants}>
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold text-text-primary mb-8"
            >
              Skills & Expertise
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  custom={index}
                  className="bg-primary-lighter/50 p-6 rounded-lg border border-border-muted/20 hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <skill.icon 
                      size={24} 
                      className="text-accent group-hover:text-accent-dark transition-colors duration-300" 
                    />
                    <h4 className="font-semibold text-text-primary">{skill.name}</h4>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

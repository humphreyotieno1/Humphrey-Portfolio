'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect, useMemo } from 'react'
import { 
  FaPython, FaReact, FaNode, FaDatabase, FaJsSquare, FaHtml5, FaCss3,
} from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiPostgresql, SiMysql, SiFlask, SiTypescript, SiDjango, SiFastapi, SiDocker, SiGit, SiGo } from 'react-icons/si'

const LanguageStack = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  // Initialize counts with all zeros first
  const [counts, setCounts] = useState<Record<string, number>>({})

  const languages = useMemo(() => [
    { icon: SiNextdotjs, label: "NextJS", proficiency: 85, color: "text-blue-500" },
    { icon: SiGo, label: "Golang", proficiency: 60, color: "text-blue-500" },
    { icon: FaHtml5, label: "HTML5", proficiency: 95, color: "text-orange-500" },
    { icon: FaCss3, label: "CSS3", proficiency: 90, color: "text-blue-500" },
    { icon: FaJsSquare, label: "JavaScript", proficiency: 80, color: "text-yellow-400" },
    { icon: SiTypescript, label: "TypeScript", proficiency: 75, color: "text-blue-600" },
    { icon: FaNode, label: "NodeJS", proficiency: 80, color: "text-green-500" },
    { icon: FaReact, label: "ReactJS", proficiency: 80, color: "text-cyan-400" },
    { icon: FaPython, label: "Python", proficiency: 85, color: "text-blue-500" },
    { icon: SiFlask, label: "Flask", proficiency: 85, color: "text-gray-600" },
    { icon: FaDatabase, label: "Database", proficiency: 85, color: "text-purple-500" },
    { icon: SiMysql, label: "MySQL", proficiency: 85, color: "text-orange-600" },
    { icon: SiPostgresql, label: "PostgreSQL", proficiency: 85, color: "text-blue-700" },
    { icon: SiTailwindcss, label: "TailwindCSS", proficiency: 90, color: "text-cyan-500" },
    { icon: SiDjango, label: "Django", proficiency: 85, color: "text-blue-500" },
    { icon: SiFastapi, label: "FastAPI", proficiency: 85, color: "text-blue-500" },
    { icon: SiDocker, label: "Docker", proficiency: 85, color: "text-blue-500" },
    { icon: SiGit, label: "Git", proficiency: 85, color: "text-blue-500" },
  ], [])

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const newCounts: Record<string, number> = {};
        languages.forEach((lang) => {
          const key = lang.label.toLowerCase().replace(/\s+/g, '');
          newCounts[key] = 0; // Initialize all to 0 first
        });
        setCounts(newCounts);

        // Animate the counters
        const animationDuration = 1500; // 1.5 seconds
        const startTime = Date.now();
        
        const animateCounts = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / animationDuration, 1);
          
          setCounts(currentCounts => {
            const updatedCounts = {...currentCounts};
            languages.forEach(lang => {
              const key = lang.label.toLowerCase().replace(/\s+/g, '');
              updatedCounts[key] = Math.floor(progress * lang.proficiency);
            });
            return updatedCounts;
          });
          
          if (progress < 1) {
            requestAnimationFrame(animateCounts);
          }
        };
        
        requestAnimationFrame(animateCounts);
        
        return () => {
          // Clean up animation frame if component unmounts
          cancelAnimationFrame(animateCounts as unknown as number);
        };
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isInView, languages])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <section ref={ref} className="section-padding bg-primary-light/30">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Languages & Frameworks
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              My technical expertise across various programming languages and frameworks, 
              with proficiency levels based on real-world project experience.
            </p>
          </motion.div>

          {/* Language Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {languages.map((lang, index) => {
              const key = lang.label.toLowerCase().replace(/\s+/g, '')
              const currentCount = counts[key] || 0
              
              return (
                <motion.div
                  key={lang.label}
                  variants={itemVariants}
                  custom={index}
                  className="bg-primary-lighter/30 p-6 rounded-lg border border-border-muted/20 hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <lang.icon 
                        size={40} 
                        className={`${lang.color} group-hover:scale-110 transition-transform duration-300`} 
                      />
                    </div>
                    
                    <h3 className="font-semibold text-text-primary mb-2 text-sm">
                      {lang.label}
                    </h3>
                    
                    <div className="relative">
                      <div className="w-full bg-border-muted/20 rounded-full h-2 mb-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${currentCount}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-2 bg-accent rounded-full"
                        />
                      </div>
                      
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        className="text-accent font-mono text-sm font-bold"
                      >
                        {currentCount}%
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-semibold text-text-primary mb-6">
              Additional Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-primary-lighter/30 p-6 rounded-lg border border-border-muted/20">
                <h4 className="font-semibold text-text-primary mb-3">Frontend Development</h4>
                <p className="text-text-secondary text-sm">
                  Responsive design, modern CSS, component-based architecture, state management
                </p>
              </div>
              
              <div className="bg-primary-lighter/30 p-6 rounded-lg border border-border-muted/20">
                <h4 className="font-semibold text-text-primary mb-3">Backend Development</h4>
                <p className="text-text-secondary text-sm">
                  API design, server-side logic, database optimization, authentication systems
                </p>
              </div>
              
              <div className="bg-primary-lighter/30 p-6 rounded-lg border border-border-muted/20">
                <h4 className="font-semibold text-text-primary mb-3">DevOps & Tools</h4>
                <p className="text-text-secondary text-sm">
                  Git, Docker, CI/CD, cloud deployment, performance monitoring
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default LanguageStack

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, Palette, ArrowRight } from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: Code,
      title: "Full Stack Web Development",
      description: "My passion lies in creating dynamic and interactive web applications that provide seamless and engaging digital experiences, enhancing user interaction and satisfaction.",
      image: "/fullstack.jpg",
      features: ["Frontend & Backend", "API Integration", "Database Design", "Performance Optimization"]
    },
    {
      icon: Database,
      title: "Database and API Design",
      description: "I have experience working with databases and APIs to create robust and scalable applications. I can help you design and implement databases and APIs that meet your specific needs.",
      image: "/database.jpg",
      features: ["Database Architecture", "RESTful APIs", "Data Modeling", "Security Implementation"]
    },
    {
      icon: Palette,
      title: "Web Design",
      description: "I specialise in creating visually appealing and user-friendly websites that are designed to engage and captivate users, while also providing a seamless and intuitive user experience.",
      image: "/webdesign.jpg",
      features: ["UI/UX Design", "Responsive Layouts", "Visual Branding", "User Experience"]
    }
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  }

  return (
    <section id="services" ref={ref} className="section-padding">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              My Services
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              My services are designed to help you succeed in your projects and achieve your goals. 
              I offer a range of services, including web development, web design, and more.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                custom={index}
                className="group relative overflow-hidden rounded-lg bg-primary-lighter/30 border border-border-muted/20 hover:border-accent/30 transition-all duration-300"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                    <span className="text-accent/60 text-lg font-mono">Service Preview</span>
                  </div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <service.icon size={48} className="text-accent" />
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon size={24} className="text-accent" />
                    <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-text-secondary text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Learn More Button */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-accent hover:text-accent-dark transition-colors duration-300 text-sm font-medium group/btn"
                  >
                    Learn More
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 group"
            >
              Get Started Today
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

const Work = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 4


  const projects = [
    {
      title: 'Denmar Tours and Travels',
      description: 'A tour and travel agency website built with Next.js and TypeScript. It provides a seamless experience for users to book tours and travels.',
      image: '/denmar.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'FastAPI', 'MPESA Daraja API'],
      github: 'https://github.com/humphreyotieno1',
      live: 'https://www.denmartravel.co.ke/',
      featured: true
    },
    {
      title: 'AIERGT Africa',
      description: 'African Institute for Environmental Research and Geospatial Technology (AIERGT) is a consultancy and training organisation dedicated to providing environmental research, geospatial-technology solutions and capacity-building across Africa.',
      image: '/aiergt.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'OpenAI'],
      github: 'https://github.com/humphreyotieno1',
      live: 'https://aiergt.africa/',
      featured: true
    },
    {
      title: 'Everyday Resilience Counselling Kenya',
      description: 'A counselling agency website built with Next.js and TypeScript. It provides a seamless experience for users to book counselling sessions.',
      image: '/everydayresilience.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/humphreyotieno1',
      live: 'https://www.everydayresilience.co.ke/',
      featured: true
    },
    {
      title: 'Maxon Computers Ecommerce',
      description: 'An e-commerce platform for computer products and accessories. It is built with Next.js and TypeScript. Payments via MPESA Daraja API.',
      image: '/maxon.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'FastAPI', 'MPESA Daraja API'],
      github: 'https://github.com/humphreyotieno1',
      live: 'https://www.maxoncomputers.co.ke/',
      featured: true
    },
    {
      title: 'W.G.Gitau and Associates',
      description: 'W.G Gitau & Associates (W.G.G) is an independent Accounting and Audit Consulting firm based in Kenya that is registered with ICPAK as a practising Certified Public Accountants.',
      image: '/wg.png',
      technologies: ['NextJS', 'TailwindCSS'],
      github: 'https://github.com/humphreyotieno1',
      live: 'https://www.wggitau.co.ke/',
      featured: true
    },
    {
      title: 'LegalizeMe',
      description: 'A legal AI platform build with Next.js and TypeScript. It provides legal resources to users through a user-friendly website. It also has a chatbot that can answer legal questions.',
      image: '/legalizeme.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Django', 'PostgreSQL', 'ChatGPT', 'OpenAI'],
      github: 'https://github.com/humphreyotieno1',
      live: 'https://www.legalizeme.site/',
      featured: true
    },
    {
      title: 'Grahad Ventures Limited',
      description: 'A construction and hardware supplies company website built with Next.js and TypeScript. It provides a seamless experience for users to book tours and travels.',
      image: '/grahad.png',
      technologies: ['Next.js', 'Golang', 'PostgreSQL', 'Tailwind CSS'],
      github: 'https://github.com/humphreyotieno1',
      live: 'https://www.grahadventures.co.ke/',
      featured: true
    },
    // {
    //   title: 'Pisafa Gifts Shop Ecommerce',
    //   description: 'An e-commerce platform that specializes in personalized gifts and custom products, providing a seamless shopping experience for customers looking for unique and meaningful gifts.',
    //   image: '/pisafa.png',
    //   technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'FastAPI', 'MPESA Daraja API'],
    //   github: 'https://github.com/humphreyotieno1',
    //   live: 'https://www.pisafagiftshop.com/',
    //   featured: false
    // },
    {
      title: "Chrispin Oguna's Portfolio",
      description: "A portfolio website for an ICT instructor, showcasing his skills, projects, and experiences in the tech industry. The platform aims to provide a comprehensive overview of his work and expertise to potential clients and employers.",
      image: "/chris.png",
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/humphreyotieno1',
      live: 'https://chrispinoguna.vercel.app/',
      featured: false
    },
    {
      title: "Mary M'Mukindia's Portfolio",
      description: "Mary M'Mukindia is a catalyst for leadership transformation. She believes in the power of clarity, conviction, and bold leadership to create lasting impact in business and society.",
      image: "/mary.png",
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/humphreyotieno1',
      live: 'https://mary-mmukindia-coaching.vercel.app/',
      featured: false
    },
    {
      title: "Byron Otieno Portfolio",
      description: "A personal portfolio website built for Byron Otieno, an EcoTourism Manager, showcasing his passion for sustainable tourism and environmental conservation. The site highlights his professional profile, skills in team-building and project management, and dedication to impactful eco-friendly initiatives.",
      image: "/byron.png",
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/humphreyotieno1',
      live: 'https://byronotieno.vercel.app/',
      featured: false
    },
    {
      title: "Kingdom Call",
      description: "A platform designed to connect, inspire, and support the community in their faith journey, providing a seamless user experience for visitors seeking information and engagement with the ministry.",
      image: "/kingdom.png",
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/humphreyotieno1',
      live: 'https://kingdom-call.vercel.app/',
      featured: false
    },
    {
      title: "Cinephix",
      description: "Cinephix is a movie streaming platform that offers a wide range of movies and TV shows, with a user-friendly interface for searching, watching, and sharing content.",
      image: "/cinephix.png",
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'PostgreSQL'],
      github: 'https://github.com/humphreyotieno1',
      live: 'https://cinephix.vercel.app/',
      featured: false
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  }

  return (
    <section id="work" ref={ref} className="section-padding bg-primary-light/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Some Things I&apos;ve Built
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A selection of my recent work, showcasing my skills in full-stack development and modern web technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage).map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              custom={index}
              className={`group relative ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`h-full flex flex-col overflow-hidden rounded-lg bg-primary-lighter/30 border border-border-muted/20 hover:border-accent/30 transition-all duration-300 ${!project.featured ? 'h-full' : ''}`}>
                {/* Project Image */}
                <div className={`relative ${project.featured ? 'h-80' : 'h-48'} overflow-hidden flex-shrink-0`}>
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-accent/20 text-accent rounded-full hover:bg-accent/30 transition-all duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-accent/20 text-accent rounded-full hover:bg-accent/30 transition-all duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className={`font-semibold text-text-primary group-hover:text-accent transition-colors duration-300 ${project.featured ? 'text-xl' : 'text-lg line-clamp-1'}`}>
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30 flex-shrink-0 ml-2">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-text-secondary mb-4 leading-relaxed line-clamp-2 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-accent/10 text-accent text-xs rounded-full border border-accent/20 whitespace-nowrap overflow-hidden text-ellipsis"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs rounded-full border border-accent/20">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-4 mt-auto pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-accent hover:text-accent-dark transition-colors duration-300 text-xs group/link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={14} />
                        <span>Code</span>
                        <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-accent hover:text-accent-dark transition-colors duration-300 text-xs group/link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={14} />
                        <span>Live</span>
                        <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 space-x-2"
        >
          {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                currentPage === number
                  ? 'bg-accent text-white'
                  : 'bg-primary-lighter/30 text-text-primary hover:bg-accent/20'
              }`}
              aria-current={currentPage === number ? 'page' : undefined}
            >
              {number}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href="https://github.com/humphreyotieno1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 group"
          >
            View More on GitHub
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Work

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

const Work = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6

  const categories = ['All', 'E-Commerce', 'Healthcare', 'Services', 'Construction', 'Other']

  const projects = [
    {
      title: 'Hecta Consulting',
      category: 'Healthcare',
      description: 'Hecta Consulting is a multidisciplinary healthcare consultancy firm dedicated to strengthening health and community systems across Africa, offering technical expertise and evidence-based insights to design sustainable solutions.',
      image: '/hecta.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
      github: 'https://github.com/humphreyotieno1',
      live: 'https://hecta-consulting.vercel.app/',
      featured: true
    },
    {
      title: 'Denmar Tours and Travels',
      category: 'Services',
      description: 'A tour and travel agency website built with Next.js and TypeScript. It provides a seamless experience for users to book tours and travels.',
      image: '/denmar.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'OpenAI'],
      github: 'https://github.com/humphreyotieno1',
      live: 'https://www.denmartravel.co.ke/',
      featured: true
    },
    {
      title: 'Everyday Resilience Counselling Kenya',
      category: 'Healthcare',
      description: 'A counselling agency website built with Next.js and TypeScript. It provides a seamless experience for users to book counselling sessions.',
      image: '/everyday.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/humphreyotieno1',
      live: 'https://www.everydayresilience.co.ke/',
      featured: true
    },
    {
      title: 'AIERGT Africa',
      category: 'Services',
      description: 'African Institute for Environmental Research and Geospatial Technology (AIERGT) is a consultancy and training organisation dedicated to providing environmental research, geospatial-technology solutions and capacity-building across Africa.',
      image: '/aiergt.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'OpenAI'],
      github: 'https://github.com/humphreyotieno1',
      live: 'https://aiergt.africa/',
      featured: true
    },
    {
      title: 'LegalizeMe',
      category: 'Services',
      description: 'A legal AI platform build with Next.js and TypeScript. It provides legal resources to users through a user-friendly website. It also has a chatbot that can answer legal questions.',
      image: '/legalize.jpeg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Django', 'PostgreSQL', 'ChatGPT', 'OpenAI'],
      github: 'https://github.com/humphreyotieno1',
      live: 'https://www.legalizeme.co.ke/',
      featured: true
    },
    {
      title: 'The Bag Bar',
      category: 'E-Commerce',
      description: 'The Bag Bar started with a simple observation: most bags were either beautifully designed but fragile, or durable but lacked style. We set out to bridge that gap. Every piece in our collection is a testament to our commitment to excellence. We source only the finest sustainable materials and partner with master artisans who bring decades of experience to every stitch.',
      image: '/bagbar.jpeg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/humphreyotieno1',
      live: 'https://thebagbar.vercel.app/',
      featured: true
    },
    {
      title: "Elsie's Crochet Studio",
      category: 'E-Commerce',
      description: "Handcrafted crochet pieces brought to life through a warm, story-driven online experience — from cozy blankets to elegant home décor, each stitch crafted with care.",
      image: "/elsies.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/humphreyotieno1",
      live: "https://www.elsiescrochet.com/",
      featured: true,
    },
    {
      title: "Maxon Computers",
      category: 'E-Commerce',
      description: "Premium technology retailer showcasing the latest computers, laptops, and accessories with a seamless shopping experience.",
      image: "/maxon.png",
      technologies: ["Next.js", "Payment Gateway", "Node.js", "Tailwind CSS", "FastAPI"],
      github: "https://github.com/humphreyotieno1",
      live: "https://www.maxoncomputers.co.ke/",
      featured: true,
    },
    {
      title: "Artemis Health Networks",
      category: 'Healthcare',
      description: "Artemis Health Network is a premier consulting firm dedicated to strengthening health systems across Africa through data-driven policies and sustainable financing.",
      image: "/arthealth.png",
      technologies: ["Next.js", "Node.js", "Tailwind CSS"],
      github: "https://github.com/humphreyotieno1",
      live: "https://artemis-health-network.vercel.app/",
      featured: true,
    },
    {
      title: "Uphome Funeral Home",
      category: 'Services',
      description: "Dedicated funeral service provider rooted in empathy and care, committed to upholding the highest standards of funeral support with dignity and compassion.",
      image: "/uphomes.jpeg",
      technologies: ["Next.js", "Node.js", "Tailwind CSS"],
      github: "https://github.com/humphreyotieno1",
      live: "https://www.uphomesfuneral.co.ke/",
      featured: true,
    },
    {
      title: "Artemis Outsourcing Limited",
      category: 'Services',
      description: "Artemis Outsourcing Limited is a regional-focused multi-disciplinary Consulting firm providing technical assistance in Human resource management, Talent acquisition, Training and staff development, capacity building, Fund management, Project management and Research.",
      image: "/artoutsourcing.png",
      technologies: ["Next.js", "Node.js", "Tailwind CSS"],
      github: "https://github.com/humphreyotieno1",
      live: "https://artemisltd.vercel.app/",
      featured: true,
    },
    {
      title: "Deloitte Construction Limited",
      category: 'Construction',
      description: "Deloitte Construction Ltd is a Kenyan civil and real estate construction company delivering high-quality infrastructure and property developments.",
      image: "/deloitte.png",
      technologies: ["Next.js", "Node.js", "Tailwind CSS"],
      github: "https://github.com/humphreyotieno1",
      live: "https://deloitteconstructionltd.co.ke/",
      featured: true,
    },
    {
      title: "Steric Tea",
      category: 'E-Commerce',
      description: "A digital presence for a premium tea producer in Limuru, Kenya, showcasing high-quality tea green leaf globally recognized as a unique beverage.",
      image: "/steric.jpeg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/humphreyotieno1",
      live: "https://www.sterictea.co.ke/",
      featured: true,
    },
    {
      title: "Afrex Adventures",
      category: 'Services',
      description: "An authentic African travel experience platform connecting global explorers with the wild through story-driven journeys and conservation-focused tourism.",
      image: "/afrex.jpeg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/humphreyotieno1",
      live: "https://www.afrexadventures.co.ke/",
      featured: true,
    },
    {
      title: 'Techbite Ventures',
      category: 'Services',
      description: 'Techbite Ventures is a software development agency based in Nairobi, Kenya. We build digital products that drive growth, combining technical excellence with business insight to create solutions that deliver real results.',
      image: '/techbite.jpeg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/humphreyotieno1',
      live: 'https://www.techbiteventures.com/',
      featured: true
    },
    {
      title: 'W.G.Gitau and Associates',
      category: 'Services',
      description: 'W.G Gitau & Associates (W.G.G) is an independent Accounting and Audit Consulting firm based in Kenya that is registered with ICPAK as a practising Certified Public Accountants.',
      image: '/wg.png',
      technologies: ['NextJS', 'TailwindCSS'],
      github: 'https://github.com/humphreyotieno1',
      live: 'https://www.wggitau.co.ke/',
      featured: true
    },
    {
      title: 'Grahad Ventures Limited',
      category: 'Construction',
      description: 'A construction and hardware supplies company website built with Next.js and TypeScript. It provides a seamless experience for users to book tours and travels.',
      image: '/grahad.png',
      technologies: ['Next.js', 'Golang', 'PostgreSQL', 'Tailwind CSS'],
      github: 'https://github.com/humphreyotieno1',
      live: 'https://www.grahadventures.co.ke/',
      featured: true
    },
    {
      title: "Biteplay",
      category: 'Other',
      description: "Biteplay is a movie streaming platform that offers a wide range of movies and TV shows, with a user-friendly interface for searching, watching, and sharing content.",
      image: "/biteplay.png",
      technologies: ['Reactjs', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'PostgreSQL'],
      github: 'https://github.com/humphreyotieno1',
      live: 'https://bite-play.vercel.app/',
      featured: true
    },
    {
      title: "Chrispin Oguna's Portfolio",
      category: 'Other',
      description: "A portfolio website for an ICT instructor, showcasing his skills, projects, and experiences in the tech industry. The platform aims to provide a comprehensive overview of his work and expertise to potential clients and employers.",
      image: "/chris.png",
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/humphreyotieno1',
      live: 'https://chrispinoguna.vercel.app/',
      featured: false
    },
    {
      title: "Mary M'Mukindia's Portfolio",
      category: 'Other',
      description: "Mary M'Mukindia is a catalyst for leadership transformation. She believes in the power of clarity, conviction, and bold leadership to create lasting impact in business and society.",
      image: "/mary.png",
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/humphreyotieno1',
      live: 'https://mary-mmukindia-coaching.vercel.app/',
      featured: false
    },
  ]

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setCurrentPage(1)
  }

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

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === category
                ? 'bg-accent text-white border-accent shadow-lg shadow-accent/20'
                : 'bg-primary-lighter/30 text-text-secondary border-border-muted/10 hover:bg-primary-lighter/50 hover:border-accent/30'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {filteredProjects.slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage).map((project, index) => (
            <motion.div
              layout
              key={project.title}
              variants={itemVariants}
              custom={index}
              className={`group relative ${project.featured ? 'lg:col-span-2' : ''
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
                    <div className="flex flex-col gap-1">
                      <span className="text-accent text-[10px] font-bold uppercase tracking-wider">{project.category}</span>
                      <h3 className={`font-semibold text-text-primary group-hover:text-accent transition-colors duration-300 ${project.featured ? 'text-xl' : 'text-lg line-clamp-1'}`}>
                        {project.title}
                      </h3>
                    </div>
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
        {filteredProjects.length > projectsPerPage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12 space-x-2"
          >
            {Array.from({ length: Math.ceil(filteredProjects.length / projectsPerPage) }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => setCurrentPage(number)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${currentPage === number
                  ? 'bg-accent text-white shadow-md shadow-accent/20'
                  : 'bg-primary-lighter/30 text-text-primary hover:bg-accent/20 border border-border-muted/10'
                  }`}
                aria-current={currentPage === number ? 'page' : undefined}
              >
                {number}
              </button>
            ))}
          </motion.div>
        )}

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

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Award, Calendar, ExternalLink, X } from 'lucide-react'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedCert, setSelectedCert] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const certsPerPage = 3

  const certifications = [
    {
      id: "alx-backend",
      img: "/alx.png",
      title: "ALX Software Engineering Back-End",
      description: "Completed a 12-month intensive software engineering program at ALX Africa, focusing on 9 months of foundational learning and 3 months of specialization. Graduated on 26th July 2024.",
      date: "July 2024",
      category: "Software Engineering"
    },
    {
      id: "moringa",
      img: "/moringa.jpg",
      title: "Moringa Full-Stack Software Engineering",
      description: "Graduated from a rigorous 6-month Full Stack software engineering program at Moringa School, gaining comprehensive skills in both front-end and back-end development. Graduated on 2nd August 2024.",
      date: "August 2024",
      category: "Full-Stack Development"
    },
    {
      id: "ai-essentials",
      img: "/aiessentials.png",
      title: "AI Career Essentials",
      description: "Completed the AI Career Essentials course by deeplearning.ai, gaining foundational knowledge in AI, machine learning, deep learning, and natural language processing. The course was completed on 5th November 2024.",
      date: "November 2024",
      category: "Artificial Intelligence"
    },
    {
      id: "alx-professional",
      img: "/alxprofessional.png",
      title: "ALX Professional Foundations",
      description: "Completed the ALX Professional Foundations program, which aims to equip learners with the skills and knowledge necessary to thrive in the tech industry. The program was completed on 15th April 2025.",
      date: "April 2025",
      category: "Professional Development"
    },
    {
      id: "gig-startup",
      img: "/gig.png",
      title: "ALX Gig-at-a-Startup",
      description: "Participated in the ALX Gig-at-a-Startup program, where I worked on a real-world project for a startup in the legal industry. The program was completed on 20th November 2024.",
      date: "November 2024",
      category: "Real-World Project"
    },
    {
      id: "huawei-competition",
      img: "/bronze.jpg",
      title: "Huawei World Skills Competition",
      description: "Participated in the Huawei World Skills Competition under IT Software Solutions for Business category, winning a bronze medal for Multimedia University of Kenya. The competition was held in Nairobi, Kenya, in September 2024 at Kenya School of TVET.",
      date: "September 2024",
      category: "Competition Winner"
    },
    {
      id: "portfolio-hackathon",
      img: "/plphackathon.jpg",
      title: "Personal Portfolio Hackathon",
      description: "Participated in the August Cohort Hackathon on September 9th, 2024, with a focus on building dynamic personal portfolio websites. Participants were to showcase their web development skills by highlighting their programming knowledge, projects, and passions through the creation of individual portfolio websites.",
      date: "September 2024",
      category: "Hackathon"
    },
    {
      id: "mozilla",
      img: "/mozilla.png",
      title: "Mozilla Web Literacy Foundational Course",
      description: "Participated in a foundational web literacy workshop conducted by Mozilla at Moringa School, enhancing skills in web technologies and digital literacy.",
      date: "September 2024",
      category: "Upskilling"
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

  const openModal = (certId: string) => {
    setSelectedCert(certId)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedCert(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <section id="certifications" ref={ref} className="section-padding bg-primary-light/30">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Certifications & Achievements
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              My educational journey and professional achievements that demonstrate my commitment 
              to continuous learning and excellence in software development.
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.slice((currentPage - 1) * certsPerPage, currentPage * certsPerPage).map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                custom={index}
                className="group cursor-pointer"
                onClick={() => openModal(cert.id)}
              >
                <div className="h-full flex flex-col bg-primary-lighter/30 rounded-lg border border-border-muted/20 hover:border-accent/30 transition-all duration-300 overflow-hidden group-hover:shadow-lg">
                  {/* Certificate Image */}
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                      <motion.img
                        src={cert.img}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                        variants={itemVariants}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.6, ease: "easeOut" as const }}
                      />
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center p-4">
                        <Award size={32} className="text-accent mx-auto mb-2" />
                        <span className="text-accent text-sm font-medium">View Certificate</span>
                      </div>
                    </div>
                  </div>

                  {/* Certificate Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar size={16} className="text-accent flex-shrink-0" />
                      <span className="text-accent text-sm font-mono">{cert.date}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                      {cert.title}
                    </h3>
                    
                    <p className="text-text-secondary text-sm mb-4 line-clamp-3 flex-grow">
                      {cert.description}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20 whitespace-nowrap overflow-hidden text-ellipsis max-w-[70%]">
                        {cert.category}
                      </span>
                      
                      <ExternalLink size={16} className="text-accent group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {certifications.length > certsPerPage && (
            <motion.div
              variants={itemVariants}
              className="flex justify-center mt-12 space-x-2"
            >
              {Array.from({ length: Math.ceil(certifications.length / certsPerPage) }, (_, i) => i + 1).map((number) => (
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
          )}

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">7</div>
                <div className="text-text-secondary">Certifications and still learning</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">12</div>
                <div className="text-text-secondary">Months Training + Continuous Improvement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">3+</div>
                <div className="text-text-secondary">Institutions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">1</div>
                <div className="text-text-secondary">Competition Medal</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl w-full bg-primary-lighter rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-border-muted">
              <h3 className="text-lg font-medium text-text-primary">Certificate Details</h3>
              <button
                onClick={closeModal}
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              {certifications.find(c => c.id === selectedCert) && (
                <div className="space-y-6">
                  <div className="bg-primary-lighter/20 p-4 rounded-lg">
                    <img 
                      src={certifications.find(c => c.id === selectedCert)?.img} 
                      alt={certifications.find(c => c.id === selectedCert)?.title}
                      className="w-full h-auto max-h-[60vh] object-contain rounded"
                    />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-text-primary">
                      {certifications.find(c => c.id === selectedCert)?.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} className="text-accent" />
                        {certifications.find(c => c.id === selectedCert)?.date}
                      </span>
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20">
                        {certifications.find(c => c.id === selectedCert)?.category}
                      </span>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      {certifications.find(c => c.id === selectedCert)?.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Certifications

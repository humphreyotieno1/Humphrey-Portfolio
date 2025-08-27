'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Twitter, Globe, BookOpen } from 'lucide-react'
import { FaDiscord} from 'react-icons/fa'
import Typewriter from './Typewriter'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.8, duration: 0.5, type: "spring" as const, stiffness: 200 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  }

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/humphreyotieno1', color: 'hover:text-accent' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/humphrey-otieno', color: 'hover:text-accent' },
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/_Banta__', color: 'hover:text-accent' },
    { name: 'Portfolio', icon: Globe, href: 'https://humphrey.dev', color: 'hover:text-accent' },
    { name: 'Server', icon: FaDiscord, href: 'https://discordapp.com/users/1150702066721890336', color: 'hover:text-accent' },
  ]


  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container-custom px-4 sm:px-6 lg:px-12 mt-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className="text-accent font-mono text-lg sm:text-xl mb-4"
            >
              <Typewriter 
                text="Hi, my name is" 
                speed={100} 
                delay={0}
                className="text-accent font-mono text-lg sm:text-xl"
              />
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight"
            >
              <Typewriter 
                text="Humphrey Otieno." 
                speed={150} 
                delay={800}
                className="text-4xl sm:text-6xl lg:text-7xl font-bold text-text-primary"
              />
            </motion.h1>

            {/* Tagline */}
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-text-secondary mb-8 leading-tight"
            >
              {/* <Typewriter 
                text="I build things for the web." 
                speed={80} 
                delay={2000}
                className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-text-secondary"
              /> */}
              Software Engineer
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-text-secondary max-w-2xl mb-12 leading-relaxed"
            >
              I&apos;m a Fullstack Software Engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I&apos;m focused on building accessible, human-centered products with{' '}
              <span className="text-accent hover:text-accent-dark transition-colors duration-300 cursor-pointer">
                Customer Satisfaction
              </span>
              .
              <br />
              <span className="text-accent hover:text-accent-dark transition-colors duration-300 cursor-pointer">Welcome to my Portfolio.</span>
            </motion.p>

            {/* Call to Action */}
            <motion.div
              variants={buttonVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.a
                href="#contact"
                whileHover="hover"
                variants={buttonVariants}
                className="btn-primary group flex items-center justify-center gap-2"
              >
                Hire Me!
                <ArrowRight 
                  size={20} 
                  className="group-hover:translate-x-1 transition-transform duration-300" 
                />
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                whileHover="hover"
                variants={buttonVariants}
                className="btn-secondary group flex items-center justify-center gap-2"
                target="_blank"
              >
                <Download size={20} />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={buttonVariants}
              className="flex items-center gap-4 mb-6"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 bg-primary-lighter/30 border border-border-muted/20 rounded-lg text-text-secondary ${social.color} transition-all duration-300 hover:border-accent/30`}
                  title={social.name}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* Blog Badge */}
            <motion.a
              href="https://dev.to/banta"
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              variants={buttonVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent hover:bg-accent/20 transition-all duration-300 cursor-pointer group"
            >
              <BookOpen size={16} />
              <span className="text-sm font-medium">View Blog Posts</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 200 }}
                className="w-80 h-80 rounded-full overflow-hidden border-4 border-accent/20"
              >
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                  {/* <span className="text-accent/60 text-lg font-mono">Profile Image</span> */}
                  <motion.img
                    src="/hum.png"
                    alt="Profile Image"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center"
              >
                <span className="text-primary text-xs font-bold">H</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/80 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}

export default Hero

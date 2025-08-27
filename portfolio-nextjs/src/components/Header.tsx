'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
// import ThemeToggle from './ThemeToggle'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  // Close mobile menu and scroll to section
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    
    // Wait for the menu to close before scrolling
    setTimeout(() => {
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const navItems = [
    { label: '01. About', href: '#about' },
    { label: '02. Services', href: '#services' },
    { label: '03. Experience', href: '#experience' },
    { label: '04. Work', href: '#work' },
    { label: '05. Certifications', href: '#certifications' },
    { label: '06. Contact', href: '#contact' },
  ]

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } }
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
              transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const }
    })
  }

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border transition-all duration-300 ${
        isScrolled 
          ? 'bg-primary/95 backdrop-blur-md border-b border-border' 
          : 'bg-primary/95 backdrop-blur-md'
      }`}
    >
      <div className="container-custom px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="flex items-center"
          >
            <div className="w-10 h-10 relative">
              <svg
                viewBox="0 0 40 40"
                className="w-full h-full"
              >
                <polygon
                  points="20,2 38,12 38,28 20,38 2,28 2,12"
                  fill="none"
                  stroke="#64FFDA"
                  strokeWidth="2"
                  className="animate-pulse"
                />
                <text
                  x="20"
                  y="26"
                  textAnchor="middle"
                  fill="#CCD6F6"
                  fontSize="16"
                  fontWeight="bold"
                  fontFamily="Inter, sans-serif"
                >
                  H
                </text>
              </svg>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                variants={navItemVariants}
                custom={i}
                initial="hidden"
                animate="visible"
                className="text-accent hover:text-accent-dark transition-colors duration-300 font-mono text-sm"
              >
                {item.label}
              </motion.a>
            ))}
            
            <motion.a
              href="/resume.pdf"
              variants={navItemVariants}
              custom={4}
              initial="hidden"
              animate="visible"
              className="btn-primary"
              target="_blank"
            >
              Resume
            </motion.a>
            
            {/* <ThemeToggle className="ml-2" /> */}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-accent hover:text-accent-dark transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border bg-primary/95 backdrop-blur-md"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block text-accent hover:text-accent-dark transition-colors duration-300 font-mono text-sm py-2 px-6"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block btn-primary text-center mx-6 mt-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header

'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'
import { FaDiscord } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/humphreyotieno1' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/humphrey-otieno' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/_Banta__' },
    { name: 'Discord', icon: FaDiscord, href: 'https://discordapp.com/users/1150702066721890336' },
    { name: 'Email', icon: Mail, href: 'mailto:humphreyotieno04@gmail.com' },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  }

  return (
    <footer className="bg-primary-light/50 border-t border-border-muted/20 py-12">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-primary-lighter/30 border border-border-muted/20 rounded-lg text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300"
                title={social.name}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-text-secondary text-sm">
            <p className="mb-2">
              © {new Date().getFullYear()} Humphrey. All rights reserved.
            </p>
            <p className="flex items-center justify-center gap-2">
              Built with <Heart size={16} className="text-red-500" /> and{' '}
              <span className="text-accent">Next.js</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

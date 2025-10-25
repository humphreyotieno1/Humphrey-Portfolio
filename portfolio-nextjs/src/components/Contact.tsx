'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter, Globe } from 'lucide-react'
import { FaDiscord } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phoneNumber: '',
    message: '',
    agreed: false,
    attachment: null as File | null
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { firstName, lastName, email, message: msg } = formData

    if (!firstName || !lastName || !email || !msg) {
      setMessage({ type: 'error', text: 'All required fields must be filled out.' })
      return
    }

    if (msg.length < 10) {
      setMessage({ type: 'error', text: 'Message must be at least 10 characters long.' })
      return
    }

    setIsSubmitting(true)
    setMessage({ type: '', text: '' })

    const data = new FormData()
    for (const key in formData) {
      if (key === 'attachment' && !formData.attachment) continue
      const value = formData[key as keyof typeof formData]
      if (typeof value === 'string' || value instanceof File) {
        data.append(key, value)
      } else if (typeof value === 'boolean') {
        data.append(key, value.toString())
      }
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: data,
      })

      const result = await response.json()

      if (response.ok) {
        setMessage({ type: 'success', text: result.message })
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          phoneNumber: '',
          message: '',
          agreed: false,
          attachment: null
        })
      } else {
        throw new Error(result.error)
      }
    } catch {
      setMessage({ type: 'error', text: 'An error occurred. Please try again later.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      attachment: e.target.files?.[0] || null
    })
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

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/humphreyotieno1', color: 'hover:text-accent' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/humphrey-otieno', color: 'hover:text-accent' },
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/_Banta__', color: 'hover:text-accent' },
    { name: 'Portfolio', icon: Globe, href: 'https://humphrey.dev', color: 'hover:text-accent' },
    { name: 'Server', icon: FaDiscord, href: 'https://discordapp.com/users/1150702066721890336', color: 'hover:text-accent' },
  ]


  return (
    <section id="contact" ref={ref} className="section-padding">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Get In Touch
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              I&apos;m always open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
              <br />
              I&apos;ll try my best to get back to you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                <MessageSquare size={24} className="text-accent" />
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-text-primary font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-primary-lighter/30 border border-border-muted/20 rounded-lg text-text-primary placeholder-text-muted focus:border-accent focus:outline-none transition-all duration-300"
                      placeholder="First name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-text-primary font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-primary-lighter/30 border border-border-muted/20 rounded-lg text-text-primary placeholder-text-muted focus:border-accent focus:outline-none transition-all duration-300"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-text-primary font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-primary-lighter/30 border border-border-muted/20 rounded-lg text-text-primary placeholder-text-muted focus:border-accent focus:outline-none transition-all duration-300"
                      placeholder="Company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phoneNumber" className="block text-text-primary font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-primary-lighter/30 border border-border-muted/20 rounded-lg text-text-primary placeholder-text-muted focus:border-accent focus:outline-none transition-all duration-300"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-text-primary font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-lighter/30 border border-border-muted/20 rounded-lg text-text-primary placeholder-text-muted focus:border-accent focus:outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                {/* BE MORE THAN 10 CHARS */}
                <div>
                  <label htmlFor="message" className="block text-text-primary font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-primary-lighter/30 border border-border-muted/20 rounded-lg text-text-primary placeholder-text-muted focus:border-accent focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <div>
                  <label htmlFor="attachment" className="block text-text-primary font-medium mb-2">
                    Attachment (Optional)
                  </label>
                  <input
                    type="file"
                    id="attachment"
                    name="attachment"
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 bg-primary-lighter/30 border border-border-muted/20 rounded-lg text-text-primary focus:border-accent focus:outline-none transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-accent/20 file:text-accent hover:file:bg-accent/30"
                  />
                </div>
                
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agreed"
                    name="agreed"
                    checked={formData.agreed}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-accent bg-primary-lighter/30 border-border-muted/20 rounded focus:ring-accent focus:ring-2"
                  />
                  <label htmlFor="agreed" className="text-sm text-text-secondary">
                    I agree to the terms and conditions and consent to being contacted regarding my inquiry.
                  </label>
                </div>
                
                {/* Message Display */}
                {message.text && (
                  <div className={`p-4 rounded-lg ${
                    message.type === 'success' 
                      ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
                      : 'bg-red-500/20 border border-red-500/30 text-red-400'
                  }`}>
                    {message.text}
                  </div>
                )}
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                <Mail size={24} className="text-accent" />
                Let&apos;s Connect
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-text-primary mb-3">
                    Current Status
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    I&apos;m to new opportunities, including full-time positions and interesting projects. 
                    Feel free to reach out if you&apos;d like to discuss potential collaborations.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-text-primary mb-3">
                    Preferred Contact
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    Email is the best way to reach me. I typically respond within 24 hours during weekdays.
                  </p>
                  <a
                    href="mailto:humphreyotieno04@gmail.com"
                    className="text-accent hover:text-accent-dark transition-colors duration-300 font-medium"
                  >
                    humphreyotieno04@gmail.com
                  </a>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-text-primary mb-3">
                    Social Links
                  </h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-primary-lighter/30 border border-border-muted/20 rounded-lg text-text-secondary ${social.color} transition-all duration-300 hover:border-accent/30`}
                        title={social.name}
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

import React, { useEffect } from 'react';
import { faXTwitter, faGithub, faDiscord, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faXTwitter, faGithub, faDiscord, faLinkedinIn, faArrowUp);
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerNavs = [
    { href: '#about', name: 'About' },
    { href: '#services', name: 'Services' },
    { href: '#portfolio', name: 'Portfolio' },
    { href: '#achievements', name: 'Achievements' },
    { href: '#contact', name: 'Contact' }
  ];

  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="text-white bg-gray-700 px-4 py-5 pb-2 pt-6 w-full font-sans">
      <AnimatedSection 
        className="flex items-center justify-between"
        delay={0.1}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
          }
        }}
      >
        <div className="max-w-lg sm:mx-auto sm:text-center">
          <div className="text-left">
            <p className="leading-relaxed mt-2 text-md">
              At the core of this website lies a belief in the power of innovation and creativity to drive positive change.
            </p>
            <p className="leading-relaxed mt-2 text-md">
              "The only way to do great work is to love what you do." - Steve Jobs
            </p>
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection 
        className="mt-8"
        delay={0.3}
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { 
              staggerChildren: 0.1,
              delayChildren: 0.1
            }
          }
        }}
      >
        <ul className="items-center justify-center space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
          {footerNavs.map((item, idx) => (
            <motion.li 
              key={idx} 
              className="hover:text-gray-400"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.3 }
                }
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={item.href} onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href).scrollIntoView({ behavior: 'smooth' });
              }}>{item.name}</a>
            </motion.li>
          ))}
        </ul>
      </AnimatedSection>
      
      <AnimatedSection 
        className="mt-8 items-center justify-center sm:flex"
        delay={0.5}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.6,
              staggerChildren: 0.1,
              delayChildren: 0.2
            }
          }
        }}
      >
        <div className="flex gap-x-4 mt-6 justify-center sm:mt-0">
          <motion.a 
            href="https://x.com/_Banta__" 
            className="text-black-500 hover:text-gray-800" 
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <FontAwesomeIcon icon={faXTwitter} className="size-8" />
          </motion.a>
          <motion.a 
            href="https://github.com/humphreyotieno1" 
            className="text-black-500 hover:text-gray-800" 
            target="_blank"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <FontAwesomeIcon icon={faGithub} className="size-8" />
          </motion.a>
          <motion.a 
            href="https://discordapp.com/users/1150702066721890336" 
            className="text-black-500 hover:text-gray-800" 
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <FontAwesomeIcon icon={faDiscord} className="size-8" />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/humphrey-otieno" 
            className="text-black-500 hover:text-gray-800" 
            target="_blank"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="size-8" />
          </motion.a>
        </div>
      </AnimatedSection>
      
      <AnimatedSection 
        className="mt-4 sm:mt-0 text-center"
        delay={0.7}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.6 } }
        }}
      >
        &copy; 2025. All rights reserved.
      </AnimatedSection>
    </footer>
  );
};

export default Footer;

import React, { useEffect } from 'react';
import { faXTwitter, faGithub, faDiscord, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faXTwitter, faGithub, faDiscord, faLinkedinIn, faArrowUp);
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      <div className="flex items-center justify-between">
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
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {footerNavs.map((item, idx) => (
          <li key={idx} className="hover:text-gray-400">
            <a href={item.href} onClick={(e) => {
              e.preventDefault();
              document.querySelector(item.href).scrollIntoView({ behavior: 'smooth' });
            }}>{item.name}</a>
          </li>
        ))}
      </ul>
      <div className="mt-8 items-center justify-center sm:flex">
        <div className="flex gap-x-4 mt-6 justify-center sm:mt-0">
          <a href="https://x.com/_Banta__" className="text-black-500 hover:text-gray-800" target="_blank">
            <FontAwesomeIcon icon={faXTwitter} className="size-8" />
          </a>
          <a href="https://github.com/humphreyotieno1" className="text-black-500 hover:text-gray-800" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="size-8" />
          </a>
          <a href="https://discordapp.com/users/1150702066721890336" className="text-black-500 hover:text-gray-800" target="_blank">
            <FontAwesomeIcon icon={faDiscord} className="size-8" />
          </a>
          <a href="https://www.linkedin.com/in/humphrey-otieno" className="text-black-500 hover:text-gray-800" target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} className="size-8" />
          </a>
        </div>
      </div>
      <div className="mt-4 sm:mt-0">
        &copy; 2025. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

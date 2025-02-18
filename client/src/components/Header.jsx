import { useEffect, useState } from 'react';
import { faXTwitter, faGithub, faDiscord, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faXTwitter, faGithub, faDiscord, faLinkedinIn, faArrowUp);
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Achievements from './Achievements';
import Contact from './Contact';
import Footer from './Footer';

const Header = () => {

  const [state, setState] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const navigation = [
    { title: "About", path: "#about" },
    { title: "Services", path: "#services" },
    { title: "Portfolio", path: "#portfolio" },
    { title: "Achievements", path: "#achievements" },
    { title: "Contact", path: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, [])


  const Brand = () => (
    <div className="flex items-center justify-between py-5 md:block font-sans font-bold">
      <a href="#home" className="flex items-center space-x-2">
        <img
          src="/humlogo.png"
          width={50}
          height={50}
          alt="logo"
          className="rounded-full w-12 h-12"
        />
        <span className="text-xl font-bold text-gray-800 italic">HUMPHREY</span>
      </a>
      <div className="md:hidden">
        <button className="menu-btn text-gray-500 hover:text-gray-800"
          onClick={() => setState(!state)}
        >
          {
            state ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )
          }
        </button>
      </div>
    </div>
  )

  return (
    <div>
      <div className='relative font-sans font-bold py-4' id="home">
        {/* Arrow Up Button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 p-3 rounded-full bg-gray-800 text-white hover:bg-blue-700 shadow-lg transition-all"
            title="Go to Top"
          >
            <FontAwesomeIcon icon={faArrowUp} size="lg" />
          </button>
        )}

        <div className='absolute inset-0 blur-xl h-[580px]' style={{ background: "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)" }}></div>
        <div className='relative'>
          <header>
            <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
              <Brand />
            </div>
            <nav className={`pb-5 md:text-sm ${state ? "absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
              <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                <Brand />
                <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                  <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                    {
                      navigation.map((item, idx) => {
                        return (
                          <li key={idx} className="text-gray-700 hover:text-gray-900 text-lg">
                            <a href={item.path} className="block" onClick={(e) => {
                              e.preventDefault();
                              document.querySelector(item.path).scrollIntoView({ behavior: 'smooth' });
                            }}>
                              {item.title}
                            </a>
                          </li>
                        )
                      })
                    }
                  </ul>
                  <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
                    <a href="#contact" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-blue-700 active:bg-gray-900 rounded-full md:inline-flex">
                      Hire Me
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </header>

          <section>
            <div className="max-w-screen-xl mx-auto px-4 py-20 gap-60 text-gray-600 overflow-hidden md:px-8 md:flex">
              <div className='flex-1 md:order-2 order-1'>
                <img src="/humlogo.png" alt="logo" className="w-full h-auto md:h-[450px] object-cover rounded-full" />
              </div>

              <div className='flex-none space-y-5 max-w-xl'>
                <a href="https://dev.to/banta" className='inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white' target='_blank'>
                  <span className='inline-block rounded-full px-3 py-1 bg-indigo-600 text-white'>
                    Blog
                  </span>
                  <p className='flex items-center'>
                    View my blog posts here
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                  </p>
                </a>
                <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl typewriter">
                  Welcome to my Portfolio Website
                </h1>
                <h3 className="text-2xl text-gray-700 typewriter">I am Humphrey Otieno</h3>
                <h4 className="text-2xl text-gray-700 typewriter">
                  Full-Stack Software Engineer
                </h4>
                <p className="text-lg text-black">
                  Hello, I am Humphrey, a Full-Stack Software Developer currently on a journey of continuous learning and growth. Welcome to my portfolio!
                </p>
                <div className='flex items-center gap-x-3 sm:text-sm'>
                  <a href="https://www.canva.com/design/DAGGjSAQwM4/IewDoLplWB8uSfiZmioiyw/edit?utm_content=DAGGjSAQwM4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-blue-700 active:bg-gray-900 rounded-full md:inline-flex">
                    Find CV
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
                <div className="flex gap-x-4 mt-6">
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
            </div>
          </section>
        </div>
      </div>

      
      <hr className="w-64 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-300"></hr>
      <About className="moving-dots" />

      <hr className="w-64 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-300"></hr>
      <Services />

      <hr className="w-64 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-300"></hr>
      <Portfolio />

      <hr className="w-64 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-300"></hr>
      <Achievements />

      <hr className="w-64 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-300"></hr>
      <Contact />

      <Footer />
    </div>
  )
}
export default Header;
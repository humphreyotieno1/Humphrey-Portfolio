import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function Services() {

  const services = [
    {
      title: "Full Stack Web Development",
      desc: "My passion lies in creating dynamic and interactive web applications that provide seamless and engaging digital experiences, enhancing user interaction and satisfaction. ",
      img: "/webapp.jpg",
    },
    {
      title: "Database and API Design",
      desc: "I have experience working with databases and APIs to create robust and scalable applications. I can help you design and implement databases and APIs that meet your specific needs.",
      img: "/db.jpg",
    },
    {
      title: "Web Design",
      desc: "I specialise in creating visually appealing and user-friendly websites that are designed to engage and captivate users, while also providing a seamless and intuitive user experience.",
      img: "/web.jpg",
    },
  ]

  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8 font-sans" id='services'>
      <AnimatedSection className="text-center justify-center items-center mx-auto max-w-xl space-y-3" delay={0.1}>
        <h1 className="text-5xl text-indigo-600 font-semibold">
          My Services
        </h1>
        <p className="mt-3 dark:bg-gray-900 dark:text-gray-200 text-lg justify-center text-center">
          My services are designed to help you succeed in your projects and achieve your goals. I offer a range of services, including web development, web design, and more. Contact me to learn more about how I can help you.
        </p>
      </AnimatedSection>
      
      <AnimatedSection 
        className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        delay={0.3}
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { 
              staggerChildren: 0.2,
              delayChildren: 0.1
            }
          }
        }}
      >
        {
          services.map((items, key) => (
            <AnimatedSection 
              key={key}
              className="max-w-xs mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm hover:scale-105 transition-all"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5 }
                }
              }}
            >
              <a href={items.href} className="block overflow-hidden">
                <img 
                  src={items.img} 
                  loading="lazy" 
                  alt={items.title} 
                  className="w-full h-48 rounded-t-md object-cover transition-transform duration-300 hover:scale-105" 
                />
                <div className="pt-3 ml-4 mr-2 mb-3">
                  <h3 className="text-lg dark:bg-gray-900 dark:text-gray-200 font-semibold">
                    {items.title}
                  </h3>
                  <p className="dark:bg-gray-900 dark:text-gray-200 text-md mt-1">{items.desc}</p>
                </div>
              </a>
            </AnimatedSection>
          ))
        }
      </AnimatedSection>
      
      <AnimatedSection className="flex justify-center mt-8" delay={0.5}>
        <a 
          href="#contact" 
          className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded-full whitespace-nowrap bg-black dark:bg-gray-600 dark:hover:bg-gray-700 hover:bg-blue-600 focus:bg-cyan-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-cyan-300 disabled:bg-cyan-300 disabled:shadow-none hover:scale-105"
        >
          <span>Contact</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 011.414-1.414L9 14.586V3a1 1 0 112 0v11.586l5.293-5.293a1 1 0 011.414 1.414l-7 7A1 1 0 0110 18z" clipRule="evenodd" />
          </svg>
        </a>
      </AnimatedSection>
    </section>
  )
}

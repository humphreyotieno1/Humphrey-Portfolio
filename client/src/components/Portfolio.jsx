import React from "react";
import AnimatedSection from "./AnimatedSection";

export default function Portfolio() {
  const projects = [
    {
      name: "LegalizeMe",
      company: "LegalizeMe",
      imgUrl: "/legalizeme.png",
      liveUrl: "https://www.legalizeme.site/",
      description: "LegalizeMe is a legal services web application designed to simplify the process of accessing legal assistance and services. The platform aims to connect individuals and businesses with legal professionals, providing a seamless and efficient way to address their legal needs."
    },
    {
      name: "W.G.Gitau and Associates",
      company: "W.G.Gitau and Associates",
      imgUrl: "/wg.png",
      liveUrl: "https://www.wggitau.co.ke/",
      description: "W.G Gitau & Associates (W.G.G) is an independent Accounting and Audit Consulting firm based in Kenya that is registered with ICPAK as a practising Certified Public Accountants."
    },
    {
      name: "Chrispin Oguna's Portfolio",
      company: "Chrispin Oguna",
      imgUrl: "/chris.png",
      liveUrl: "https://chrispinoguna.vercel.app/",
      description: "A portfolio website for an ICT instructor, showcasing his skills, projects, and experiences in the tech industry. The platform aims to provide a comprehensive overview of his work and expertise to potential clients and employers."
    },
    {
      name: "Pisafa Gifts Shop",
      company: "Pisafa Gifts Shop",
      imgUrl: "/pisafa.png",
      liveUrl: "https://www.pisafagiftshop.com/",
      description: "An e-commerce platform that specializes in personalized gifts and custom products, providing a seamless shopping experience for customers looking for unique and meaningful gifts."
    },
    {
      name: "Byron Otieno Portfolio",
      company: "Byron Otieno",
      imgUrl: "/byron.png",
      liveUrl: "https://byronotieno.vercel.app/",
      description: "A personal portfolio website built for Byron Otieno, an EcoTourism Manager, showcasing his passion for sustainable tourism and environmental conservation. The site highlights his professional profile, skills in team-building and project management, and dedication to impactful eco-friendly initiatives."
    },
    {
      name: "Kingdom Call",
      company: "Kingdom Call",
      imgUrl: "/kingdom.png",
      liveUrl: "https://kingdom-call.vercel.app/",
      description: "A platform designed to connect, inspire, and support the community in their faith journey, providing a seamless user experience for visitors seeking information and engagement with the ministry."
    },
    {
      name: "Cinephix",
      company: "Cinephix",
      imgUrl: "/cinephix.png",
      liveUrl: "https://cinephix.vercel.app/",
      description: "Cinephix is a movie streaming platform that offers a wide range of movies and TV shows, with a user-friendly interface for searching, watching, and sharing content."
    },
    // {
    //   name: "Techverse",
    //   company: "Techverse",
    //   imgUrl: "/data.jpg",
    //   liveUrl: "https://techverse-1.onrender.com",
    //   description: "Techverse is a cutting-edge platform that brings together technology enthusiasts and professionals to share knowledge, collaborate on projects, and stay updated with the latest trends in the tech industry."
    // },
  ];

  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 pt-4 pb-4 md:px-10 md:py-20 font-sans" id="portfolio">
        {/* Title */}
        <AnimatedSection className="text-center" delay={0.1}>
          <h2 className="text-center text-5xl text-indigo-600 font-bold md:text-5xl">
            My Projects
          </h2>
          <p className="msm:text-base mb-8 mt-4 text-center text-lg dark:bg-gray-900 dark:text-gray-200 md:mb-12 lg:mb-16 justify-center items-center mx-auto max-w-xl space-y-3">
            Here are some of the projects I have worked on. Click on the images to view the live sites.
          </p>
        </AnimatedSection>
        
        {/* Content */}
        <AnimatedSection 
          className="mx-auto grid justify-items-stretch gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-10"
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
          {/* Dynamically render projects */}
          {projects.map((project, key) => (
            <AnimatedSection 
              key={key} 
              className="space-y-4"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6 }
                }
              }}
            >
              <a
                href={project.liveUrl}
                className="relative flex h-[300px] items-end group overflow-hidden rounded-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.imgUrl}
                  alt={project.name}
                  className="inline-block h-full w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-blue-500 px-8 py-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-4">
                  <p className="text-xs sm:text-xl text-white font-bold">{project.name}</p>
                </div>
              </a>
              <p className="text-lg dark:bg-gray-900 dark:text-gray-200 pb-8">{project.description}</p>
            </AnimatedSection>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}

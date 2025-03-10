import React from "react";

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
    {
      name: "Chrispin Oguna's Portfolio",
      company: "Chrispin Oguna",
      imgUrl: "/chris.png",
      liveUrl: "https://chrispinoguna.vercel.app/",
      description: "A portfolio website for an ICT instructor, showcasing his skills, projects, and experiences in the tech industry. The platform aims to provide a comprehensive overview of his work and expertise to potential clients and employers."
    },
    {
      name: "Victoria Phantom Spares",
      company: "Victoria Phantom Spares",
      imgUrl: "/victoria.png",
      liveUrl: "https://victoriaphantoms.vercel.app/",
      description: "An e-commerce platform for selling spare parts and accessories for Automobiles. The website offers a wide range of products, with a user-friendly interface for browsing, searching, and purchasing items."
    }
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
        <h2 className="text-center text-5xl text-indigo-600 font-bold md:text-5xl">
          My Projects
        </h2>
        <p className="msm:text-base mb-8 mt-4 text-center text-lg dark:bg-gray-900 dark:text-gray-200 md:mb-12 lg:mb-16 justify-center items-center mx-auto max-w-xl space-y-3">
          Here are some of the projects I have worked on. Click on the images to view the live sites.
        </p>
        {/* Content */}
        <div className="mx-auto grid justify-items-stretch gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-10">
          {/* Dynamically render projects */}
          {projects.map((project, key) => (
            <div key={key} className="space-y-4">
              <a
                href={project.liveUrl}
                className="relative flex h-[300px] items-end group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.imgUrl}
                  alt={project.name}
                  className="inline-block h-full w-full rounded-lg object-cover"
                />
                <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-blue-500 px-8 py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs sm:text-xl">{project.name}</p>
                </div>
              </a>
              <p className="text-lg dark:bg-gray-900 dark:text-gray-200 pb-8">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

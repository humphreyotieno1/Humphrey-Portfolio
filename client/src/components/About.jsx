import React, { useState } from "react";
import { FaPython, FaReact, FaNode, FaDatabase, FaJsSquare, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiTailwindcss, SiPostgresql, SiMysql, SiFlask } from "react-icons/si";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function About() {
  const [shouldCount, setShouldCount] = useState(false);

  const features = [
    {
      icon:
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>,
      title: "Languages & Frameworks",
      desc: "Knowledgeable in a variety of programming languages and frameworks, including JavaScript, Python, ReactJS, Tailwind CSS, Flask, NodeJS, SQL and PostgreSQL."
    },
    {
      icon:
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
        </svg>
      ,
      title: "Skills",
      desc: "Proficient in front-end and back-end development, as well as database management, API integration, and also an AI enthusiast."
    },
    {
      icon:
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
        </svg>,
      title: "Collaboration",
      desc: "I am open to collaborating with other developers and designers to create innovative and impactful projects."
    }
  ];

  const logos = [
    { icon: <FaHtml5 />, label: "HTML5", proficiency: 95 },
    { icon: <FaCss3 />, label: "CSS3", proficiency: 90 },
    { icon: <FaJsSquare />, label: "Javascript", proficiency: 80 },
    { icon: <FaNode />, label: "NodeJS", proficiency: 80 },
    { icon: <FaReact />, label: "ReactJS", proficiency: 80 },
    { icon: <FaPython />, label: "Python", proficiency: 85 },
    { icon: <SiFlask />, label: "Flask", proficiency: 85 },
    { icon: <FaDatabase />, label: "Database", proficiency: 85 },
    { icon: <SiMysql />, label: "MySql", proficiency: 85 },
    { icon: <SiPostgresql />, label: "PostgreSql", proficiency: 85 },
    { icon: <SiTailwindcss />, label: "TailwindCSS", proficiency: 90 }
  ]

  return (
    <section className="py-14 font-sans justify-center items-center" id="about">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-xl space-y-3 justify-center mx-auto text-center">
          <motion.h3 className="text-indigo-600 font-semibold text-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h3>
          <motion.p className="text-gray-800 text-3xl font-semibold sm:text-4xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            I'm a Full Stack Developer based in Nairobi, Kenya 🇰🇪
          </motion.p>
          <motion.p className="text-lg text-black"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            I have a passion for building and crafting beautiful and functional websites and applications. I have experience working with a variety of technologies and frameworks, and I am always looking to learn and grow as a developer.
            I am familiar with both front-end and back-end technologies, and I am comfortable working with databases, APIs, and other tools to build robust and scalable applications.
          </motion.p>
        </div>
        <motion.div className="mt-12 justify-center items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="grid gap-x-12 divide-y [&>.feature-1]:pl-0 sm:grid-cols-2 sm:gap-y-8 sm:divide-y-0 lg:divide-x lg:grid-cols-3 lg:gap-x-0 justify-center items-center">
            {
              features.map((item, idx) => (
                <li key={idx} className={`feature-${idx + 1} space-y-3 py-8 lg:px-12 sm:py-0 items-center justify-center`}>
                  <div className="w-12 h-12 border text-indigo-600 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="text-lg text-gray-800 font-semibold">
                    {item.title}
                  </h4>
                  <p>
                    {item.desc}
                  </p>
                </li>
              ))
            }
          </ul>
        </motion.div>

        {/* logos */}
        <motion.div className="mt-12 grid grid-cols-3 sm:grid-cols-6 gap-4 justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onViewportEnter={() => setShouldCount(true)}
          onViewportLeave={() => setShouldCount(false)}
        >
          {logos.map((logo, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl text-indigo-600">{logo.icon}</div>
              <p className="mt-2 text-sm">{logo.label}</p>
              <div className="text-lg font-bold mt-1">
                {shouldCount ? (
                  <CountUp end={logo.proficiency} duration={5} suffix="%" />
                ) : (
                  "0%"
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
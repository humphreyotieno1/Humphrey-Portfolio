import React, { useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";

function ImageModal({ imgSrc, onClose }) {
    // Add escape key listener for accessibility
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") onClose();
        };
        
        window.addEventListener("keydown", handleEscape);
        // Prevent body scrolling when modal is open
        document.body.style.overflow = "hidden";
        
        return () => {
            window.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "auto";
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 sm:p-6 md:p-8"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Certificate image viewer"
        >
            <div 
                className="relative max-w-4xl w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl" 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                    <h3 className="text-lg font-medium dark:text-white">Certificate View</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white focus:outline-none"
                        aria-label="Close"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className="p-4 flex items-center justify-center">
                    <img 
                        src={imgSrc} 
                        alt="Certificate full view" 
                        className="max-w-full max-h-[70vh] object-contain" 
                    />
                </div>
                <div className="p-4 border-t dark:border-gray-700 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function Achievements() {
    const achievements = [
        {
            img: "/alx.png",
            title: "ALX Software Engineering Back-End",
            desc: "Completed a 12-month intensive software engineering program at ALX Africa, focusing on 9 months of foundational learning and 3 months of specialization. Graduated on 26th July 2024.",
        },
        {
            img: "/moringa.jpg",
            title: "Moringa Full-Stack Software Engineering",
            desc: "Graduated from a rigorous 6-month Full Stack software engineering program at Moringa School, gaining comprehensive skills in both front-end and back-end development. Graduated on 2nd August 2024.",
        },
        {
            img: "/aiessentials.png",
            title: "AI Career Essentials",
            desc: "Completed the AI Career Essentials course by deeplearning.ai, gaining foundational knowledge in AI, machine learning, deep learning, and natural language processing. The course was completed on 5th November 2024.",
        },
        {
            img: "/alxprofessional.png",
            title: "ALX Professional Foundations",
            desc: "Completed the ALX Professional Foundations program, which aims to equip learners with the skills and knowledge necessary to thrive in the tech industry. The program was completed on 15th April 2025.",
        },
        {
            img: "/gig.png",
            title: "ALX Gig-at-a-Startup",
            desc: "Participated in the ALX Gig-at-a-Startup program, where I worked on a real-world project for a startup in the legal industry. The program was completed on 20th November 2024.",
        },
        {
            img: "/bronze.jpg",
            title: "Huawei World Skills Competition",
            desc: "Participated in the Huawei World Skills Competition under IT Software Solutions for Business category, winning a bronze medal for Multimedia University of Kenya. The competition was held in Nairobi, Kenya, in September 2024 at Kenya School of TVET.",
        },
        {
            img: "/plphackathon.jpg",
            title: "Personal Portfolio Hackathon",
            desc: "Participated in the August Cohort Hackathon on September 9th, 2024, with a focus on building dynamic personal portfolio websites. Participants were to showcase their web development skills by highlighting their programming knowledge, projects, and passions through the creation of individual portfolio websites.",
        },
        {
            img: "/mozilla.png",
            title: "Mozilla Web Literacy Foundational Course",
            desc: "Participated in a foundational web literacy workshop conducted by Mozilla at Moringa School, enhancing skills in web technologies and digital literacy.",
        },
    ];

    const [expandedPosts, setExpandedPosts] = useState({});
    const [modalImg, setModalImg] = useState(null);

    const openModal = (imgSrc, title) => {
        setModalImg(imgSrc);
    };

    const closeModal = () => {
        setModalImg(null);
    };

    return (
        <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8 font-sans" id="achievements">
            <AnimatedSection className="text-center" delay={0.1}>
                <h1 className="text-5xl text-indigo-600 font-semibold">Achievements</h1>
                <p className="mt-3 dark:bg-gray-900 dark:text-gray-200 text-lg justify-center text-center">
                    Here are some of the achievements I have accomplished in my journey as a software developer.
                </p>
            </AnimatedSection>
            
            <AnimatedSection 
                className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                delay={0.3}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { 
                        opacity: 1,
                        transition: { 
                            staggerChildren: 0.15,
                            delayChildren: 0.1
                        }
                    }
                }}
            >
                {achievements.map((achievement, key) => (
                    <AnimatedSection
                        key={key}
                        className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-lg hover:scale-105 transition-all"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { 
                                opacity: 1, 
                                y: 0,
                                transition: { duration: 0.5 }
                            }
                        }}
                    >
                        <div>
                            <div className="overflow-hidden rounded-t-md">
                                <img
                                    src={achievement.img}
                                    loading="lazy"
                                    alt={achievement.title}
                                    className="w-full h-48 object-cover cursor-pointer transition-transform duration-500 hover:scale-110"
                                    onClick={() => openModal(achievement.img, achievement.title)}
                                />
                            </div>
                            <div className="pt-3 ml-4 mr-2 mb-3">
                                <h3 className="text-xl dark:bg-gray-900 dark:text-gray-200 font-semibold">{achievement.title}</h3>
                                <p
                                    className={`dark:bg-gray-900 dark:text-gray-200 text-sm mt-1 ${
                                        expandedPosts[key] ? "h-auto" : "h-24"
                                    } overflow-hidden`}
                                >
                                    {achievement.desc}
                                </p>
                            </div>
                            <div className="text-center pb-4">
                                <button
                                    onClick={() => openModal(achievement.img, achievement.title)}
                                    className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
                                    aria-label={`View ${achievement.title} certificate`}
                                >
                                    View Certificate
                                </button>
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </AnimatedSection>
            {modalImg && <ImageModal imgSrc={modalImg} onClose={closeModal} />}
        </section>
    );
}
import React, { useState } from "react";

function ImageModal({ imgSrc, onClose }) {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 mt-2 mr-2 text-white text-2xl"
                >
                    &times;
                </button>
                <img src={imgSrc} alt="Full view" className="max-w-full max-h-full" />
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
            img: "aiessentials.png",
            title: "AI Career Essentials",
            desc: "Completed the AI Career Essentials course by deeplearning.ai, gaining foundational knowledge in AI, machine learning, deep learning, and natural language processing.The course was completed on 5th November 2024.",
        },
        {
            img: "/plphackathon.jpg",
            title: "Personal Portfolio Hackathon",
            desc: "Participated in the August Cohort Hackathon on September 9th, 2024, with a focus on building dynamic personal portfolio websites. Participants were to showcase their web development skills by highlighting their programming knowledge, projects, and passions through the creation of individual portfolio websites.",
        },
        {
            img: "/bronze.jpg",
            title: "Huawei World Skills Competition",
            desc: "Participated in the Huawei World Skills Competition under IT Software Solutions for Business category, winning a bronze medal for Multimedia University of Kenya. The competition was held in Nairobi, Kenya, in September 2024 at Kenya School of TVET.",
        },
        {
            img: "/mozilla.png",
            title: "Mozilla Web Literacy Foundational Course",
            desc: "Participated in a foundational web literacy workshop conducted by Mozilla at Moringa School, enhancing skills in web technologies and digital literacy.",
        },
    ];

    const [expandedPosts, setExpandedPosts] = useState({});
    const [modalImg, setModalImg] = useState(null);

    // const togglePost = (key) => {
    //     setExpandedPosts((prevState) => ({
    //         ...prevState,
    //         [key]: !prevState[key],
    //     }));
    // };

    const openModal = (imgSrc) => {
        setModalImg(imgSrc);
    };

    const closeModal = () => {
        setModalImg(null);
    };

    return (
        <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8 font-sans" id="achievements">
            <div className="text-center">
                <h1 className="text-5xl text-indigo-600 font-semibold">Achievements</h1>
                <p className="mt-3 dark:bg-gray-900 dark:text-gray-200 text-lg justify-center text-center">
                    Here are some of the achievements I have accomplished in my journey as a software developer.
                </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {achievements.map((achievement, key) => (
                    <article
                        className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
                        key={key}
                    >
                        <div>
                            <img
                                src={achievement.img}
                                loading="lazy"
                                alt={achievement.title}
                                className="w-full h-48 object-cover rounded-t-md cursor-pointer"
                                onClick={() => openModal(achievement.img)}
                            />
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
                                {/* <button
                                    onClick={() => togglePost(key)}
                                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    {expandedPosts[key] ? "View Less" : "View More"}
                                </button> */}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            {modalImg && <ImageModal imgSrc={modalImg} onClose={closeModal} />}
        </section>
    );
}

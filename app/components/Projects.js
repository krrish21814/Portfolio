"use client"
import React from "react";
import { Card } from "./Card";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
    const projects = [
           {
            name: "Midas Travels",
            description: "Midas Travels is a responsive landing page for a travel and cab booking service. It offers an intuitive layout for users to explore and book travel services seamlessly across devices.",
            link: "https://www.midastravels.in/",
            github: "https://github.com/krrish21814/midastravels", 
            technologies: ["Next.js", "JavaScript","Tailwind CSS"]
        },
        {
            name: "Gym Website",
            description: "A modern landing page for a gym business that highlights services, promotes membership plans, and features bold visuals with a fitness-oriented design. Ideal for fitness centers looking to establish a strong online presence.",
            link: "https://gym1-kappa.vercel.app/", 
            github: "https://github.com/krrish21814/gym1",
            technologies: ["Next.js", "JavaScript","Tailwind CSS"]
        },
        {
            name: "Trackster",
            description: "Trackster is a goal-tracking and streak management platform that helps users build habits and achieve goals efficiently. It allows goal setting, task breakdowns, streak tracking, and visual insights, ensuring a seamless experience with real-time updates and state management.",
            link: "https://trackster.krishnacodes.site/signin",
            github: "https://github.com/krrish21814/trackster",
            technologies: ["Next.js", "TypeScript", "Prisma", "TailwindCSS", "Zustand"]
        },
        {
            name: "Paybit",
            description: "Paybit is a secure and user-friendly e-wallet that facilitates seamless transactions. Designed with scalability and ease of use in mind, it allows users to manage their finances efficiently.",
            link: "https://paybit.krishnacodes.site",
            github: "https://github.com/krrish21814/E-wallet",
            technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"]
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: {
            x: -50,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.8
            }
        }
    };


    return (
        <div className="min-h-screen overflow-x-hidden w-sc [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
            <motion.div
                className="flex justify-end"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="text-[8rem] mr-16 font-bold text-white/80 pt-12">
                    Projects
                </div>
            </motion.div>

            <motion.div
                className="-mt-20 ml-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={project.name}
                        className="py-5"
                        variants={cardVariants}>
                        <Card tilt={false} w="w-[62rem] max-w-[62rem]" h="h-[18rem]">
                            <div className="flex h-full">
                                <div className="flex-1 p-6 rounded-l-lg">
                                    <motion.h2
                                        className="text-3xl font-bold text-white mb-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}>
                                        {project.name}
                                    </motion.h2>
                                    <motion.p
                                        className="text-gray-300 text-xl leading-relaxed"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}>
                                        {project.description}
                                    </motion.p>
                                </div>

                                <div className="flex flex-col justify-between p-6 rounded-r-lg w-1/3">
                                    <div>
                                        <motion.h3
                                            className="text-xl font-semibold text-white mb-3"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 0.4 }}>
                                            Technologies
                                        </motion.h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, techIndex) => (
                                                <motion.span
                                                    key={tech}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.4 + (techIndex * 0.1) }}
                                                    className="bg-zinc-700 text-gray-200 px-3 py-1.5 rounded-lg 
                                                    text-sm font-medium hover:bg-zinc-800 hover:text-white transition-all 
                                                    duration-200 transform hover:scale-105">
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>

                                    <motion.div
                                        className="flex gap-4 mt-6"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}>
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-300 hover:text-white 
                                            transition-all duration-300 hover:translate-y-[-2px]">
                                            <FaExternalLinkAlt className="text-2xl" />
                                            <div>Live Demo</div>
                                        </Link>
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-300 hover:text-white 
                                            transition-all duration-300 hover:translate-y-[-2px]">
                                            <FaGithub className="text-2xl" />
                                            <div>Source Code</div>
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Projects;
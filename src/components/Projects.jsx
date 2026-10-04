"use client"

import { projects } from "@/data/data"
import SectionTitle from "./ui/SectionTitle"
import { motion } from "motion/react"

export default function Projects() {
    return (
        <section id="projects" className="py-16 bg-slate-50">
            <div className="contenu">
                <SectionTitle
                    title="Projets"
                    subtitle="Ce que j'ai réalisé récemment"
                />

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.12,
                            },
                        },
                    }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="p-4 border border-gray-200 flex flex-col gap-4 bg-white"
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 30,
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        ease: "easeOut",
                                    },
                                },
                            }}
                            whileHover={{
                                y: -6,
                                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
                            }}
                            transition={{
                                duration: 0.25,
                            }}
                        >
                            <h3 className="text-xs text-blue-400">
                                {project.plateforme}
                            </h3>

                            <h3 className="text-sm font-medium">
                                {project.title}
                            </h3>

                            <p className="text-sm">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-1">
                                {project.stack.map((item, index) => (
                                    <motion.span
                                        key={index}
                                        className="text-xs p-2 border border-gray-200"
                                        whileHover={{
                                            y: -2,
                                            borderColor: "#60a5fa",
                                        }}
                                        transition={{
                                            duration: 0.2,
                                        }}
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
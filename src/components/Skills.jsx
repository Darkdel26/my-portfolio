"use client"

import { skills } from "@/data/data"
import SectionTitle from "./ui/SectionTitle"
import { motion } from "motion/react"

export default function Skills() {
    return (
        <section id="skills" className="py-16">
            <div className="contenu">
                <SectionTitle
                    title="Compétences"
                    subtitle="La boîte à outils"
                />

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
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
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col gap-4 bg-white shadow-sm p-3 rounded-md border border-transparent cursor-pointer"
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 30,
                                    scale: 0.95,
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        duration: 0.5,
                                        ease: "easeOut",
                                    },
                                },
                            }}
                            whileHover={{
                                scale: 1.05,
                                borderColor: "#60a5fa",
                                boxShadow:
                                    "0 10px 25px rgba(0, 0, 0, 0.08)",
                            }}
                            transition={{
                                duration: 0.25,
                            }}
                        >
                            <h3 className="text-base text-blue-400 font-medium">
                                {skill.title}
                            </h3>

                            <motion.div
                                className="flex flex-col gap-2"
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.06,
                                        },
                                    },
                                }}
                            >
                                {skill.elements.map((element, index) => (
                                    <motion.span
                                        key={index}
                                        className="text-sm border-b border-gray-200 pb-1"
                                        variants={{
                                            hidden: {
                                                opacity: 0,
                                                x: -10,
                                            },
                                            visible: {
                                                opacity: 1,
                                                x: 0,
                                                transition: {
                                                    duration: 0.3,
                                                },
                                            },
                                        }}
                                    >
                                        {element}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
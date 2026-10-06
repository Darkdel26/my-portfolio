"use client"

import { ClipboardList, Mail } from "lucide-react"
import Image from "next/image"
import { motion } from "motion/react"

export default function Hero() {
    return (
        <section
            id="home"
            className="py-16 md:min-h-[calc(100vh-68px)] bg-cover bg-no-repeat bg-center bg-[url('/hero-pattern.svg')] flex items-center"
        >
            <div className="contenu w-full">
                <div className="flex flex-col md:flex-row md:items-center max-md:gap-10">

                    <motion.div
                        className="w-full md:w-1/2"
                        initial={{
                            opacity: 0,
                            x: -40,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.7,
                            ease: "easeOut",
                        }}
                    >
                        <div className="flex flex-col gap-4">

                            <motion.h1
                                className="text-xl md:text-2xl lg:text-3xl font-semibold"
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: 0.15,
                                    duration: 0.6,
                                }}
                            >
                                Je construis des produits qui vivent sur
                                navigateur et en poche.
                            </motion.h1>

                            <motion.h2
                                className="text-lg"
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: 0.3,
                                    duration: 0.6,
                                }}
                            >
                                Développeur web & mobile freelance. Je conçois
                                des interfaces rapides, accessibles, et des
                                applications natives qui tiennent la route en
                                production.
                            </motion.h2>

                            <motion.div
                                className="flex gap-4"
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: 0.45,
                                    duration: 0.6,
                                }}
                            >
                                <motion.a
                                    href="#projects"
                                    className="py-2 px-3 text-xs bg-blue-500 sm:text-sm rounded-md text-white flex items-center gap-2"
                                    whileHover={{
                                        x: 5,
                                        scale: 1.02,
                                    }}
                                    whileTap={{
                                        scale: 0.96,
                                    }}
                                >
                                    <ClipboardList className="w-3 h-3 sm:w-4 sm:h-4" />
                                    <span>Voir les projets</span>
                                </motion.a>

                                <motion.a
                                    href="#contact"
                                    className="py-2 px-3 text-xs sm:text-sm rounded-md border border-blue-500 flex items-center gap-2"
                                    whileHover={{
                                        x: 5,
                                        scale: 1.02,
                                    }}
                                    whileTap={{
                                        scale: 0.96,
                                    }}
                                >
                                    <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                                    <span>Me contacter</span>
                                </motion.a>
                            </motion.div>

                        </div>
                    </motion.div>

                    <motion.div
                        className="w-full md:w-1/2 md:flex md:justify-center"
                        initial={{
                            opacity: 0,
                            x: 50,
                            scale: 0.9,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                        }}
                        transition={{
                            delay: 0.25,
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                    >
                        <motion.div
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <Image
                                src="/hero.jpg"
                                height={400}
                                width={500}
                                alt="Présentation de Fadèl"
                                className="rounded-xl"
                            />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

"use client"

import { motion } from "motion/react"

export default function SectionTitle({ title, subtitle }) {
    return (
        <motion.div
            className="mb-16 flex flex-col gap-2"
            initial={{
                opacity: 0,
                y: 25,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.5,
            }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
            }}
        >
            <h2 className="flex items-center gap-4">
                <motion.span
                    className="w-10 h-1 rounded-md bg-blue-500"
                    initial={{
                        width: 0,
                        opacity: 0,
                    }}
                    whileInView={{
                        width: 40,
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.2,
                        ease: "easeOut",
                    }}
                />

                <motion.span
                    className="lg:text-2xl md:text-xl text-lg font-semibold"
                    initial={{
                        opacity: 0,
                        x: -15,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.25,
                    }}
                >
                    {title}
                </motion.span>
            </h2>

            <motion.h3
                className="font-medium italic"
                initial={{
                    opacity: 0,
                    y: 10,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.4,
                }}
            >
                {subtitle}
            </motion.h3>
        </motion.div>
    )
}
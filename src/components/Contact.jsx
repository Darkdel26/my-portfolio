"use client"

import { contactLinks } from "@/data/data"
import SectionTitle from "./ui/SectionTitle"
import { Link2 } from "lucide-react"
import { motion } from "motion/react"

export default function Contact() {
    return (
        <section id="contact" className="py-16">
            <div className="contenu">
                <SectionTitle
                    title="Contact"
                    subtitle="Un projet en tête ?"
                />

                <motion.div
                    className="flex flex-wrap gap-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.3,
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
                    {contactLinks.map((contactLink, index) => (
                        <motion.a
                            key={index}
                            href={contactLink.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-b border-blue-500 flex gap-2 items-center"
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 20,
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.4,
                                        ease: "easeOut",
                                    },
                                },
                            }}
                            whileHover={{
                                y: -3,
                            }}
                            whileTap={{
                                scale: 0.95,
                            }}
                        >
                            <motion.span
                                whileHover={{
                                    rotate: 15,
                                }}
                            >
                                <Link2 className="w-4 h-4" />
                            </motion.span>

                            {contactLink.title}
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
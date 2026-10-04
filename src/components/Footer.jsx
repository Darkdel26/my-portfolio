"use client"

import { motion } from "motion/react"

export default function Footer() {
    return (
        <motion.footer
            id="footer"
            className="py-4 bg-slate-50"
            initial={{
                opacity: 0,
                y: 15,
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
                ease: "easeOut",
            }}
        >
            <div className="contenu flex justify-center items-center text-center">
                <motion.p
                    whileHover={{
                        scale: 1.02,
                    }}
                    transition={{
                        duration: 0.2,
                    }}
                >
                    &copy; Fadèl NOUHOUN - 2026
                </motion.p>
            </div>
        </motion.footer>
    )
}
"use client"
import { navLinks } from '@/data/data'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

export default function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <div className="w-full py-4 top-0 left-0 sticky z-50">
            <div className="contenu">
                <div className="py-2 px-4 rounded-4xl bg-white shadow-xs">

                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-end p-0 text-sm md:text-lg lg:text-xl font-semibold">
                            <span>Fadèl</span>
                            <span className="h-1 w-1 rounded-full bg-blue-500 mb-1.25 md:mb-1.75" />
                            <span>dev</span>
                        </Link>

                        <div className="hidden md:flex space-x-4">
                            {navLinks.map((navLink, index) => (
                                <motion.a
                                    key={index}
                                    href={navLink.link}
                                    className="text-base"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: index * 0.08,
                                        duration: 0.3,
                                    }}
                                    whileHover={{
                                        y: -2,
                                    }}
                                >
                                    {navLink.title}
                                </motion.a>
                            ))}
                        </div>

                        <div className="flex md:hidden">
                            <motion.button
                                className="p-2 cursor-pointer"
                                type="button"
                                onClick={() => setShowMobileMenu(!showMobileMenu)}
                                whileTap={{ scale: 0.9 }}
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    {showMobileMenu ? (
                                        <motion.div
                                            key="close"
                                            initial={{
                                                opacity: 0,
                                                rotate: -90,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                rotate: 0,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                rotate: 90,
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X className="h-4 w-4" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{
                                                opacity: 0,
                                                rotate: 90,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                rotate: 0,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                rotate: -90,
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Menu className="h-4 w-4" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </div>
                    </div>

                    <AnimatePresence>
                        {showMobileMenu && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    height: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                    height: 'auto',
                                }}
                                exit={{
                                    opacity: 0,
                                    height: 0,
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: 'easeInOut',
                                }}
                                className="overflow-hidden"
                            >
                                <div className="flex flex-col md:hidden space-y-3 pt-3">

                                    {navLinks.map((navLink, index) => (
                                        <motion.a
                                            key={index}
                                            href={navLink.link}
                                            className="text-xs"
                                            initial={{
                                                opacity: 0,
                                                x: -15,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                x: 0,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                x: -15,
                                            }}
                                            transition={{
                                                delay: index * 0.05,
                                                duration: 0.25,
                                            }}
                                            onClick={() => setShowMobileMenu(false)}
                                        >
                                            {navLink.title}
                                        </motion.a>
                                    ))}

                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </div>
    )
}
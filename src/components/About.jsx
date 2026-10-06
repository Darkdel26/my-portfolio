"use client"
import Image from "next/image"
import { motion } from "motion/react"
import SectionTitle from "./ui/SectionTitle"

export default function About() {
    return (
        <section
            id="about"
            className="py-16 bg-slate-50"
        >
            <div className="contenu">

                <SectionTitle
                    title="À propos"
                    subtitle="Qui est Fadèl NOUHOUN ?"
                />

                <div className="flex flex-col gap-4 md:flex-row md:gap-4 items-start">

                    {/* Image */}
                    <motion.div
                        className="w-full md:w-1/2"
                        initial={{
                            opacity: 0,
                            x: -50,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.7,
                            ease: "easeOut",
                        }}
                    >
                        <div className="overflow-hidden rounded-md">
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeOut",
                                }}
                            >
                                <Image
                                    src="/me.jpg"
                                    alt="Fadèl NOUHOUN"
                                    priority
                                    height={500}
                                    width={700}
                                    priority
                                    className="w-full cursor-pointer"
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="w-full md:w-1/2"
                        initial={{
                            opacity: 0,
                            x: 50,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.15,
                            ease: "easeOut",
                        }}
                    >
                        <p className="flex flex-col">

                            <motion.span
                                className="mb-2"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.25 }}
                            >
                                Étudiant en Licence 3 de Système Informatique
                                et Logiciel, je suis développeur freelance
                                spécialisé en{" "}
                                <b>React Native, Next JS et Laravel</b>.
                                <br />
                            </motion.span>

                            <motion.span
                                className="mb-2"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.35 }}
                            >
                                Je crée, à travers les sites web, applications
                                web et mobiles, des solutions numériques pour
                                les particuliers et les structures qui veulent
                                passer au digital sans se perdre la tête.
                                <br />
                            </motion.span>

                            <motion.span
                                className="mb-2"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.45 }}
                            >
                                Autodidacte depuis le début, j'ai appris à aller
                                chercher les solutions moi-même. Mon objectif :
                                que tu comprennes tout ce que je fais pour toi,
                                avec un produit qui performe vraiment en
                                production.
                                <br />
                            </motion.span>

                            <motion.span
                                className="mb-2"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.55 }}
                            >
                                En dehors du code, tu me trouveras sur les jeux
                                vidéo, à explorer les sujets de culture
                                générale ou plongé dans la musique.
                                <br />
                            </motion.span>

                            <motion.span
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.65 }}
                            >
                                <b>
                                    Basé à Parakou (Bénin), disponible en full
                                    remote.
                                </b>
                            </motion.span>

                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

import { Poppins } from "next/font/google"
import "./globals.css"

const poppinsSans = Poppins({
    variable: "--font-poppins-sans",
    subsets: ["latin"],
    weight: [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
    ],
})

export const metadata = {
    metadataBase: new URL("https://fadel-nouhoun-portfolio.vercel.app"),

    title: {
        default: "Fadèl NOUHOUN | Développeur Web & Mobile",
        template: "%s | Fadèl NOUHOUN",
    },

    description:
        "Fadèl NOUHOUN, développeur web & mobile freelance au Bénin. Je conçois des sites web, applications web et applications mobiles rapides, accessibles et performantes.",

    keywords: [
        "Fadèl NOUHOUN",
        "Fadel Nouhoun",
        "développeur web",
        "développeur mobile",
        "développeur freelance",
        "développeur React",
        "React Native",
        "Next.js",
        "Laravel",
        "développeur Bénin",
        "développeur Parakou",
        "développeur web Bénin",
        "application mobile",
        "site web",
    ],

    authors: [
        {
            name: "Fadèl NOUHOUN",
        },
    ],

    creator: "Fadèl NOUHOUN",
    publisher: "Fadèl NOUHOUN",

    alternates: {
        canonical: "/",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },

    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: "/",
        siteName: "Fadèl NOUHOUN",
        title: "Fadèl NOUHOUN | Développeur Web & Mobile",
        description:
            "Développeur web & mobile freelance au Bénin. Sites web, applications web et mobiles performantes.",
    },

    twitter: {
        card: "summary",
        title: "Fadèl NOUHOUN | Développeur Web & Mobile",
        description:
            "Développeur web & mobile freelance au Bénin.",
    },

    icons: {
        icon: "/favicon.ico",
    },
}

export default function RootLayout({ children }) {
    return (
        <html
            lang="fr"
            className={`${poppinsSans.variable} h-full antialiased`}
        >
            <head>
                <meta name="google-site-verification" content="Y8llzhubfOA2U2880_tvdSMkGzi71q_pJHXOBNDoE8c" />
            </head>
            <body className="min-h-full flex flex-col">
                {children}
            </body>
        </html>
    )
}

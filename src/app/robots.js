export default function robots() {
    const baseUrl = "https://ton-domaine.com"

    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}

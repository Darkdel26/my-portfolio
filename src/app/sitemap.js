export default function sitemap() {
    const baseUrl = "https://ton-domaine.com"

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ]
}
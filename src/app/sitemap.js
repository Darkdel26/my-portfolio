export default function sitemap() {
    const baseUrl = "https://fadel-nouhoun-portfolio.vercel.app"

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ]
}

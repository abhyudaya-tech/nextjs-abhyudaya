'use client'
import Head from "next/head";

export default function JsonLd() {
    return (
        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "CollectionPage",
                                "@id": "https://abhyudayafoundation.in/",
                                "url": "https://abhyudayafoundation.in/",
                                "name": "Abhyudaya Foundation",
                                "isPartOf": {
                                    "@id": "https://abhyudayafoundation.in/"
                                },
                                "breadcrumb": {
                                    "@id": "https://abhyudayafoundation.in/"
                                },
                                "inLanguage": "en-US"
                            },
                            {
                                "@type": "BreadcrumbList",
                                "@id": "https://abhyudayafoundation.in/",
                                "itemListElement": [
                                    {
                                        "@type": "ListItem",
                                        "position": 1,
                                        "name": "Home"
                                    }
                                ]
                            },
                            {
                                "@type": "WebSite",
                                "@id": "https://abhyudayafoundation.in/",
                                "url": "https://abhyudayafoundation.in/",
                                "name": "Abhyudaya Foundation",
                                "description": 'Abhyudaya Foundation is a Bengaluru-based, values-driven social institution committed to nation-building through civic leadership, cultural rootedness, and structured social action. Rooted in Bharatiya civilizational values, the Foundation serves as a platform for designing, governing, and enabling long-term initiatives that strengthen citizenship, community responsibility, and ethical leadership across India. The word Abhyudaya means rising or upliftment — reflecting our belief that national transformation begins with individual consciousness, collective responsibility, and disciplined action.',
                                "inLanguage": "en-US"
                            }
                        ]
                    })
                }}
            /></Head>
    )
}
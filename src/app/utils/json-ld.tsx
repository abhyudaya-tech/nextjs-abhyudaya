export default function JsonLd() {
  return (
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
              "description": "Abhyudaya Foundation is a Bengaluru‑based, youth‑led volunteer movement dedicated to fostering a stronger Bharat through cultural revival, civic engagement, and tech‑driven social impact.",
              "inLanguage": "en-US"
            }
          ]
        })
      }}
    />
  )
}
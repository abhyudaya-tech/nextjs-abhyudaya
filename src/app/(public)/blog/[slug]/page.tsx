
import { notFound } from 'next/navigation'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { use } from 'react'

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export default function CommunityTab({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = use(params);

    const post = blogPosts.find((p) => p.slug === slug)

    if (!post) return notFound()

    return (
        <main className="min-h-screen bg-white py-16 px-4">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">{post.title}</h1>

                <div className="relative w-full h-128 mb-6 rounded overflow-hidden">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-fit"
                    />
                </div>

                <article className="prose max-w-none text-gray-700 text-justify text-lg">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {post.content}
                    </ReactMarkdown>
                </article>
            </div>
        </main>
    )
}

const blogPosts = [
    {
        slug: 'one-nation-one-election-nias-iisc',
        title: 'One Nation, One Election Event',
        subtitle: '@ NIAS, IISC Bengaluru',
        content: `
On 11th July 2025, Abhyudaya Foundation hosted a pivotal event titled "One Nation, One Election" in Bengaluru, a gathering that brought together passionate youth, policymakers, and civic leaders in an engaging discussion on one of the most debated topics in Indian democracy. The event was part of Abhyudaya Foundation’s ongoing commitment to fostering informed civic engagement among the youth and creating a platform where ideas for a stronger, unified Bharat can be discussed and implemented.

## **Understanding the Concept of One Nation, One Election**
        
"One Nation, One Election" is a proposal to hold simultaneous elections for the Lok Sabha (Lower House of Parliament) and state legislative assemblies across India. The goal is to streamline the electoral process, reduce costs, minimize disruptions, and foster greater political stability. In a diverse country like India, the idea has sparked both support and debate, and Abhyudaya Foundation’s event aimed to provide a platform for healthy discourse on this matter.

## The Event – A Vibrant Dialogue

The event kicked off with an inspiring keynote speech from [insert keynote speaker], setting the tone for the day’s discussions. Participants were engaged in dynamic panel sessions covering various aspects of the "One Nation, One Election" proposal:

1. Political Stability: Experts explored how simultaneous elections could lead to more stable governance at both central and state levels.

2. Financial Benefits: A discussion on the potential cost savings, which could be redirected to crucial development areas like education and infrastructure.

3. Voter Engagement: Panelists debated how simultaneous elections could lead to higher voter turnout and more informed voting.

4. Challenges: Addressed the logistical and legal hurdles that need to be overcome to implement this reform.

## Youth’s Role in Shaping the Future

The event also featured an engaging interactive session with students from local colleges, who shared their views on the proposal’s impact. Abhyudaya Foundation believes in nurturing the political awareness of India’s youth, empowering them to actively contribute to the country’s democratic processes.
    `,
        image: '/blog/one-nation-one-election.jpg',
    },
    {
        slug: 'empowering-students',
        title: 'Empowering Rural Students Through Digital Education',
        content: `
Digital literacy is crucial for today's world. Abhyudaya Foundation has started
several initiatives to bring smart classrooms, online mentorship, and remote learning tools
to under-resourced schools in Karnataka.
    `,
        image: '/blog/digital-education.jpg',
    },
    {
        slug: 'samskruti-sahal',
        title: 'Cultural Revival: Samskruti Sahal Highlights',
        content: `
Samskruti Sahal is a cultural journey into the heart of Karnataka’s tradition,
covering Hampi, dance forms, and forgotten crafts. This post shares our volunteers’ experience.
    `,
        image: '/blog/samskruti-sahal.jpg',
    },
]


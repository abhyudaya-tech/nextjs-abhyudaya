import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import Image from 'next/image'
import { initiatives } from '@/app/utils/data/initiatives'

type Project = {
    title: string
    subtitle?: string
    description: string
    image?: string
}

type Initiative = {
    title: string
    subtitle?: string
    description: string
    image: string
    projects: Project[]
}

const TechForGood: Initiative = {
    title: '#TechForGood',
    description:
        'An initiative where technology is harnessed to solve cultural, social, environmental, and economic challenges by bridging innovation with social impact.',
    image: '/initiatives/tech-for-good.png',
    projects: [
        {
            title: 'Changemakers App',
            description:
                'A platform for young changemakers to manage clubs, track events, earn badges, and collaborate locally.',
            image: '/initiatives/yuva-samvaada.png',
        },
        {
            title: 'Prajnanam',
            description:
                'A digital space for culture-based orgs to share events, blogs, and resources with youth-friendly features.',
            image: '/initiatives/prajnanam.png',
        },
        {
            title: 'Gnana Sangama',
            description:
                'An app curating Bharatiya knowledge systems and values for digital learning, storytelling, and exploration.',
            image: '/initiatives/gnana-sangama.png',
        },
    ],
}

export default function InitiativesPage() {
    return (
        <>
            <Navbar />

            <main className="bg-white py-16">
                <div className="max-w-5xl mx-auto px-4 space-y-20">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
                        Our Initiatives
                    </h1>

                    {/* Young Changemakers Section */}
                    <section>
                        <div className="mb-8 bg-white border border-orange-300 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="w-full md:w-1/4">
                                    <Image
                                        src="/brand/logo_af_square_without_bg.png"
                                        alt="Young Changemakers"
                                        width={240}
                                        height={240}
                                        className="rounded-lg object-cover w-full h-auto"
                                    />
                                </div>
                                <div className="w-full md:w-3/4">
                                    <h2 className="text-3xl font-bold text-orange-600 mb-2">
                                        Young Changemakers
                                    </h2>
                                    <p className="text-gray-700 mb-4">
                                        A youth-led movement to lead cultural, civic, and sustainable transformation rooted in Bharatiya values — for students, professionals, and volunteers. Join or start a club in your campus, company, or community.
                                    </p>
                                    <a
                                        href="/young-changemakers"
                                        className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition"
                                    >
                                        Know More
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Principle-Based Initiatives */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
                            {initiatives.map((initiative, index) => (
                                <div
                                    key={index}
                                    className="bg-orange-50 rounded-xl p-6 flex flex-col items-start hover:shadow-md transition-shadow duration-200"
                                >
                                    {/* Header Row: Image + Title/Tagline (responsive layout) */}
                                    <div className="flex flex-col sm:flex-row items-start w-full mb-4">
                                        {/* Image container with fixed size */}
                                        <div className="w-full sm:w-auto sm:h-24 flex-shrink-0 mb-2 sm:mb-0 sm:mr-4">
                                            <img
                                                src={initiative.image}
                                                alt={initiative.title}
                                                className="w-full h-full object-contain rounded-md"
                                            />
                                        </div>

                                        {/* Title & Tagline */}
                                        <div>
                                            <h2 className="text-xl font-bold text-orange-700 leading-snug mb-2">
                                                {initiative.title}
                                            </h2>
                                            {initiative.tagline && (
                                                <p className="text-sm text-orange-500 font-medium leading-tight">
                                                    {initiative.tagline}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-700 text-md mb-2">
                                        {initiative.description}
                                    </p>

                                    {/* Activities */}
                                    {/* <ul className="list-disc list-inside text-gray-600 text-md">
                                    {initiative.activities.map((act, i) => (
                                        <li key={i}>{act}</li>
                                    ))}
                                </ul> */}
                                </div>
                            ))}
                        </div>


                    </section>

                    {/* Tech For Good */}
                    <section>
                        <div className="bg-white border border-orange-300 rounded-xl p-4 px-12 mb-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                                <div className="w-full md:w-1/5">
                                    <Image
                                        src={TechForGood.image}
                                        alt={TechForGood.title}
                                        width={160}
                                        height={160}
                                        className="rounded-lg object-cover w-full h-auto"
                                    />
                                </div>
                                <div className="w-full md:w-3/5">
                                    <h2 className="text-3xl font-bold text-orange-600 mb-2">
                                        {TechForGood.title}
                                    </h2>
                                    <p className="text-gray-700 mb-4">
                                        {TechForGood.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-3">
                            {TechForGood.projects.map((project, idx) => (
                                <div
                                    key={idx}
                                    className="border border-gray-200 rounded-xl p-6 text-center"
                                >
                                    {project.image && (
                                        <div className="relative w-full h-40 mb-4">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-fit rounded"
                                            />
                                        </div>
                                    )}
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">{project.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </main>

            <Footer />
        </>
    )
}

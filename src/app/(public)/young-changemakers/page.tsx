import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { Metadata } from 'next'
import { initiatives } from '@/app/utils/data/initiatives'
import { ycmFAQs } from '@/app/utils/data/ycm-faqs'

const targetGroups = [
    {
        icon: '🎓',
        title: 'For Students',
        points: [
            'Start or join a club in your campus',
            'Lead local events or campaigns',
            'Earn certificates and gain mentorship',
            'Connect with like-minded youth across Bharat',
        ],
    },
    {
        icon: '💼',
        title: 'For Corporate Employees',
        points: [
            'Form a Changemaker Circle within your company',
            'Participate in CSR-aligned drives',
            'Team-building through purpose-driven activities',
            'Co-host events with student chapters',
        ],
    },
    {
        icon: '🏘️',
        title: 'For Communities',
        points: [
            'Form a Changemaker Circle in your locality, RWA, or housing society',
            'Conduct awareness drives, clean-up campaigns, or cultural events',
            'Engage local youth and families in meaningful volunteering',
            'Collaborate with nearby institutions or corporate circles',
        ],
    },
];

export const metadata: Metadata = {
    title: 'Young Changemakers | Abhyudaya Foundation',
    description:
        'Join the Young Changemakers – a youth-led initiative by Abhyudaya Foundation to lead transformation in culture, sustainability, and civic action through values-based leadership and innovation.',
    keywords: [
        'young changemakers',
        'youth clubs',
        'bharat youth',
        'volunteering',
        'student leadership',
        'corporate volunteering',
        'civic responsibility',
        'sustainability clubs',
        'abhyudaya foundation',
    ],
    openGraph: {
        title: 'Young Changemakers | Abhyudaya Foundation',
        description:
            'Join the Young Changemakers – a youth-led initiative by Abhyudaya Foundation to lead transformation in culture, sustainability, and civic action through values-based leadership and innovation.',
        url: 'https://abhyudayafoundation.in/young-changemakers',
        siteName: 'Abhyudaya Foundation',
        images: [
            {
                url: '/assets/images/brand/logo_af_without_bg.png',
                width: 1200,
                height: 630,
                alt: 'Young Changemakers - Abhyudaya Foundation',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Young Changemakers | Abhyudaya Foundation',
        description:
            'A youth-led initiative to inspire civic action, cultural revival, and sustainability through local clubs and leadership circles.',
        images: ['/assets/images/brand/logo_af_without_bg.png'],
    },
    alternates: {
        canonical: 'https://abhyudayafoundation.in/young-changemakers',
    },
};

export default function YoungChangemakersPage() {
    return (
        <>
            <Navbar />

            <main className="bg-white py-16 px-4 sm:px-6 md:px-8">
                <div className="max-w-6xl mx-auto space-y-20">
                    <section className="text-center space-y-4">
                        <h1 className="text-5xl font-bold text-orange-600">
                            Abhyudaya – Young Changemakers
                        </h1>
                        <p className="text-xl text-gray-600 italic mt-2">
                            Where Passion Meets Purpose
                        </p>
                        <p className="text-gray-700 max-w-3xl mx-auto mt-4">
                            A youth-led movement to lead cultural, civic, and sustainable transformation rooted in Bharatiya values <br />— for students, professionals, and volunteers.
                        </p>
                    </section>

                    {/* 5 Driving Principles */}
                    <section>
                        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
                            🌟 The 5 Driving Principles
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {initiatives.map((p, idx) => (
                                <div
                                    key={idx}
                                    className="bg-orange-50 border border-orange-200 rounded-lg p-5 shadow-sm"
                                >
                                    <h3 className="text-xl text-center font-bold text-orange-700">
                                        {p.title}
                                    </h3>
                                    <p className="text-center italic text-gray-600 mb-2">{p.tagline}</p>
                                    <p className="text-gray-700 mb-2">{p.description}</p>
                                    <ul className="list-disc list-inside text-gray-600 text-sm">
                                        {p.activities.map((act, i) => (
                                            <li key={i}>{act}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Club Info */}
                    <section className="max-w-4xl mx-auto px-4 my-12">
                        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">

                            <h2 className="text-3xl font-bold mb-4 pb-4 text-center text-gray-800 flex items-center justify-center gap-2 border-b border-gray-300">
                                <span>🟠</span> Changemaker Circles <span className="text-gray-500 text-lg">(Youth Clubs)</span>
                            </h2>
                            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                                A <span className="font-semibold">“Changemaker Circle”</span> is a club or group formed in colleges, universities, corporate teams, or your locality. Each club is driven by 5 principles, meets weekly or biweekly, runs drives & events, and nurtures leadership from within.
                            </p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 text-gray-700 mb-6 text-md">
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-600 text-xl">🔹</span>
                                    <span>Lead Changemaker</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-600 text-xl">🔹</span>
                                    <span>Core Changemakers (5–7 for each principle)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-600 text-xl">🔹</span>
                                    <span>Mentor/Coordinator</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-600 text-xl">🔹</span>
                                    <span>Changemakers (members)</span>
                                </li>
                            </ul>

                            <p className="text-sm text-gray-500 italic border-t border-gray-200 pt-4">
                                <b>Engagement:</b> Weekly / Biweekly meetings · Quarterly events · Recognition badges
                            </p>
                        </div>
                    </section>


                    {/* CTA */}
                    <section className="mt-10">
                        <div className="bg-orange-50 border border-orange-200 rounded-xl px-6 py-8 text-center shadow-sm">
                            <h2 className="text-3xl font-extrabold text-orange-600 mb-3">
                                Ready to Make a Difference?
                            </h2>
                            <p className="text-gray-700 max-w-2xl mx-auto mb-6 text-lg">
                                Start or join a <strong>Young Changemakers Circle</strong> in your campus, company, or community — and be the spark for cultural, civic, and sustainable change.
                            </p>
                            <a
                                href="https://forms.gle/YXgCGZttBHfrwMed7" target='_blank'
                                className="inline-block px-6 py-2 bg-orange-600 text-white font-medium text-lg rounded-full shadow-md hover:bg-orange-700 transition duration-200"
                            >
                                Join Now
                            </a>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                            👥 Who Can Join?
                        </h2>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {targetGroups.map((group, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white shadow-lg border border-gray-100 rounded-xl p-6 hover:shadow-xl transition duration-300 ease-in-out flex flex-col"
                                >
                                    {/* Icon + Title */}
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="text-2xl bg-orange-100 text-orange-600 w-14 h-14 flex items-center justify-center rounded-full">
                                            {group.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800">{group.title}</h3>
                                    </div>

                                    {/* Divider */}
                                    <hr className="border-gray-200 mb-4" />

                                    {/* Bullet Points */}
                                    <ul className="list-disc list-inside text-md text-gray-700 space-y-2">
                                        {group.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="max-w-3xl mx-auto px-4 mt-16">
                        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">FAQs</h2>

                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                            {ycmFAQs.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className={`p-3 m-3 ${idx !== ycmFAQs.length - 1 ? 'border-b border-gray-300' : ''}`}
                                >
                                    <h4 className="font-semibold text-gray-800 mb-2">
                                        {idx + 1}. {faq.question}
                                    </h4>
                                    <p className="text-gray-600">{faq.answer}</p>
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

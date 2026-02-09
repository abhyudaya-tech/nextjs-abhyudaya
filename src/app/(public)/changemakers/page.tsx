import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { Metadata } from 'next'
import { initiatives, yuvaSamvaada } from '@/app/utils/data/initiatives'
import { ycmFAQs } from '@/app/utils/data/ycm-faqs'

const targetGroups = [
    {
        icon: '🎓',
        title: 'Student Circles',
        points: [
            'Start or join a Circle in your college or university',
            'Build civic consciousness and values-based leadership',
            'Lead local events, drives, and cultural campaigns',
            'Earn certificates, mentorship, and recognition for impact',
            'Connect with like-minded youth across Bharat',
        ],
    },
    {
        icon: '💼',
        title: 'Corporate Circles',
        points: [
            'Form a Circle within your company for CSR and engagement',
            'Develop ethical leadership and corporate citizenship',
            'Participate in skill-based volunteering and mentorship',
            'Co-host events and drives with student or community Circles',
            'Foster team-building through purpose-driven activities',
        ],
    },
    {
        icon: '🏘️',
        title: 'Community Circles',
        points: [
            'Create a Circle in your neighborhood, RWA, or locality',
            'Organize awareness drives, clean-up campaigns, and cultural events',
            'Engage youth and families in meaningful volunteering',
            'Collaborate with nearby schools, colleges, or corporate Circles',
            'Drive local solutions with sustainable, community-owned impact',
        ],
    },
];

export const metadata: Metadata = {
    title: 'Changemakers | Abhyudaya Foundation',
    description:
        'Join the Changemakers – A values-driven, nation-building movement that enables citizens to actively participate in shaping a stronger, more responsible, and self-aware Bharat. Powered by Abhyudaya Foundation, Changemakers provides a structured pathway for students, professionals, and communities to translate Bharatiya values into meaningful cultural, civic, and sustainable action.',
    keywords: [
        'changemakers',
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
        title: 'Changemakers | Abhyudaya Foundation',
        description:
            'Join the Changemakers – A values-driven, nation-building movement that enables citizens to actively participate in shaping a stronger, more responsible, and self-aware Bharat. Powered by Abhyudaya Foundation, Changemakers provides a structured pathway for students, professionals, and communities to translate Bharatiya values into meaningful cultural, civic, and sustainable action.',
        url: 'https://abhyudayafoundation.in/changemakers',
        siteName: 'Abhyudaya Foundation',
        images: [
            {
                url: '/assets/images/brand/logo_af_without_bg.png',
                width: 1200,
                height: 630,
                alt: 'Changemakers - Abhyudaya Foundation',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Changemakers | Abhyudaya Foundation',
        description:
            'Changemakers is a values-driven, nation-building movement that enables citizens to actively participate in shaping a stronger, more responsible, and self-aware Bharat. Powered by Abhyudaya Foundation, Changemakers provides a structured pathway for students, professionals, and communities to translate Bharatiya values into meaningful cultural, civic, and sustainable action.',
        images: ['/assets/images/brand/logo_af_without_bg.png'],
    },
    alternates: {
        canonical: 'https://abhyudayafoundation.in/changemakers',
    },
};

export default function ChangemakersPage() {
    return (
        <>
            <Navbar />

            <main className="bg-white py-16 px-4 sm:px-6 md:px-8">
                <div className="max-w-5xl mx-auto space-y-20">
                    <section className="text-center space-y-4">
                        <h1 className="text-5xl font-bold text-orange-600">
                            Abhyudaya – Changemakers
                        </h1>
                        <p className="text-xl text-gray-600 italic mt-2">
                            Where Passion Meets Purpose
                        </p>
                        <p className="text-gray-700 max-w-3xl mx-auto mt-4 text-justify">
                            &emsp;&emsp;&emsp;A values-driven, nation-building movement that enables citizens to actively participate in shaping a stronger, more responsible, and self-aware Bharat. Powered by <span className="font-semibold">Abhyudaya Foundation</span>, Changemakers provides a structured pathway for students, professionals, and communities to translate Bharatiya values into meaningful cultural, civic, and sustainable action.
                            <br />
                            &emsp;&emsp;&emsp;Rather than episodic volunteering, Changemakers focuses on: Civic consciousness, Leadership through responsibility, Long-term community engagement & Action rooted in culture and ethics
                        </p>
                    </section>

                    {/* 5 Driving Principles */}
                    <section>
                        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
                            🌟 The 5 Driving Principles
                        </h2>


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

                        <div
                            key={5}
                            className="mt-4 bg-orange-50 rounded-xl p-6 flex flex-col items-start hover:shadow-md transition-shadow duration-200"
                        >
                            {/* Header Row: Image + Title/Tagline (responsive layout) */}
                            <div className="flex flex-col sm:flex-row items-start w-full mb-4">
                                {/* Image container with fixed size */}
                                <div className="w-full sm:w-auto sm:h-36 flex-shrink-0 mb-2 sm:mb-0 sm:mr-4">
                                    <img
                                        src={yuvaSamvaada.image}
                                        alt={yuvaSamvaada.title}
                                        className="w-full h-full object-contain rounded-md"
                                    />
                                </div>

                                {/* Title & Tagline */}
                                <div>
                                    <h2 className="text-xl font-bold text-orange-700 leading-snug mb-2">
                                        {yuvaSamvaada.title}
                                    </h2>
                                    {yuvaSamvaada.tagline && (
                                        <p className="text-sm text-orange-500 font-medium leading-tight">
                                            {yuvaSamvaada.tagline}
                                        </p>
                                    )}


                                    {/* Description */}
                                    <p className="text-gray-700 text-md mb-2">
                                        {yuvaSamvaada.description}
                                        <br />
                                        <b>Key Activities:</b> &nbsp;
                                        {yuvaSamvaada.activities.map((act, i) => (
                                            <span key={i}>{act}, </span>
                                        ))}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="mt-10">
                        <div className="bg-orange-50 border border-orange-200 rounded-xl px-6 py-8 text-center shadow-sm">
                            <h2 className="text-3xl font-extrabold text-orange-600 mb-3">
                                Ready to Make a Difference?
                            </h2>
                            <p className="text-gray-700 max-w-2xl mx-auto mb-6 text-lg">
                                Start or join a <strong>Changemakers Circle</strong> in your campus, company, or community — and be the spark for cultural, civic, and sustainable change.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a
                                    href="https://play.google.com/store/apps/details?id=in.abhyudayafoundation.changemakers" target='_blank'
                                    className="inline-block px-16 py-2 bg-orange-600 text-white font-medium text-lg rounded-full shadow-md hover:bg-orange-700 transition duration-200"
                                >
                                    Join Now
                                </a>
                            </div>
                        </div>
                    </section>


                    {/* Club Info */}
                    <section className="max-w-4xl mx-auto px-4 my-12">
                        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">

                            {/* Header */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-4 border-b border-gray-300 pb-4 mb-4 text-center">
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                                        Changemaker Circles
                                    </h2>
                                    <p className="text-md sm:text-base text-gray-500 mt-1 sm:mt-0">Local Clubs Driving Civic, Cultural & Sustainable Impact</p>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed">
                                A <span className="font-semibold">“Changemaker Circle”</span> is a club or group formed in colleges, universities, corporate teams, or your locality. Each club is driven by 5 principles, meets weekly or biweekly, runs drives & events, and nurtures leadership from within.
                            </p>

                            {/* Structure List */}
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 text-gray-700 mb-6 text-md">
                                {[
                                    'Lead Changemaker',
                                    'Core Changemakers (5–7, one per principle)',
                                    'Mentor/Coordinator',
                                    'Changemakers (members)'
                                ].map((role, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-orange-600 text-xl">🔹</span>
                                        <span>{role}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Footer Note */}
                            <p className="text-sm text-gray-500 italic border-t border-gray-200 pt-4">
                                <b>Engagement:</b> Weekly / Biweekly meetings · Quarterly events · Recognition badges
                            </p>
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


                    {/* App */}
                    <section className="max-w-4xl mx-auto mt-10">
                        <div className="bg-orange-50 border border-orange-200 rounded-xl px-6 py-8 text-center shadow-sm">
                            <h2 className="text-3xl font-extrabold text-orange-600 mb-1">
                                Changemakers App
                            </h2>
                            <p className="text-md sm:text-base text-gray-500 mb-3 sm:mt-0">The Digital Operating System</p>

                            <p className="text-gray-700 max-w-3xl mx-auto mb-6 text-lg">
                                The Changemakers App is the digital operating system of the movement — enabling circles to plan, execute, track, and scale their initiatives while connecting participants, mentors, and Foundation oversight in a transparent, data-driven way.<br/>It is the unified digital platform that powers the movement.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a
                                    href="https://play.google.com/store/apps/details?id=in.abhyudayafoundation.changemakers"
                                    className="inline-block border border-orange-600 text-orange-600 px-4 py-2 rounded-full hover:bg-orange-600 hover:text-white transition"
                                    target="_blank"
                                >
                                    Explore the App
                                </a></div>
                        </div>
                    </section>

                    <section className="max-w-4xl mx-auto px-4 mt-16">
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

import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import Image from 'next/image'

const boardOfTrustees = [
    {
        name: 'Akshay G Jogihalli',
        role: 'President',
        description: 'Akshay leads the trust’s strategic vision, overseeing governance, technology, and impact-driven programs, ensuring alignment with mission and goals.'
    },
    {
        name: 'Nagarjuna P',
        role: 'Managing Trustee',
        description: 'Nagarjuna manages the trust’s finances, human resources, and ensures financial sustainability, focusing on effective budgeting and compliance.'
    },
    {
        name: 'Amith Hebbar',
        role: 'Trustee',
        description: 'Amith leads fundraising and partnership initiatives, working to expand resources and develop sustainable funding strategies for the trust.'
    },
    {
        name: 'Phaneesh Mavattur',
        role: 'Trustee',
        description: 'Phaneesh oversees community outreach and public relations, enhancing the trust’s visibility and fostering relationships with key stakeholders.'
    }
];

const operationalExcellenceTeam = [
    {
        name: 'Manoj S',
        responsibility: 'Technology & Innovation',
        description: 'Manoj drives the trust’s adoption of cutting-edge technology and innovative practices to streamline operations and maximize impact.'
    },
    {
        name: '[Name]',
        responsibility: 'Finance',
        description: '[Name] ensures sound financial management, focusing on budgeting, financial planning, and compliance to ensure sustainability and growth.'
    },
    {
        name: '[Name]',
        responsibility: 'Fundraising',
        description: '[Name] spearheads fundraising initiatives, designing and executing campaigns to secure resources for the trust’s projects and operations.'
    },
    {
        name: '[Name]',
        responsibility: 'Partnerships & Collaboration',
        description: '[Name] develops and nurtures strategic partnerships with external organizations, expanding the trust’s reach and resources.'
    },
    {
        name: '[Name]',
        responsibility: 'Community Outreach & Public Relations',
        description: '[Name] manages the trust’s outreach, public relations, and community engagement efforts to build awareness and foster relationships.'
    },
    {
        name: '[Name]',
        responsibility: 'Volunteer & Human Resources',
        description: '[Name] oversees volunteer recruitment, training, and retention, ensuring a strong and engaged team to drive the trust’s initiatives.'
    }
];

export default function AboutPage() {
    return (
        <>
            <Navbar />

            <main className="bg-white pb-16 px-4">
                <div className="max-w-5xl mx-auto space-y-12">
                    {/* About Us Section */}
                    <section className="mt-10 px-4">
                        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                            {/* LHS: Text Content */}
                            <div>
                                <h2 className="text-3xl font-semibold text-gray-700 mb-4">About Us</h2>
                                <p className="text-gray-700 text-lg leading-relaxed text-justify">
                                    &emsp;&emsp;&emsp;Abhyudaya Foundation is a Bengaluru‑based, youth‑led volunteer movement dedicated to fostering a stronger Bharat through cultural revival, civic engagement, and tech‑driven social impact. “Abhyudaya” means “rising” or “upliftment” - reflecting our mission to awaken self‑awareness and shared responsibility among India’s youth.
                                    <br /><br />
                                    &emsp;&emsp;&emsp;We believe that by combining technology, cultural experiences, and a deep sense of pride in our heritage, we can forge a brighter future for our nation. Join us on this remarkable journey as we work together to bring our values to life. Together, we can shape a better tomorrow for our “Bharat”.
                                </p>
                            </div>

                            {/* RHS: Image / Logo */}
                            <div className="flex justify-center md:justify-end">
                                <Image
                                    src="/brand/logo_af_square_without_bg.png"
                                    alt="Abhyudaya Foundation Logo"
                                    width={200}
                                    height={200}
                                    className="mb-4 w-[30rem] h-auto"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Mission & Vision Stripe */}
                    <section className="mt-8 bg-orange-50 py-12 px-4">
                        <div className="max-w-6xl mx-auto grid md:grid-cols-2 md:gap-30 gap-10 items-start text-center md:text-left">
                            {/* Mission */}
                            <div className="text-center">
                                <h3 className="text-xl font-semibold text-orange-700 mb-2">🎯 Our Mission</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Empowering youth to drive cultural revival, civic engagement, and tech-driven social impact, fostering a stronger Bharat.
                                </p>
                            </div>

                            {/* Vision */}
                            <div className="text-center">
                                <h3 className="text-xl font-semibold text-orange-700 mb-2">👁️ Our Vision</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    A Bharat where people united by heritage and innovation, lead sustainable & impactful change for a brighter future.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Team */}

                    <section>
                        <h2 className="text-3xl font-semibold text-gray-700 mb-8">Trustees</h2>
                        <div className="grid gap-4 md:grid-cols-2">
                            {boardOfTrustees.map((member, index) => (
                                <div key={index} className="border border-gray-200 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                                    <p className="text-sm text-gray-600 font-medium mb-2">{member.role}</p>
                                    <p className="text-gray-700">{member.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold text-gray-700 mb-8">Operational Excellence Team</h2>
                        <div className="grid gap-3 md:grid-cols-3">
                            {operationalExcellenceTeam.map((member, index) => (
                                <div key={index} className="border border-gray-200 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                                    <p className="text-sm text-gray-600 font-medium mb-2">{member.responsibility}</p>
                                    <p className="text-gray-700">{member.description}</p>
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

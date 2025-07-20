import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import Image from 'next/image'
import { getUsersWithCurrentRoles, UserWithRoleAndTeam } from '@/lib/queries/getUsersWithCurrentRoles';


const teamOrder = ['Trustees', 'Operational Excellence Team'];

export default async function AboutPage() {

    const members = await getUsersWithCurrentRoles();

    const groupedByTeam = members.reduce((acc: Record<string, UserWithRoleAndTeam[]>, member) => {
        const key = member.team_name || 'Other';
        if (!acc[key]) acc[key] = [];
        acc[key].push(member);
        return acc;
    }, {});

    // sort the entries
    const sortedTeams = Object.entries(groupedByTeam).sort(
        ([teamA], [teamB]) => teamOrder.indexOf(teamA) - teamOrder.indexOf(teamB)
    );


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
                    {sortedTeams.map(([teamName, teamMembers]) => (
                        <section key={teamName}>
                            <h2 className="text-3xl font-semibold text-gray-700 mb-8">{teamName === 'Board of Trustees' ? 'Trustees' : teamName}</h2>
                            <div className={`grid gap-4 md:${teamName === 'Board of Trustees' ? "grid-cols-2" : "grid-cols-3"}`}>
                                {/* Map through team members */}
                                {teamMembers.map((member) => (
                                    <div key={member.user_id} className="border border-gray-200 rounded-xl p-6">
                                        <h3 className="text-xl font-semibold text-gray-800">{member.full_name}</h3>
                                        <p className="text-sm text-gray-600 font-medium mb-2">{member.role_name}</p>
                                        <p className="text-gray-700">{member.role_bio && member.role_bio.replace('[Name]', member.full_name) || member.bio}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </main>

            <Footer />
        </>
    )
}

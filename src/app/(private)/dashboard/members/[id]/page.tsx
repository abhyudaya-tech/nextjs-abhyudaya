import { FaMapMarkerAlt, FaBirthdayCake, FaPhoneAlt, FaEnvelope, FaEye } from 'react-icons/fa'
import Image from 'next/image'
import { getUserDetail } from '@/lib/queries/getUserDetail'
import { formatDateToCustom } from '@/app/utils/date-formatters'
import Link from 'next/link'

export default async function UserDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const user = await getUserDetail((await params).id)

    function getRoleInTeam(team: { id: string; name: string; team_lead: string; coordinating_trustee: string }) {

        const isBoardOfTrustees = team.name === 'Board of Trustees';

        if (user.user_id === team.team_lead) {
            return isBoardOfTrustees ? 'President' : 'Team Lead';
        } else if (user.user_id === team.coordinating_trustee) {
            return isBoardOfTrustees ? 'Managing Trustee' : 'Coordinating Trustee';
        }
        return isBoardOfTrustees ? 'Trustee' : 'Member';
    }

    return (
        <>
            <div className="grid md:grid-cols-3 gap-3 mb-3">
                {/* Left 2/3 Card */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 md:col-span-2 flex gap-6">
                    {/* Left: Profile Info */}
                    <div className="flex gap-6 w-3/5 items-center">
                        <Image
                            src="/icons/default-profile-pic.jpg"
                            alt="Profile"
                            width={120}
                            height={120}
                            className="rounded-xl object-cover"
                        />
                        <div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 inline-block text-transparent bg-clip-text mb-1">{user.full_name}</h2>
                            <p className="text-orange-600 uppercase text-sm font-semibold mb-0.5">{user.role_name}</p>
                            <p className="text-gray-600 text-lg font-semibold">{user.team_name}</p>
                        </div>
                    </div>

                    {/* Right: Bio */}
                    <div className="w-2/5 border-l border-gray-200 pl-6">
                        <p className="text-gray-700">
                            {user.role_bio?.replace('[Name]', user.full_name) || user.bio}
                        </p>
                    </div>
                </div>

                {/* Right 1/3 Card: Personal Details */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 text-left text-md text-gray-700">
                    <p className="flex items-center gap-2 mt-1">
                        <FaPhoneAlt className="text-gray-500" />
                        {user.phone || ''}
                    </p>
                    <p className="flex items-center gap-2 mt-1">
                        <FaEnvelope className="text-gray-500" />
                        {user.email || ''}
                    </p>
                    <p className="flex items-center gap-2 mt-1">
                        <FaMapMarkerAlt className="text-gray-500" />
                        {user.address || ''}
                    </p>
                    <p className="flex items-center gap-2 mt-1">
                        <FaBirthdayCake className="text-gray-500" />
                        <span>DoB :</span>
                        <span className="font-semibold">{formatDateToCustom(user.dob)}</span>
                    </p>
                </div>

            </div>

            <div className="mt-0 grid md:grid-cols-3 gap-3">

                {/* Teams */}
                <div className="bg-white border border-gray-200 rounded-xl mb-3 p-6">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">
                        Teams ({user.teams.length})
                    </h3>
                    <ul key="teams" className="space-y-3">
                        {user.teams.map((team: { id: string, name: string, team_lead: string, coordinating_trustee: string }) => (
                            <li
                                key={team.id}
                                className="flex items-center justify-between text-sm"
                            >
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={`/teams/${team.name.replaceAll(' ', '-')}.jpg`}
                                        alt="Profile"
                                        width={60}
                                        height={60}
                                        className="rounded-xl object-cover"
                                    />

                                    <div>
                                        <p className="font-semibold text-gray-700">{team.name}</p>
                                        <p className="text-gray-500">{getRoleInTeam(team)}</p>
                                    </div>
                                </div>

                                <Link href={`/dashboard/teams`} className="text-orange-600 hover:text-orange-800 transition">
                                    <FaEye className="inline-block w-5 h-5" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>


                {/* Circles */}
                <div className="bg-white border border-gray-200 rounded-xl mb-3 p-6">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">
                        Changemakers Circles ({user.circles ? user.circles.length : 0})
                    </h3>
                    <ul key="teams" className="space-y-3">
                        {user.circles && user.circles.map((team: { id: string, name: string }) => (
                            <li
                                key={team.id}
                                className="flex items-center justify-between text-sm"
                            >
                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/brand/logo_af_cm_square_without_bg.png"
                                        alt="Profile"
                                        width={60}
                                        height={60}
                                        className="rounded-xl object-cover"
                                    />

                                    <div>
                                        <p className="font-semibold text-gray-700">{team.name}</p>
                                        {/* <p className="text-gray-500">{getRoleInTeam(team)}</p> */}
                                    </div>
                                </div>

                                <Link href={`/dashboard/changemakers/circle/${team.id}`} className="text-orange-600 hover:text-orange-800 transition">
                                    <FaEye className="inline-block w-5 h-5" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>


                {/* Role Timeline */}
                <div className="bg-white border border-gray-200 rounded-xl mb-4 p-6">
                    <h3 className="text-xl font-bold text-gray-700 mb-4">Role Timeline</h3>
                    <ul className="space-y-4 text-sm">
                        {user.roles.map((role: {
                            id: string,
                            role_name: { name: string },
                            team_name: string,
                            start_date: string,
                            end_date: string
                        }) => (
                            <li key={role.id} className="flex items-start gap-3">
                                <div className="text-orange-600 text-lg mt-0.5"><FaMapMarkerAlt className="w-5 h-5 mt-0.5" /></div>
                                <div>
                                    <p className="font-semibold text-gray-700">
                                        {role.role_name?.name ?? "Unknown Role"}
                                    </p>
                                    {role.team_name && (
                                        <p className="text-gray-600 text-xs italic mb-0.5">
                                            {role.team_name}
                                        </p>
                                    )}
                                    <p className="text-gray-500">
                                        {formatDateToCustom(role.start_date)} – {role.end_date ? formatDateToCustom(role.end_date) : 'Present'}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </>
    )
}

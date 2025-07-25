import { FaMapMarkerAlt, FaBirthdayCake, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import Image from 'next/image'
import { getUserDetail } from '@/lib/queries/getUserDetail'

export default async function UserDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const user = await getUserDetail((await params).id)

    return (
        <>
            <div className="grid md:grid-cols-3 gap-3 mb-3">
                {/* Left 2/3 Card */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 md:col-span-2 flex gap-6">
                    {/* Left: Profile Info */}
                    <div className="flex gap-6 w-3/5">
                        <Image
                            src="/icons/default-profile-pic.jpg"
                            alt="Profile"
                            width={120}
                            height={120}
                            className="rounded-xl object-cover"
                        />
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-1">{user.full_name}</h2>
                            <p className="text-orange-600 uppercase text-sm font-semibold mb-1">{user.role_name}</p>
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
                        <span className="font-semibold">{user.dob ? new Date(user.dob).toDateString() : '—'}</span>
                    </p>
                </div>

            </div>

            <div className="mt-0 grid md:grid-cols-3 gap-3">

                {/* Teams */}
                <div className="bg-white border border-gray-200 rounded-xl mb-3 p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Teams ({user.teams.length})</h3>
                    <ul key="teams" className="space-y-2">
                        {user.teams.map((team: { id: string, name: string, position: string }) => (
                            <li key={team.id} className="flex justify-between text-sm">
                                <div>
                                    <p className="font-medium text-gray-800">{team.name}</p>
                                    <p className="text-gray-500">{team.position || 'Member'}</p>
                                </div>
                                <p className="text-orange-600 font-semibold cursor-pointer hover:underline">VIEW</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Role Timeline */}
                <div className="bg-white border border-gray-200 rounded-xl mb-3 p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Role Timeline</h3>
                    <ul className="space-y-3 text-sm">
                        {user.roles.map((role: { id: string, role_name: { name: string }, team_name: string, start_date: string }) => (
                            <li key={role.id} className="flex items-start gap-2">
                                <span className="text-pink-600 mt-1">📍</span>
                                <div>
                                    <p className="font-medium text-gray-800">{role.role_name?.name ?? "Unknown Role"}</p>
                                    <p className="text-gray-500">{new Date(role.start_date).toDateString()} | {role.team_name}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

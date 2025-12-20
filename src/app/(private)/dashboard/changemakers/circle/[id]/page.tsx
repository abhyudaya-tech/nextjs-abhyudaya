import { FaPhoneAlt, FaEnvelope, FaEye } from 'react-icons/fa'
import Image from 'next/image'
import { formatDateToCustom } from '@/app/utils/date-formatters'
import Link from 'next/link'
import { getCircleDetails } from '@/lib/queries/getCircles'

export default async function UserDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const circle = await getCircleDetails((await params).id)

    return (
        <>
            <div className="grid md:grid-cols-2 gap-3 mb-3">
                {/* Left 2/3 Card */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 md:col-span-2 flex gap-6">
                    {/* Left: Profile Info */}
                    <div className="flex gap-6 w-3/5 items-center">
                        <Image
                            src={`/brand/logo_af_cm_square_without_bg.png`}
                            alt="Profile"
                            width={120}
                            height={120}
                            className="rounded-xl object-cover"
                        />
                        <div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 inline-block text-transparent bg-clip-text mb-1">{circle.name}</h2>
                            <p className="text-orange-600 uppercase text-sm font-semibold mb-0.5">{circle.type} Circle</p>
                            <p className="text-gray-600 text-lg font-semibold">{circle.team_name}</p>
                        </div>
                    </div>

                    {/* Right: Bio */}
                    <div className="w-2/5 border-l border-gray-200 pl-6">
                        <p className="text-gray-700 line-clamp-5">
                            {circle.description}
                        </p>
                    </div>
                </div>

                {/* Right 1/3 Card: Personal Details */}
                {/* <div className="bg-white border border-gray-200 rounded-xl p-6 text-left text-md text-gray-700">
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
                </div> */}

            </div>

            <div className="mt-0 grid md:grid-cols-2 gap-3">

                {/* Teams */}
                <div className="bg-white border border-gray-200 rounded-xl mb-3 p-6">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">
                        Changemakers ({circle.members.length})
                    </h3>
                    <ul key="teams" className="space-y-3">
                        {circle.members.map((member: { id: string, user_id: string, full_name: string, phone: string, email: string, role: string, joined_at: string }) => (
                            <li
                                key={member.user_id}
                                className="flex items-start justify-between text-sm pb-3 border-b border-gray-200"
                            >
                                <div className="flex items-start gap-3">
                                    <Image
                                        src={`/icons/default-profile-pic.jpg`}
                                        alt={member.full_name || 'Profile'}
                                        width={60}
                                        height={60}
                                        className="rounded-xl object-cover"
                                    />

                                    <div>
                                        <div className="flex items-center gap-2">
                                            <p className="font-semibold text-gray-700">{member.full_name || '—'}</p>
                                            <span className="text-xs text-gray-500">•</span>
                                            <span className="text-gray-500 capitalize">{member.role ? member.role.replaceAll('_', ' ') : 'member'}</span>
                                        </div>

                                        <div className="mt-1 text-sm text-gray-500 space-y-0.5">
                                            <p className="flex items-center gap-2">
                                                {member.email && (
                                                    <>
                                                        <FaEnvelope className="w-3.5 h-3.5 text-gray-400" />
                                                        <a href={`mailto:${member.email}`} className="hover:underline">{member.email}</a>
                                                    </>

                                                )}
                                                {member.phone && (
                                                    <>
                                                        {member.email && (<span className="text-xs text-gray-500">•</span>)}
                                                        <FaPhoneAlt className="w-3.5 h-3.5 text-gray-400" />
                                                        <a href={`tel:${member.phone}`} className="hover:underline">{member.phone}</a>
                                                    </>
                                                )}</p>
                                            <p className="text-xs text-gray-400 mt-1">Joined {formatDateToCustom(member.joined_at)}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-shrink-0 ml-4">
                                    <Link href={`/dashboard/members/${member.user_id}`} className="text-orange-600 hover:text-orange-800 transition flex items-center gap-2" title={`View ${member.full_name || 'member'}`}>
                                        <FaEye className="inline-block w-5 h-5" />
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>


                {/* Role Timeline */}
                {/* <div className="bg-white border border-gray-200 rounded-xl mb-4 p-6">
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
                </div> */}

            </div>
        </>
    )
}

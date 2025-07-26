import Footer from '@/app/components/Footer'
import { getAllUsers, UserWithRoleAndTeam } from '@/lib/queries/getUsersWithCurrentRoles';
import Link from 'next/link';
import { FaCheckCircle, FaEye, FaTimesCircle } from 'react-icons/fa';
import { formatDateToCustom } from '@/app/utils/date-formatters';

const teamOrder = ['Trustees', 'Operational Excellence Team', 'Member', 'Volunteer', 'Donator'];

function sortMembers(members: UserWithRoleAndTeam[]) {
    return members.sort((a, b) => {
        const teamA = a.team_name || ''
        const teamB = b.team_name || ''
        const teamIndexA = teamOrder.indexOf(teamA)
        const teamIndexB = teamOrder.indexOf(teamB)

        // Sort by team order
        if (teamIndexA !== teamIndexB) {
            return teamIndexA - teamIndexB
        }

        // If same team, sort by full name alphabetically
        return a.full_name.localeCompare(b.full_name)
    })
}

export default async function AboutPage() {

    const members = await getAllUsers();
    const sortedMembers = sortMembers(members ?? []);

    return (
        <>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 mb-8">Member Details</h1>

                <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow">
                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                        <thead className="bg-orange-50 text-gray-700 font-semibold text-left">
                            <tr>
                                <th className="px-4 py-3 text-left">Name</th>
                                <th className="px-4 py-3 text-center">Phone</th>
                                <th className="px-4 py-3 text-center">Role & Team</th>
                                <th className="px-4 py-3 text-center">Joined On</th>
                                <th className="px-4 py-3 text-center">View</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {sortedMembers.map((user) => (
                                <tr key={user.user_id} className="hover:bg-gray-50">
                                    <td className="px-4 py-3 text-gray-800">
                                        <div className="flex items-center gap-2 font-semibold">
                                            {user.full_name}
                                            <span>
                                                {user.is_active ? (
                                                    <FaCheckCircle className="text-green-600 w-4 h-4" />
                                                ) : (
                                                    <FaTimesCircle className="text-red-500 w-4 h-4" />
                                                )}
                                            </span>
                                        </div>
                                        <div className="text-sm text-gray-500 font-normal">
                                            {user.address?.split(',')[0] || '-'}
                                        </div>
                                    </td>

                                    <td className="px-4 py-3 text-center text-gray-700">
                                        <div className="font-semibold">{user.phone || '-'}</div>
                                        <div className="text-sm text-gray-500">{user.email || '-'}</div>
                                    </td>

                                    <td className="px-4 py-3 text-center text-gray-700">
                                        <div className="font-semibold">{user.responsibility || user.role_name}</div>
                                    </td>

                                    <td className="px-4 py-3 text-center text-gray-700">
                                        <div className="font-semibold">{formatDateToCustom(user.joining_date)}</div>
                                    </td>

                                    <td className="px-4 py-3 text-center">
                                        <Link
                                            href={`/dashboard/members/${user.user_id}`}
                                            className="text-orange-600 hover:text-orange-800 transition"
                                        >
                                            <FaEye className="inline-block w-5 h-5" />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    )
}

// app/(private)/teams/page.tsx
import { getAllTeams } from '@/lib/queries/getTeams'
import Image from 'next/image'
import Link from 'next/link';
import { FaEye } from 'react-icons/fa';
import { ReactNode } from 'react';

// Define types for the team and its members
interface Member {
    id: string;
    full_name: string;
    phone: string;
    email: string;
}

interface Team {
    team_id: string;
    team_name: string;
    description: string;
    team_lead_name: string;
    coordinating_trustee_name: string;
    members: Member[];
}

export default async function TeamsPage() {
    const rawTeams: Team[] = await getAllTeams();

    // Sort members within a team: lead → coordinating trustee → others (alphabetical)
    function sortMembers(team: Team): Member[] {
        return team.members
            ?.slice() // copy array
            .sort((a: Member, b: Member) => {
                const aIsLead = a.full_name === team.team_lead_name;
                const bIsLead = b.full_name === team.team_lead_name;
                if (aIsLead && !bIsLead) return -1;
                if (!aIsLead && bIsLead) return 1;

                const aIsCoord = a.full_name === team.coordinating_trustee_name;
                const bIsCoord = b.full_name === team.coordinating_trustee_name;
                if (aIsCoord && !bIsCoord) return -1;
                if (!aIsCoord && bIsCoord) return 1;

                return a.full_name.localeCompare(b.full_name);
            });
    }
    function getRole(team: Team, member: Member): ReactNode {
        if (team.team_lead_name === member.full_name) return <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-2 py-1 rounded-2xl">Team Lead</span>;
        if (team.coordinating_trustee_name === member.full_name) return <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded-2xl">Coordinator</span>;
        return '';
    }

    const teamPriority = ['Board of Trustees', 'Operational Excellence Team'];

    const teams = [...rawTeams].sort((a, b) => {
        const aIndex = teamPriority.indexOf(a.team_name);
        const bIndex = teamPriority.indexOf(b.team_name);

        if (aIndex === -1 && bIndex === -1) return a.team_name.localeCompare(b.team_name);
        if (aIndex === -1) return 1;
        if (bIndex === -1) return -1;
        return aIndex - bIndex;
    });

    return (
        <>
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Teams @Abhyudaya</h1>

            <div className="grid gap-3 md:grid-cols-3">
                {teams.map((team) => (
                    <div key={team.team_id} className="bg-white border border-gray-200 rounded-xl p-3">
                        {/* Header */}
                        <div className="mb-4 border-b border-gray-200">
                            <div className="flex items-center gap-4 p-3">
                                <Image
                                    src={`/teams/${team.team_name.replaceAll(' ', '-')}.jpg`}
                                    alt="Team"
                                    width={80}
                                    height={60}
                                    className="rounded-xl object-cover"
                                />

                                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 inline-block text-transparent bg-clip-text mb-2">
                                    {team.team_name}
                                </h2>
                            </div>
                            <p className="ml-2 text-gray-600 mb-2">{team.description}</p>
                        </div>

                        {/* Members */}
                        <div>
                            {sortMembers(team).map((member: Member) => (
                                <div key={member.id} className="border-b border-gray-200 pb-2 mb-2">
                                    <div className="flex justify-between items-center px-3">
                                        <div>
                                            <h3 className="font-semibold">
                                                {member.full_name} {getRole(team, member)}
                                            </h3>
                                            <p className="text-sm text-gray-500">{member.phone}</p>
                                            <p className="text-sm text-gray-500">{member.email}</p>
                                        </div>

                                        <Link href={`/dashboard/members/${member.id}`} className="text-orange-500 hover:text-orange-800 transition">
                                            <FaEye className="inline-block w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

// app/(private)/teams/page.tsx
import { getAllTeams } from '@/lib/queries/getTeams'
import Image from 'next/image'

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

    function getIcons(team: Team, member: Member): string {
        if (team.team_lead_name === member.full_name) return '⭐';
        if (team.coordinating_trustee_name === member.full_name) return '⚙️';
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
        <main className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Teams @Abhyudaya</h1>
            <p className="text-gray-600 mb-6">
                ⚙️ Coordinating Trustee | ⭐ Team Lead | Members
            </p>

            <div className="grid gap-3 md:grid-cols-2">
                {teams.map((team) => (
                    <div key={team.team_id} className="bg-white border border-gray-200 rounded-xl p-3">
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-4 border-b border-gray-200 p-3">
                            <Image
                                src={`/teams/${team.team_name.replaceAll(' ', '-')}.jpg`}
                                alt="Team"
                                width={100}
                                height={100}
                                className="rounded-xl object-cover"
                            />
                            <div className="ml-2">
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 inline-block text-transparent bg-clip-text mb-2">
                                    {team.team_name}
                                </h2>
                                <p className="text-gray-600">{team.description}</p>
                            </div>
                        </div>

                        {/* Members */}
                        <div className="px-3">
                            {sortMembers(team).map((member: Member) => (
                                <div key={member.id} className="border-b border-gray-200 pb-2 mb-2">
                                    <h3 className="font-semibold">
                                        {member.full_name} {getIcons(team, member)}
                                    </h3>
                                    <p className="text-sm text-gray-500">{member.phone}</p>
                                    <p className="text-sm text-gray-500">{member.email}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

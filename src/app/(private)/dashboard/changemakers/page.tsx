// app/(private)/teams/page.tsx
import Image from 'next/image'
import Link from 'next/link';
import { getAllCircles,Circle } from '@/lib/queries/getCircles';

export default async function TeamsPage() {
    const circles: Circle[] = await getAllCircles();

    return (
        <>
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Changemakers by Abhyudaya</h1>

            <div className="grid gap-3 md:grid-cols-3">
                {circles.map((circle) => (
                    <Link href={`/dashboard/changemakers/circle/${circle.id}`} key={circle.id}>
                        <div key={circle.id} className="bg-white border border-gray-200 rounded-xl p-3">
                            {/* Header */}
                            <div className="mb-4 border-b border-gray-200">
                                <div className="mb-4 flex items-center gap-4 p-3 border-b border-gray-200">
                                    <Image
                                        src={`/brand/logo_af_cm_square_without_bg.png`}
                                        alt="Team"
                                        width={80}
                                        height={60}
                                        className="rounded-xl object-cover"
                                    />
                                    <div className="min-w-0">
                                            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 w-full text-transparent bg-clip-text mb-2 truncate" title={circle.name}>
                                                {circle.name}
                                            </h2>

                                            <p className="text-orange-600 uppercase text-sm font-semibold mb-0.5">{circle.type} Circle</p>
                                        </div>
                                </div>
                                <p className="ml-2 text-gray-600 mb-2 line-clamp-3">{circle.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}

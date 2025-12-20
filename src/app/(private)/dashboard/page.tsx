import Image from "next/image";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">My Dashboard</h1>

      <div className="mb-8 bg-white border border-orange-300 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/4">
            <Image
              src="/brand/logo_af_cm_square_without_bg.png"
              alt="Changemakers"
              width={240}
              height={240}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
          <div className="w-full md:w-3/4">
            <h2 className="text-3xl font-bold text-orange-600 mb-2">
              Changemakers
            </h2>
            <p className="text-gray-700 mb-4">
              A youth-led movement to lead cultural, civic, and sustainable transformation rooted in Bharatiya values — for students, professionals, and volunteers. Join or start a club in your campus, company, or community.
            </p>
            <Link
              href={`dashboard/changemakers`}
              className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition"
            >
              Console
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from 'next/image'
import Link from 'next/link'
import FeaturedPosts from "../components/FeaturedPosts";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-center">
        {/* Join Us Button - Top Right */}
        <div className="flex justify-center max-w-7xl mx-auto mt-8">
          <Link
            href="/volunteer"
            className="inline-flex items-center px-4 py-1 rounded-full text-sm bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 shadow-sm transition"
          >
            <span className="mr-2 bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs">Join Us</span>
            transform Purpose into Action →
          </Link>
        </div>

        {/* Logo + Title */}
        <section className="flex flex-col items-center justify-center mt-8 px-4">
          <Image
            src="/brand/logo_af_without_bg.png"
            alt="Abhyudaya Foundation Logo"
            width={240}
            height={240}
            className="mb-4 w-[50rem] h-auto"
          />
          <h1 className="text-xl md:text-xl font-semibold text-white font-[cursive]">
            Abhyudaya Foundation
          </h1>
        </section>

        {/* Subtitle */}
        <p className="text-gray-700 text-lg mt-2">where passion meets purpose</p>

        {/* Know More Button */}
        <div className="mt-6">
          <Link
            href="/about"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 shadow transition"
          >
            Know more
          </Link>
        </div>

        {/* Optional: Add a soft divider */}
        <div className="my-16 border-t max-w-xl mx-auto border-gray-200" />

        {/* About Us Section */}
        <section className="mt-20 px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* LHS: Text Content */}
            <div>
              <h2 className="text-3xl font-semibold text-orange-400 mb-4">About Us</h2>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                &emsp;&emsp;&emsp;Abhyudaya Foundation is a Bengaluru-based, values-driven social institution committed to nation-building through civic leadership, cultural rootedness, and structured social action. Rooted in Bharatiya civilizational values, the Foundation serves as a platform for designing, governing, and enabling long-term initiatives that strengthen citizenship, community responsibility, and ethical leadership across India.
                <br /><br />
                &emsp;&emsp;&emsp;The word Abhyudaya means rising or upliftment — reflecting our belief that national transformation begins with individual consciousness, collective responsibility, and disciplined action.
                We believe that by combining technology, cultural experiences, and a deep sense of pride in our heritage, we can forge a brighter future for our nation.
              </p>
              <div className="mt-6">
                <Link
                  href="/about"
                  className="inline-block px-6 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-700 transition shadow"
                >
                  Know More
                </Link>
              </div>
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
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 md:gap-30 gap-10 items-start text-center md:text-left">

            {/* Vision */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-orange-700 mb-2">👁️ Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A strong and self-aware Bharat, where citizens united by heritage and innovation lead sustainable, ethical, and impactful change.
              </p>
            </div>

            {/* Mission */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-orange-700 mb-2">🎯 Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To build and enable values-driven civic leadership across society by empowering youth, professionals, and communities through culture, citizenship, sustainability, and technology.
              </p>
            </div>
          </div>
        </section>

        {/* Our Initiatives Section */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-orange-400 mb-12">
              Our Initiatives
            </h2>

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
                  <p className="text-gray-700 mb-4 text-justify px-2">
                    &emsp;&emsp;&emsp;A values-driven, nation-building movement that enables citizens to actively participate in shaping a stronger, more responsible, and self-aware Bharat. Powered by <span className="font-semibold">Abhyudaya Foundation</span>, Changemakers provides a structured pathway for students, professionals, and communities to translate Bharatiya values into meaningful cultural, civic, and sustainable action.
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-4 text-center">
                    <a
                      href="/changemakers"
                      className="inline-block bg-orange-600 text-white px-16 py-2 rounded-full hover:bg-orange-700 transition"
                    >
                      Know More
                    </a>

                    <a
                      href="https://play.google.com/store/apps/details?id=in.abhyudayafoundation.changemakers"
                      className="inline-block border border-orange-600 text-orange-600 px-16 py-2 rounded-full hover:bg-orange-600 hover:text-white transition"
                      target="_blank"
                    >
                      Explore the App
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-3">
              {/* Card 1: TechForGood */}
              {/* <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <div className="relative w-full h-40 mb-4">
                    <Image
                      src="/brand/logo_af_cm_square_without_bg.png"
                      alt="TechForGood"
                      fill
                      className="object-contain rounded"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Changemakers</h3>
                  <p className="text-gray-600 text-md">
                    A youth-led movement to lead cultural, civic, and sustainable transformation rooted in Bharatiya values, for students, professionals, and volunteers.
                  </p>
                </div> */}

              {/* Card 2: Samskruti Sahal */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                <div className="relative w-full h-40 mb-4">
                  <Image
                    src="/initiatives/tech-for-good.png"
                    alt="TechForGood"
                    fill
                    className="object-contain rounded"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">#TechForGood</h3>
                <p className="text-gray-600 text-md">
                  An initiative where technology is harnessed to solve cultural, social, environmental,
                  and economic challenges, by bridging innovation with social impact.
                </p>
              </div>

              {/* Card 3: Yuva Samvada */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                <div className="relative w-full h-40 mb-4">
                  <Image
                    src="/initiatives/samskruthi.png"
                    alt="Samskruti Sahal"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">ಸಂಸ್ಕೃತಿ ಸಹಲ್</h3>
                <p className="text-gray-600 text-md">
                  Samskruti Sahal celebrates cultural diversity and heritage, inviting individuals
                  on a journey through traditional arts, music, and history.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-orange-50 py-8 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-orange-500 mb-8">Join Us</h2>

            <Link
              href="/volunteer">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {/* Volunteer */}
                <div className="flex flex-col items-center">
                  <div className="bg-orange-100 text-orange-500 p-4 rounded-full mb-4">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4S8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-700 text-xl">Volunteer</h3>
                </div>

                {/* Social Internship */}
                <div className="flex flex-col items-center">
                  <div className="bg-orange-100 text-orange-500 p-4 rounded-full mb-4">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17 10.5V6c0-1.1-.9-2-2-2H5C3.9 4 3 4.9 3 6v12c0 1.1.9 2 2 2h6.5v-2H5V6h10v4.5h2zM20 14h-5v5h5v-5zM14 20h6c.55 0 1-.45 1-1v-7h-8v8c0 .55.45 1 1 1z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-700 text-xl">Social Internship</h3>
                </div>

                {/* Share Ideas */}
                <div className="flex flex-col items-center">
                  <div className="bg-orange-100 text-orange-500 p-4 rounded-full mb-4">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 2H6c-1.1 0-2 .9-2 2v16l4-4h5c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-700 text-xl">Share Ideas</h3>
                </div>

                {/* Donate */}
                <div className="flex flex-col items-center">
                  <div className="bg-orange-100 text-orange-500 p-4 rounded-full mb-4">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
                     4.42 3 7.5 3c1.74 0 3.41.81 
                     4.5 2.09C13.09 3.81 14.76 3 
                     16.5 3 19.58 3 22 5.42 
                     22 8.5c0 3.78-3.4 6.86-8.55 
                     11.54L12 21.35z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-700 text-xl">Donate for a Cause</h3>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* News & Stories Section */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-orange-400 mb-10">
              Stories & Impact
            </h2>

            <FeaturedPosts />
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
// app/volunteer/page.tsx
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

const volunteerActivities = [
    {
        title: 'Volunteering',
        subtitle: '(तन – By Giving Your Time)',
        description: 'Become a part of something greater by contributing your time and energy to our cause. We offer a wide range of volunteer opportunities tailored to different interests and skill sets. Whether it\'s organizing events, supporting campaigns, or working behind the scenes, your efforts help drive meaningful change. Join us and experience the joy of giving back while making a tangible impact on society.',
        image: '/volunteer/volunteer.png',
    },
    {
        title: 'Share Ideas',
        subtitle: '(मन – Share Your Great Ideas)',
        description: 'Your mind is a powerful tool for change. We encourage you to share your innovative, practical, and socially impactful ideas that can help address real-world challenges. Whether it\'s a new project concept, a creative solution, or a fresh perspective, your contribution can spark conversations, shape initiatives, and drive progress. Be a catalyst for positive transformation through the power of your ideas.',
        image: '/volunteer/share-ideas.png',
    },
    {
        title: 'Donate for a Cause',
        subtitle: '(धन – Support Us by Donation)',
        description: 'Your generosity can light the way forward. By donating to our cause, you enable us to expand our reach, enhance our programs, and serve communities more effectively. Every contribution, big or small, makes a difference—helping us support education, health, empowerment, and other critical initiatives. Invest in a better tomorrow by giving today.',
        image: '/volunteer/donate.png',
    },
    {
        title: 'Social Internships',
        subtitle: '',
        description: 'Step into a purpose-driven journey through our Social Internship Program. Designed for students, young professionals, and changemakers, this program offers hands-on experience in grassroots development and social innovation. Interns work closely with our teams on real projects that create real impact, gaining valuable skills while contributing meaningfully to community upliftment. Learn, grow, and give back—all at the same time.',
        image: '/volunteer/social-internship.png',
    },
]

export default function VolunteerPage() {
    return (
        <>
            <Navbar />

            <main className="bg-white py-16">
                <div className="max-w-5xl mx-auto px-4 space-y-20">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
                        Volunteer With Us
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
                        Join hands with Abhyudaya Foundation and contribute in your own unique way to bring change.
                    </p>

                    {volunteerActivities.map((volunteer, index) => (
                        <section key={index}>
                            {/* Description Section with BG */}
                            <div className="bg-orange-50 rounded-xl p-6 mb-8 flex flex-col sm:flex-row items-center justify-evenly">
                                {/* Image Section */}
                                <div className="w-full sm:w-1/4 sm:mr-4 mb-4 sm:mb-0">
                                    <img
                                        src={volunteer.image}
                                        alt={volunteer.title}
                                        className="w-full h-auto rounded-lg object-fit"
                                    />
                                </div>

                                {/* Text Section */}
                                <div className="w-full sm:w-2/3">
                                    <h2 className="text-3xl font-semibold text-gray-800 mb-2 text-left">
                                        {volunteer.title}
                                    </h2>
                                    <h3 className="text-lg text-gray-600 mb-4 text-left">
                                        {volunteer.subtitle}
                                    </h3>
                                    <p className="text-gray-600 text-left">
                                        {volunteer.description}
                                    </p>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </main>

            <Footer />
        </>
    )
}

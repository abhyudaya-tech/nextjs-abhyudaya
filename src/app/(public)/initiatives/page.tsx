import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import Image from 'next/image'

const initiatives = [
    {
        title: '#TechForGood',
        description: 'An initiative where technology is harnessed to solve cultural, social, environmental, and economic challenges, by bridging innovation with social impact.',
        image: '/initiatives/tech-for-good.png',
        projects: [
            { title: 'Prajnanam', description: 'A digital platform uniting diverse cultural & social organizations - offering technical support, sharing event updates, insightful blogs, and interactive \'Play & Learn\' experiences to nurture knowledge, creativity, and community engagement.', image: '/initiatives/prajnanam.png' },
            { title: 'Gnana Sangama', description: 'An application designed to bring together the richness of Bharatiya culture, traditions, and values in one place. It serves as a trusted source for learning, exploration, and collaboration.', image: '/initiatives/gnana-sangama.png' },
        ],
    },
    {
        title: 'ಸಂಸ್ಕೃತಿ ಸಹಲ್',
        description: 'Samskruti Sahal celebrates cultural diversity and heritage, inviting individuals on a journey through traditional arts, music, and history.',
        image: '/initiatives/samskruthi-sahal.png',
        projects: [
            { title: 'Historical Heritage Tours', description: 'Explore timeless tales carved in stone through guided visits to ancient temples, forts, and monuments.', image: '/initiatives/historical-heritage.png' },
            { title: 'GouVikas', description: 'A step toward sustainable development through the sacred bond with cows, promoting eco-friendly, and discover the sustainable wealth of the Gou-based economy.', image: '/initiatives/goushala.png' },
        ],
    },
    {
        title: 'ಯuva ಸಂವಾದ',
        description: 'Yuva Samvada creates a space for young people to engage in dialogue, exchange ideas, and take action on cultural, social, environmental, and economic issues.',
        image: '/initiatives/yuva-samvaada.png',
        projects: [
            { title: 'Abhyudaya Youth Parliament', description: 'A platform to debate, discuss, and shape the future of public thought and civic action.', image: '/initiatives/youth-parliament.jpg' },
            { title: 'Abhyudaya Young Leaders Dialogue', description: 'Fostering leadership, innovation, and policy engagement among the changemakers of tomorrow.', image: '/initiatives/young-leaders.png' },
        ],
    },
]

export default function InitiativesPage() {
    return (
        <>
            <Navbar />

            <main className="bg-white py-16">
                <div className="max-w-5xl mx-auto px-4 space-y-20">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
                        Our Initiatives
                    </h1>

                    {initiatives.map((initiative, index) => (
                        <section key={index}>
                            {/* Description Section with BG */}
                            <div className="bg-orange-50 rounded-xl p-6 mb-8 flex flex-col sm:flex-row items-center justify-evenly">
                                {/* Image Section */}
                                <div className="w-full sm:w-1/8 sm:mr-4 mb-4 sm:mb-0">
                                    <img
                                        src={initiative.image}
                                        alt={initiative.title}
                                        className="w-full h-auto rounded-lg object-cover"
                                    />
                                </div>

                                {/* Text Section */}
                                <div className="w-full sm:w-4/6">
                                    <h2 className="text-3xl font-semibold text-gray-800 mb-2 text-left">
                                        {initiative.title}
                                    </h2>
                                    <p className="text-gray-700 text-left">
                                        {initiative.description}
                                    </p>
                                </div>
                            </div>



                            {/* Project Grid - White BG */}
                            <div className="grid md:grid-cols-3 gap-8">
                                {initiative.projects.map((project, idx) => (
                                    <div
                                        key={idx}
                                        className="border border-gray-200 rounded-xl p-6 text-center"
                                    >
                                        <div className="relative w-full h-40 mb-4">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-fit rounded"
                                            />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">{project.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </main>

            <Footer />
        </>
    )
}
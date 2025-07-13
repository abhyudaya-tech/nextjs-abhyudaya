import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    title: 'One Nation, One Election @ NIAS, IISC Bengaluru',
    excerpt: 'How Abhyudaya Foundation is bridging the digital divide...',
    image: '/blog/one-nation-one-election.jpg',
    href: '/blog/one-nation-one-election-nias-iisc',
  },
  {
    title: 'Cultural Revival: Samskruti Sahal Highlights',
    excerpt: 'A journey through Karnataka’s rich history and heritage...',
    image: '/blog/samskruti-sahal.jpg',
    href: '/blog/samskruti-sahal',
  },
  {
    title: 'Volunteer Diaries: Making an Impact One Step at a Time',
    excerpt: 'Real stories from the ground — by our young changemakers...',
    image: '/blog/volunteer-impact.jpg',
    href: '/blog/volunteer-impact',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-400 mb-12 text-center">
          Blog & Stories
        </h1>

        <div className="grid gap-3 md:grid-cols-4">
          {posts.map((post, idx) => (
            <Link
              key={idx}
              href={post.href}
              className="block border border-gray-200 rounded-xl overflow-hidden hover:shadow transition"
            >
              <div className="relative w-full h-64">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="p-2 object-fit"
                />
              </div>
              <div className="p-2">
                <h3 className="font-semibold text-lg text-gray-800 mb-1">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

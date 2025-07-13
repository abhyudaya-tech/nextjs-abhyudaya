'use client'

import Image from 'next/image'
import Link from 'next/link'

const featuredPosts = [
  {
    title: 'One Nation, One Election Event',
    excerpt: '@ NIAS, IISC Bengaluru',
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

export default function NewsAndStories() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-400 mb-10">
          News & Stories
        </h2>

        <div className="grid gap-3 md:grid-cols-4">
          {featuredPosts.map((post, idx) => (
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
    </section>
  )
}

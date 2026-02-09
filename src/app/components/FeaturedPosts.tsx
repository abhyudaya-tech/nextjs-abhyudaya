// components/FeaturedPosts.tsx
import Image from 'next/image'
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { client } from '@/sanity/lib/client'
import { Post } from '@/app/utils/types'

const { projectId, dataset } = client.config()
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source).width(600).height(400).url()
    : '/placeholder.png'

export default async function FeaturedPosts() {
  const posts: Post[] = await client.fetch(
    `*[_type == "post" && author->name == "Abhyudaya Foundation"] | order(publishedAt desc){
      _id,
      title,
      excerpt,
      mainImage,
      slug,
    }`
  )

  return (
    <div className="grid gap-3 md:grid-cols-3">
      {posts.map((post) => (
        <Link
          key={post._id}
          href={`/blog/${post.slug.current}`}
          className="block border border-gray-200 rounded-xl overflow-hidden hover:shadow transition"
        >
          <div className="relative w-full h-52">
            <Image
              src={urlFor(post.mainImage ?? '/placeholder.png')}
              alt={post.title}
              fill
              className="object-fill object-top"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {post.title}
            </h2>
            <p className="text-sm text-gray-600">{post.excerpt}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

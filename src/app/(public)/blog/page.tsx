import Navbar from '@/app/components/Navbar'
import FeaturedPosts from '@/app/components/FeaturedPosts'

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Blogs & Stories
          </h1>
          <FeaturedPosts />
        </div>
      </main>
    </>
  )
}

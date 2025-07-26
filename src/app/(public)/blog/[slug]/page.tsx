import Navbar from "@/app/components/Navbar";
import { portableTextComponents } from "@/app/components/portable-text";
import { client } from "@/sanity/lib/client"; // or wherever your Sanity client is
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";


const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  body,
  author->{name},
  categories[]->{title, slug},
  views,
  keywords
}`;

// Utility
const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
    projectId && dataset
        ? imageUrlBuilder({ projectId, dataset }).image(source).url()
        : "/fallback.jpg";

const options = { next: { revalidate: 30 } };

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;

    const post = await client.fetch(POST_QUERY, { slug }, options);

    if (!post) return notFound();

    const imageUrl = post.mainImage ? urlFor(post.mainImage) : null;

    return (
        <>
            <Navbar />
            <main className="bg-white py-12 px-4">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>

                    {/* Blog Meta */}
                    <div className="text-sm text-gray-500 flex flex-wrap items-center justify-between gap-4 mb-6 mx-2">
                        <span className="flex items-center gap-1">{/*<FaUser />*/} {post.author?.name}</span>
                        <span className="flex items-center gap-1">{/*<FaCalendarDays />*/} {new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>

                    {/* Main Image */}
                    {imageUrl && (
                        <img
                            src={imageUrl}
                            alt={post.title}
                            className="w-full rounded-lg mb-8"
                            style={{ maxHeight: 400, objectFit: "cover" }}
                        />
                    )}

                    {/* Blog Content */}
                    <article className="prose lg:prose-lg text-gray-800">
                        <PortableText value={post.body} components={portableTextComponents} />
                    </article>
                </div>
            </main>
        </>
    );
}

// app/contact/page.tsx
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import Head from 'next/head'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Abhyudaya Foundation</title>
      </Head>
      <Navbar />
      <main className="min-h-screen bg-white py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-8">We wouldd love to hear from you! Whether you have a question, suggestion, or just want to connect.</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-md"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 text-center text-gray-600 space-y-2">
            <p><strong>Email:</strong> contact@abhyudayafoundation.in</p>
            <p><strong>Phone:</strong> +91 86182 20151</p>
            <p><strong>Address:</strong> Bengaluru, India</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

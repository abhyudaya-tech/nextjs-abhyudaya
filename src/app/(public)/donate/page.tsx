// app/donate/page.tsx
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import Head from 'next/head'
import Image from 'next/image'

export default function DonatePage() {
  return (
    <>
      <Head>
        <title>Donate | Abhyudaya Foundation</title>
      </Head>
      <Navbar />
      <main className="min-h-screen bg-white py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Support Our Mission</h1>
          <p className="text-gray-600 mb-8">
            Your contribution enables us to educate, empower and uplift communities.
            Every rupee you donate goes directly into our initiatives.
          </p>

          <div className="bg-yellow-100 rounded-xl p-6 shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Donate via UPI</h2>
            <p className="text-gray-700 mb-4">Scan the QR code or use the UPI ID below:</p>
            <div className="flex flex-col items-center">
              <Image src="/donate-qr.png" alt="Donate QR" width={200} height={200} />
              <p className="mt-4 font-mono text-lg text-gray-800">abhyudaya@upi</p>
            </div>
          </div>

          <p className="text-gray-500 mt-10 text-sm">
            For receipts or tax-exemption (80G), please contact us at <strong>donate@abhyudayafoundation.in</strong>
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}

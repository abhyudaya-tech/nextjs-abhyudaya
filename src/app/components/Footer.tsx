import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm mt-12 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Abhyudaya Foundation. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  )
}

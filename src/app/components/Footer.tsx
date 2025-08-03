// components/Footer.tsx
import Link from 'next/link'
import { FaYoutube } from 'react-icons/fa'
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaEnvelope, FaPhone } from 'react-icons/fa6'

export const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Initiatives', href: '/initiatives' },
  { name: 'Volunteer', href: '/volunteer' },
  { name: 'Donate', href: '/donate' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand & Description */}
        <div>
          <h2 className="text-white text-xl font-bold mb-2">Abhyudaya Foundation</h2>
          <p className="text-sm">
            A Bengaluru‑based, youth‑led volunteer movement dedicated to fostering a stronger Bharat through cultural revival, civic engagement, and tech‑driven social impact.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="hover:text-orange-400">
                  {item.name}
                </Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2"><FaEnvelope /> contact@abhyudayafoundation.in</li>
            <li className="flex items-center gap-2"><FaPhone /> +91 86182 20151</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-lg">
            <a href="https://www.facebook.com/abhyudayafoundation.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="https://x.com/teamabhyudaya" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaXTwitter /></a>
            <a href="https://www.linkedin.com/company/abhyudayafoundation" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"><FaLinkedinIn /></a>
            <a href="https://www.youtube.com/@abhyudaya-foundation" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Abhyudaya Foundation. All rights reserved.
      </div>
    </footer>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Contact', href: '/contact' },
]

const categories = [
  'Hardware Consumables',
  'Adhesive and Lubricant',
  'MEP Solutions',
  'PPE Supplies',
  'Bearings',
  'Abrasives & Grinding',
]

export default function Footer() {
  return (
    <footer className="bg-dark text-white border-t-2 border-accent">
      <div className="container-max py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Col 1 — Brand */}
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="ResourceHub Logo"
              width={500}
              height={500}
              className="object-contain w-auto"
              style={{ height: '208px' }}
            />
            <p className="text-white/60 text-sm leading-relaxed">
              Your trusted partner for industrial supplies and solutions across Dubai and the UAE.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-none border border-white/20 flex items-center justify-center text-white/60 hover:border-accent hover:text-accent transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/971556568937"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-none border border-white/20 flex items-center justify-center text-white/60 hover:border-accent hover:text-accent transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/60 text-sm hover:text-accent transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Product Categories */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">Product Categories</h3>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    href="/products"
                    className="text-white/60 text-sm hover:text-accent transition-colors duration-200"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm leading-relaxed">
                  Unit 36, 1st Floor, Al Wasl Building,<br />
                  Workspace Downtown, Sheikh Zayed Road,<br />
                  Dubai, UAE
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-accent shrink-0" />
                <a href="tel:+971556568937" className="text-white/60 text-sm hover:text-accent transition-colors duration-200">
                  +971 55 656 8937
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <Mail size={16} className="text-accent shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:michael@resourcehubtrading.com" className="text-white/60 text-sm hover:text-accent transition-colors duration-200">
                    michael@resourcehubtrading.com
                  </a>
                  <a href="mailto:business@resourcehubtrading.com" className="text-white/60 text-sm hover:text-accent transition-colors duration-200">
                    business@resourcehubtrading.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-max py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} ResourceHub Building & Construction Materials Trading LLC. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">Dubai, UAE</p>
        </div>
      </div>
    </footer>
  )
}

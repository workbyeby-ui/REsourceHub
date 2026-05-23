'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-primary shadow-lg'
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <nav className="container-max flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="ResourceHub Logo"
            width={594}
            height={420}
            className="object-contain w-auto"
            style={{ height: '160px', filter: 'brightness(0) invert(1)' }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const active = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-200 pb-1
                    ${active ? 'text-white' : 'text-white/70 hover:text-white'}
                  `}
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-block bg-accent text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-accent-dark active:scale-95 transition-all duration-200"
          >
            Get a Quote
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden text-white p-1"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col bg-primary border-t border-white/10 px-4 pb-6 pt-2 gap-1">
          {navLinks.map(({ label, href }) => {
            const active = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`block py-3 px-4 text-base font-medium border-b border-white/10 transition-colors duration-200
                    ${active ? 'text-accent' : 'text-white/80 hover:text-white'}`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
          <li className="pt-4">
            <Link
              href="/contact"
              className="block text-center bg-accent text-white font-semibold px-6 py-3 rounded-full hover:bg-accent-dark transition-colors duration-200"
            >
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

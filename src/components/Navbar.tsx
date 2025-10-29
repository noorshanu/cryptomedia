"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact Us' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const firstLinkRef = React.useRef<HTMLAnchorElement | null>(null)

  const closeOnRoute = () => setIsOpen(false)

  // Close on ESC and on breakpoint change; lock scroll when opensi
  React.useEffect(() => {
    setMounted(true)
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener('keydown', onEsc)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onEsc)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  React.useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
      // move focus into menu for accessibility
      setTimeout(() => firstLinkRef.current?.focus(), 0)
    } else {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1D1D1F] backdrop-blur ">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main Navigation">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-full" aria-label="Go to homepage">
            <Image src="/logo.png" alt="CryptoMedia logo" width={34} height={34} priority />
            <span className="sr-only">CryptoMedia</span>
          </Link>
        </div>

        <ul className="hidden md:flex items-center gap-10 text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded px-1 py-1">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <Link href="#enquiry" className="text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded px-3 py-2">Enquiry Now</Link>
          <Link href="#signup" className="rounded-full bg-yellow-400 px-5 py-2 text-black font-medium hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400">
            Sign up
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:text-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile sidebar with framer-motion */}
      <AnimatePresence>
        {mounted && isOpen && (
          <>
            <motion.button
              aria-label="Close menu backdrop"
              className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-hidden={!isOpen}
              className="md:hidden fixed inset-y-0 right-0 z-50 w-[88vw] max-w-sm bg-black"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.35 }}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Image src="/logo.png" alt="CryptoMedia logo" width={28} height={28} />
                  <span className="text-sm font-medium">CryptoMedia</span>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                  aria-label="Close menu"
                  onClick={() => setIsOpen(false)}
                >
                  <FiX size={22} />
                </button>
              </div>
              <div className="px-6 py-6 bg-black h-screen">
                <ul className="flex flex-col gap-6">
                  {navItems.map((item, idx) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeOnRoute}
                        ref={idx === 0 ? firstLinkRef : undefined}
                        className="block rounded px-2 py-2 text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 text-2xl"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-4">
                  <Link href="#enquiry" onClick={closeOnRoute} className="rounded px-2 py-2 text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 text-xl">
                    Enquiry Now
                  </Link>
                  <Link
                    href="#signup"
                    onClick={closeOnRoute}
                    className="rounded-full bg-yellow-400 px-5 py-3 text-center text-black font-medium hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 text-lg"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
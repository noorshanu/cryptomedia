import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiMail, FiGlobe, FiSend, FiTwitter } from 'react-icons/fi'
import { FaDiscord, FaTelegramPlane, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="border-t-4 border-white/30 ]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Top row: Logo + nav + social */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Link href="/" className="flex items-center gap-2" aria-label="CryptoMedia home">
            <Image src="/logo.png" alt="CryptoMedia logo" width={42} height={42} />
          </Link>

          <nav aria-label="Footer">
            <ul className="flex items-center gap-8 text-sm text-white/80">
              <li><Link href="#about" className="hover:text-white">About</Link></li>
              <li><Link href="#services" className="hover:text-white">Services</Link></li>
              <li><Link href="#blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="#contact" className="hover:text-white">CONTACT US</Link></li>
            </ul>
          </nav>

          <div className="flex items-center gap-2 text-sm text-white/70">
            <span>Follow us:</span>
            <Link
              href="https://twitter.com/"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-1.5 text-white hover:border-white/40"
              target="_blank"
              rel="noreferrer"
            >
              <FiTwitter /> Twitter
            </Link>
          </div>
        </div>

        {/* Contact strip */}
        <div className="mt-6 rounded-xl border border-white/10 bg-[#141415] p-4">
          <div className="grid grid-cols-1 items-center gap-4 justify-center text-sm text-white/90 ">
            <div className="flex items-center gap-3 justify-center">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/40"><FiMail /></span>
              <span>cryptomediac@gmail.com</span>
              <div className="ml-4 flex items-center gap-3">
                <Link href="https://x.com/Cryptomediac1" target="_blank" rel="noreferrer" aria-label="Twitter" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white hover:border-white/40">
                  <FiTwitter />
                </Link>
                <Link href="https://t.me/" target="_blank" rel="noreferrer" aria-label="Telegram" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white hover:border-white/40">
                  <FaTelegramPlane />
                </Link>
                <Link href="https://discord.com/" target="_blank" rel="noreferrer" aria-label="Discord" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white hover:border-white/40">
                  <FaDiscord />
                </Link>
                <Link href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white hover:border-white/40">
                  <FaGithub />
                </Link>
                <Link href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white hover:border-white/40">
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-white/60 sm:flex-row">
          <p>
            © 2025 <span className="text-yellow-400">cryptomediac</span> all rights reserved
          </p>
          <div className="flex items-center gap-6">
            <Link href="#terms" className="hover:text-white">Terms & Condition's</Link>
            <Link href="#privacy" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
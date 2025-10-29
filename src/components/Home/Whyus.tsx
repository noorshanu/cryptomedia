import React from 'react'
import Image from 'next/image'

const features = [
  {
    title: 'Battle-Tested Dev Team',
    desc: 'We\'ve launched and audited 100+ smart contracts across EVM and Solana.',
  },
  {
    title: 'Deep Solana Expertise',
    desc: 'From MEV bots to private transaction bundlers, we\'re fluent in Solana\'s stack.',
  },
  {
    title: 'Results-Driven Marketing',
    desc: 'We collaborate only with proven KOLs and crypto-native groups with real conversion power.',
  },
  {
    title: 'Customizable & Scalable Solutions',
    desc: 'Whether meme coin or enterprise dApp, we tailor strategies to fit your roadmap.',
  },
]

const Whyus = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-widest text-white/70">Excellence</p>
        <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Why Choose CryptoMediac?</h2>
        <p className="mx-auto mt-3 max-w-3xl text-white/70">
          We engineer ultra-secure, gas-optimized smart contracts and DApps for any EVM chain
          (Ethereum, BNB Chain, Arbitrum, Base, etc.) and Solana.
        </p>
      </div>

      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        {/* Left Illustration */}
        <div className="relative mx-auto h-[360px] w-[360px] sm:h-[420px] sm:w-[420px] lg:h-[460px] lg:w-[460px]">
          <Image
            src="/whyus.png"
            alt="CryptoMediac excellence illustration"
            fill
            sizes="(max-width: 1024px) 90vw, 460px"
            className="object-contain"
            priority
          />
        </div>

        {/* Right Features */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-[#151517] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-black/40">
                <span className="text-lg">👥</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/75">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="#launch"
          className="rounded-full bg-yellow-400 px-6 py-3 text-sm font-medium text-black transition hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
        >
          Launch with Us
        </a>
      </div>
    </section>
  )
}

export default Whyus
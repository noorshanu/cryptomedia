import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#1D1D1F]">
      {/* soft vignette and blur glow */}
      {/* <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full opacity-60" aria-hidden="true">
        <Image src="/blur1.png" alt="" fill sizes="520px" className="object-contain" priority />
      </div> */}

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:gap-8 lg:py-24 lg:px-8">
        {/* Left: copy */}
        <div className="relative z-10 max-w-2xl">
          <h1 className="prosto-one-regular text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            POWERING
            <br />
            THE FUTURE
            <br />
            OF <span className="inline-block bg-linear-to-r from-[#ff2a6d] via-[#ff8a00] to-[#ffd34e] bg-clip-text text-transparent">WEB3</span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
            CryptoMediac is your all-in-one blockchain partner. From bulletproof smart
            contracts and cutting-edge trading bots to viral KOL marketing — we build,
            launch, and scale your crypto project across Solana and all EVM chains.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#launch"
              className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-3 text-sm font-medium text-black transition hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            >
              Launch with Us
            </Link>
            <Link
              href="#consult"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>

        {/* Right: artwork */}
        <div className="relative -right-6 -mb-10 h-[460px] shrink-0 sm:h-[450px] lg:-mb-16 lg:h-[550px] lg:w-[520px]">
          <Image
            src="/hero.png"
            alt="Crypto and web3 ecosystem graphic"
            fill
            sizes="(max-width: 1024px) 75vw, 520px"
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Sub-hero badge area */}
      <div className="mx-auto -mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center gap-2 rounded-[56px] border border-white/10 bg-linear-to-b from-transparent to-[#121214] px-6 py-8 text-center">
          <span className="text-xs tracking-widest text-white/70">ONE CONTRACT</span>
          <span className="text-xs tracking-widest text-white/60">ONE TRADE</span>
          <div className="mt-2 w-full rounded-[56px] border border-yellow-500/40 px-6 py-4">
            <span className="bg-linear-to-r from-[#ffbf00] to-[#ffdd74] bg-clip-text text-base font-semibold text-transparent">
              ONE VIRAL PUSH AT A TIME
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
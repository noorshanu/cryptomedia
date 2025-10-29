import React from 'react'
import Image from 'next/image'

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#1D1D1F]">
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Left copy */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-widest text-white/70">Get in Touch</p>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Ready to Build or{' '}
            <span className="bg-linear-to-r from-[#ffbf00] to-[#ffd34e] bg-clip-text text-transparent">Go Viral?</span>
          </h2>
          <p className="mt-5 max-w-xl text-white/80">
            Our experts are one call away from launching your idea into a working Web3 reality.
          </p>

          <div className="mt-8">
            <a
              href="#start"
              className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            >
              Start a project
            </a>
          </div>
        </div>

        {/* Right artwork */}
        <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block">
          <div className="relative h-[360px] w-[360px] xl:h-[420px] xl:w-[420px]">
            <Image src="/btc.png" alt="Bitcoin" fill sizes="420px" className="object-contain" priority />
          </div>
        </div>
      </div>

      {/* subtle right vignette */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-linear-to-l from-black/30 to-transparent" />
    </section>
  )
}

export default CTA
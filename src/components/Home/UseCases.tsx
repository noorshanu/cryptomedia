import React from 'react'

const items: string[] = [
  'Fair Launch Tokens with Anti-Bot Protection',
  'Solana Meme Coins with LP Auto-Management',
  'NFT Projects with Dynamic Whitelisting',
  'DAO Platforms with Governance Modules',
  'Arbitrage Bots Between DEXes',
  'Volume Bots for CEX/ DEX Listings',
  'Influencer-Led Presale Campaigns',
]

const UseCases = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-widest text-white/70">Excellence</p>
        <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Use Cases We Power</h2>
        <p className="mx-auto mt-3 max-w-3xl text-white/70">
          We engineer ultra-secure, gas-optimized smart contracts and DApps for any EVM chain
          (Ethereum, BNB Chain, Arbitrum, Base, etc.) and Solana.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((label) => (
          <div
            key={label}
            className="relative overflow-hidden rounded-xl border border-white/10 bg-[#121214] px-5 py-6 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
          >
            {/* left accent image */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-28"
              style={{
                backgroundImage: 'url(/cardside.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'left center',
                opacity: 0.95,
              }}
              aria-hidden="true"
            />
            <div className="relative pl-16 text-sm sm:pl-24">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default UseCases
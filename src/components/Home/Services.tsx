"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiTrendingUp, FiUsers } from 'react-icons/fi'
import { FaRobot, FaShieldAlt, FaGlobe } from 'react-icons/fa'

type ServiceCard = {
  title: string
  points: string[]
  icon: React.ReactNode
  bg: string
}

const cards: ServiceCard[] = [
  {
    title: 'Smart Contract & DApp Development',
    points: ['Token & Presale Contracts', 'NFTs, Launchpads', 'Crosschain & Multisig'],
    icon: <FiCode className="h-6 w-6 text-yellow-300" />,
    bg: '/card1.png',
  },
  {
    title: 'Solana Trading Bots & Bundlers',
    points: ['Sniper & Liquidity Bots', 'MEV / Arbitrage Bundlers', 'Auto Add/Remove Liquidity'],
    icon: <FaRobot className="h-6 w-6 text-yellow-300" />,
    bg: '/card2.png',
  },
  {
    title: 'Web3 Growth & KOL Marketing',
    points: ['Top-tier KOL Connections', 'Community Growth', 'Narrative Building'],
    icon: <FiUsers className="h-6 w-6 text-yellow-300" />,
    bg: '/card3.png',
  },
  {
    title: 'Security Audits & Hardening',
    points: ['Static + Dynamic Analysis', 'Formal Invariants', 'Exploit Simulation'],
    icon: <FaShieldAlt className="h-6 w-6 text-yellow-300" />,
    bg: '/card2.png',
  },
  {
    title: 'Market Making & Liquidity',
    points: ['AMM Tuning', 'Depth & Spreads', 'Sustainable Growth'],
    icon: <FiTrendingUp className="h-6 w-6 text-yellow-300" />,
    bg: '/card1.png',
  },
  {
    title: 'Cross-Chain Expansion',
    points: ['EVM + Solana', 'Bridges & Messaging', 'Deploy & Monitor'],
    icon: <FaGlobe className="h-6 w-6 text-yellow-300" />,
    bg: '/card3.png',
  },
]

const Services = () => {
  const [index, setIndex] = React.useState(0) // 0 or 1 (6 cards, 3 per slide)
  const totalSlides = 2

  React.useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides)
    }, 4500)
    return () => clearInterval(id)
  }, [])

  // responsive cards per view (1 on small, 2 on md, 3 on lg)
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-sm uppercase tracking-widest text-white/70">Services</p>
        <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">What We Do</h2>
        <p className="mx-auto mt-3 max-w-3xl text-white/70">
          We engineer ultra-secure, gas-optimized smart contracts and DApps for any EVM chain
          and Solana. Plus trading bots, growth, and community.
        </p>
      </div>

      <div className="overflow-hidden">
        <motion.div
          className="flex w-[200%]"
          animate={{ x: `-${index * 50}%` }}
          transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.75 }}
          style={{ willChange: 'transform' }}
          aria-label="Service cards slider"
        >
          {[0, 1].map((slide) => (
            <div key={slide} className="w-1/2 px-0">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cards.slice(slide * 3, slide * 3 + 3).map((card) => (
                  <motion.article
                    key={card.title}
                    whileHover={{ y: -6 }}
                    className="relative rounded-2xl border border-white/10 bg-[#121214] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
                    style={{
                      backgroundImage: `url(${card.bg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="relative z-10">
                      <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-black/40 p-3">
                        {card.icon}
                      </div>
                      <h3 className="mb-3 text-xl font-semibold text-white">{card.title}</h3>
                      <ul className="mb-6 space-y-2 text-sm text-white/80">
                        {card.points.map((p) => (
                          <li key={p} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-yellow-400"></span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:border-white/40">
                        Know More
                      </button>
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-t from-black/60 to-black/10" />
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* dots & controls */}
      <div className="mt-6 flex items-center justify-center gap-3">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${i === index ? 'bg-yellow-400' : 'bg-white/30 hover:bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Services
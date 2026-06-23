'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const stats = [
  { label: 'Industries Served', target: 6, suffix: '+' },
  { label: 'Product Categories', target: 6, suffix: '+' },
  { label: 'Years of Experience', target: 5, suffix: '+' },
  { label: 'Clients Served', target: 200, suffix: '+' },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] } },
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80"
          alt="Industrial construction site"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 overlay-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max w-full py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          variants={container}
          initial={false}
          animate="show"
          className="flex flex-col items-start gap-6"
        >
          <motion.div variants={item} className="flex items-center gap-3">
            <span className="block w-1 h-10 bg-accent" />
            <span className="text-white text-xs font-bold tracking-widest uppercase">
              Dubai&apos;s Trusted Industrial Supplier
            </span>
          </motion.div>

          <motion.h1 variants={item} className="text-display text-white font-poppins">
            Your Partner for Industrial Supplies &amp; Solutions
          </motion.h1>

          <motion.p variants={item} className="text-white/75 text-lg leading-relaxed max-w-xl">
            Delivering technical excellence and logistical precision across the UAE&apos;s most demanding sectors — construction, oil &amp; gas, facilities management, and more.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
            <Link href="/products" className="btn-primary">
              Explore Products
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

        {/* Right — Stats card */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="hidden lg:block"
        >
          <div className="bg-primary/80 backdrop-blur-sm border border-white/10 p-8 grid grid-cols-2 gap-0">
            {stats.map(({ label, target, suffix }, i) => (
              <div
                key={label}
                className={`p-6 flex flex-col gap-2 ${
                  i % 2 === 0 ? 'border-r border-white/10' : ''
                } ${i < 2 ? 'border-b border-white/10' : ''}`}
              >
                <span className="text-4xl font-extrabold text-white font-poppins">
                  <AnimatedCounter target={target} suffix={suffix} />
                </span>
                <span className="text-white/60 text-xs font-semibold tracking-widest uppercase">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}

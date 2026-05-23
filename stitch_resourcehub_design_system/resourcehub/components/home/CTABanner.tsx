'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CTABanner() {
  return (
    <section className="relative bg-accent py-20 overflow-hidden">
      {/* Diagonal texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative z-10 container-max text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="block w-10 h-1 bg-white mx-auto mb-6" />
          <h2 className="font-poppins font-extrabold text-white text-section mb-4">
            Ready to Source Your Industrial Supplies?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
            Get in touch with our team for competitive quotes and expert sourcing support.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-accent font-bold px-10 py-4 rounded-none hover:bg-light active:scale-95 transition-all duration-200"
          >
            Request a Quote
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

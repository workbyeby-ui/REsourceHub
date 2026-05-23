'use client'

import { motion } from 'framer-motion'
import { Shield, Star, RefreshCw, AlertTriangle, Lightbulb } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const values = [
  { icon: Shield, title: 'Integrity', desc: 'We operate with transparency and honesty in every transaction.' },
  { icon: Star, title: 'Quality', desc: 'Only verified, high-grade materials meet our supply standards.' },
  { icon: RefreshCw, title: 'Reliability', desc: 'Consistent delivery performance your projects can depend on.' },
  { icon: AlertTriangle, title: 'Safety', desc: 'We prioritise safety compliance across every product category.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Continuously improving our sourcing and service capabilities.' },
]

export default function CoreValues() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading label="What Drives Us" title="Our Core Values" center />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              className="flex flex-col items-center text-center p-6 border border-mid hover:border-accent transition-colors duration-300 group"
            >
              <div className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                <Icon size={24} className="text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-poppins font-bold text-primary text-base mb-2">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

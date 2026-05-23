'use client'

import { motion } from 'framer-motion'
import { Package, Truck, Settings, Wrench } from 'lucide-react'

const features = [
  { icon: Package, label: 'Competitive Pricing' },
  { icon: Truck, label: 'Timely Deliveries' },
  { icon: Settings, label: 'Custom Sourcing Options' },
  { icon: Wrench, label: 'Technical Expertise' },
]

export default function StatsBar() {
  return (
    <section className="bg-primary py-12">
      <div className="container-max">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {features.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className={`flex items-center gap-4 px-6 py-6 group ${
                i < features.length - 1 ? 'border-r border-white/10' : ''
              }`}
            >
              <div className="w-11 h-11 bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-300">
                <Icon size={22} className="text-white" />
              </div>
              <span className="text-white font-semibold text-sm leading-tight">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

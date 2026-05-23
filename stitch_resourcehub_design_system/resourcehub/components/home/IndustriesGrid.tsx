'use client'

import { motion } from 'framer-motion'
import { Building2, Flame, Settings, Zap, Factory, Landmark } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Link from 'next/link'

const industries = [
  {
    icon: Building2,
    title: 'Construction & Infrastructure',
    desc: 'Supplying critical materials for large-scale building and civil projects.',
  },
  {
    icon: Flame,
    title: 'Oil & Gas',
    desc: 'High-grade industrial components for upstream and downstream operations.',
  },
  {
    icon: Settings,
    title: 'Facilities Management',
    desc: 'Reliable supply chains for ongoing maintenance and operations.',
  },
  {
    icon: Zap,
    title: 'Mechanical & Electrical',
    desc: 'MEP solutions for contractors requiring precision-fit materials.',
  },
  {
    icon: Factory,
    title: 'Manufacturing & Engineering',
    desc: 'Industrial consumables for production floors and engineering firms.',
  },
  {
    icon: Landmark,
    title: 'Public Sector & Government',
    desc: 'Trusted procurement partner for government infrastructure projects.',
  },
]

export default function IndustriesGrid() {
  return (
    <section className="section-padding bg-light" id="industries">
      <div className="container-max">
        <SectionHeading
          label="Who We Serve"
          title="Industries We Serve"
          subtitle="From construction sites to government projects, we supply the materials that keep critical industries moving."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
            >
              <Link
                href="/industries"
                className="group block bg-white p-8 border border-mid hover:border-accent hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 border-2 border-accent flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                  <Icon size={24} className="text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-poppins font-bold text-primary text-lg mb-2">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

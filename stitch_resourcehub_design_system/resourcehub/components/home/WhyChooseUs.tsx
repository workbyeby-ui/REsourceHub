'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Tag, Clock, Search, HeadphonesIcon } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const features = [
  {
    icon: Tag,
    title: 'Competitive Pricing',
    desc: 'We leverage strong supplier relationships to offer the most competitive prices without compromising on quality.',
  },
  {
    icon: Clock,
    title: 'Timely Deliveries',
    desc: 'Our logistics network ensures materials arrive on schedule, keeping your projects on track.',
  },
  {
    icon: Search,
    title: 'Custom Sourcing Options',
    desc: 'Cannot find what you need? We source specific materials and components tailored to your exact requirements.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Technical Expertise & Support',
    desc: 'Our team brings deep product knowledge to help you select the right materials for every application.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative h-[500px] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&q=80"
              alt="Industrial warehouse"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-primary/20" />
            {/* Accent corner */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent" />
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <SectionHeading label="Why ResourceHub" title="Why Choose Us" />
            <div className="space-y-8">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' }}
                  className="flex gap-5"
                >
                  <div className="w-12 h-12 bg-light border border-mid flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-primary text-base mb-1">{title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

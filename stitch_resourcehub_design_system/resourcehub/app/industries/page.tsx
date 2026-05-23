'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Building2, Flame, Settings, Zap, Factory, Landmark } from 'lucide-react'
import IndustryCard from '@/components/industries/IndustryCard'
import CTABanner from '@/components/home/CTABanner'

const industries = [
  {
    icon: Building2,
    title: 'Construction & Infrastructure',
    desc: 'We supply the full spectrum of construction materials required by contractors and project managers across the UAE.',
    detail: 'From fasteners to PPE and MEP components, our logistics ensure your site never faces a material shortage. We work with tier-1 and tier-2 contractors on residential, commercial, and civil infrastructure projects.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
  },
  {
    icon: Flame,
    title: 'Oil & Gas',
    desc: 'High-specification industrial components built to withstand the demands of upstream and downstream oil and gas operations.',
    detail: 'We source and supply pressure-rated fittings, industrial bearings, abrasives, and safety equipment that meet international oil and gas standards.',
    image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=1200&q=80',
  },
  {
    icon: Settings,
    title: 'Facilities Management',
    desc: 'Reliable supply chains for facilities management companies handling ongoing maintenance across commercial and residential portfolios.',
    detail: 'With a broad product catalogue and responsive service, we ensure FM operators have the right consumables, safety stock, and replacement parts when they need them.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
  },
  {
    icon: Zap,
    title: 'Mechanical & Electrical Contracting',
    desc: 'MEP contractors rely on us for precision-sourced pipes, conduits, cable management systems, and fittings.',
    detail: 'Our team understands the critical scheduling demands of M&E projects, and our procurement network ensures timely availability of even hard-to-source components.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
  },
  {
    icon: Factory,
    title: 'Manufacturing & Engineering',
    desc: 'Production facilities and engineering firms trust ResourceHub for consistent supply of industrial consumables and mechanical components.',
    detail: 'Bearings, abrasives, and hardware are among the high-turnover items we supply to manufacturing plants operating across the UAE.',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200&q=80',
  },
  {
    icon: Landmark,
    title: 'Public Sector & Government',
    desc: 'We are an experienced procurement partner for government-linked entities and public infrastructure initiatives.',
    detail: 'Our documentation, product compliance, and delivery standards align with public sector procurement requirements, making us a dependable vendor for government projects across the emirate.',
    image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=1200&q=80',
  },
]

export default function IndustriesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80"
            alt="Construction site"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="relative z-10 container-max text-center w-full pt-20">
          <span className="block w-10 h-1 bg-accent mx-auto mb-5" />
          <h1 className="text-display text-white font-poppins">Industries We Serve</h1>
          <p className="text-white/70 text-lg mt-4 max-w-xl mx-auto">
            Supplying critical materials to six key sectors driving the UAE economy.
          </p>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="bg-light">
        <div className="border-b border-mid">
          {industries.map(({ icon, title, desc, detail, image }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="border-b border-mid last:border-b-0"
            >
              <IndustryCard
                icon={icon}
                title={title}
                desc={desc}
                detail={detail}
                image={image}
                reverse={i % 2 !== 0}
              />
            </motion.div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  )
}

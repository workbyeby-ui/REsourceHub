'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Wind,
  Droplets,
  PaintRoller,
  Zap,
  Waves,
  Wrench,
  Building2,
  Grid2x2,
  ShieldCheck,
  Users,
  Wallet,
  Layers,
  ArrowRight,
} from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import CTABanner from '@/components/home/CTABanner'

const services = [
  {
    icon: Wind,
    title: 'Air Conditioning & AC Duct Cleaning',
    desc: 'Keeping your cooling systems efficient, clean, and dependable all year round.',
    items: ['AC servicing & repairs', 'Duct cleaning', 'Cooling performance checks', 'Equipment sanitation'],
  },
  {
    icon: Droplets,
    title: 'Plumbing',
    desc: 'Sanitary installations and reliable pipe repairs for homes and buildings.',
    items: ['Pipe repairs', 'Sanitary installations', 'Water tank cleaning', 'Motor cleaning'],
  },
  {
    icon: PaintRoller,
    title: 'Painting',
    desc: 'Clean interior and exterior finishes that refresh any space.',
    items: ['Interior painting', 'Exterior painting', 'Wall finishes', 'Touch-ups'],
  },
  {
    icon: Zap,
    title: 'Electrical',
    desc: 'Safe electrical work for lighting, fittings, and power systems.',
    items: ['Wiring & repairs', 'Lighting installation', 'Fault finding', 'Fixtures & fittings'],
  },
  {
    icon: Waves,
    title: 'Swimming Pool Maintenance',
    desc: 'Keeping pools clean, balanced, and ready to use.',
    items: ['Pool cleaning', 'Water treatment', 'Pump & filter service', 'Tile & surface care'],
  },
  {
    icon: Wrench,
    title: 'Handyman',
    desc: 'Rapid emergency response and quick repairs for everyday fixes.',
    items: ['Quick repairs', 'Emergency response', 'Fixtures & fittings', 'General odd jobs'],
  },
  {
    icon: Building2,
    title: 'Property & Building Maintenance',
    desc: 'Overall building maintenance for commercial and residential properties.',
    items: ['Preventive maintenance', 'Common area upkeep', 'Facility repairs', 'Commercial & residential'],
  },
  {
    icon: Grid2x2,
    title: 'Floor & Tiling Works',
    desc: 'Professional flooring and tiling installation, repair, and finishing.',
    items: ['Tile installation', 'Floor repairs', 'Grouting', 'Surface finishing'],
  },
]

const whyChoose = [
  {
    icon: Users,
    title: 'One Trusted Vendor',
    desc: 'A single point of contact for every maintenance specialty across your portfolio.',
  },
  {
    icon: ShieldCheck,
    title: 'Skilled & Reliable Teams',
    desc: 'Trained, full-time technicians deliver safe, consistent, high-quality work.',
  },
  {
    icon: Wallet,
    title: 'Cost Efficiency',
    desc: 'Strategic analysis and consolidated servicing trim your total maintenance budget.',
  },
  {
    icon: Layers,
    title: 'Tailored Programs',
    desc: 'Every site is assessed individually and matched to a maintenance plan that fits.',
  },
]

const process = [
  { step: '01', title: 'Assessment', desc: 'We analyse your infrastructure and assess each location for its unique requirements.' },
  { step: '02', title: 'Tailored Plan', desc: 'We build a maintenance program combining scheduled and on-demand services.' },
  { step: '03', title: 'Execution', desc: 'Our teams deliver the work safely, on schedule, and to a consistent standard.' },
  { step: '04', title: 'Optimisation', desc: 'We monitor results and refine the program to keep costs down and quality up.' },
]

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1800&q=80"
            alt="Maintenance technician at work"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="relative z-10 container-max text-center w-full pt-20">
          <span className="block w-10 h-1 bg-accent mx-auto mb-5" />
          <h1 className="text-display text-white font-poppins">Our Services</h1>
          <p className="text-white/70 text-lg mt-4 max-w-xl mx-auto">
            Your friendly local property and building maintenance partner — we fix and maintain across Dubai and the UAE.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-accent text-white font-semibold px-8 py-4 hover:bg-accent-dark active:scale-95 transition-all duration-200"
            >
              Get a Free Quote
            </Link>
            <a
              href="#services"
              className="inline-block border-2 border-white text-white font-semibold px-8 py-4 hover:bg-white hover:text-primary active:scale-95 transition-all duration-200"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section-padding bg-light scroll-mt-20">
        <div className="container-max">
          <SectionHeading
            label="What We Do"
            title="Our Services"
            subtitle="Comprehensive home and building maintenance for both residential and commercial properties — delivered by a skilled, reliable team."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, items }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: 'easeOut' }}
                className="group flex flex-col bg-white p-8 border border-mid hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 border-2 border-accent flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                  <Icon size={24} className="text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-poppins font-bold text-primary text-lg mb-2">{title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-5">{desc}</p>
                <ul className="mt-auto space-y-1.5 pt-4 border-t border-mid">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-body-text">
                      <span className="w-1.5 h-1.5 bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-accent text-sm font-semibold hover:gap-3 transition-all duration-200"
                >
                  Request a Quote <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeading
            label="Why Choose Us"
            title="Maintenance Made Simple"
            subtitle="Consolidating your maintenance under one dependable partner saves time, reduces cost, and keeps standards high across every site."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                className="bg-light p-8 border border-mid"
              >
                <Icon size={28} className="text-accent mb-5" />
                <h3 className="font-poppins font-bold text-primary text-base mb-2">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-primary">
        <div className="container-max">
          <SectionHeading
            label="How We Work"
            title="A Clear Path to a Well-Kept Facility"
            subtitle="A straightforward process that turns maintenance from a headache into a managed, predictable service."
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map(({ step, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                className="relative bg-white/5 border border-white/10 p-8"
              >
                <span className="block font-poppins font-extrabold text-4xl text-accent mb-4">{step}</span>
                <h3 className="font-poppins font-bold text-white text-lg mb-2">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-block bg-accent text-white font-semibold px-10 py-4 hover:bg-accent-dark active:scale-95 transition-all duration-200"
            >
              Discuss Your Maintenance Needs
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

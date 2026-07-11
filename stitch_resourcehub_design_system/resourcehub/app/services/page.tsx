'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Wrench,
  CalendarClock,
  SprayCan,
  HardHat,
  Trees,
  Flame,
  Droplets,
  Zap,
  PaintRoller,
  LayoutGrid,
  DoorOpen,
  AppWindow,
  Wind,
  Bug,
  ShieldCheck,
  Users,
  Wallet,
  Layers,
} from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import CTABanner from '@/components/home/CTABanner'

const services = [
  {
    icon: Wrench,
    title: 'General Maintenance',
    desc: 'Day-to-day upkeep that keeps your facility running without interruption.',
    items: ['Floor & fixture repairs', 'Carpentry & shelving', 'Door & hinge repairs', 'Awning restoration'],
  },
  {
    icon: CalendarClock,
    title: 'Scheduled Maintenance',
    desc: 'Recurring, planned servicing so problems are caught before they cost you.',
    items: ['Housekeeping schedules', 'Window & floor care', 'High dusting', 'HVAC servicing'],
  },
  {
    icon: SprayCan,
    title: 'Janitorial Services',
    desc: 'Comprehensive cleaning that keeps every space presentable and hygienic.',
    items: ['Housekeeping', 'Carpet & floor care', 'Pre-opening prep', 'Graffiti removal'],
  },
  {
    icon: HardHat,
    title: 'Construction & Fit-Out',
    desc: 'Build-outs and refurbishments coordinated across single or multiple sites.',
    items: ['Build-out projects', 'Store closings', 'Multi-site coordination', 'Remodelling'],
  },
  {
    icon: Trees,
    title: 'Exterior Maintenance',
    desc: 'Keeping the outside of your property as sharp as the inside.',
    items: ['Power washing', 'Wood restoration', 'Signage repair', 'Landscaping'],
  },
  {
    icon: Flame,
    title: 'Fire Safety',
    desc: 'Inspections and servicing to keep your premises compliant and protected.',
    items: ['Emergency light checks', 'Extinguisher inspection', 'Hood maintenance', 'Sprinkler repairs'],
  },
  {
    icon: Droplets,
    title: 'Plumbing',
    desc: 'Reliable plumbing repairs and preventative servicing on demand.',
    items: ['Drain cleaning', 'Water heater service', 'Backflow testing', 'Sump pump service'],
  },
  {
    icon: PaintRoller,
    title: 'Painting',
    desc: 'Interior and exterior finishes, from full repaints to quick touch-ups.',
    items: ['Full repaints', 'Remodels & refreshes', 'Touch-ups', 'Exterior work'],
  },
  {
    icon: Zap,
    title: 'Electrical',
    desc: 'Certified electrical work for lighting, signage, and power systems.',
    items: ['Lighting & LED installs', 'Signage work', 'Breaker service', 'Relamping'],
  },
  {
    icon: LayoutGrid,
    title: 'Floor Care',
    desc: 'Specialist cleaning, sanding, and refinishing for every floor type.',
    items: ['Carpet & tile care', 'Sanding & refinishing', 'Laminate & wood', 'Deep cleaning'],
  },
  {
    icon: DoorOpen,
    title: 'Door Maintenance',
    desc: 'Servicing and repairs for every type of door and access point.',
    items: ['Rolling gate repairs', 'Lock issues', 'Door closures', 'Hardware service'],
  },
  {
    icon: AppWindow,
    title: 'Glass Maintenance',
    desc: 'Glass servicing, treatments, and installation for storefronts and interiors.',
    items: ['Tinting', 'Bulletproof installation', 'Manufacturing', 'Graffiti removal'],
  },
  {
    icon: Wind,
    title: 'HVAC',
    desc: 'Keeping climate systems efficient, clean, and dependable year-round.',
    items: ['Duct cleaning', 'Scheduled servicing', 'Refrigeration', 'Unit replacement'],
  },
  {
    icon: Bug,
    title: 'Pest Control',
    desc: 'Scheduled treatments and wildlife management to keep sites protected.',
    items: ['Scheduled treatments', 'Wildlife removal', 'Preventative control', 'Inspections'],
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
            One partner for the full spectrum of facility maintenance — planned, on-demand, and everything in between.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-light">
        <div className="container-max">
          <SectionHeading
            label="What We Do"
            title="Complete Maintenance Solutions"
            subtitle="From routine upkeep to specialist trades, we cover every maintenance need under one roof so you can focus on your operation."
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

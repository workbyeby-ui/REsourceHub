'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import ProductCard from '@/components/products/ProductCard'
import CTABanner from '@/components/home/CTABanner'
import SectionHeading from '@/components/ui/SectionHeading'

const products = [
  {
    name: 'Hardware Consumables',
    desc: 'A comprehensive range of fasteners, fittings, and industrial tools for all construction and maintenance applications.',
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80',
    items: ['Bolts, Nuts & Washers', 'Screws & Anchors', 'Hand & Power Tools', 'Industrial Fittings'],
  },
  {
    name: 'Adhesive and Lubricant',
    desc: 'Industrial adhesives and lubricants for sealing, bonding, and maintenance applications across all job sites.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
    items: ['Silicon Sealant', 'PVC Glue', 'WD40', 'Cleaner'],
  },
  {
    name: 'MEP Solutions',
    desc: 'Mechanical, electrical, and plumbing materials sourced to specification for contractors and engineers.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    items: ['Pipes & Conduits', 'Cable Trays & Trunking', 'Valves & Fittings', 'Pumps'],
  },
  {
    name: 'PPE Supplies',
    desc: 'Personal protective equipment meeting international standards for worker safety across all industries.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
    items: ['Protective Gloves', 'High-Vis Vests', 'Safety Eyewear', 'Protective Footwear'],
  },
  {
    name: 'Bearings',
    desc: 'Industrial-grade bearings and mechanical components from leading global manufacturers.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    items: ['Ball Bearings', 'Roller Bearings', 'Pillow Block Units', 'Linear Bearings'],
  },
  {
    name: 'Abrasives & Grinding',
    desc: 'Professional-grade abrasive products for surface preparation, cutting, and finishing applications.',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80',
    items: ['Grinding Discs', 'Cutting Wheels', 'Sanding Rolls & Sheets', 'Flap Discs'],
  },
]

export default function ProductsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1800&q=80"
            alt="Industrial shelving with products"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="relative z-10 container-max text-center w-full pt-20">
          <span className="block w-10 h-1 bg-accent mx-auto mb-5" />
          <h1 className="text-display text-white font-poppins">Our Products</h1>
          <p className="text-white/70 text-lg mt-4 max-w-xl mx-auto">
            Six core product categories covering every industrial supply need across the UAE.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-padding bg-light">
        <div className="container-max">
          <SectionHeading
            label="Full Catalogue"
            title="What We Supply"
            subtitle="From site safety to mechanical components — we source it all so you can focus on building."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(({ name, desc, image, items }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              >
                <ProductCard name={name} desc={desc} image={image} items={items} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

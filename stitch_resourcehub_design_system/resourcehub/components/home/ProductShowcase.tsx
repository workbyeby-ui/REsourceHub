'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'

const products = [
  {
    name: 'Hardware Consumables',
    desc: 'Fasteners, fittings, tools and industrial consumables',
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80',
  },
  {
    name: 'Safety Products',
    desc: 'Helmets, masks, harnesses, and safety signage',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
  },
  {
    name: 'MEP Solutions',
    desc: 'Pipes, conduits, fittings and mechanical systems',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
  {
    name: 'PPE Supplies',
    desc: 'Gloves, vests, eyewear and personal protection',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
  },
  {
    name: 'Bearings',
    desc: 'Industrial bearings and mechanical components',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    name: 'Abrasives & Grinding',
    desc: 'Grinding discs, sanding rolls and abrasive materials',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80',
  },
]

export default function ProductShowcase() {
  return (
    <section className="section-padding bg-white" id="products">
      <div className="container-max">
        <SectionHeading label="What We Supply" title="Our Product Range" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(({ name, desc, image }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
            >
              <Link href="/products" className="relative block h-72 overflow-hidden group cursor-pointer">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 overlay-dark" />
                {/* Red bottom border reveal */}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white font-poppins font-bold text-lg leading-tight">{name}</h3>
                  <p className="text-white/70 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/products" className="btn-outline-dark">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

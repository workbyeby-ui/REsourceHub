'use client'

import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'

export default function MissionVision() {
  return (
    <section className="section-padding bg-light">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-primary p-10 flex flex-col gap-6"
          >
            <div className="w-14 h-14 bg-accent flex items-center justify-center">
              <Target size={26} className="text-white" />
            </div>
            <div>
              <span className="block w-8 h-0.5 bg-accent mb-4" />
              <h3 className="font-poppins font-bold text-white text-2xl mb-4">Our Mission</h3>
              <p className="text-white/75 leading-relaxed">
                To support our clients with technical expertise, a comprehensive product range, and responsive service — ensuring every project has the right materials, delivered on time, at the right price.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
            className="bg-white border border-mid p-10 flex flex-col gap-6"
          >
            <div className="w-14 h-14 border-2 border-accent flex items-center justify-center">
              <Eye size={26} className="text-accent" />
            </div>
            <div>
              <span className="block w-8 h-0.5 bg-accent mb-4" />
              <h3 className="font-poppins font-bold text-primary text-2xl mb-4">Our Vision</h3>
              <p className="text-muted leading-relaxed">
                To be the region&apos;s leading provider of integrated hardware, safety, PPE, and MEP solutions — a trusted partner recognised for quality, reliability, and innovation across the UAE and the wider GCC.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

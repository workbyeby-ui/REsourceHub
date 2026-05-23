import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ProductCardProps {
  name: string
  desc: string
  image: string
  items: string[]
}

export default function ProductCard({ name, desc, image, items }: ProductCardProps) {
  return (
    <div className="group bg-white border border-mid hover:border-accent hover:shadow-xl transition-all duration-300">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 overlay-dark" />
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        <h3 className="absolute bottom-5 left-5 text-white font-poppins font-bold text-lg">{name}</h3>
      </div>
      <div className="p-6">
        <p className="text-muted text-sm mb-4 leading-relaxed">{desc}</p>
        <ul className="space-y-1.5 mb-5">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-body-text">
              <span className="w-1.5 h-1.5 bg-accent flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:gap-3 transition-all duration-200"
        >
          Request a Quote <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  )
}

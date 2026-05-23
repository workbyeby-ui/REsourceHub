import Image from 'next/image'
import { LucideIcon } from 'lucide-react'

interface IndustryCardProps {
  title: string
  desc: string
  detail: string
  image: string
  icon: LucideIcon
  reverse?: boolean
}

export default function IndustryCard({ title, desc, detail, image, icon: Icon, reverse }: IndustryCardProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
      {/* Image */}
      <div className={`relative h-72 lg:h-auto min-h-[320px] overflow-hidden ${reverse ? 'lg:col-start-2' : ''}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-primary/40" />
      </div>

      {/* Content */}
      <div className={`bg-white p-10 lg:p-14 flex flex-col justify-center gap-6 ${reverse ? 'lg:col-start-1' : ''}`}>
        <div className="w-14 h-14 border-2 border-accent flex items-center justify-center">
          <Icon size={24} className="text-accent" />
        </div>
        <div>
          <span className="block w-8 h-0.5 bg-accent mb-4" />
          <h3 className="font-poppins font-bold text-primary text-2xl mb-3">{title}</h3>
          <p className="text-muted leading-relaxed mb-3">{desc}</p>
          <p className="text-muted text-sm leading-relaxed">{detail}</p>
        </div>
      </div>
    </div>
  )
}

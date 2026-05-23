interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  light?: boolean
  center?: boolean
}

export default function SectionHeading({ label, title, subtitle, light, center }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {label && (
        <span className={`block text-xs font-bold tracking-widest uppercase mb-3 ${light ? 'text-accent' : 'text-accent'}`}>
          {label}
        </span>
      )}
      <span className={`accent-bar ${center ? 'mx-auto' : ''}`} />
      <h2 className={`section-heading ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-muted'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

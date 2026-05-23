import Image from 'next/image'
import { Metadata } from 'next'
import MissionVision from '@/components/about/MissionVision'
import CoreValues from '@/components/about/CoreValues'
import CTABanner from '@/components/home/CTABanner'
import SectionHeading from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'About Us | ResourceHub Industrial',
  description: 'Learn about ResourceHub Building & Construction Materials Trading LLC — our story, mission, vision, and core values.',
}

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1800&q=80"
            alt="Industrial warehouse interior"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="relative z-10 container-max text-center w-full pt-20">
          <span className="block w-10 h-1 bg-accent mx-auto mb-5" />
          <h1 className="text-display text-white font-poppins">About ResourceHub</h1>
          <p className="text-white/70 text-lg mt-4 max-w-xl mx-auto">
            Dubai&apos;s trusted partner for industrial supplies and construction materials.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative h-[420px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&q=80"
                alt="Construction site operations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-accent" />
            </div>
            <div>
              <SectionHeading label="Who We Are" title="ResourceHub Building & Construction" />
              <p className="text-muted leading-relaxed mb-4">
                ResourceHub Building & Construction Materials Trading LLC is a Dubai-based industrial supplies company committed to delivering high-quality materials to the UAE&apos;s most demanding sectors.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                Founded on principles of reliability and technical expertise, we serve contractors, facilities managers, engineers, and government entities with a comprehensive catalogue spanning hardware, safety, MEP, PPE, bearings, and abrasives.
              </p>
              <p className="font-poppins font-semibold text-primary text-lg leading-relaxed">
                &ldquo;We don&apos;t just supply materials — we supply confidence.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      <MissionVision />
      <CoreValues />
      <CTABanner />
    </>
  )
}

import Image from 'next/image'
import { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import ContactForm from '@/components/contact/ContactForm'
import SectionHeading from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'Contact Us | ResourceHub Industrial',
  description: 'Get in touch with ResourceHub for industrial supply quotes, sourcing enquiries, or product information. Located on Sheikh Zayed Road, Dubai.',
}

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80"
            alt="Dubai construction"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 container-max text-center w-full pt-20">
          <span className="block w-10 h-1 bg-accent mx-auto mb-5" />
          <h1 className="text-display text-white font-poppins">Get in Touch</h1>
          <p className="text-white/70 text-lg mt-4 max-w-xl mx-auto">
            Request a quote, ask about our products, or simply say hello.
          </p>
        </div>
      </section>

      {/* Contact Split */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left — Info */}
            <div>
              <SectionHeading label="Contact Details" title="We are Here to Help" />
              <div className="space-y-6">
                <div className="flex gap-4 p-6 border border-mid bg-light">
                  <MapPin size={20} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-primary text-sm mb-1">Office Address</p>
                    <p className="text-muted text-sm leading-relaxed">
                      Unit 36, 1st Floor, Al Wasl Building<br />
                      Workspace Downtown, Sheikh Zayed Road<br />
                      Dubai, UAE
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 border border-mid bg-light">
                  <Phone size={20} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-primary text-sm mb-1">Phone</p>
                    <a href="tel:+971556568937" className="text-muted text-sm hover:text-accent transition-colors duration-200">
                      +971 55 656 8937
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 p-6 border border-mid bg-light">
                  <Mail size={20} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-primary text-sm mb-1">Email</p>
                    <a href="mailto:michael@resourcehubtrading.com" className="block text-muted text-sm hover:text-accent transition-colors duration-200">
                      michael@resourcehubtrading.com
                    </a>
                    <a href="mailto:business@resourcehubtrading.com" className="block text-muted text-sm hover:text-accent transition-colors duration-200">
                      business@resourcehubtrading.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 p-6 border border-mid bg-light">
                  <Clock size={20} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-primary text-sm mb-1">Working Hours</p>
                    <p className="text-muted text-sm">Monday to Friday: 9:00 AM — 6:00 PM</p>
                    <p className="text-muted text-sm">Saturday: 9:00 AM — 1:00 PM</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/971556568937?text=Hello%2C%20I%20would%20like%20to%20request%20a%20quote%20from%20ResourceHub."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-[#25D366] hover:bg-[#1ebe5d] transition-colors duration-200 group"
                >
                  <MessageCircle size={20} className="text-white shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-sm mb-0.5">Chat on WhatsApp</p>
                    <p className="text-white/80 text-sm">+971 55 656 8937</p>
                  </div>
                  <span className="ml-auto text-white/60 group-hover:translate-x-1 transition-transform duration-200">→</span>
                </a>
              </div>
            </div>

            {/* Right — Form */}
            <div>
              <SectionHeading label="Send a Message" title="Request a Quote" />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-80 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=1800&q=80"
          alt="Dubai aerial view"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
          <div className="text-center">
            <span className="block w-10 h-1 bg-accent mx-auto mb-4" />
            <p className="text-white font-poppins font-bold text-xl">Sheikh Zayed Road, Dubai, UAE</p>
            <p className="text-white/70 text-sm mt-2">Al Wasl Building, Workspace Downtown</p>
          </div>
        </div>
      </section>
    </>
  )
}

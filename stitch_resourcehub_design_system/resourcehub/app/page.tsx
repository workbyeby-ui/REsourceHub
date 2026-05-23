import HeroSection from '@/components/home/HeroSection'
import StatsBar from '@/components/home/StatsBar'
import ProductShowcase from '@/components/home/ProductShowcase'
import IndustriesGrid from '@/components/home/IndustriesGrid'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import CTABanner from '@/components/home/CTABanner'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ProductShowcase />
      <IndustriesGrid />
      <WhyChooseUs />
      <CTABanner />
    </>
  )
}

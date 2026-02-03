import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ValentineBanner } from "@/components/valentine-banner"
import { AboutSection } from "@/components/about-section"
import { GallerySection } from "@/components/gallery-section"
import { CateringSection } from "@/components/catering-section"
import { ReservationsSection } from "@/components/reservations-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ValentineBanner />
      <AboutSection />
      <GallerySection />
      <CateringSection />
      <ReservationsSection />
      <Footer />
    </main>
  )
}

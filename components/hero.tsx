import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-restaurant.jpg"
          alt="Chocolat Restaurant interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        <div className="mb-8">
          <Image
            src="/images/logo.png"
            alt="Chocolat Restaurant"
            width={180}
            height={180}
            className="mx-auto rounded-full shadow-2xl"
          />
        </div>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-4 leading-tight tracking-tight">
          Real Food
        </h1>
        <p className="text-lg md:text-xl text-primary font-light tracking-widest uppercase mb-8">
          Celebrating American Diversity
        </p>
        <p className="text-base text-muted-foreground mb-10 max-w-xl mx-auto font-light">
          Open for Dinner Every Night in Downtown Santa Cruz
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-light tracking-wider uppercase text-sm px-10 py-6">
            <Link href="#menu">View Menu</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary/60 text-foreground hover:bg-primary hover:text-primary-foreground font-light tracking-wider uppercase text-sm px-10 py-6 bg-transparent"
          >
            <a href="https://www.opentable.com/booking/restref/availability?lang=en-US&correlationId=95ab46a4-b36a-498f-b495-c7196d27f257&restRef=105319&otSource=Restaurant%20website" target="_blank" rel="noopener noreferrer">Reserve a Table</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-primary/40 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

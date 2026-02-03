import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ValentineBanner() {
  return (
    <section className="bg-accent/20 border-y border-border py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Heart className="h-5 w-5 text-accent fill-accent" />
          <span className="text-xs tracking-[0.25em] uppercase text-accent font-light">Special Event</span>
          <Heart className="h-5 w-5 text-accent fill-accent" />
        </div>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-4">
          Now Taking Reservations for Valentines Dinner
        </h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto text-sm font-light">
          Valentines specials are optional and ala carte. Our regular menu will also be available.
        </p>
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-light tracking-wider uppercase text-xs px-6">
          <a href="https://www.opentable.com/booking/restref/availability?lang=en-US&correlationId=95ab46a4-b36a-498f-b495-c7196d27f257&restRef=105319&otSource=Restaurant%20website" target="_blank" rel="noopener noreferrer">
            Reserve Your Table
          </a>
        </Button>
      </div>
    </section>
  )
}

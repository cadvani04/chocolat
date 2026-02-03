import Image from "next/image"
import { Utensils, Cake, Wine, Calendar } from "lucide-react"

export function CateringSection() {
  return (
    <section id="catering" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="text-xs tracking-[0.25em] uppercase text-primary mb-4 font-light">
              Catering & Special Services
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight">
              Make Your Event Unforgettable
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 font-light">
              Let us bring the Chocolat experience to your special occasion. From intimate
              rehearsal dinners to grand wedding celebrations, we offer comprehensive
              catering and event services.
            </p>

            {/* Services */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary rounded-sm">
                  <Utensils className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Full Catering</h3>
                  <p className="text-sm text-muted-foreground">Complete menu service</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary rounded-sm">
                  <Wine className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Bar Service</h3>
                  <p className="text-sm text-muted-foreground">Cocktail catering</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary rounded-sm">
                  <Cake className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Wedding Cakes</h3>
                  <p className="text-sm text-muted-foreground">Custom creations</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary rounded-sm">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Event Planning</h3>
                  <p className="text-sm text-muted-foreground">Full coordination</p>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground">
              For catering inquiries, please email{" "}
              <a href="mailto:shop@chocolatesantacruz.com" className="text-primary hover:underline">
                shop@chocolatesantacruz.com
              </a>
            </p>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] order-1 lg:order-2">
            <Image
              src="/images/chocolate-dessert.jpg"
              alt="Catering and special events"
              fill
              className="object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

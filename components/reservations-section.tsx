import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Info, CreditCard, Users } from "lucide-react"

export function ReservationsSection() {
  return (
    <section id="reservations" className="py-20 md:py-32 bg-card">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-primary mb-4 font-light">
          Book Your Table
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
          Make a Reservation
        </h2>
        <p className="text-muted-foreground text-base mb-10 max-w-2xl mx-auto font-light">
          Join us for an unforgettable dining experience. Reserve your table today
          and let us take care of the rest.
        </p>

        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-12 py-6 mb-12 font-light tracking-wider uppercase">
          <a href="https://www.opentable.com/booking/restref/availability?lang=en-US&correlationId=95ab46a4-b36a-498f-b495-c7196d27f257&restRef=105319&otSource=Restaurant%20website" target="_blank" rel="noopener noreferrer">
            Reserve on OpenTable
          </a>
        </Button>

        {/* Important Notes */}
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-background p-6 rounded-sm border border-border">
            <div className="flex items-center gap-3 mb-3">
              <Users className="h-5 w-5 text-primary" />
              <h3 className="font-medium text-foreground">Large Parties</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              For parties of 5 or more, 18% service is automatically added. For large party reservations, email david@chocolatesantacruz.com
            </p>
          </div>

          <div className="bg-background p-6 rounded-sm border border-border">
            <div className="flex items-center gap-3 mb-3">
              <CreditCard className="h-5 w-5 text-primary" />
              <h3 className="font-medium text-foreground">Payment</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Credit cards only; no cash please. 9.75% sales tax added to listed prices.
            </p>
          </div>

          <div className="bg-background p-6 rounded-sm border border-border">
            <div className="flex items-center gap-3 mb-3">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="font-medium text-foreground">To-Go Orders</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              To-go orders are sometimes unavailable when the restaurant is full. We appreciate your understanding.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

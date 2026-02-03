import Image from "next/image"
import { Clock, MapPin, Dog, Flame } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-square">
            <Image
              src="/images/featured-dish.jpg"
              alt="Featured dish at Chocolat"
              fill
              className="object-cover rounded-sm"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-sm hidden md:block">
              <p className="text-4xl font-light">26</p>
              <p className="text-sm tracking-wider">Years</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-primary mb-4 font-light">
              Chocolat Downtown
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight">
              Celebrating 26 Years of Culinary Excellence
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 font-light">
              For over two decades, Chocolat has been a cornerstone of Santa Cruz dining,
              bringing together the diverse flavors of American cuisine with an emphasis
              on real, thoughtfully prepared food.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary rounded-sm">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Lunch: Noon-4pm Fri-Sun<br />
                    Dinner: 5pm-9pm Nightly
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary rounded-sm">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Location</h3>
                  <p className="text-sm text-muted-foreground">
                    1522 Pacific Avenue<br />
                    Santa Cruz, CA 95060
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary rounded-sm">
                  <Flame className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Heated Patio</h3>
                  <p className="text-sm text-muted-foreground">
                    Enjoy outdoor dining<br />
                    year-round
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary rounded-sm">
                  <Dog className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Pet Friendly</h3>
                  <p className="text-sm text-muted-foreground">
                    Pets welcomed on<br />
                    our patio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

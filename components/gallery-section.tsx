import Image from "next/image"

export function GallerySection() {
  return (
    <section id="menu" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-primary mb-4 font-light">
            Our Cuisine
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            A Celebration of American Diversity
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base font-light">
            From farm-fresh ingredients to artful presentations, every dish tells a story
            of American culinary heritage.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative aspect-[4/3] md:aspect-square lg:col-span-2 lg:row-span-2 lg:aspect-auto">
            <Image
              src="/images/patio-dining.jpg"
              alt="Heated patio dining"
              fill
              className="object-cover rounded-sm"
            />
            <div className="absolute inset-0 bg-background/40 flex items-end p-6 rounded-sm">
              <div>
                <h3 className="text-2xl font-light text-foreground mb-2">Heated Patio Dining</h3>
                <p className="text-sm text-foreground/80">Experience alfresco dining year-round</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3]">
            <Image
              src="/images/featured-dish.jpg"
              alt="Seasonal specials"
              fill
              className="object-cover rounded-sm"
            />
            <div className="absolute inset-0 bg-background/40 flex items-end p-4 rounded-sm">
              <h3 className="text-lg font-light text-foreground">Seasonal Specials</h3>
            </div>
          </div>

          <div className="relative aspect-[4/3]">
            <Image
              src="/images/chocolate-dessert.jpg"
              alt="Signature desserts"
              fill
              className="object-cover rounded-sm"
            />
            <div className="absolute inset-0 bg-background/40 flex items-end p-4 rounded-sm">
              <h3 className="text-lg font-light text-foreground">Signature Desserts</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

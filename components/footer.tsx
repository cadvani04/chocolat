import Link from "next/link"
import Image from "next/image"
import { MapPin, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Chocolat Restaurant"
                width={50}
                height={50}
                className="rounded-full"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed font-light">
              Real Food; Celebrating American Diversity. Proudly serving Santa Cruz for 26 years.
            </p>
          </div>

          {/* Hours */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-4 w-4 text-primary" />
              <h3 className="font-medium text-foreground">Hours</h3>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><span className="text-foreground">Lunch:</span> Noon-4pm Fri, Sat, Sun</p>
              <p><span className="text-foreground">Dinner:</span> 5pm-9pm Nightly</p>
            </div>
          </div>

          {/* Location */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-4 w-4 text-primary" />
              <h3 className="font-medium text-foreground">Location</h3>
            </div>
            <address className="not-italic text-sm text-muted-foreground space-y-1">
              <p>1522 Pacific Avenue</p>
              <p>Santa Cruz, CA 95060</p>
            </address>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="h-4 w-4 text-primary" />
              <h3 className="font-medium text-foreground">Contact</h3>
            </div>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-muted-foreground">Reservations: </span>
                <a href="mailto:david@chocolatesantacruz.com" className="text-primary hover:underline">
                  david@chocolatesantacruz.com
                </a>
              </p>
              <p>
                <span className="text-muted-foreground">Catering: </span>
                <a href="mailto:shop@chocolatesantacruz.com" className="text-primary hover:underline">
                  shop@chocolatesantacruz.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Chocolat Restaurant. All rights reserved.
          </p>
          <nav className="flex gap-6">
            <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#menu" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Menu
            </Link>
            <Link href="#reservations" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Reservations
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Chocolat Restaurant Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link href="#about" className="text-sm font-light tracking-wider uppercase text-foreground/80 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#menu" className="text-sm font-light tracking-wider uppercase text-foreground/80 hover:text-primary transition-colors">
              Menu
            </Link>
            <Link href="#catering" className="text-sm font-light tracking-wider uppercase text-foreground/80 hover:text-primary transition-colors">
              Catering
            </Link>
            <Link href="#contact" className="text-sm font-light tracking-wider uppercase text-foreground/80 hover:text-primary transition-colors">
              Contact
            </Link>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-light tracking-wider uppercase text-xs px-6">
              <Link href="#reservations">Reservations</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-6 pb-4 flex flex-col gap-4">
            <Link
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm tracking-wide text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#menu"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm tracking-wide text-foreground hover:text-primary transition-colors"
            >
              Our Menu
            </Link>
            <Link
              href="#catering"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm tracking-wide text-foreground hover:text-primary transition-colors"
            >
              Catering
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm tracking-wide text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#reservations" onClick={() => setIsMenuOpen(false)}>
                Reservations
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}

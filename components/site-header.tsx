"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const routes = [
    { title: "Inicio", href: "/" },
    { title: "Servicios", href: "/servicios" },
    { title: "Galería", href: "/galeria" },
    { title: "Cómo Llegar", href: "/como-llegar" },
    { title: "Contacto", href: "/contacto" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/95 backdrop-blur-md shadow-md"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Terraza los Peques
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="flex items-center gap-1 px-4 py-2 text-lg font-medium rounded-full transition-colors hover:bg-purple-100 hover:text-purple-700"
            >
              <span>{route.title}</span>
            </Link>
          ))}
          <a href="tel:3338081218">
            <Button className="ml-2 bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white rounded-full text-lg px-4 py-2">
              <Phone className="mr-2 h-5 w-5" /> Llamar Ahora
            </Button>
          </a>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="rounded-full">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white/95 backdrop-blur-md">
            <div className="flex flex-col gap-6 mt-8">
              <div className="text-2xl font-bold bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
                Terraza los Peques
              </div>
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="flex items-center gap-3 text-xl font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {route.title}
                </Link>
              ))}
              <div className="grid grid-cols-1 gap-4 mt-4">
                <a href="tel:3338081218" onClick={() => setIsOpen(false)}>
                  <Button className="w-full h-14 text-xl bg-red-500 hover:bg-red-600 text-white">
                    <Phone className="mr-2 h-6 w-6" /> Llamar Ahora
                  </Button>
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
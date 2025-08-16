"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, X } from "lucide-react"

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="flex flex-col gap-3 mb-3 animate-in slide-in-from-bottom duration-300">
          <a href="tel:3338081218">
            <Button size="icon" className="h-16 w-16 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg">
              <Phone className="h-8 w-8" />
              <span className="sr-only">Llamar ahora</span>
            </Button>
          </a>
          <a href="https://wa.me/523338081218" target="_blank" rel="noopener noreferrer">
            <Button size="icon" className="h-16 w-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg">
              <MessageCircle className="h-8 w-8" />
              <span className="sr-only">WhatsApp</span>
            </Button>
          </a>
        </div>
      )}
      <Button
        size="icon"
        className={`h-20 w-20 rounded-full shadow-lg transition-all ${
          isOpen ? "bg-gray-700 hover:bg-gray-800" : "bg-purple-600 hover:bg-purple-700"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-8 w-8" /> : <Phone className="h-8 w-8" />}
        <span className="sr-only">{isOpen ? "Cerrar contacto" : "Abrir contacto"}</span>
      </Button>
    </div>
  )
}


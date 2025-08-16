import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function LlamanosSection() {
  return (
    <section
      id="llamanos-cta"
      className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-r from-red-500 to-purple-600 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-10 w-40 h-40 rounded-full bg-yellow-300 opacity-20 animate-pulse"></div>
        <div className="absolute right-10 top-40 w-20 h-20 rounded-full bg-green-300 opacity-20 animate-bounce"></div>
        <div className="absolute left-1/4 bottom-10 w-32 h-32 rounded-full bg-pink-300 opacity-20 animate-pulse"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white drop-shadow-md">
              ¿Listo para reservar tu evento?
            </h2>
            <p className="mx-auto max-w-[800px] text-white text-xl md:text-2xl">
              ¡Llámanos ahora y aparta tu fecha para tu fiesta infantil en Tonalá! Estamos listos para atenderte y resolver todas tus dudas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <a href="tel:3338081218">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 font-bold text-2xl rounded-full shadow-lg transform transition-transform hover:scale-105 h-20 px-8"
              >
                <Phone className="mr-3 h-8 w-8" /> 33 3808 1218
              </Button>
            </a>

            <a href="https://wa.me/523338081218" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-bold text-2xl rounded-full shadow-lg transform transition-transform hover:scale-105 h-20 px-8"
              >
                <MessageCircle className="mr-3 h-8 w-8" /> WhatsApp
              </Button>
            </a>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-3xl">
            <p className="text-white text-xl font-bold mb-4">Recuerda:</p>
            <ul className="text-white text-lg space-y-2 text-left">
              <li className="flex items-center">
                <span className="mr-2 text-2xl">•</span> Se aparta con $600 pesos (no reembolsables en caso de
                cancelación)
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-2xl">•</span> El resto debe liquidarse al menos un día antes del evento
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-2xl">•</span> Se requiere un depósito de $300 pesos (reembolsable al final
                del evento)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}


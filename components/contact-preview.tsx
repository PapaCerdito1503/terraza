import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Calendar, Clock, MapPin } from "lucide-react"

export function ContactPreview() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-purple-200 opacity-40"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-pink-200 opacity-40"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
              ¡Reserva Tu Evento!
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-800 md:text-xl font-medium">
              ¡Haz que el día especial de tu pequeño sea inolvidable! Contáctanos para reservar tu fecha.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <Card className="border-0 overflow-hidden rounded-3xl shadow-lg bg-white">
            <div className="bg-gradient-to-r from-red-500 to-purple-600 p-6 text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Información de Contacto</CardTitle>
                <p className="text-white/80">Estamos listos para atenderte</p>
              </CardHeader>
            </div>
            <CardContent className="space-y-6 p-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Llámanos</p>
                  <a
                    href="tel:3338081218"
                    className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    33 3808 1218
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Reservación</p>
                  <p className="text-lg font-medium">Aparta con $600 pesos</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Horario</p>
                  <p className="text-lg font-medium">Servicio por 7 horas (hasta las 9 PM)</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Ubicación</p>
                  <Link
                    href="/como-llegar"
                    className="text-lg font-medium text-gray-900 hover:text-green-600 transition-colors"
                  >
                    Ver cómo llegar
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-bold text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              ¿Listo para reservar?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/contacto">
                <Button className="w-full h-16 text-lg font-bold bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white rounded-2xl shadow-lg transform transition-transform hover:scale-105">
                  Reservar Ahora
                </Button>
              </Link>

              <a href="https://wa.me/523338081218" target="_blank" rel="noopener noreferrer">
                <Button className="w-full h-16 text-lg font-bold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-2xl shadow-lg transform transition-transform hover:scale-105">
                  WhatsApp Directo
                </Button>
              </a>

              <a href="tel:3338081218">
                <Button className="w-full h-16 text-lg font-bold bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-2xl shadow-lg transform transition-transform hover:scale-105">
                  Llamar Ahora
                </Button>
              </a>

              <Link href="/como-llegar">
                <Button className="w-full h-16 text-lg font-bold bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white rounded-2xl shadow-lg transform transition-transform hover:scale-105">
                  Cómo Llegar
                </Button>
              </Link>
            </div>

            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg">
              <p className="text-yellow-800">
                <strong>Nota:</strong> Se requiere un depósito de $300 pesos (reembolsable al final del evento si no hay
                daños).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


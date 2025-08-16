import { Button } from "@/components/ui/button"
import { PartyPopper, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="top"
      className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-blue-500 via-purple-500 to-red-500"
    >
      {/* Elementos decorativos animados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-10 w-40 h-40 rounded-full bg-yellow-300 opacity-20 animate-pulse"></div>
        <div className="absolute right-10 top-40 w-20 h-20 rounded-full bg-green-300 opacity-20 animate-bounce"></div>
        <div className="absolute left-1/4 bottom-10 w-32 h-32 rounded-full bg-pink-300 opacity-20 animate-pulse"></div>
        <div className="absolute right-1/4 top-20 w-28 h-28 rounded-full bg-blue-300 opacity-20 animate-bounce"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <PartyPopper className="h-8 w-8 text-yellow-300 animate-bounce" />
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white drop-shadow-md">
                  Terraza los Peques
                </h1>
              </div>
              <p className="max-w-[600px] text-white text-xl md:text-2xl drop-shadow-md">
                ¡El espacio perfecto en Tonalá para celebrar fiestas infantiles, cumpleaños y eventos familiares!
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="tel:3338081218">
                <Button
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xl rounded-full shadow-lg transform transition-transform hover:scale-105 h-16 px-8"
                >
                  <Phone className="mr-2 h-6 w-6" /> Llamar: 33 3808 1218
                </Button>
              </a>
            </div>
            <div className="mt-4 bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white text-lg">
              <p className="font-bold text-xl mb-2">¡Reserva ahora!</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Se aparta con $600 pesos</li>
                <li>Servicio por 7 horas (hasta las 9 PM)</li>
                <li>Capacidad para 80 personas</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden border-8 border-white shadow-2xl">
              <img
                src="/galeria/principal.jpg?height=500&width=800"
                alt="Niños felices en una fiesta infantil en Tonalá"
                className="object-cover w-full h-full rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900/70 to-transparent p-6">
                <p className="text-white text-xl font-bold drop-shadow-md">¡Diversión garantizada para los peques!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decoración inferior */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,250L48,245.3C96,240,192,230,288,230.3C384,230,480,240,576,240.7C672,240,768,230,864,230.3C960,230,1056,240,1152,242C1248,245,1344,240,1392,237.3L1440,235L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
        </svg>
      </div>
    </section>
  )
}


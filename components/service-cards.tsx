import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cake, Music, Gift, PlayCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ServiceCards() {
  const services = [
    {
      icon: <Cake className="h-12 w-12 text-red-500" />,
      title: "Espacio Completo",
      description:
        "50 sillas para adultos, 5 mesas con mantel y cubre mantel, 30 lugares para niños con 4 mesas infantiles.",
      color: "bg-gradient-to-br from-red-400 to-pink-500",
    },
    {
      icon: <PlayCircle className="h-12 w-12 text-blue-500" />,
      title: "Juegos y Diversión",
      description: "Brincolín de 4x6 metros, futbolito y mueble de jardín con escaleras, túneles y resbaladillas.",
      color: "bg-gradient-to-br from-blue-400 to-indigo-500",
    },
    {
      icon: <Music className="h-12 w-12 text-purple-500" />,
      title: "Equipo Incluido",
      description:
        "Bocina para música, tablón para pastel o mesa de regalos, cocina equipada con microondas y refrigerador.",
      color: "bg-gradient-to-br from-purple-400 to-violet-500",
    },
    {
      icon: <Gift className="h-12 w-12 text-yellow-500" />,
      title: "Servicio Completo",
      description: "7 horas de servicio, con opción de agregar mesas adicionales por un costo extra.",
      color: "bg-gradient-to-br from-yellow-400 to-amber-500",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-blue-50 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-red-200 opacity-40"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-blue-200 opacity-40"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-yellow-200 opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full bg-green-200 opacity-40"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-red-600">
              Nuestros Servicios
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Todo lo que necesitas para una fiesta infantil perfecta en un solo lugar.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-0 overflow-hidden rounded-3xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
            >
              <div className={`${service.color} p-6 text-white`}>
                <CardHeader className="flex items-center justify-center pt-6 pb-4">
                  <div className="p-3 bg-white/20 rounded-full">{service.icon}</div>
                  <CardTitle className="text-2xl mt-4 text-center font-bold">{service.title}</CardTitle>
                </CardHeader>
              </div>
              <CardContent className="text-center p-6">
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/servicios">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-full font-bold text-lg px-8 shadow-lg transform transition-transform hover:scale-105"
            >
              Ver Todos los Servicios ✨
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, PlayCircle, Coffee, Users, Clock, Plus } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Servicios de Terraza de Eventos en Tonalá | Terraza los Peques",
  description: "Descubre nuestros servicios para fiestas infantiles en Tonalá. Terraza los Peques ofrece brincolín, juegos, área de cocina y más para eventos familiares. Reserva hoy mismo."
}

export default function ServiciosPage() {
  const features = [
    {
      icon: <Users className="h-10 w-10 text-red-500" />,
      title: "Capacidad",
      description:
        "50 sillas para adultos con 5 mesas, 30 lugares para niños con 4 mesas infantiles. Total: 80 personas.",
    },
    {
      icon: <PlayCircle className="h-10 w-10 text-blue-500" />,
      title: "Juegos",
      description:
        "Brincolín de 4x6 metros (mitad escaladora, mitad interactiva), futbolito, y mueble de jardín con escaleras, túneles y resbaladillas.",
    },
    {
      icon: <Music className="h-10 w-10 text-purple-500" />,
      title: "Equipo",
      description: "Bocina para música y tablón para pastel o mesa de regalos.",
    },
    {
      icon: <Coffee className="h-10 w-10 text-red-500" />,
      title: "Cocina",
      description: "Horno de microondas, refrigerador, columpio para garrafón de agua y hielera grande.",
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-500" />,
      title: "Duración",
      description: "Servicio por 7 horas. No se renta después de las 9 de la noche.",
    },
    {
      icon: <Plus className="h-10 w-10 text-purple-500" />,
      title: "Adicionales",
      description: "Cada mesa adicional cuesta $200 pesos con 10 sillas.",
    },
  ]

  const policies = [
    "Se aparta con $600 pesos. Si cancela la fecha, pierde el apartado.",
    "Debe liquidar el resto al menos un día antes del evento.",
    "Se requiere un depósito de $300 pesos que se regresan al final del evento si no hay inconvenientes.",
    "No está permitido tirar confetti, usar bazucas o clavar objetos.",
    "No se permite introducir mobiliario ajeno a la terraza.",
  ]

  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-500 to-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                Nuestros Servicios de Terraza de Eventos en Tonalá
              </h1>
              <p className="mx-auto max-w-[600px] text-white md:text-xl text-center">
                Todo lo que necesitas para una fiesta infantil perfecta en un solo lugar. 
                Terraza los Peques en Tonalá ofrece una terraza de eventos con juegos, brincolín y más para fiestas infantiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 border-purple-200 hover:border-purple-400 transition-all">
                <CardHeader className="flex items-center justify-center pt-6">
                  {feature.icon}
                  <CardTitle className="text-xl mt-4 text-center">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-red-600">
                Políticas de Reservación
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Información importante para tener en cuenta al reservar tu evento.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-red-200">
              <ul className="space-y-4">
                {policies.map((policy, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                      {index + 1}
                    </div>
                    <p>{policy}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative rounded-xl overflow-hidden h-[300px] md:h-auto">
              <img
                src="/galeria/niños-jugando.jpg"
                alt="Fiesta infantil en Terraza los Peques"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 bg-purple-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-700">
                ¿Listo para Reservar?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Haz que el día especial de tu pequeño sea inolvidable en Terraza los Peques.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Link href="/contacto">
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">¡Contáctanos Ahora!</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


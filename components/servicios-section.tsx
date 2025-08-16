import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, PlayCircle, Users, Coffee, Clock, Plus, Check, X } from "lucide-react"

export function ServiciosSection() {
  const servicios = [
    {
      icon: <Users className="h-12 w-12 text-red-500" />,
      title: "Capacidad",
      description:
        "50 sillas para adultos con 5 mesas, 30 lugares para niños con 4 mesas infantiles. Total: 80 personas.",
      color: "bg-gradient-to-br from-red-400 to-pink-500",
    },
    {
      icon: <PlayCircle className="h-12 w-12 text-blue-500" />,
      title: "Juegos",
      description:
        "Brincolín de 4x6 metros (mitad escaladora, mitad interactiva), futbolito, y mueble de jardín con escaleras, túneles y resbaladillas.",
      color: "bg-gradient-to-br from-blue-400 to-indigo-500",
    },
    {
      icon: <Music className="h-12 w-12 text-purple-500" />,
      title: "Equipo",
      description: "Bocina para música y tablón para pastel o mesa de regalos.",
      color: "bg-gradient-to-br from-purple-400 to-violet-500",
    },
    {
      icon: <Coffee className="h-12 w-12 text-yellow-500" />,
      title: "Cocina",
      description: "Horno de microondas, refrigerador, columpio para garrafón de agua y hielera grande.",
      color: "bg-gradient-to-br from-yellow-400 to-amber-500",
    },
    {
      icon: <Clock className="h-12 w-12 text-green-500" />,
      title: "Duración",
      description: "Servicio por 7 horas. No se renta después de las 9 de la noche.",
      color: "bg-gradient-to-br from-green-400 to-emerald-500",
    },
    {
      icon: <Plus className="h-12 w-12 text-pink-500" />,
      title: "Adicionales",
      description: "Cada mesa adicional cuesta $200 pesos con 10 sillas.",
      color: "bg-gradient-to-br from-pink-400 to-rose-500",
    },
  ]

  const permitido = [
    "Traer su propia comida y bebida",
    "Decorar el espacio (sin clavar)",
    "Contratar animadores externos",
    "Traer pastel y dulces",
    "Música y entretenimiento",
  ]

  const prohibido = [
    "Tirar confetti o usar bazucas",
    "Clavar objetos en paredes o techos",
    "Introducir mobiliario ajeno a la terraza",
    "Exceder el horario contratado",
    "Superar el límite de capacidad",
  ]

  return (
    <section id="servicios" className="w-full py-12 md:py-16 lg:py-20 bg-blue-50 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-red-600">
              Nuestros Servicios
            </h2>
            <p className="mx-auto max-w-[800px] text-gray-600 text-xl md:text-2xl">
              Todo lo que incluye tu reservación en Terraza los Peques en Tonalá
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {servicios.map((servicio, index) => (
            <Card
              key={index}
              className="border-0 overflow-hidden rounded-3xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
            >
              <div className={`${servicio.color} p-6 text-white`}>
                <CardHeader className="flex items-center justify-center pt-6 pb-4">
                  <div className="p-3 bg-white/20 rounded-full">{servicio.icon}</div>
                  <CardTitle className="text-2xl mt-4 text-center font-bold">{servicio.title}</CardTitle>
                </CardHeader>
              </div>
              <CardContent className="text-center p-6">
                <p className="text-gray-600 text-lg">{servicio.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-3xl shadow-lg p-6 border-l-8 border-green-500">
            <h3 className="text-3xl font-bold text-green-600 mb-6 flex items-center">
              <Check className="mr-2 h-8 w-8" /> Lo que SÍ puedes hacer
            </h3>
            <ul className="space-y-4">
              {permitido.map((item, index) => (
                <li key={index} className="flex items-center text-xl">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 mr-3">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 border-l-8 border-red-500">
            <h3 className="text-3xl font-bold text-red-600 mb-6 flex items-center">
              <X className="mr-2 h-8 w-8" /> Lo que NO puedes hacer
            </h3>
            <ul className="space-y-4">
              {prohibido.map((item, index) => (
                <li key={index} className="flex items-center text-xl">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 mr-3">
                    <X className="h-5 w-5 text-red-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl shadow-lg p-8">
          <h3 className="text-3xl font-bold text-purple-700 mb-6 text-center">Políticas de Reservación</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-200 mt-1 mr-3">
                  <span className="font-bold text-purple-700">1</span>
                </div>
                <p className="text-xl">Se aparta con $600 pesos. Si cancela la fecha, pierde el apartado.</p>
              </div>
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-200 mt-1 mr-3">
                  <span className="font-bold text-purple-700">2</span>
                </div>
                <p className="text-xl">Debe liquidar el resto al menos un día antes del evento.</p>
              </div>
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-200 mt-1 mr-3">
                  <span className="font-bold text-purple-700">3</span>
                </div>
                <p className="text-xl">
                  Se requiere un depósito de $300 pesos que se regresan al final del evento si no hay inconvenientes.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-200 mt-1 mr-3">
                  <span className="font-bold text-purple-700">4</span>
                </div>
                <p className="text-xl">No está permitido tirar confetti, usar bazucas o clavar objetos.</p>
              </div>
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-200 mt-1 mr-3">
                  <span className="font-bold text-purple-700">5</span>
                </div>
                <p className="text-xl">No se permite introducir mobiliario ajeno a la terraza.</p>
              </div>
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-200 mt-1 mr-3">
                  <span className="font-bold text-purple-700">6</span>
                </div>
                <p className="text-xl">Cada mesa adicional cuesta $200 pesos con 10 sillas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


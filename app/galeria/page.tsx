import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Galería de Fiestas Infantiles en Tonalá | Terraza los Peques",
  description: "Explora nuestra galería de fotos de fiestas infantiles y eventos en Terraza los Peques, Tonalá. Inspírate con ideas para tu próxima celebración."
}

export default function GaleriaPage() {
  const images = [
    { src: "/galeria/elegante.jpg", alt: "Evento elegante", category: "Fiestas" },
    { src: "/galeria/Decoracion_XV.jpg", alt: "Celebración de 15 años", category: "Fiestas" },
    { src: "/galeria/principal.jpg", alt: "Vista General", category: "Instalaciones" },
    { src: "/galeria/Cumple65.jpg", alt: "Decoracion de cumpleaños", category: "Decoración" },
    { src: "/galeria/Decoracion_infantil.jpg", alt: "Decoración infantil", category: "Decoración" },
    { src: "/galeria/infantil.jpg", alt: "Fiesta infantil", category: "Fiestas" },
    { src: "/galeria/Primera_Comunion.jpg", alt: "Primera Comunion", category: "Fiestas" },
    { src: "/galeria/princesa.jpg", alt: "Decoración Temática Princesas", category: "Decoración" },
    { src: "/galeria/boda.jpg", alt: "Zona exterior boda", category: "Fiestas" },
    { src: "/galeria/Mesa_Dulces_infantil.jpg", alt: "Mesa Principal infantil", category: "Decoración" },
    { src: "/galeria/decoracion.jpg", alt: "Decoración", category: "Decoración" },
    { src: "/galeria/mesa-dulces.jpg", alt: "Mesa de dulces", category: "Comida" },
    { src: "/galeria/interactivo.jpg", alt: "Juegos interactivos para niños", category: "Juegos" },
    { src: "/galeria/brincolin.jpg", alt: "Brincolín", category: "Juegos" },
    { src: "/galeria/abierta.jpg", alt: "Área de Mesas", category: "Instalaciones" },
    { src: "/galeria/Mobiliario_infantil.jpg", alt: "Mobiliario Infantil", category: "Instalaciones" },
    { src: "/galeria/Campo.jpg", alt: "Zona de Juegos Exterior", category: "Juegos" },
    { src: "/galeria/Comedor.jpg", alt: "Servicios de comida externos", category: "Comida" },
    { src: "/galeria/niños-jugando.jpg", alt: "Niños jugando en fiesta infantil", category: "Juegos" },
    { src: "/galeria/cocina.jpg", alt: "Cocina equipada", category: "Instalaciones" },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-red-500 to-purple-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                Galería de Fiestas Infantiles en Tonalá
              </h1>
              <p className="mx-auto max-w-[600px] text-white md:text-xl text-center">
                Momentos inolvidables en Terraza los Peques en Tonalá. ¡Mira cómo otros han disfrutado de nuestro espacio para fiestas infantiles!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div key={index} className="group relative aspect-square overflow-hidden rounded-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-white font-medium">{image.alt}</p>
                    <p className="text-white/80 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-700">
                ¡Crea tus propios recuerdos!
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Reserva ahora y haz que el día especial de tu pequeño sea inolvidable en Terraza los Peques.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Link href="/contacto">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">¡Reserva Tu Fecha!</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
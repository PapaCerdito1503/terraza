"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Camera } from "lucide-react"

export function GalleryPreview() {
  const images = [
    { src: "/galeria/niños-jugando.jpg", alt: "Convivencia Familiar" },
    { src: "/galeria/cocina.jpg", alt: "Cocina Equipada" },
    { src: "/galeria/infantil.jpg", alt: "Fiestas Infantiles" },
    { src: "/galeria/decoracion.jpg", alt: "Decora a tu gusto" },
    { src: "/galeria/brincolin.jpg", alt: "Brincolín" },
    { src: "/galeria/mesa-dulces.jpg", alt: "Mesa de Dulces" },
    { src: "/galeria/interactivo.jpg", alt: "Juegos Interactivos" },
    { src: "/galeria/elegante.jpg", alt: "Reuniones Elegantes" },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 rounded-full opacity-30 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full opacity-30 -ml-40 -mb-40"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-red-100 rounded-full mb-2">
            <Camera className="h-6 w-6 text-red-500" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-purple-500">
              Galería de Eventos
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Momentos inolvidables en Terraza los Peques. ¡Mira cómo otros han disfrutado de nuestro espacio!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                transform: `rotate(${index % 2 === 0 ? "2deg" : "-2deg"})`,
                animation: `float ${3 + index * 0.5}s ease-in-out infinite alternate`,
              }}
            >
              <img src={image.src} alt={image.alt} className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-bold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/galeria">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg px-8 shadow-lg transform transition-transform hover:scale-105"
            >
              Ver Galería Completa 📸
            </Button>
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(${Math.random() * 4 - 2}deg); }
          100% { transform: translateY(-10px) rotate(${Math.random() * 4 - 2}deg); }
        }
      `}</style>
    </section>
  )
}
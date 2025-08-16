"use client"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Camera } from "lucide-react"
import { ImageModal } from "@/components/image-modal"

export function GaleriaSection() {
  const images = [
    { src: "/galeria/niños-jugando.jpg?height=300&width=400", alt: "Niños jugando en fiesta infantil" },
    { src: "/galeria/cocina.jpg?height=300&width=400", alt: "Cocina equipada" },
    { src: "/galeria/infantil.jpg?height=300&width=400", alt: "Fiesta infantil" },
    { src: "/galeria/decoracion.jpg?height=300&width=400", alt: "¡Decorara a tu gusto!" },
    { src: "/galeria/brincolin.jpg?height=300&width=400", alt: "Brincolín" },
    { src: "/galeria/mesa-dulces.jpg?height=300&width=400", alt: "Mesa de dulces" },
    { src: "/galeria/interactivo.jpg?height=300&width=400", alt: "Juegos interactivos para niños" },
    { src: "/galeria/elegante.jpg?height=300&width=400", alt: "Evento elegante" },
  ]

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState({ src: "", alt: "" })

  const openModal = (src: string, alt: string) => {
    setModalImage({ src, alt })
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section id="galeria" className="w-full py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-red-100 rounded-full mb-2">
            <Camera className="h-6 w-6 text-red-500" />
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-purple-500">
              Galería de Eventos
            </h2>
            <p className="mx-auto max-w-[800px] text-gray-600 text-xl md:text-2xl">
              Momentos inolvidables en Terraza los Peques en Tonalá. ¡Haz clic en las imágenes para verlas en grande!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => openModal(image.src, image.alt)}
              className="relative aspect-square overflow-hidden rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <img src={image.src} alt={image.alt} className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-bold text-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-gray-600 mb-4">¡Haz clic en cualquier imagen para verla en tamaño completo!</p>
          <Link href="/galeria"> 
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white rounded-full font-bold text-xl px-8 py-6 shadow-lg"
            >
              <Camera className="mr-2 h-6 w-6" /> Ver Todas las Fotos
            </Button>
          </Link>
        </div>
      </div>

      <ImageModal 
        src={modalImage.src} 
        alt={modalImage.alt} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </section>
  )
}


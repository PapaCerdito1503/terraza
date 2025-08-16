import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { ServiciosSection } from "@/components/servicios-section"
import { GaleriaSection } from "@/components/galeria-section"
import { ComoLlegarSection } from "@/components/como-llegar-section"
import { LlamanosSection } from "@/components/llamanos-section"
import { ContactoSection } from "@/components/contacto-section"
import { FloatingContact } from "@/components/floating-contact"

export const metadata = {
  title: "Terraza los Peques - Fiestas Infantiles en Tonalá | Terraza de Eventos",
  description: "El mejor lugar en Tonalá, Jalisco para celebrar fiestas infantiles, cumpleaños y eventos familiares. Terraza de eventos con juegos, brincolín y más. Reserva ahora."
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      
      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-700">
                ¡Bienvenidos a Terraza los Peques en Tonalá!
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                El lugar perfecto en Tonalá, Jalisco para celebrar los momentos más especiales de tus pequeños. 
                Contamos con todo lo necesario para hacer de su fiesta un día inolvidable. 
                Terraza de eventos ideal para fiestas infantiles, cumpleaños y eventos familiares en Tonalá.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link href="/servicios">
                <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-6">
                  Ver Servicios
                </Button>
              </Link>
              <Link href="/galeria">
                <Button variant="outline" className="rounded-full px-6 border-2 border-purple-500 text-purple-700 hover:bg-purple-100">
                  Ver Galería
                </Button>
              </Link>
              <Link href="/contacto">
                <Button className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white rounded-full px-6">
                  ¡Reserva Ahora!
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <ServiciosSection />
      <GaleriaSection />
      <ComoLlegarSection />
      <LlamanosSection />
      <ContactoSection />
      
      <section className="w-full py-12 md:py-16 lg:py-20 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-700">
                Preguntas Frecuentes
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Todo lo que necesitas saber sobre Terraza los Peques en Tonalá
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-blue-600 mb-2">¿Dónde están ubicados?</h3>
              <p className="text-gray-600">
                Estamos ubicados en Amado Rodríguez Galván 18, Educadores Jaliscienses, 45400 Tonalá, Jal. 
                ¡Consulta nuestra sección "Cómo Llegar" para más detalles!
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-blue-600 mb-2">¿Cuál es el horario de servicio?</h3>
              <p className="text-gray-600">
                Nuestro horario es de 9:00 AM a 9:00 PM todos los días. El servicio para eventos es por 7 horas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-blue-600 mb-2">¿Cuánto cuesta la reservación?</h3>
              <p className="text-gray-600">
                Se aparta con $600 pesos que se aplican al total del evento. 
                El resto se liquida al menos un día antes del evento.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-blue-600 mb-2">¿Qué incluye el servicio?</h3>
              <p className="text-gray-600">
                Incluye brincolín, juegos, área de cocina, mobiliario para 80 personas, 
                bocina para música y tablón para pastel. ¡Consulta todos nuestros servicios!
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/contacto">
              <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-8 py-3 text-lg">
                ¿Tienes más preguntas? ¡Contáctanos!
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <FloatingContact />
    </main>
  )
}
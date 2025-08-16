import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Navigation, Car, Bus, Phone, MessageCircle } from "lucide-react"

export const metadata = {
  title: "Cómo Llegar a Terraza los Peques en Tonalá | Dirección y Mapa",
  description: "Encuentra fácilmente Terraza los Peques en Tonalá, Jalisco. Dirección: Amado Rodríguez Galván 18. Consulta mapa, instrucciones y estacionamiento."
}

export default function ComoLlegarPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-500 to-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center justify-center p-2 bg-white/20 rounded-full mb-2">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                ¿Cómo Llegar a Terraza los Peques en Tonalá?
              </h1>
              <p className="mx-auto max-w-[600px] text-white md:text-xl text-center">
                Encuentra fácilmente la ubicación de Terraza los Peques en Tonalá, Jalisco para tu próximo evento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              <Card className="border-0 shadow-lg rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
                  <CardTitle className="text-2xl">Nuestra Ubicación</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 mt-1">
                        <MapPin className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">Dirección:</p>
                        <p className="text-gray-700">Amado Rodríguez Galván 18</p>
                        <p className="text-gray-700">Educadores Jaliscienses, 45400 Tonalá, Jal.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 mt-1">
                        <Navigation className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">Información:</p>
                        <p className="text-gray-700">Recinto para eventos</p>
                        <p className="text-gray-700">Horario: 9:00 AM - 9:00 PM todos los días</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a href="https://maps.app.goo.gl/fL1XcdPE15kwbTf98" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
                        Abrir en Google Maps
                      </Button>
                    </a>
                    <a href="https://waze.com/ul?q=20.6418448,-103.253285" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl">
                        Abrir en Waze
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  <CardTitle className="text-2xl">¿Cómo Llegar?</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 mt-1">
                        <Car className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">En automóvil:</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Desde Guadalajara, toma la carretera a Tonalá</li>
                          <li>Dirígete hacia la colonia Educadores Jaliscienses</li>
                          <li>Busca Amado Rodríguez Galván #18</li>
                          <li>Estacionamiento disponible en el lugar</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-100 mt-1">
                        <Bus className="h-5 w-5 text-pink-600" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">En transporte público:</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li><strong>Rutas principales:</strong> C34 - EDUCADORES, C37 - BOSQUES, LÍNEA 2, T04-A - LOMA DORADA</li>
                          <li><strong>Paradas cercanas:</strong> "Candelario Medrano López" y "Educadores" (2 min caminando)</li>
                          <li><strong>Horarios:</strong> Primer autobús C34 a las 4:45 AM, últimos servicios hasta las 11:14 PM</li>
                          <li><strong>Conexiones:</strong> Sistema Mi Macro Periférico desde Guadalajara centro</li>
                          <li><strong>Alternativa:</strong> Servicios de app (Uber, Didi) o taxi directo</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="h-[600px] rounded-3xl overflow-hidden shadow-xl border-8 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.543284076842!2d-103.25585991493232!3d20.641844886922454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b46e4714d7a1%3A0x3f1a11110ded8a0f!2sTerraza%20Los%20Peques!5e0!3m2!1sen!2smx!4v1691234567890!5m2!1sen!2smx"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Terraza Los Peques"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}


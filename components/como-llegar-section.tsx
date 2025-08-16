import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Navigation, Car, Bus } from "lucide-react"

export function ComoLlegarSection() {
  return (
    <section id="como-llegar" className="w-full py-12 md:py-16 lg:py-20 bg-green-50 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-green-100 rounded-full mb-2">
            <MapPin className="h-6 w-6 text-green-500" />
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600">
              ¿Cómo Llegar?
            </h2>
            <p className="mx-auto max-w-[800px] text-gray-600 text-xl md:text-2xl">
              Encuentra fácilmente la ubicación de Terraza los Peques en Tonalá, Jalisco para tu próximo evento
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <Card className="border-0 shadow-lg rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-6">
                <CardTitle className="text-3xl">Nuestra Ubicación</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mt-1">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-2xl mb-2">Dirección:</p>
                      <p className="text-gray-700 text-xl">Amado Rodríguez Galván 18,</p>
                      <p className="text-gray-700 text-xl">Educadores Jaliscienses, 45400 Tonalá, Jal.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mt-1">
                      <Navigation className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-2xl mb-2">Información:</p>
                      <p className="text-gray-700 text-xl">Recinto para eventos</p>
                      <p className="text-gray-700 text-xl">Horario: 9:00 AM - 9:00 PM todos los días</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a href="https://maps.app.goo.gl/fL1XcdPE15kwbTf98" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xl">
                      Abrir en Google Maps
                    </Button>
                  </a>
                  <a href="https://waze.com/ul?q=20.6418448,-103.253285" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full h-14 bg-green-600 hover:bg-green-700 text-white rounded-xl text-xl">
                      Abrir en Waze
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6">
                <CardTitle className="text-3xl">¿Cómo Llegar?</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 mt-1">
                      <Car className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-bold text-2xl mb-2">En automóvil:</p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 text-xl">
                        <li>Desde Guadalajara, toma la carretera a Tonalá</li>
                        <li>Dirígete hacia la colonia Educadores Jaliscienses</li>
                        <li>Busca Amado Rodríguez Galván #18</li>
                        <li>Estacionamiento disponible en el lugar</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 mt-1">
                      <Bus className="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                      <p className="font-bold text-2xl mb-2">En transporte público:</p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 text-xl">
                        <li><strong>Rutas principales:</strong> C34 - EDUCADORES, C37 - BOSQUES, LÍNEA 2, T04-A - LOMA DORADA</li>
                        <li><strong>Paradas cercanas:</strong> "Candelario Medrano López" y "Educadores" (2 min caminando)</li>
                        <li><strong>Alternativa:</strong> Servicios de app (Uber, Didi) o taxi directo</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="h-[600px] rounded-3xl overflow-hidden shadow-xl border-8 border-white">
            {/* Aquí iría un mapa real de Google Maps o similar */}
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
  )
}


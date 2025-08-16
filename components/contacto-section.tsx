"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Calendar, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactoSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    fecha: "",
    mensaje: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    setTimeout(() => {
      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo muy pronto.",
        duration: 5000,
      })
      setIsSubmitting(false)
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        fecha: "",
        mensaje: "",
      })
    }, 1500)
  }

  return (
    <section id="contacto" className="w-full py-12 md:py-16 lg:py-20 bg-blue-50 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-2">
            <Mail className="h-6 w-6 text-blue-500" />
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Contáctanos
            </h2>
            <p className="mx-auto max-w-[800px] text-gray-600 text-xl md:text-2xl">
              Envíanos un mensaje sobre tu fiesta infantil en Tonalá y nos pondremos en contacto contigo lo antes posible
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-0 overflow-hidden rounded-3xl shadow-lg">
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 text-white">
              <CardHeader>
                <CardTitle className="text-3xl text-white">Formulario de Contacto</CardTitle>
                <p className="text-white/80 text-xl">Completa el formulario y nos pondremos en contacto contigo.</p>
              </CardHeader>
            </div>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="text-xl">
                    Nombre completo
                  </Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    placeholder="Tu nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="rounded-xl p-4 text-xl border-2 border-purple-100 focus:border-purple-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xl">
                    Correo electrónico
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-xl p-4 text-xl border-2 border-purple-100 focus:border-purple-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefono" className="text-xl">
                    Teléfono
                  </Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    placeholder="Tu número de teléfono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    className="rounded-xl p-4 text-xl border-2 border-purple-100 focus:border-purple-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fecha" className="text-xl">
                    Fecha deseada para el evento
                  </Label>
                  <Input
                    id="fecha"
                    name="fecha"
                    type="date"
                    required
                    value={formData.fecha}
                    onChange={handleChange}
                    className="rounded-xl p-4 text-xl border-2 border-purple-100 focus:border-purple-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mensaje" className="text-xl">
                    Mensaje
                  </Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Cuéntanos sobre tu evento..."
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="rounded-xl p-4 text-xl border-2 border-purple-100 focus:border-purple-300"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-16 text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-xl shadow-lg transform transition-transform hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="h-6 w-6 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-6 w-6" />
                      Enviar Mensaje
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-6">
            <Card className="border-0 overflow-hidden rounded-3xl shadow-lg">
              <div className="bg-gradient-to-r from-blue-500 to-green-500 p-6 text-white">
                <CardHeader>
                  <CardTitle className="text-3xl text-white">Información de Contacto</CardTitle>
                  <p className="text-white/80 text-xl">Estamos listos para atenderte</p>
                </CardHeader>
              </div>
              <CardContent className="space-y-8 p-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100">
                    <Phone className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-lg text-gray-500">Llámanos</p>
                    <a
                      href="tel:3338081218"
                      className="text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      33 3808 1218
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-100">
                    <Calendar className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-lg text-gray-500">Reservación</p>
                    <p className="text-2xl font-medium">Aparta con $600 pesos</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100">
                    <Clock className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <p className="text-lg text-gray-500">Horario</p>
                    <p className="text-2xl font-medium">Servicio por 7 horas (hasta las 9 PM)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
                    <MapPin className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <p className="text-lg text-gray-500">Ubicación</p>
                    <a
                      href="#como-llegar"
                      className="text-2xl font-medium text-gray-900 hover:text-green-600 transition-colors"
                    >
                      Ver cómo llegar
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}


"use client"

import Link from "next/link"

import type React from "react"

import { useState } from "react"
import emailjs from '@emailjs/browser'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, Clock, Calendar, MessageCircle, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"


export default function ContactoPage() {
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

  const createCalendarEvent = (data: typeof formData) => {
    const eventDate = new Date(data.fecha)
    const startDate = eventDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    const endDate = new Date(eventDate.getTime() + 7 * 60 * 60 * 1000).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: `Evento Terraza los Peques - ${data.nombre}`,
      dates: `${startDate}/${endDate}`,
      details: `Cliente: ${data.nombre}\nEmail: ${data.email}\nTeléfono: ${data.telefono}\nMensaje: ${data.mensaje}`,
      location: 'Terraza los Peques',
      trp: 'false'
    })

    return `https://calendar.google.com/calendar/render?${params.toString()}`
  }

  const generateICSFile = (data: typeof formData) => {
    const eventDate = new Date(data.fecha)
    const startDate = eventDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    const endDate = new Date(eventDate.getTime() + 7 * 60 * 60 * 1000).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Terraza los Peques//ES
BEGIN:VEVENT
UID:${Date.now()}@terrazapeques.com
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:Evento Terraza los Peques - ${data.nombre}
DESCRIPTION:Cliente: ${data.nombre}\\nEmail: ${data.email}\\nTeléfono: ${data.telefono}\\nMensaje: ${data.mensaje}
LOCATION:Terraza los Peques
ORGANIZER:mailto:fchortos@gmail.com
ATTENDEE:mailto:${data.email}
STATUS:CONFIRMED
BEGIN:VALARM
TRIGGER:-P1D
ACTION:DISPLAY
DESCRIPTION:Recordatorio: Evento Terraza los Peques mañana
END:VALARM
END:VEVENT
END:VCALENDAR`

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    return blob
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // EmailJS configuration
      const serviceId = 'service_ar0d9jc'
      const templateId = 'template_llymukf'
      const publicKey = 'GqB7occK6JfGPT8H7'

      // Initialize EmailJS
      emailjs.init(publicKey)

      const templateParams = {
        from_name: formData.nombre,
        from_email: formData.email,
        phone: formData.telefono,
        event_date: formData.fecha,
        message: formData.mensaje,
        reply_to: formData.email,
      }

      console.log('Sending email with params:', templateParams)
      await emailjs.send(serviceId, templateId, templateParams)

      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo muy pronto.",
        duration: 5000,
      })

      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        fecha: "",
        mensaje: "",
      })
    } catch (error) {
      console.error('Error sending email:', error)
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.",
        duration: 5000,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full min-h-[45vh] flex items-center justify-center bg-gradient-to-b from-red-500 to-purple-600 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-10 top-10 w-40 h-40 rounded-full bg-yellow-300 opacity-20 animate-pulse"></div>
          <div className="absolute right-10 top-40 w-20 h-20 rounded-full bg-green-300 opacity-20 animate-bounce"></div>
          <div className="absolute left-1/4 bottom-10 w-32 h-32 rounded-full bg-pink-300 opacity-20 animate-pulse"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10 -mt-48">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center justify-center p-2 bg-white/20 rounded-full mb-2">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white drop-shadow-md">
                ¡Contáctanos en Tonalá!
              </h1>
              <p className="max-w-[600px] text-white md:text-xl drop-shadow-lg font-medium">
                ¿Listo para reservar tu fiesta infantil en Tonalá? Contáctanos para hacer que el día especial de tu pequeño sea inolvidable.
              </p>
            </div>
          </div>
        </div>

        {/* Decoración inferior */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,250L48,245.3C96,240,192,230,288,230.3C384,230,480,240,576,240.7C672,240,768,230,864,230.3C960,230,1056,240,1152,242C1248,245,1344,240,1392,237.3L1440,235L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 overflow-hidden rounded-3xl shadow-lg transform transition-all hover:shadow-xl">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Formulario de Contacto</CardTitle>
                  <p className="text-white/80">Completa el formulario y nos pondremos en contacto contigo.</p>
                </CardHeader>
              </div>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre" className="text-lg">
                      Nombre completo
                    </Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      placeholder="Tu nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className="rounded-xl p-3 text-lg border-2 border-purple-100 focus:border-purple-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg">
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
                      className="rounded-xl p-3 text-lg border-2 border-purple-100 focus:border-purple-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono" className="text-lg">
                      Teléfono
                    </Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      placeholder="Tu número de teléfono"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      className="rounded-xl p-3 text-lg border-2 border-purple-100 focus:border-purple-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fecha" className="text-lg">
                      Fecha deseada para el evento
                    </Label>
                    <Input
                      id="fecha"
                      name="fecha"
                      type="date"
                      required
                      value={formData.fecha}
                      onChange={handleChange}
                      className="rounded-xl p-3 text-lg border-2 border-purple-100 focus:border-purple-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mensaje" className="text-lg">
                      Mensaje
                    </Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      placeholder="Cuéntanos sobre tu evento..."
                      rows={4}
                      value={formData.mensaje}
                      onChange={handleChange}
                      className="rounded-xl p-3 text-lg border-2 border-purple-100 focus:border-purple-300"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-14 text-lg font-bold bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white rounded-xl shadow-lg transform transition-transform hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-5 w-5" />
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
                    <CardTitle className="text-2xl text-white">Información de Contacto</CardTitle>
                    <p className="text-white/80">Estamos listos para atenderte</p>
                  </CardHeader>
                </div>
                <CardContent className="space-y-6 p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Llámanos</p>
                      <a
                        href="tel:3338081218"
                        className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        33 3808 1218
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100">
                      <Calendar className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Reservación</p>
                      <p className="text-lg font-medium">Aparta con $600 pesos</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100">
                      <Clock className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Horario</p>
                      <p className="text-lg font-medium">Servicio por 7 horas (hasta las 9 PM)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Ubicación</p>
                      <Link
                        href="/como-llegar"
                        className="text-lg font-medium text-gray-900 hover:text-green-600 transition-colors"
                      >
                        Ver cómo llegar
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 overflow-hidden rounded-3xl shadow-lg bg-gradient-to-br from-yellow-50 to-orange-50">
                <CardHeader className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                  <CardTitle className="text-2xl text-white">Contacto Rápido</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a href="tel:3338081218">
                      <Button className="w-full h-14 text-lg font-bold bg-red-500 hover:bg-red-600 text-white rounded-xl shadow-lg transform transition-transform hover:scale-105">
                        <Phone className="mr-2 h-5 w-5" /> Llamar
                      </Button>
                    </a>

                    <a href="https://wa.me/523338081218" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full h-14 text-lg font-bold bg-green-500 hover:bg-green-600 text-white rounded-xl shadow-lg transform transition-transform hover:scale-105">
                        <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


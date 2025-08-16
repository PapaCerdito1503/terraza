import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contacto | Terraza los Peques Tonalá - Reserva tu Fiesta Infantil",
  description: "Contacta con Terraza los Peques en Tonalá para reservar tu fiesta infantil. Teléfono: 33 3808 1218. Envía un mensaje o reserva directamente en línea.",
  keywords: "contacto terraza peques, reservar fiesta infantil tonalá, teléfono terraza peques, whatsapp fiestas infantiles",
  openGraph: {
    title: "Contacto | Terraza los Peques Tonalá - Reserva tu Fiesta Infantil",
    description: "Contacta con Terraza los Peques en Tonalá para reservar tu fiesta infantil. Teléfono: 33 3808 1218.",
    type: 'website',
  },
}

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
import type React from "react"
import "@/app/globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Terraza los Peques - Fiestas Infantiles en Tonalá | Terraza de Eventos",
  description:
    "Terraza los Peques en Tonalá, Jalisco. El mejor lugar para fiestas infantiles, cumpleaños y eventos familiares. Terraza de eventos con juegos, brincolín y más. Reserva ahora.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Terraza los Peques",
              "image": "https://terrazapeques.com/principal.jpg",
              "telephone": "+52 33 3808 1218",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Amado Rodríguez Galván 18",
                "addressLocality": "Tonalá",
                "addressRegion": "Jalisco",
                "postalCode": "45400",
                "addressCountry": "MX"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 20.6418448,
                "longitude": -103.253285
              },
              "url": "https://terrazapeques.com",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "09:00",
                "closes": "21:00"
              },
              "description": "Terraza de eventos en Tonalá especializada en fiestas infantiles, cumpleaños y eventos familiares con juegos, brincolín y más."
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased" style={{ fontFamily: "'Baloo 2', cursive" }}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import Link from "next/link"
import { Phone, Mail, MapPin, Heart } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-900 via-purple-900 to-red-900 text-white py-12 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-blue-500 opacity-10"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-red-500 opacity-10"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 rounded-full bg-yellow-500 opacity-10"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
              Terraza los Peques
            </h3>
            <p className="text-blue-200">
              El lugar perfecto en Tonalá, Jalisco para celebrar los momentos más especiales de tus pequeños. 
              Contamos con todo lo necesario para hacer de su fiesta un día inolvidable.
            </p>
            <div className="flex items-center mt-4 space-x-3">
              <a
                href="https://www.facebook.com/profile.php?id=100064057842212"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://wa.me/523338081218"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <span className="sr-only">WhatsApp</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/servicios" className="text-blue-200 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span> Fiestas Infantiles en Tonalá
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-blue-200 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span> Terraza de Eventos
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-blue-200 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span> Brincolín y Juegos
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-blue-200 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span> Área de Cocina
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-blue-200 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span> Inicio
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-blue-200 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span> Galería de Eventos
                </Link>
              </li>
              <li>
                <Link href="/como-llegar" className="text-blue-200 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span> Cómo Llegar a Terraza los Peques, Tonalá
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-blue-200 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span> Contacto y Reservas
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
                  <Phone className="h-5 w-5 text-red-300" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Llámanos</p>
                  <a href="tel:3338081218" className="text-white hover:text-red-300 transition-colors">
                    33 3808 1218
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
                  <Mail className="h-5 w-5 text-red-300" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Email</p>
                  <a
                    href="mailto:fchortos@gmail.com"
                    className="text-white hover:text-red-300 transition-colors"
                  >
                    fchortos@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
                  <MapPin className="h-5 w-5 text-red-300" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Ubicación</p>
                  <Link href="/como-llegar" className="text-white hover:text-red-300 transition-colors">
                    Tonalá, Jalisco
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-blue-300 flex items-center justify-center">
          <p>© {new Date().getFullYear()} Terraza los Peques. Todos los derechos reservados.</p>
          <Heart className="h-4 w-4 text-red-400 mx-2 animate-pulse" />
        </div>
      </div>
    </footer>
  )
}


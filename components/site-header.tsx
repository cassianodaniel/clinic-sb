import { Button } from "@/components/ui/button"
import { Calendar, Phone } from 'lucide-react'
import Image from "next/image"

export default function SiteHeader() {
  return (
    <header className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-800 to-gray-900" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-row items-stretch px-4 py-6 text-white md:px-6 lg:px-8">
        {/* Content Side */}
        <div className="flex max-w-xl flex-col items-start justify-center gap-8 pr-4 md:w-1/2 lg:max-w-2xl">
          {/* Title and Buttons */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-light tracking-wide animate-fade-in md:text-4xl lg:text-5xl">
                Dra. Sandryenne Barbosa
              </h1>
              <p className="text-lg text-white/90 animate-fade-in md:text-xl" style={{ animationDelay: '0.2s' }}>
                Especialista em Harmonização Orofacial e Implantodontia
              </p>
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button 
                size="lg"
                className="group relative overflow-hidden bg-[#a97b41] px-8 text-white hover:bg-[#a97b41] animate-fade-in"
                style={{ animationDelay: '0.4s' }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Agende Sua Consulta
                </span>
                <div 
                  className="absolute inset-0 -z-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-100 transition-transform duration-500 group-hover:translate-x-[100%]"
                  aria-hidden="true"
                />
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-2 border-white bg-black/20 text-white backdrop-blur-sm hover:bg-white/20 animate-fade-in"
                style={{ animationDelay: '0.6s' }}
              >
                <Phone className="mr-2 h-5 w-5" />
                (083) 9 8812 0103
              </Button>
            </div>
          </div>
        </div>

        {/* Doctor Image */}
        <div className="relative hidden w-1/2 md:block">
          <div className="absolute inset-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Image
              src="/placeholder.svg"
              alt="Dra. Sandryenne Barbosa"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div 
            className="absolute -bottom-6 -right-6 -left-6 -top-6 -z-10 rounded-2xl border-2 border-[#a97b41]/30 bg-[#a97b41]/10"
            aria-hidden="true"
          />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce md:bottom-12">
          <div className="h-14 w-8 rounded-full border-2 border-white/30 p-2">
            <div className="h-3 w-full rounded-full bg-white/80" />
          </div>
        </div>
      </div>
    </header>
  )
}


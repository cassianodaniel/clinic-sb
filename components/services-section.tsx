'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, SmileIcon as Tooth } from 'lucide-react'
import { useState } from "react"

export default function ServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const services = [
    {
      title: "Restauração Dentária",
      description: "A Dra. Sandryenne oferece serviços de restauração dentária para recuperar seu sorriso.",
      icon: <Tooth className="h-6 w-6" />
    },
    {
      title: "Tratamento de Gengiva",
      description: "Cuide da saúde das suas gengivas com os tratamentos da Dra. Sandryenne.",
      icon: <Tooth className="h-6 w-6" />
    },
    {
      title: "Implantes Dentários",
      description: "Implantes dentários modernos para devolver a funcionalidade do seu sorriso.",
      icon: <Tooth className="h-6 w-6" />
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  return (
    <section className="w-full bg-[#f1e2cc] px-4 py-16 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-3xl font-medium tracking-wide text-[#a97b41] md:text-4xl animate-fade-in">
          ODONTOLOGIA INTEGRADA
        </h2>

        {/* Desktop View */}
        <div className="hidden grid-cols-1 gap-6 md:grid md:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="text-lg service-card flex flex-col p-6 shadow-lg animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#a97b41]">
                <span className="text-white">{service.icon}</span>
              </div>
              <h3 className="text-lg mb-3 text-2xl font-medium tracking-wide text-[#a97b41]">
                {service.title}
              </h3>
              <p className="text-lg mb-6 flex-grow text-base leading-relaxed text-gray-600">
                {service.description}
              </p>
              <Button
                variant="ghost"
                className="group w-fit text-[#a97b41] hover:bg-[#a97b41]/10"
              >
                <span className="text-lg font-medium">Saber mais...</span>
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="relative md:hidden">
          <Card className="flex flex-col p-6 shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#a97b41]">
              <span className="text-white">
                {services[currentSlide].icon}
              </span>
            </div>
            <h3 className="mb-3 text-2xl font-medium tracking-wide text-[#a97b41]">
              {services[currentSlide].title}
            </h3>
            <p className="mb-6 flex-grow text-base leading-relaxed text-gray-600">
              {services[currentSlide].description}
            </p>
            <Button
              variant="ghost"
              className="group w-fit text-[#a97b41] hover:bg-[#a97b41]/10"
            >
              <span className="font-medium">Saber mais...</span>
              <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Card>

          {/* Navigation Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full ${
                  currentSlide === index ? 'bg-[#a97b41]' : 'bg-[#a97b41]/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-[#a97b41]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-[#a97b41]" />
          </button>
        </div>
      </div>
    </section>
  )
}


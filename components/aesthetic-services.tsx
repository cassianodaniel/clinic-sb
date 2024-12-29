import { Button } from "@/components/ui/button"
import Image from "next/image"

const services = {
  column1: [
    "Bioestimuladores de Colágeno",
    "Botox",
    "Fios de PDO",
    "Glow Lips",
    "Gerenciamento e Tratamento de Melasma",
    "Jato de Plasma",
    "Lipo de Papada",
    "Laser",
    "Microagulhamento",
    "Peelings",
    "Preenchimentos Faciais",
    "Skinbooster",
    "Ultrassom Microfocado",
    "Depilação a Laser",
    "Rejuvenescimento Íntimo",
    "Glúteo Max"
  ],
  column2: [
    "Lipo Enzimática",
    "Hidrolipo",
    "Mesoterapia (Aplicação de Enzimas)",
    "Ozonioterapia",
    "Tratamento para Alopecia",
    "Tratamento para Microvasos",
    "Tratamento para Sudorese Excessiva",
    "Terapia Fotodinâmica",
    "Radiofrequência",
    "Detox Corporal",
    "Limpeza de Pele Profunda Premium",
    "Revitalização Facial",
    "Massoterapia",
    "Tratamento de Estrias",
    "Tratamento de Celulite"
  ]
}

export default function AestheticServices() {
  return (
    <section className="w-full bg-white px-4 py-16 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Image */}
          <div className="relative h-[400px] md:h-[600px]">
            <Image
              src="/placeholder.svg"
              alt="Serviços de Estética"
              fill
              className="rounded-lg object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="flex flex-col">
            <h2 className="mb-8 text-2xl font-medium text-[#a97b41] md:text-3xl lg:text-4xl animate-fade-in">
              ESTÉTICA FACIAL E CORPORAL AVANÇADA
            </h2>

            <div className="mb-8 grid gap-x-8 gap-y-2 md:grid-cols-2">
              {/* Column 1 */}
              <ul className="space-y-2">
                {services.column1.map((service, index) => (
                  <li 
                    key={index}
                    className="flex items-center text-sm text-gray-700 md:text-base animate-fade-in hover:text-[#a97b41] transition-colors duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-[#a97b41]" />
                    {service}
                  </li>
                ))}
              </ul>

              {/* Column 2 */}
              <ul className="space-y-2">
                {services.column2.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-gray-700 md:text-base animate-fade-in hover:text-[#a97b41] transition-colors duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-[#a97b41]" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <Button 
              className="w-full bg-[#a97b41] text-white hover:bg-[#a97b41]/90 md:w-auto"
            >
              Clique para saber mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


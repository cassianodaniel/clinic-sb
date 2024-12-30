'use client';

import { Button } from "@/components/ui/button";
import { sendMessageOnWhatsApp } from "@/lib/utils";
import DraSandryenne from "@/public/sandryenne-2.png";
import Image from "next/image";
import { WhatsAppSvg } from "./ui/wpp";
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
          <div className="relative">
            <Image
              src={DraSandryenne}
              alt="Dra. Sandryenne Barbosa"
              className="rounded-lg"
              priority
            />
          </div>

          {/* Content */}
          <div className="flex flex-col">
            <h2 className="mb-12 text-4xl font-medium leading-tight text-[#a97b41] md:text-4xl lg:text-5xl animate-fade-in ">
              Nossos Serviços
            </h2>

            <div className="mb-8 grid gap-x-8 gap-y-2 md:grid-cols-2">
              {/* Column 1 */}
              <ul className="space-y-2">
                {services.column1.map((service, index) => (
                  <li
                    key={index}
                    className="cursor-pointer flex items-center text-lg md:text-2xl text-gray-700 animate-fade-in hover:text-[#a97b41] transition-colors duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => sendMessageOnWhatsApp("Olá! Gostaria de saber mais sobre o serviço: " + service)}
                  >
                    <div className="cursor-pointer mr-2 h-1.5 w-1.5 rounded-full bg-[#a97b41]" />
                    {service}
                  </li>
                ))}
              </ul>

              {/* Column 2 */}
              <ul className="space-y-2">
                {services.column2.map((service, index) => (
                  <li
                    key={index}
                    className="cursor-pointer flex items-center text-lg md:text-2xl text-gray-700 animate-fade-in hover:text-[#a97b41] transition-colors duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => sendMessageOnWhatsApp("Olá! Gostaria de saber mais sobre o serviço: " + service)}
                  >
                    <div className="cursor-pointer mr-2 h-1.5 w-1.5 rounded-full bg-[#a97b41]" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <Button
              onClick={() => sendMessageOnWhatsApp()}
              className="w-full bg-[#a97b41] text-white hover:bg-[#a97b41]/90 md:w-auto text-2xl h-10"
            >
              <WhatsAppSvg />
              Clique para saber mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


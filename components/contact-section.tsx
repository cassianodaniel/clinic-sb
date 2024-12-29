import DraSandryenne from "@/public/sandryenne-3.png";
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Image from "next/image";
export default function ContactSection() {
  return (
    <section className="w-full bg-[#f1e2cc] px-4 py-16 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-2xl font-medium text-[#a97b41] md:text-3xl animate-fade-in">
          MAIS INFORMAÇÕES
        </h2>

        <div className="grid gap-8 rounded-lg bg-white p-6 shadow-lg md:grid-cols-2 md:gap-12">
          {/* Profile Image */}
          <div className="flex items-center justify-center">
            <div className="relative h-64 w-64 overflow-hidden rounded-full md:h-80 md:w-80">
              <Image
                src={DraSandryenne}
                alt="Dra. Sandryenne Barbosa"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Map */}
          <div className="h-[300px] overflow-hidden rounded-lg md:h-full">
            <iframe
              src="https://www.google.com/maps?q=Pra%C3%A7a+26+de+Novembro,+128,+Centro,+Sol%C3%A2nea,+Para%C3%ADba,+Brasil&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Clínica"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 rounded-lg bg-white p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <MapPin className="h-5 w-5 text-white" />, text: ["Praça 26 de Novembro, 128,", "Centro, Solânea, Paraíba, Brasil"] },
              { icon: <Clock className="h-5 w-5 text-white" />, text: ["Segunda à Sexta: 08:00 - 17:00", "Sábado: 09:30 - 13:30"] },
              { icon: <Mail className="h-5 w-5 text-white" />, text: ["sandryennebarbosa@gmail.com"], link: "mailto:sandryennebarbosa@gmail.com" },
              { icon: <Phone className="h-5 w-5 text-white" />, text: ["(83) 9 9812 0103"], link: "tel:+5583998120103" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 animate-fade-in hover:transform hover:scale-105 transition-all duration-300" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#a97b41]">
                  {item.icon}
                </div>
                <div>
                  {item.link ? (
                    <a href={item.link} className="text-sm text-gray-700 hover:text-[#a97b41]">
                      {item.text.join('\n')}
                    </a>
                  ) : (
                    <div className="text-sm text-gray-700">
                      {item.text.map((line, i) => <p key={i}>{line}</p>)}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Link from "next/link"
import { Card } from './ui/card'
export default function Footer() {
  return (
    <footer className="w-full bg-[#f1e2cc] py-12">
      <div className="container px-4 mx-auto">
        <Card className="p-6">
          <div className="display flex w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0679939889854!2d-38.0753766!3d-7.2397456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a44674c91953ed%3A0x6c3e43dc0453646d!2sPra%C3%A7a%20Vinte%20e%20Seis%20de%20Novembro%2C%20128%20-%20Centro%2C%20Sol%C3%A2nea%20-%20PB%2C%2058225-000!5e0!3m2!1sen!2sbr!4v1624304571834!5m2!1sen!2sbr"
              className="w-full h-[500px] border-0"
              loading="lazy"
              title="Localização no Google Maps"
            />
          </div>
          <br />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start space-x-3">
              <div>
                <div className="flex flex-row">
                  <MapPin className="mr-2 sh-5 w-5 text-[#a97b41] flex-shrink-0 mt-1" />
                  <p className="text-2xl font-medium text-[#a97b41]">Endereço</p>
                </div>
                <div>
                  <p className="text-sm md:text-xl text-[#7C5835]">
                    Praça 26 de Novembro, 128,<br />
                    Centro, Solânea, Paraíba, Brasil
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div>
                <div className="flex flex-row">
                  <Clock className="mr-2 h-5 w-5 text-[#a97b41] flex-shrink-0 mt-1" />
                  <p className="text-2xl font-medium text-[#a97b41]">Horário de Atendimento</p>
                </div>
                <div>
                  <p className="text-sm md:text-xl text-[#7C5835]">
                    Segunda à Sexta: 08:00 - 17:00<br />
                    Sábado: 09:30 - 13:30
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div>
                <div className="flex flex-row">
                  <Mail className="mr-2 h-5 w-5 text-[#a97b41] flex-shrink-0 mt-1" />
                  <p className="text-2xl font-medium text-[#a97b41]">E-mail</p>
                </div>
                <Link
                  href="mailto:sandryennebarbosa@gmail.com"
                  className="text-bold text-sm md:text-xl text-[#7C5835] hover:text-[#a97b41] transition-colors"
                >
                  sandryennebarbosa@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div>
                <div className="flex flex-row">
                  <Phone className="text-2xl mr-2 h-5 w-5 text-[#a97b41] flex-shrink-0 mt-1" />
                  <p className="text-2xl font-medium text-[#a97b41]">Telefone</p>
                </div>
                <Link
                  href="tel:+5583998120103"
                  className="text-sm md:text-xl text-[#7C5835] hover:text-[#a97b41] transition-colors"
                >
                  (83) 9 9812 0103
                </Link>
              </div>
            </div>
          </div>
        </Card>

      </div>
    </footer>
  )
}


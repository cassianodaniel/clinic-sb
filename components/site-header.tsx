import { Button } from "@/components/ui/button";
import FirstHeaderPic from "@/public/sandryenne-1.png";
import SBClinicLogo from "@/public/sb-clinic-logo.png";
import { Phone } from 'lucide-react';
import Image from "next/image";
export default function SiteHeader() {
  return (
    <header className="relative w-full bg-green px-4 py-6 md:px-6 lg:px-8 border-b-2 border-[#f1e2cc]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-12">
          {/* Logo */}
          <Image
          src={SBClinicLogo}
            alt="SB Clinic Logo"
            width={120}
            height={120}
            className="h-auto w-[120px]"
            priority
          />
          
          {/* Title and Buttons */}
          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
            <div className="space-y-1">
              <h1 className="font-serif text-2xl font-light text-[#a97b41] md:text-3xl lg:text-4xl animate-fade-in">
                Dra.
              </h1>
              <h2 className="font-serif text-3xl font-medium text-[#a97b41] md:text-4xl lg:text-5xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Sandryenne Barbosa
              </h2>
            </div>
            
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button 
              disabled={false}
                className="text-lg text-white btn-hover-effect bg-[#a97b41] px-6 hover:bg-[#a97b41]/90 animate-fade-in cursor-pointer"
                style={{ animationDelay: '0.4s' }}
              >
                Conheça os nossos serviços
              </Button>
              <Button 
                variant="outline" 
                className="text-lg btn-hover-effect border-[#a97b41] text-[#a97b41] hover:bg-[#a97b41]/10 animate-fade-in"
                style={{ animationDelay: '0.6s' }}
              >
                <Phone className="mr-2 h-4 w-4" />
                (083) 9 8812 0103
              </Button>
            </div>
          </div>
        </div>

        {/* Doctor Image */}
        <div className="relative h-[300px] w-full md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]">
          <Image
          src={FirstHeaderPic}
            alt="Professional Photo"
            fill
            className="object-contain"
            priority
          />
          <div 
            className="absolute bottom-0 right-0 h-4/5 w-4/5 rounded-tl-full bg-[#f1e2cc]/20 -z-10"
            aria-hidden="true"
          />
        </div>
      </div>
    </header>
  )
}


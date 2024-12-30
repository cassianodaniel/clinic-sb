'use client';

import { Button } from "@/components/ui/button";
import { callPhoneNumber, sendMessageOnWhatsApp } from "@/lib/utils";
import FirstHeaderPic from "@/public/sandryenne-1.png";
import SBClinicLogo from "@/public/sb-clinic-logo.png";
import { Phone } from 'lucide-react';
import Image from "next/image";
export default function SiteHeader() {
  return (
    <header className="relative w-full bg-green px-4 pt-6 md:px-6 lg:px-8 border-[#f1e2cc] shadow-md shadow-[#a97a4113]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 md:flex-row md:justify-between ">
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-12">
          {/* Logo */}
          <Image
            src={SBClinicLogo}
            alt="SB Clinic Logo"
            className="h-auto w-[120px]"
            priority
          />

          {/* Title and Buttons */}
          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
            <div className="space-y-1">
              <h1 className="font-serif font-light text-[#a97b41] text-4xl animate-fade-in">
                Dra.
              </h1>
              <h1 className="font-serif font-medium text-[#a97b41] text-5xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Sandryenne Barbosa
              </h1>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                disabled={false}
                className="text-2xl text-white btn-hover-effect bg-[#a97b41] px-8 hover:bg-[#a97b41]/90 animate-fade-in cursor-pointer h-10"
                style={{ animationDelay: '0.4s' }}
                onClick={() => sendMessageOnWhatsApp()}
              >
                Conheça os nossos serviços
              </Button>
              <Button
                variant="outline"
                className="text-2xl btn-hover-effect border-[#a97b41] text-[#a97b41] hover:bg-[#a97b41]/10 animate-fade-in h-10"
                style={{ animationDelay: '0.6s' }}
                onClick={() => callPhoneNumber()}
              >
                <Phone className="mr-2 h-4 w-4" />
                (083) 9 8812 0103
              </Button>
            </div>
          </div>
        </div>

        {/* Doctor Image */}
        <Image
          src={FirstHeaderPic}
          alt="Professional Photo"
          className="object-contain"
          priority
        />
        <div
          className="absolute bottom-0 right-0 h-4/5 w-[100vw] rounded-tl-full bg-[#f1ddc0]/20 -z-10"
          aria-hidden="true"
        />
      </div>
    </header>
  )
}


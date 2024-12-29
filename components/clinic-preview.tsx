import { Button } from "@/components/ui/button";

export default function ClinicPreview() {
  return (
    <section className="w-full bg-white px-4 py-24 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl font-medium leading-tight text-[#a97b41] md:text-5xl lg:text-6xl animate-fade-in">
                Clínica Especializada
              </h2>
              <ul className="text-lg leading-relaxed text-gray-600 md:text-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <li>Cuidados completos para um sorriso saudável e harmonioso, combinando técnicas de ponta com um atendimento personalizado e tratamentos estéticos inovadores para realçar sua beleza natural, com resultados visíveis e duradouros.</li>
                
              </ul>
            </div>

            <Button
              size="lg"
              className="group relative overflow-hidden bg-[#a97b41] px-8 text-white hover:bg-[#a97b41]/90 animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              <span className="text-lg relative z-10">
                Falar com a Dra. Sandryenne
              </span>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-[#a97b41]/0 via-white/20 to-[#a97b41]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </Button>
          </div>

          {/* Video Section */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            >
              <source
                src="/clinic.mp4"
                type="video/mp4"
              />
              Seu navegador não suporta vídeos em HTML5.
            </video>
        </div>
      </div>
    </section>
  )
}


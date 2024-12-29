import { Button } from "@/components/ui/button"

export default function ClinicPreview() {
  return (
    <section className="w-full bg-white px-4 py-24 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className=" text-4xl font-medium leading-tight text-[#a97b41] md:text-5xl lg:text-6xl animate-fade-in">
                Clínica Especializada em Harmonização Orofacial
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 md:text-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Somos uma Clínica focada em Estética Odontológica Digital e especializada em Lentes de Contato Dental, Reabilitação Oral, Implantes e procedimentos de Harmonização Facial.
              </p>
            </div>
            
            <Button 
              size="lg"
              className="group relative overflow-hidden bg-[#a97b41] px-8 text-white hover:bg-[#a97b41]/90 animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              <span className="relative z-10">
                Falar com a Dra. Sandryenne
              </span>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-[#a97b41]/0 via-white/20 to-[#a97b41]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </Button>
          </div>

          {/* Video Section */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            >
              <source src="/placeholder.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </div>
        </div>
      </div>
    </section>
  )
}


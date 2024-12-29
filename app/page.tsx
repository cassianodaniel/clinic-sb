import SiteHeader from "@/components/site-header"
import ClinicPreview from "@/components/clinic-preview"
import ServicesSection from "@/components/services-section"
import AestheticServices from "@/components/aesthetic-services"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <ClinicPreview />
      <ServicesSection />
      <AestheticServices />
      <ContactSection />
    </main>
  )
}


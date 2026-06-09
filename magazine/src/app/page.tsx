import Sidebar from '@/components/Sidebar'
import HeroSection from '@/components/HeroSection'
import StorySection from '@/components/StorySection'
import SkillsSection from '@/components/SkillsSection'
import ExperienceSection from '@/components/ExperienceSection'
import WorkSection from '@/components/WorkSection'
import CertificationsSection from '@/components/CertificationsSection'
import ServicesSection from '@/components/ServicesSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="min-h-screen lg:pl-72">
        <div className="mx-auto max-w-5xl px-6 py-8 md:px-10 md:py-12">
          <HeroSection />
          <StorySection />
          <SkillsSection />
          <ExperienceSection />
          <WorkSection />
          <CertificationsSection />
          <ServicesSection />
          <ContactSection />

          <footer className="border-t border-line py-10 text-center text-xs text-ink-faint">
            <p>Copyright © {new Date().getFullYear()} Humphrey Otieno. All rights reserved.</p>
          </footer>
        </div>
      </main>
    </>
  )
}

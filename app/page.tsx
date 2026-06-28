import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Portfolio } from '@/components/portfolio'
import { Skills } from '@/components/skills'
import { Certificates } from '@/components/certificates'
import { Timeline } from '@/components/timeline'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Skills />
        <Certificates />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

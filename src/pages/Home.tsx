import { FloatingActions } from '@/components/site/FloatingActions'
import { Footer } from '@/components/site/Footer'
import { Header } from '@/components/site/Header'
import { Appointment } from '@/sections/Appointment'
import { Contact } from '@/sections/Contact'
import { Gallery } from '@/sections/Gallery'
import { Hero } from '@/sections/Hero'
import { Reviews } from '@/sections/Reviews'
import { Services } from '@/sections/Services'
import { WhyUs } from '@/sections/WhyUs'

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#fffdf9] text-[#2e2925] antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Reviews />
        <Gallery />
        <Appointment />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}

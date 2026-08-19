import { CalendarCheck, Clock3, MessageCircle, Phone } from 'lucide-react'
import { Reveal } from '@/components/site/Reveal'
import { Button } from '@/components/ui/button'
import { business, whatsappUrl } from '@/data/site'

export function Appointment() {
  return (
    <section id="randevu" className="scroll-mt-24 bg-[#f4ede5] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#332d28] text-white shadow-[0_30px_90px_rgba(72,55,39,0.22)]">
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-22">
            <img
              src="/images/guzellik-detay.webp"
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#332d28] via-[#332d28]/58 to-[#332d28]/12" />
          </div>

          <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-16">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#d9bc91]">
                <CalendarCheck className="size-4" />
                Randevu
              </p>
              <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                Kendinize Zaman Ayırın
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[#ded4ca]">
                Size uygun hizmet ve randevu zamanı için bizimle iletişime geçin.
              </p>
            </div>

            <div className="flex flex-col justify-end gap-4">
              <Button
                asChild
                className="h-14 rounded-full bg-[#2f8f68] px-7 text-base text-white shadow-[0_18px_45px_rgba(47,143,104,0.25)] hover:bg-[#287b5a]"
              >
                <a href={whatsappUrl()} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-5" />
                  WhatsApp’tan Randevu Al
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-14 rounded-full border-white/20 bg-white/8 px-7 text-base text-white hover:bg-white/14 hover:text-white"
              >
                <a href={business.phoneHref}>
                  <Phone className="size-5" />
                  Bizi Ara
                </a>
              </Button>
              <p className="inline-flex items-center gap-2 text-sm text-[#c8bcb1]">
                <Clock3 className="size-4 text-[#d9bc91]" />
                {business.hours}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

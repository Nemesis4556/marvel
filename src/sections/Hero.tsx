import { ArrowRight, CalendarCheck, Clock3, MapPin, Star } from 'lucide-react'
import { Reveal } from '@/components/site/Reveal'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { business, whatsappUrl } from '@/data/site'

export function Hero() {
  return (
    <section id="anasayfa" className="relative overflow-hidden bg-[#fbf7f1] pt-28 sm:pt-32">
      <div className="absolute left-[-12rem] top-16 size-[28rem] rounded-full bg-[#ead8c6]/55 blur-3xl" />
      <div className="absolute right-[-10rem] top-40 size-[24rem] rounded-full bg-[#e8c9c2]/35 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9bc91]/70 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:px-8 lg:pb-20">
        <Reveal>
          <div className="max-w-2xl">
            <Badge className="mb-6 border-[#e6d5c3] bg-white/72 px-4 py-2 text-[#7b6046] shadow-sm backdrop-blur" variant="outline">
              <Star className="size-3.5 fill-[#c89b5f] text-[#c89b5f]" />
              {business.rating} · {business.reviewCount}
            </Badge>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-[#a9855d]">
              {business.fullName}
            </p>
            <h1 className="font-display text-5xl leading-[0.98] tracking-[-0.045em] text-[#2e2925] sm:text-6xl lg:text-7xl">
              Güzelliğinize Özen Gösteren Dokunuşlar
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#70665e] sm:text-xl sm:leading-9">
              Kendinizi iyi hissetmeniz için profesyonel güzellik ve bakım uygulamalarını modern bir deneyimle buluşturuyoruz.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-14 rounded-full bg-[#332d28] px-7 text-base text-white shadow-[0_18px_40px_rgba(51,45,40,0.18)] hover:bg-[#463c34]"
              >
                <a href={whatsappUrl()} target="_blank" rel="noreferrer">
                  <CalendarCheck className="size-5" />
                  Randevu Al
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-14 rounded-full border-[#d9c6b3] bg-white/72 px-7 text-base text-[#3c352f] backdrop-blur hover:bg-[#f4eadf]"
              >
                <a href="#hizmetler">
                  Hizmetlerimizi Keşfet
                  <ArrowRight className="size-5" />
                </a>
              </Button>
            </div>

            <div className="mt-10 grid gap-3 text-sm text-[#675c54] sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-2xl border border-[#eadfd2] bg-white/58 p-3 backdrop-blur">
                <Clock3 className="size-5 shrink-0 text-[#a9855d]" />
                <span>Her gün 09:30 – 19:30</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-[#eadfd2] bg-white/58 p-3 backdrop-blur">
                <MapPin className="size-5 shrink-0 text-[#a9855d]" />
                <span>Akhisar / Manisa</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-[#eadfd2] bg-white/58 p-3 backdrop-blur">
                <CalendarCheck className="size-5 shrink-0 text-[#a9855d]" />
                <span>Randevulu çalışma sistemi</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={140} className="relative">
          <div className="absolute -left-4 top-8 h-full w-full rounded-[2.5rem] border border-[#dfc7aa]" />
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#eadfd2] shadow-[0_30px_90px_rgba(72,55,39,0.20)]">
            <img
              src="/images/hero.webp"
              alt="Premium güzellik stüdyosunda cilt bakımı demo görseli"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2e2925]/26 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 left-4 rounded-[1.75rem] border border-white/70 bg-white/88 p-4 shadow-[0_18px_55px_rgba(62,48,36,0.18)] backdrop-blur-xl sm:left-8">
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-full bg-[#f6eadb] text-[#a9855d]">
                <Star className="size-5 fill-current" />
              </span>
              <div>
                <p className="text-2xl font-semibold tracking-[-0.03em] text-[#2e2925]">4,8 / 5</p>
                <p className="text-xs font-medium text-[#766c64]">257 Google değerlendirmesi</p>
              </div>
            </div>
          </div>

          <div className="absolute right-4 top-4 hidden rounded-full border border-white/60 bg-white/78 px-4 py-2 text-xs font-semibold text-[#5c5047] shadow-sm backdrop-blur sm:block">
            Akhisar’da premium bakım deneyimi
          </div>
        </Reveal>
      </div>
    </section>
  )
}

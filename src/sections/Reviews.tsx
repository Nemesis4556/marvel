import { ArrowUpRight, Star } from 'lucide-react'
import { Reveal } from '@/components/site/Reveal'
import { Button } from '@/components/ui/button'
import { business, mapsUrl } from '@/data/site'

export function Reviews() {
  return (
    <section className="relative overflow-hidden bg-[#332d28] py-20 text-white sm:py-28">
      <div className="absolute left-[-10rem] top-[-10rem] size-[24rem] rounded-full bg-[#a9855d]/16 blur-3xl" />
      <div className="absolute bottom-[-12rem] right-[-8rem] size-[26rem] rounded-full bg-[#e8c9c2]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d9bc91]">
              Google Değerlendirmeleri
            </p>
            <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">
              Danışanlarımız Ne Diyor?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#d8cec5] sm:text-lg">
              Google’daki değerlendirmelerimizi inceleyerek ziyaretçilerimizin deneyimleri hakkında fikir edinebilirsiniz.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.18)] backdrop-blur sm:p-10">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-7xl leading-none tracking-[-0.06em] sm:text-8xl">4,8</p>
                <div className="relative mt-4 flex w-max items-center gap-1.5" aria-label="5 üzerinden 4,8 puan">
                  <div className="flex gap-1.5 text-white/20" aria-hidden="true">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="size-5 fill-current" />
                    ))}
                  </div>
                  <div className="absolute left-0 top-0 flex w-[96%] gap-1.5 overflow-hidden text-[#d9bc91]" aria-hidden="true">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="size-5 shrink-0 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="mt-3 text-sm font-medium text-[#d8cec5]">
                  {business.reviewCount}
                </p>
              </div>

              <div className="max-w-sm">
                <p className="text-sm leading-7 text-[#d8cec5]">
                  Gerçek değerlendirme metinlerini doğrudan Google işletme profili üzerinde görüntüleyin.
                </p>
                <Button
                  asChild
                  className="mt-6 h-13 rounded-full bg-[#f4eadf] px-6 text-[#332d28] hover:bg-white"
                >
                  <a href={mapsUrl} target="_blank" rel="noreferrer">
                    Google’daki değerlendirmelerimizi inceleyin
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

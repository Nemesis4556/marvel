import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/site/Reveal'
import { SectionHeading } from '@/components/site/SectionHeading'
import { Button } from '@/components/ui/button'
import { services, whatsappUrl } from '@/data/site'

export function Services() {
  return (
    <section id="hizmetler" className="scroll-mt-24 bg-[#fffdf9] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Hizmetler"
              title="Size özel bir bakım deneyimi"
              description="Cilt bakımından kaş ve kirpik uygulamalarına kadar her hizmet, ihtiyacınızı anlamaya ve konforlu bir deneyim sunmaya odaklanır."
            />
            <p className="max-w-sm rounded-3xl border border-[#eadfd2] bg-[#fbf7f1] p-5 text-sm leading-7 text-[#766c64]">
              Fiyat bilgisi ve uygunluk için iletişime geçin. Size en uygun hizmeti birlikte planlayalım.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const message = `Merhaba, ${service.title} hizmeti hakkında detaylı bilgi ve randevu uygunluğu almak istiyorum.`
            return (
              <Reveal key={service.title} delay={index * 60}>
                <article className="group h-full overflow-hidden rounded-[2rem] border border-[#eadfd2] bg-white shadow-[0_18px_55px_rgba(72,55,39,0.07)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(72,55,39,0.13)]">
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.alt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2e2925]/24 via-transparent to-transparent opacity-80" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/82 px-3 py-1.5 text-xs font-semibold text-[#7b6046] backdrop-blur">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="flex min-h-[15rem] flex-col p-6">
                    <h3 className="font-display text-2xl tracking-[-0.02em] text-[#332d28]">
                      {service.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-[#766c64]">
                      {service.description}
                    </p>
                    <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#f0e5d9] pt-5">
                      <span className="text-xs font-medium leading-5 text-[#9b8c80]">
                        Fiyat ve uygunluk için iletişime geçin
                      </span>
                      <Button
                        asChild
                        variant="outline"
                        className="shrink-0 rounded-full border-[#dcc9b5] text-[#4a4038] hover:bg-[#f6eee5]"
                      >
                        <a href={whatsappUrl(message)} target="_blank" rel="noreferrer" aria-label={`${service.title} için detaylı bilgi al`}>
                          <MessageCircle className="size-4" />
                          Detaylı Bilgi
                          <ArrowUpRight className="size-3.5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

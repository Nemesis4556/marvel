import { Clock3, Instagram, MapPin, Navigation, Phone } from 'lucide-react'
import { Reveal } from '@/components/site/Reveal'
import { SectionHeading } from '@/components/site/SectionHeading'
import { Button } from '@/components/ui/button'
import { business, mapsEmbedUrl, mapsUrl } from '@/data/site'

const contactItems = [
  {
    title: 'Adres',
    value: business.address,
    icon: MapPin,
  },
  {
    title: 'Telefon',
    value: business.phoneDisplay,
    href: business.phoneHref,
    icon: Phone,
  },
  {
    title: 'Çalışma Saatleri',
    value: business.hours,
    icon: Clock3,
  },
  {
    title: 'Instagram',
    value: business.instagram,
    href: business.instagramUrl,
    icon: Instagram,
  },
]

export function Contact() {
  return (
    <section id="iletisim" className="scroll-mt-24 bg-[#fffdf9] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="İletişim"
            title="Bize kolayca ulaşın"
            description="Randevu, hizmet bilgisi ve yol tarifi için Marvel Güzellik Salonu Akhisar ile iletişime geçin."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {contactItems.map((item, index) => {
              const content = (
                <>
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#f3e5d5] text-[#a9855d]">
                    <item.icon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#a9855d]">
                      {item.title}
                    </span>
                    <span className="mt-2 block text-base font-semibold leading-7 text-[#332d28]">
                      {item.value}
                    </span>
                  </span>
                </>
              )

              return (
                <Reveal key={item.title} delay={index * 60}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="flex h-full items-start gap-4 rounded-[1.75rem] border border-[#eadfd2] bg-[#fbf7f1] p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(72,55,39,0.10)]"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex h-full items-start gap-4 rounded-[1.75rem] border border-[#eadfd2] bg-[#fbf7f1] p-6">
                      {content}
                    </div>
                  )}
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={120}>
            <div className="h-full overflow-hidden rounded-[2rem] border border-[#eadfd2] bg-[#fbf7f1] shadow-[0_22px_65px_rgba(72,55,39,0.10)]">
              <iframe
                title="Marvel Güzellik Salonu Akhisar konum haritası"
                src={mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[24rem] w-full border-0 lg:h-[calc(100%-6rem)] lg:min-h-[27rem]"
              />
              <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-6 text-[#766c64]">
                  Hürriyet Mahallesi, Akhisar / Manisa
                </p>
                <Button asChild className="rounded-full bg-[#332d28] text-white hover:bg-[#463c34]">
                  <a href={mapsUrl} target="_blank" rel="noreferrer">
                    <Navigation className="size-4" />
                    Yol Tarifi Al
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

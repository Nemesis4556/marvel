import { CalendarCheck, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/site/Reveal'
import { SectionHeading } from '@/components/site/SectionHeading'
import { Button } from '@/components/ui/button'
import { whatsappUrl } from '@/data/site'

const advantages = [
  {
    title: 'Profesyonel Hizmet',
    description: 'Her uygulamada özenli, planlı ve güven veren bir hizmet yaklaşımı.',
    icon: Sparkles,
  },
  {
    title: 'Kişiye Özel Uygulamalar',
    description: 'İhtiyacınızı dinleyen ve size uygun bakım deneyimini planlayan yaklaşım.',
    icon: HeartHandshake,
  },
  {
    title: 'Hijyenik ve Konforlu Ortam',
    description: 'Kendinizi rahat hissedeceğiniz, temiz ve sakin bir stüdyo atmosferi.',
    icon: ShieldCheck,
  },
  {
    title: 'Randevulu Çalışma Sistemi',
    description: 'Beklemeden, size ayrılan zaman diliminde daha konforlu bir deneyim.',
    icon: CalendarCheck,
  },
]

export function WhyUs() {
  return (
    <section id="hakkimizda" className="scroll-mt-24 overflow-hidden bg-[#f4ede5] py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <Reveal className="relative order-2 lg:order-1">
          <div className="absolute -right-6 -top-6 h-full w-full rounded-[2.5rem] bg-[#dfc7aa]/40" />
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_28px_80px_rgba(72,55,39,0.16)]">
            <img
              src="/images/studio.webp"
              alt="Marvel Güzellik Salonu Akhisar için tasarlanan premium salon atmosferi"
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/65 bg-white/84 p-5 shadow-lg backdrop-blur-xl">
            <p className="text-sm font-semibold text-[#332d28]">Modern, sakin ve konforlu bir deneyim</p>
            <p className="mt-1 text-xs leading-6 text-[#766c64]">
              Güzellik ve bakım uygulamaları için özenle tasarlanmış premium atmosfer.
            </p>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <SectionHeading
              eyebrow="Neden Biz?"
              title="Güzelliğiniz İçin Profesyonel Bir Dokunuş"
              description="Marvel Güzellik Salonu Akhisar, kendinizi iyi hissetmenizi sağlayan uygulamaları özenli planlama ve konforlu bir atmosferle buluşturur."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {advantages.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <article className="h-full rounded-[1.75rem] border border-[#eadfd2] bg-white/72 p-6 shadow-[0_16px_45px_rgba(72,55,39,0.06)] backdrop-blur">
                  <span className="grid size-12 place-items-center rounded-full bg-[#f3e5d5] text-[#a9855d]">
                    <item.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-[#332d28]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#766c64]">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={250}>
            <Button
              asChild
              className="mt-8 h-12 rounded-full bg-[#332d28] px-6 text-white hover:bg-[#463c34]"
            >
              <a href={whatsappUrl()} target="_blank" rel="noreferrer">
                Bize Ulaşın
              </a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

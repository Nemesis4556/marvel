import { Reveal } from '@/components/site/Reveal'
import { SectionHeading } from '@/components/site/SectionHeading'
import { galleryItems } from '@/data/site'
import { cn } from '@/lib/utils'

const cardClasses = [
  'sm:col-span-2 sm:row-span-2',
  '',
  '',
  '',
  '',
  'sm:col-span-2',
]

export function Gallery() {
  return (
    <section id="galeri" className="scroll-mt-24 bg-[#fffdf9] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Galeri"
            title="Sakin, modern ve özenli bir atmosfer"
            description="Salon, uygulama alanları ve bakım detayları için sektöre uygun demo görsellerle hazırlanmış premium galeri."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid auto-rows-[15rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 60} className={cn(cardClasses[index])}>
              <figure className="group relative h-full overflow-hidden rounded-[1.75rem] bg-[#eadfd2] shadow-[0_16px_45px_rgba(72,55,39,0.08)]">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2e2925]/58 via-[#2e2925]/5 to-transparent opacity-80 transition group-hover:opacity-95" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="rounded-full border border-white/20 bg-white/16 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                    {item.title}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

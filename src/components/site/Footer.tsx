import { Instagram, MapPin, Phone } from 'lucide-react'
import { BrandMark } from '@/components/site/BrandMark'
import { business, navItems } from '@/data/site'

export function Footer() {
  return (
    <footer className="bg-[#29231f] pb-28 text-white md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div>
          <BrandMark className="[&_span:first-child]:border-[#5b4f45] [&_span:first-child]:bg-[#3a332d] [&_span:first-child]:text-[#d9bc91] [&_span_span:first-child]:text-white [&_span_span:last-child]:text-[#d9bc91]" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-[#cbbfb4]">
            {business.fullName}. Akhisar’da güzellik ve bakım uygulamalarını modern, konforlu ve kişiye özel bir deneyimle sunar.
          </p>
        </div>

        <nav aria-label="Footer hızlı bağlantılar">
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d9bc91]">
            Hızlı Bağlantılar
          </h2>
          <ul className="mt-5 space-y-3">
            {navItems.slice(0, 4).map((item) => (
              <li key={item.href}>
                <a className="text-sm text-[#eee5dc] transition hover:text-white" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d9bc91]">
            İletişim
          </h2>
          <ul className="mt-5 space-y-4 text-sm text-[#eee5dc]">
            <li>
              <a href={business.phoneHref} className="flex items-center gap-3 transition hover:text-white">
                <Phone className="size-4 text-[#d9bc91]" />
                {business.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[#d9bc91]" />
              Akhisar / Manisa
            </li>
            <li>
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Instagram className="size-4 text-[#d9bc91]" />
                {business.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-[#aa9d92] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Marvel Güzellik Salonu Akhisar. Tüm hakları saklıdır.</p>
          <p>Güzellik & Bakım için premium web sitesi demosu</p>
        </div>
      </div>
    </footer>
  )
}

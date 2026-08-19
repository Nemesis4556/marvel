import { useEffect, useState } from 'react'
import { CalendarCheck, Menu, Phone } from 'lucide-react'
import { BrandMark } from '@/components/site/BrandMark'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { business, navItems, whatsappUrl } from '@/data/site'
import { cn } from '@/lib/utils'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b border-[#eadfd2]/80 bg-[#fffdf9]/92 shadow-[0_12px_40px_rgba(70,52,37,0.08)] backdrop-blur-xl'
          : 'bg-gradient-to-b from-[#fffdf9]/94 to-transparent',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#anasayfa" aria-label="Ana sayfaya git" className="rounded-full">
          <BrandMark />
        </a>

        <nav aria-label="Ana menü" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#665c55] transition hover:text-[#2e2925]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            variant="ghost"
            className="rounded-full text-[#5e554e] hover:bg-[#f2e9de]"
          >
            <a href={business.phoneHref}>
              <Phone className="size-4" />
              {business.phoneDisplay}
            </a>
          </Button>
          <Button
            asChild
            className="h-11 rounded-full bg-[#332d28] px-5 text-white shadow-[0_12px_30px_rgba(51,45,40,0.18)] hover:bg-[#463c34]"
          >
            <a href={whatsappUrl()} target="_blank" rel="noreferrer">
              <CalendarCheck className="size-4" />
              Randevu Al
            </a>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <Button
            variant="outline"
            size="icon"
            className="size-11 rounded-full border-[#e2d3c2] bg-white/80 text-[#332d28] lg:hidden"
            aria-label="Menüyü aç"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="size-5" />
          </Button>
          <SheetContent className="w-full max-w-sm border-[#eadfd2] bg-[#fffdf9] p-0">
            <SheetHeader className="border-b border-[#efe4d8] p-6 text-left">
              <SheetTitle>
                <BrandMark />
              </SheetTitle>
              <SheetDescription className="pt-2 text-[#766c64]">
                Size uygun hizmet ve randevu zamanı için bize ulaşın.
              </SheetDescription>
            </SheetHeader>
            <nav aria-label="Mobil menü" className="flex flex-col p-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-4 text-lg font-medium text-[#3b352f] transition hover:bg-[#f6eee5]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto space-y-3 border-t border-[#efe4d8] p-5">
              <Button
                asChild
                className="h-12 w-full rounded-full bg-[#332d28] text-white hover:bg-[#463c34]"
              >
                <a href={whatsappUrl()} target="_blank" rel="noreferrer">
                  <CalendarCheck className="size-4" />
                  Randevu Al
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 w-full rounded-full border-[#d8c7b5] text-[#332d28]"
              >
                <a href={business.phoneHref}>
                  <Phone className="size-4" />
                  Bizi Ara
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

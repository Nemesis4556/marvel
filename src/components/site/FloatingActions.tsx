import { MessageCircle, Phone } from 'lucide-react'
import { business, whatsappUrl } from '@/data/site'

export function FloatingActions() {
  return (
    <>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp üzerinden randevu al"
        className="fixed bottom-6 right-6 z-40 hidden size-14 place-items-center rounded-full bg-[#2f8f68] text-white shadow-[0_18px_45px_rgba(47,143,104,0.32)] transition hover:-translate-y-1 hover:bg-[#277b59] md:grid"
      >
        <MessageCircle className="size-6" />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#e7dccd] bg-[#fffdf9]/96 p-3 shadow-[0_-12px_40px_rgba(57,45,34,0.10)] backdrop-blur-xl md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#2f8f68] px-4 text-sm font-semibold text-white"
          >
            <MessageCircle className="size-4" />
            WhatsApp
          </a>
          <a
            href={business.phoneHref}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#332d28] px-4 text-sm font-semibold text-white"
          >
            <Phone className="size-4" />
            Randevu Al
          </a>
        </div>
      </div>
    </>
  )
}

export const business = {
  name: 'Marvel Güzellik Salonu Akhisar',
  fullName: 'Marvel Güzellik Salonu Akhisar | Güzellik & Bakım',
  category: 'Güzellik & Bakım',
  address: ' Hürriyet, 224. Sk. No:61/a, 45240 Akhisar/Manisa',
  phoneDisplay: '+905528174545',
  phoneHref: 'tel:+905528174545',
  whatsappNumber: '+905528174545',
  hours: 'Her gün 09:30 – 19:30',
  instagram: '@marvelguzelliksalonuakhisar',
  instagramUrl: 'https://www.instagram.com/hazaldemirkanbeautystudio/',
  rating: '4,8 / 5',
  reviewCount: '257 Google değerlendirmesi',
}

const defaultWhatsappMessage =
  'Merhaba, web siteniz üzerinden randevu almak istiyorum. Hizmetleriniz hakkında bilgi alabilir miyim?'

export function whatsappUrl(message = defaultWhatsappMessage) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`
}

const mapQuery = encodeURIComponent(
  `${business.name} ${business.address}`,
)

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`
export const mapsEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`

export const navItems = [
  { label: 'Ana Sayfa', href: '#anasayfa' },
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'İletişim', href: '#iletisim' },
]

export type Service = {
  title: string
  description: string
  image: string
  alt: string
}

export const services: Service[] = [
  {
    title: 'Cilt Bakımı',
    description:
      'Cilt tipinize ve ihtiyacınıza göre planlanan profesyonel bakım deneyimiyle yenilenmiş bir his.',
    image: '/images/cilt-bakimi.webp',
    alt: 'Modern güzellik stüdyosunda profesyonel cilt bakımı uygulaması',
  },
  {
    title: 'Lazer Epilasyon',
    description:
      'Kişiye özel planlama ve konfor odaklı uygulama anlayışıyla modern epilasyon deneyimi.',
    image: '/images/lazer-epilasyon.webp',
    alt: 'Hijyenik klinik ortamında lazer epilasyon uygulaması',
  },
  {
    title: 'Bölgesel İncelme',
    description:
      'Bedeninize özel yaklaşımla planlanan, konforlu bölgesel bakım uygulamaları.',
    image: '/images/bolgesel-incelme.webp',
    alt: 'Ferah bir bakım odasında profesyonel vücut bakımı',
  },
  {
    title: 'Kaş & Kirpik Uygulamaları',
    description:
      'Yüz hatlarınıza uygun, doğal görünümü öne çıkaran özenli kaş ve kirpik uygulamaları.',
    image: '/images/kas-kirpik.webp',
    alt: 'Profesyonel kaş ve kirpik bakım uygulaması',
  },
  {
    title: 'Manikür & Pedikür',
    description:
      'El ve ayak bakımını hijyenik, konforlu ve estetik bir deneyime dönüştüren uygulamalar.',
    image: '/images/manikur-pedikur.webp',
    alt: 'Nude tonlarda profesyonel manikür bakımı',
  },
  {
    title: 'Güzellik ve Bakım Uygulamaları',
    description:
      'Günlük bakımdan özel günlere, ihtiyacınıza uygun bütünsel güzellik deneyimi.',
    image: '/images/guzellik-detay.webp',
    alt: 'Premium bakım ürünleri ve spa detayları',
  },
]

export const galleryItems = [
  {
    title: 'Salon Atmosferi',
    image: '/images/studio.webp',
    alt: 'Krem ve bej tonlarında premium güzellik stüdyosu iç mekanı',
  },
  {
    title: 'Cilt Bakımı',
    image: '/images/hero.webp',
    alt: 'Ferah bir bakım odasında cilt bakımı uygulaması',
  },
  {
    title: 'Uygulama Alanı',
    image: '/images/lazer-epilasyon.webp',
    alt: 'Modern ve hijyenik güzellik uygulama alanı',
  },
  {
    title: 'Kaş & Kirpik',
    image: '/images/kas-kirpik.webp',
    alt: 'Özenli kaş ve kirpik bakım detayı',
  },
  {
    title: 'El Bakımı',
    image: '/images/manikur-pedikur.webp',
    alt: 'Doğal görünümlü nude manikür detayı',
  },
  {
    title: 'Bakım Detayları',
    image: '/images/guzellik-detay.webp',
    alt: 'Bej tonlarında bakım ürünleri ve havlu detayı',
  },
]

import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#a9855d]">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.03em] text-[#2e2925] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-[#766c64] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

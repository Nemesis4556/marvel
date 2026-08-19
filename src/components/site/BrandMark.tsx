import { Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

export function BrandMark({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className="grid size-11 shrink-0 place-items-center rounded-full border border-[#dfc7aa] bg-[#f8f1e8] text-[#a9855d] shadow-sm">
        <Sparkles className="size-5" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block truncate font-display text-lg font-medium tracking-[-0.02em] text-[#2e2925]">
          Marvel
        </span>
        {!compact ? (
          <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-[#a9855d]">
            Güzellik Salonu
          </span>
        ) : null}
      </span>
    </div>
  )
}

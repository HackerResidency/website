import { cn } from '@/lib/utils'

export function Card({
  children,
  className,
  innerClassName,
  hero = false
}: {
  children: React.ReactNode
  className?: string
  innerClassName?: string
  hero?: boolean
}) {
  return (
    <div
      className={cn(
        'rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 h-full',
        className
      )}
    >
      <div
        className={cn(
          'grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5',
          hero ? '' : 'h-full'
        )}
      >
        <div
          className={cn(
            'rounded-3xl bg-gray-800 shadow-2xl ring-1 ring-black/5 color-card-foreground',
            hero ? '' : 'h-full',
            innerClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

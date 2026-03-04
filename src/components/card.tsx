import { cn } from '@/lib/utils'

export function Card({
  children,
  className,
  innerClassName
}: {
  children: React.ReactNode
  className?: string
  innerClassName?: string
}) {
  return (
    <div
      className={cn(
        'rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 h-full',
        className
      )}
    >
      <div className='grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5 h-full'>
        <div
          className={cn(
            // bg-card
            'rounded-3xl bg-gray-800 shadow-2xl ring-1 ring-black/5 color-card-foreground h-full',
            innerClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

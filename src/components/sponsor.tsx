import Link from 'next/link'

import { cn } from '@/lib/utils'

export function Sponsor({
  href,
  src,
  srcDark,
  alt,
  className
}: {
  href: string
  src: string
  srcDark: string
  alt: string
  className?: string
}) {
  return (
    <Link
      href={href}
      target='_blank'
      className='flex flex-col items-center justify-center'
    >
      <img
        src={src}
        alt={alt}
        className={cn('dark:hidden max-w-full max-h-16', className)}
      />
      <img
        src={srcDark}
        alt={alt}
        className={cn('hidden dark:block max-w-full max-h-16', className)}
      />
    </Link>
  )
}

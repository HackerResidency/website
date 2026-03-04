import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/card'
import { GitHubIcon } from '@/icons/github'
import { LinkedInIcon } from '@/icons/linkedin'
import { TwitterIcon } from '@/icons/twitter'
import { cn } from '@/lib/utils'

export interface Person {
  name: string
  image: StaticImageData
  url: string
  twitter: string
  github?: string
  linkedin?: string
  description: React.ReactNode
  location?: string
}

export function PeopleGrid({
  title,
  people,
  className,
  children
}: {
  title: string
  people: Person[]
  className?: string
  children?: React.ReactNode
}) {
  return (
    <section className={cn('relative z-10 flex flex-col gap-16', className)}>
      <h2 className='text-center text-balance text-4xl font-semibold leading-normal max-w-3xl'>
        {title}
      </h2>

      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4 align-items-stretch'>
        {people.map((person) => (
          <Card
            key={person.name}
            className='group justify-self-center w-full grid grid-cols-1 max-w-xs'
          >
            <div className='flex flex-col gap-4 color-card-foreground items-center p-6 h-full'>
              <Link href={person.url} target='_blank' rel='noopener noreferrer'>
                <Image
                  src={person.image}
                  alt={person.name}
                  width={person.image.width}
                  height={person.image.height}
                  blurDataURL={person.image.blurDataURL}
                  placeholder='blur'
                  className='rounded-full w-24 h-24 border-2 border-muted-foreground hover:border-foreground shadow-sm'
                />
              </Link>

              <h3 className='text-center text-balance text-xl font-semibold leading-normal max-w-3xl'>
                {person.name}
              </h3>

              <div className='flex flex-row gap-4 items-center'>
                <Link
                  href={person.twitter}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-muted-foreground hover:text-card-foreground transition-colors'
                >
                  <TwitterIcon className='w-4 h-4' />
                </Link>

                {person.github && (
                  <Link
                    href={person.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-muted-foreground hover:text-card-foreground transition-colors'
                  >
                    <GitHubIcon className='w-4 h-4' />
                  </Link>
                )}

                {person.linkedin && (
                  <Link
                    href={person.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-muted-foreground hover:text-card-foreground transition-colors'
                  >
                    <LinkedInIcon className='w-4 h-4' />
                  </Link>
                )}
              </div>

              <p className='flex-1 text-center text-balance text-sm leading-normal'>
                {person.description}
              </p>

              {person.location && (
                <p className='text-center text-xs text-muted-foreground'>
                  {person.location}
                </p>
              )}
            </div>
          </Card>
        ))}
      </div>

      {children}
    </section>
  )
}

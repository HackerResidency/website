'use client'

import Link from 'next/link'

import { Card } from '@/components/card'
import { HeroButton } from '@/components/hero-button'
import { ImageGallery } from '@/components/image-gallery'
import { PeopleGrid } from '@/components/people-grid'
import { Sponsor } from '@/components/sponsor'
import { AnimatedGradientBackground } from '@/components/ui/animated-gradient-background'
import { WorldMap } from '@/components/ui/world-map'
import Villa0 from '@/public/da-nang-villa-legos/0.jpg'
import Villa1 from '@/public/da-nang-villa-legos/1.jpg'
import Villa2 from '@/public/da-nang-villa-legos/6.jpg'
import Villa3 from '@/public/da-nang-villa-legos/7.jpg'

import { dots } from './dots'
import { hosts } from './hosts'
import { mentors } from './mentors'
import { residents } from './residents'

const villaImages = [
  { data: Villa0, alt: 'Da Nang Villa' },
  { data: Villa1, alt: 'Da Nang Villa' },
  { data: Villa2, alt: 'Da Nang Villa' },
  { data: Villa3, alt: 'Da Nang Villa' }
]

export default function Batch0Page() {
  return (
    <>
      <AnimatedGradientBackground />

      <section className='relative z-10 w-full flex flex-col gap-32 pt-8 flex-1 justify-center '>
        <div className='flex flex-col w-full gap-8 max-w-3xl justify-center'>
          <h1 className='text-center text-balance font-semibold text-4xl font-heading'>
            HRG Spring 2026
          </h1>

          <div className='flex flex-col gap-2'>
            <p className='text-center text-pretty text-md italic leading-normal'>
              May 1st – 31st, 2026
            </p>

            <p className='text-center text-pretty text-md leading-normal'>
              Da Nang, Vietnam
            </p>
          </div>

          <Card className='w-full'>
            <WorldMap dots={dots} />
          </Card>
        </div>

        <PeopleGrid title='Residents' people={residents} />

        <PeopleGrid title='Mentors' people={mentors} />

        <PeopleGrid title='Hosts' people={hosts} />

        <section className='relative flex flex-col gap-12 px-4 w-full max-w-3xl '>
          <h2 className='text-center text-balance text-4xl font-semibold leading-normal max-w-3xl'>
            Villa
          </h2>

          <ImageGallery images={villaImages} />
        </section>

        <SponsorSection />

        <HeroButton heroVariant='red'>
          <Link href='/batches'>stack.pop();</Link>
        </HeroButton>
      </section>
    </>
  )
}

function SponsorSection({ children }: { children?: React.ReactNode }) {
  return (
    <section className='relative flex flex-col gap-12 px-4 w-full max-w-3xl '>
      <h2 className='text-center text-balance text-4xl font-semibold leading-normal max-w-3xl'>
        Sponsors
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 max-w-4xl gap-16'>
        <Sponsor
          href=' https://openrouter.ai?referral=hrg'
          src='/sponsors/openrouter-light.svg'
          srcDark='/sponsors/openrouter-dark.svg'
          alt='OpenRouter'
        />

        <Sponsor
          href=' https://notion.so?referral=hrg'
          src='/sponsors/notion-light.svg'
          srcDark='/sponsors/notion-dark.svg'
          alt='Notion'
        />
        <Sponsor
          href='https://www.datahouse.com?from=hrg'
          src='/sponsors/datahouse-light.png'
          srcDark='/sponsors/datahouse-dark.png'
          alt='Datahouse'
        />

        <Sponsor
          href='https://stainless.com?from=hrg'
          src='/sponsors/stainless-light.png'
          srcDark='/sponsors/stainless-dark.png'
          alt='Stainless'
        />

        <Sponsor
          href=' https://openai.com?referral=hrg'
          src='/sponsors/openai-light.png'
          srcDark='/sponsors/openai-dark.png'
          alt='OpenAI'
        />
      </div>

      {children}
    </section>
  )
}

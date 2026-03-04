'use client'

import Link from 'next/link'

import { Card } from '@/components/card'
import { HeroButton } from '@/components/hero-button'
import { ImageGallery } from '@/components/image-gallery'
import { PeopleGrid } from '@/components/people-grid'
import { Sponsor } from '@/components/sponsor'
import { AnimatedGradientBackground } from '@/components/ui/animated-gradient-background'
import { WorldMap } from '@/components/ui/world-map'
import Vibes1 from '@/public/batch-0/0.jpg'
import Vibes2 from '@/public/batch-0/1.jpg'
import Vibes4 from '@/public/batch-0/2.jpg'
import Vibes3 from '@/public/batch-0/3.jpg'
import Batch0DemoDay0 from '@/public/batch-0/demo-day-0.jpg'
import Batch0DemoDay1 from '@/public/batch-0/demo-day-1.jpg'
import Batch0DemoDay2 from '@/public/batch-0/demo-day-2.jpg'
import Batch0DemoDay3 from '@/public/batch-0/demo-day-3.jpg'
import Batch0DemoDay4 from '@/public/batch-0/demo-day-4.jpg'
import Batch0DemoDay5 from '@/public/batch-0/demo-day-5.jpg'
import Vibes8 from '@/public/batch-0/edmund.jpg'
import Vibes5 from '@/public/batch-0/group-dinner-hotpot.jpg'
import Vibes0 from '@/public/batch-0/hrg-crew-nov-14-2025.jpg'
import Vibes6 from '@/public/batch-0/phuc.jpg'
import Vibes7 from '@/public/batch-0/steve.jpg'
import Villa0 from '@/public/da-nang-villa/0.jpg'
import Villa1 from '@/public/da-nang-villa/1.jpg'
import Villa2 from '@/public/da-nang-villa/4.jpg'
import Villa3 from '@/public/da-nang-villa/8.jpg'

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

const batch0VibesImages = [
  { data: Vibes0, alt: 'HRG batch vibes' },
  { data: Vibes5, alt: 'HRG batch vibes' },
  { data: Vibes1, alt: 'HRG batch vibes' },
  { data: Vibes2, alt: 'HRG batch vibes' },
  { data: Vibes3, alt: 'HRG batch vibes' },
  { data: Vibes4, alt: 'HRG batch vibes' },
  { data: Vibes7, alt: 'HRG batch vibes' },
  { data: Vibes6, alt: 'HRG batch vibes' },
  { data: Vibes8, alt: 'HRG batch vibes' }
]

const batch0DemoDayImages = [
  { data: Batch0DemoDay0, alt: 'Demo Day' },
  { data: Batch0DemoDay1, alt: 'Demo Day' },
  { data: Batch0DemoDay2, alt: 'Demo Day' },
  { data: Batch0DemoDay3, alt: 'Demo Day' },
  { data: Batch0DemoDay5, alt: 'Demo Day' },
  { data: Batch0DemoDay4, alt: 'Demo Day' }
]

export default function Batch0Page() {
  return (
    <>
      <AnimatedGradientBackground />

      <section className='relative z-10 w-full flex flex-col gap-16 flex-1 justify-center '>
        <div className='flex flex-col w-full gap-8 max-w-3xl justify-center'>
          <h2 className='text-center text-balance font-semibold text-3xl font-heading'>
            HRG Fall 2025
          </h2>

          <div className='flex flex-col gap-2'>
            <p className='text-center text-pretty text-md leading-normal'>
              Da Nang, Vietnam
            </p>

            <p className='text-center text-pretty text-sm italic leading-normal'>
              November 1st – 30th, 2025
            </p>
          </div>

          <Card className='w-full'>
            <WorldMap dots={dots} />
          </Card>
        </div>

        <PeopleGrid title='Residents' people={residents} />

        <PeopleGrid title='Mentors' people={mentors} />

        <PeopleGrid title='Hosts' people={hosts} />

        <section className='flex flex-col gap-12 mb-16 px-4'>
          <h2 className='text-center text-balance text-4xl font-semibold leading-normal max-w-3xl'>
            Marisol Villa
          </h2>

          <ImageGallery images={villaImages} />
        </section>

        <section className='flex flex-col gap-12 mb-16 px-4'>
          <h2 className='text-center text-balance text-4xl font-semibold leading-normal max-w-3xl'>
            Vibes
          </h2>

          <ImageGallery images={batch0VibesImages} />
        </section>

        <section className='flex flex-col gap-12 mb-16 px-4'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-center text-balance text-4xl font-semibold leading-normal max-w-3xl'>
              Demo Day
            </h2>

            <p className='text-center text-pretty text-sm italic leading-normal'>
              November 30th, 2025
            </p>
          </div>

          <ImageGallery images={batch0DemoDayImages} />
        </section>

        <SponsorSection />

        <HeroButton heroVariant='red'>
          <Link href='/batches'>stack.pop();</Link>
        </HeroButton>
      </section>
    </>
  )
}

function SponsorSection() {
  return (
    <section className='relative z-10 flex flex-col gap-12 mb-16 px-4'>
      <h2 className='text-center text-balance text-4xl font-semibold leading-normal max-w-3xl'>
        Sponsors
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 max-w-4xl gap-16'>
        <Sponsor
          href='https://coderabbit.ai?from=hrg'
          src='/sponsors/coderabbit-light.svg'
          srcDark='/sponsors/coderabbit-dark.svg'
          alt='CodeRabbit'
        />

        <Sponsor
          href=' https://openrouter.ai?referral=hrg'
          src='/sponsors/openrouter-light.svg'
          srcDark='/sponsors/openrouter-dark.svg'
          alt='OpenRouter'
        />

        <Sponsor
          href='https://n8n.io?from=hrg'
          src='/sponsors/n8n-light.svg'
          srcDark='/sponsors/n8n-dark.svg'
          alt='N8N'
        />

        <Sponsor
          href='https://www.datahouse.com?from=hrg'
          src='/sponsors/datahouse-light.png'
          srcDark='/sponsors/datahouse-dark.png'
          alt='Datahouse'
        />

        <Sponsor
          href='https://parallel.ai?from=hrg'
          src='/sponsors/parallel-light.svg'
          srcDark='/sponsors/parallel-dark.svg'
          alt='Parallel.ai'
        />

        <Sponsor
          href='https://stainless.com?from=hrg'
          src='/sponsors/stainless-light.png'
          srcDark='/sponsors/stainless-dark.png'
          alt='Stainless'
        />

        <Sponsor
          href='https://cognition.ai?from=hrg'
          src='/sponsors/cognition-light.svg'
          srcDark='/sponsors/cognition-dark.png'
          alt='Cognition'
        />

        <Sponsor
          href='https://www.createanything.com/?via=HRG'
          src='/sponsors/anything-light.svg'
          srcDark='/sponsors/anything-dark.svg'
          alt='Anything'
        />

        <Sponsor
          href='https://exa.ai?from=hrg'
          src='/sponsors/exa-light.svg'
          srcDark='/sponsors/exa-dark.svg'
          alt='Exa'
          className='max-h-16'
        />
      </div>
    </section>
  )
}

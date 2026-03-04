'use client'

import Link from 'next/link'

import { Card } from '@/components/card'
import { HeroButton } from '@/components/hero-button'
import { Sponsor } from '@/components/sponsor'
import { AnimatedGradientBackground } from '@/components/ui/animated-gradient-background'
import { WorldMap } from '@/components/ui/world-map'

const dots: Array<{
  start: { lat: number; lng: number; label?: string }
  end: { lat: number; lng: number; label?: string }
}> = [
  {
    start: { lat: 40.741_895, lng: -73.989_308 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 45.9432, lng: 24.9668 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 51.9194, lng: 19.1451 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 1.3521, lng: 103.8198 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 15.2993, lng: 74.124 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 12.9716, lng: 77.5946 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 37.7749, lng: -122.4194 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 48.2082, lng: 16.3738 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 55.6761, lng: 12.5683 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 55.6761, lng: 12.5683 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 51.1657, lng: 10.4515 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 36.1699, lng: -115.1398 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 48.8566, lng: 2.3522 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 48.8566, lng: 2.3522 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 39.5501, lng: -105.7821 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 10.8231, lng: 106.6297 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 18.7883, lng: 98.9853 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 34.0522, lng: -118.2437 },
    end: { lat: 16.0544, lng: 108.2022 }
  }
]

export default function Batch0Page() {
  return (
    <>
      <AnimatedGradientBackground />

      <section className='relative z-10 w-full flex flex-col gap-8 max-w-3xl flex-1 justify-center '>
        <h2 className='text-center text-balance font-semibold text-3xl font-heading'>
          HRG Batch 1
        </h2>

        <div className='flex flex-col gap-2'>
          <p className='text-center text-pretty text-md leading-normal'>
            Da Nang, Vietnam
          </p>

          <p className='text-center text-pretty text-sm italic leading-normal'>
            May 1st – 31st, 2026
          </p>
        </div>

        <Card className='w-full'>
          <WorldMap dots={dots} />
        </Card>

        <HeroButton heroVariant='red'>
          <Link href='/'>stack.pop();</Link>
        </HeroButton>

        <SponsorSection />

        <HeroButton heroVariant='red'>
          <Link href='/'>stack.pop();</Link>
        </HeroButton>
      </section>
    </>
  )
}

function SponsorSection() {
  return (
    <section className='relative flex flex-col gap-12 py-16 px-4'>
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
    </section>
  )
}

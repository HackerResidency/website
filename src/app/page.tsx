'use client'

import { useRef } from 'react'

import { ImageGallery } from '@/components/image-gallery'
import { AnimatedGradientBackground } from '@/components/ui/animated-gradient-background'
import Villa0 from '@/public/da-nang-villa-legos/0.jpg'
import Villa1 from '@/public/da-nang-villa-legos/1.jpg'
import Villa2 from '@/public/da-nang-villa-legos/6.jpg'
import Villa3 from '@/public/da-nang-villa-legos/7.jpg'

import { useAnimatedStoryText } from './home/animated-story-text'
import { CTASection } from './home/cta-section'
import { HeroSection } from './home/hero-section'
import { LocationSection } from './home/location-section'
import { TeamSection } from './home/team-section'

const featuredImages = [
  { data: Villa0, alt: 'Da Nang Villa' },
  { data: Villa1, alt: 'Da Nang Villa' },
  { data: Villa2, alt: 'Da Nang Villa' },
  { data: Villa3, alt: 'Da Nang Villa' }
]

export default function TheBestDamnLandingPageEver() {
  return (
    <>
      <AnimatedGradientBackground />

      <HeroSection />

      <StorySectionIntro />

      <TeamSection />

      <StorySectionWhat />

      <StorySectionPricing />

      <StorySectionWhy />

      <LocationSection />

      <CTASection />
    </>
  )
}

function StorySectionIntro() {
  const ref = useRef<HTMLHeadingElement | null>(null)
  useAnimatedStoryText(ref)

  return (
    <section className='relative z-10 flex flex-col gap-10 mb-16'>
      <h3
        ref={ref}
        className='text-center text-balance text-2xl leading-normal max-w-3xl flex flex-col gap-4'
      >
        <p>
          We're inviting 10 ambitious founders to come live and build with us
          for 1 month at a dope villa in SE Asia.
        </p>

        <p>With one goal: to lock in and build!</p>
      </h3>
    </section>
  )
}

function StorySectionWhat() {
  const ref = useRef<HTMLHeadingElement | null>(null)
  useAnimatedStoryText(ref)

  return (
    <section className='relative flex flex-col gap-12 mb-16'>
      <h2 className='text-center text-balance text-4xl font-semibold leading-normal max-w-3xl'>
        The villa
      </h2>

      <h3
        ref={ref}
        className='text-center text-balance text-2xl leading-normal max-w-3xl flex flex-col gap-4'
      >
        <p>
          A stunning 14-bedroom villa with pool, workspace, and ocean views.
        </p>

        <p>Fully equipped for focused work.</p>
      </h3>

      <ImageGallery images={featuredImages} />
    </section>
  )
}

function StorySectionPricing() {
  const ref = useRef<HTMLHeadingElement | null>(null)
  useAnimatedStoryText(ref)

  return (
    <section className='relative z-10 flex flex-col gap-12 mb-16'>
      <h2 className='text-center text-balance text-4xl font-semibold leading-normal max-w-3xl'>
        And the best part: it's 100% free
      </h2>

      <h3
        ref={ref}
        className='text-center text-balance text-2xl leading-normal max-w-3xl flex flex-col gap-4'
      >
        <p>We don't take any equity or rev share.</p>

        <p>You only need to pay for your flights.</p>

        <p>
          We cover the villa, food, laundry, your own private bedroom + bathroom
          + workstation, a professional videographer, and we even have some
          surprises in store as well...
        </p>
      </h3>
    </section>
  )
}

function StorySectionWhy() {
  const ref = useRef<HTMLHeadingElement | null>(null)
  useAnimatedStoryText(ref)

  return (
    <section className='relative flex flex-col gap-12 mb-16'>
      <h2 className='text-center text-balance text-4xl font-semibold leading-normal max-w-3xl'>
        Wait, why are we doing this <span className='italic'>for free</span>?
      </h2>

      <h3
        ref={ref}
        className='text-center text-balance text-2xl leading-normal max-w-3xl flex flex-col gap-6'
      >
        <p>HRG started as an experiment with a few goals in mind:</p>

        <div className='flex flex-col gap-4'>
          <p>1. Shine an spotlight on the indie hacker lifestyle 🔥</p>

          <p>
            2. Build a new type of international dev community focused on more
            ambitious digital nomads
          </p>

          <p>3. Make friends, vibe, and learn from each other! 🤙</p>
        </div>
      </h3>
    </section>
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/card'
import { AnimatedGradientBackground } from '@/components/ui/animated-gradient-background'
import HeroImageBatch0 from '@/public/da-nang-villa/hero.jpg'
import HeroImageBatch1 from '@/public/da-nang-villa-legos/0.jpg'

export default function Batch0Page() {
  return (
    <>
      <AnimatedGradientBackground />

      <section className='relative z-10 w-full flex flex-col gap-16 flex-1 justify-center '>
        <div className='flex flex-col w-full gap-8 max-w-3xl justify-center'>
          <h2 className='text-center text-balance font-semibold text-3xl font-heading'>
            HRG Batches
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl'>
          <Link href='/batch-0'>
            <Card className='group justify-self-center w-full grid grid-cols-1 max-w-md'>
              <div className='flex flex-col gap-4 color-card-foreground items-center p-6 h-full'>
                <h3 className='text-center text-balance text-xl font-semibold leading-normal max-w-3xl'>
                  Fall 2025
                </h3>

                <div className='text-muted-foreground text-sm text-center flex flex-col gap-2'>
                  <p>November 1st – 30th, 2025</p>
                  <p>Da Nang, Vietnam</p>
                </div>

                <Image
                  src={HeroImageBatch0.src}
                  alt='Batch 0 Villa'
                  width={HeroImageBatch0.width}
                  height={HeroImageBatch0.height}
                  blurDataURL={HeroImageBatch0.blurDataURL}
                  placeholder='blur'
                  className='w-full h-auto origin-top rounded-3xl'
                />
              </div>
            </Card>
          </Link>

          <Link href='/batch-1'>
            <Card className='group justify-self-center w-full grid grid-cols-1 max-w-md'>
              <div className='flex flex-col gap-4 color-card-foreground items-center p-6 h-full'>
                <h3 className='text-center text-balance text-xl font-semibold leading-normal max-w-3xl'>
                  Spring 2026
                </h3>

                <div className='text-muted-foreground text-sm text-center flex flex-col gap-2'>
                  <p>May 1st – 31st, 2026</p>
                  <p>Da Nang, Vietnam</p>
                </div>

                <Image
                  src={HeroImageBatch1.src}
                  alt='Batch 1 Villa'
                  width={HeroImageBatch1.width}
                  height={HeroImageBatch1.height}
                  blurDataURL={HeroImageBatch1.blurDataURL}
                  placeholder='blur'
                  className='w-full h-auto origin-top rounded-3xl'
                />
              </div>
            </Card>
          </Link>
        </div>
      </section>
    </>
  )
}

import Link from 'next/link'

import type { Person } from '@/components/people-grid'
import AyushSoni from '@/public/people/ayush-soni.jpg'
import DavidZhang from '@/public/people/dzhng.jpg'
import StevePeak from '@/public/people/steve-peak.jpg'
import TiboMaker from '@/public/people/tibo-maker.jpg'

export const mentors: Person[] = [
  {
    name: 'Tibo Maker',
    image: TiboMaker,
    url: 'https://x.com/tibo_maker',
    twitter: 'https://x.com/tibo_maker',
    github: 'https://github.com/tbll75',
    linkedin: 'https://www.linkedin.com/in/tibo-the-maker/',
    description: (
      <>
        Prolific portfolio of bootstrapped products; over $8M ARR; &gt;180k
        followers on X.
      </>
    ),
    location: 'France'
  },
  {
    name: 'David Zhang',
    image: DavidZhang,
    url: 'https://x.com/dzhng',
    twitter: 'https://x.com/dzhng',
    github: 'https://github.com/dzhng',
    linkedin: 'https://www.linkedin.com/in/david-zhang-2902462a/',
    description: (
      <>
        Prev company,{' '}
        <Link
          href='https://www.amitysolutions.com'
          target='_blank'
          className='link'
        >
          Amity
        </Link>
        , is worth &gt;$500M. Raised $4M for{' '}
        <Link href='https://duet.so/' target='_blank' className='link'>
          Duet
        </Link>
        . World-class AI eng &amp; serial founder.
      </>
    ),
    location: 'USA'
  },
  {
    name: 'Steve Peak',
    image: StevePeak,
    url: 'https://x.com/iopeak',
    twitter: 'https://x.com/iopeak',
    github: 'https://github.com/stevepeak',
    linkedin: 'https://www.linkedin.com/in/stevepeak23/',
    description: (
      <>
        Formerly built &amp; sold{' '}
        <Link href='https://about.codecov.io' target='_blank' className='link'>
          codecov.io
        </Link>{' '}
        to Sentry as a solo founder for $10M. World-class AI eng &amp; serial
        founder.
      </>
    ),
    location: 'USA'
  },
  {
    name: 'Ayush Soni',
    image: AyushSoni,
    url: 'https://x.com/ayysoni',
    twitter: 'https://x.com/ayysoni',
    github: 'http://github.com/ayushsoni1001',
    linkedin: 'https://www.linkedin.com/in/ayushsoni1001/',
    description: (
      <>
        21yo with 5 exits. $450K+ ARR across multiple SaaS; top 100 Shopify app
        builder in the world.
      </>
    ),
    location: 'India'
  }
]

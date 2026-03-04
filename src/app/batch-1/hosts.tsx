import Link from 'next/link'

import { type Person } from '@/components/people-grid'
import David from '@/public/people/david.jpg'
import Phuc from '@/public/people/phuc.jpg'
import Tony from '@/public/people/tony.jpg'
import Travis from '@/public/people/travis.jpg'

export const hosts: Person[] = [
  {
    name: 'Travis Fischer',
    image: Travis,
    url: 'https://x.com/transitive_bs',
    twitter: 'https://x.com/transitive_bs',
    github: 'https://github.com/transitive-bullshit',
    linkedin: 'https://linkedin.com/in/fisch2',
    description: (
      <>
        Founder of{' '}
        <Link
          href='https://github.com/transitive-bullshit/agentic'
          target='_blank'
          className='link'
        >
          Agentic
        </Link>
        . 2 exits. Prev{' '}
        <Link href='https://hf0.com' target='_blank' className='link'>
          HF0
        </Link>
        , Microsoft, and Amazon.
      </>
    ),
    location: 'USA'
  },
  {
    name: 'Tony Dinh',
    image: Tony,
    url: 'https://x.com/tdinh_me',
    twitter: 'https://x.com/tdinh_me',
    github: 'https://github.com/trungdq88',
    linkedin: 'https://www.linkedin.com/in/tdinh-me/',
    description: (
      <>
        Making over $2M ARR solo while building{' '}
        <Link href='https://typingmind.com' target='_blank' className='link'>
          typingmind.com
        </Link>{' '}
        and{' '}
        <Link href='https://devutils.com' target='_blank' className='link'>
          devutils.com
        </Link>
        .
      </>
    ),
    location: 'Vietnam'
  },
  {
    name: 'Minh-Phuc Tran',
    image: Phuc,
    url: 'https://x.com/phuctm97',
    twitter: 'https://x.com/phuctm97',
    github: 'https://github.com/phuctm97',
    linkedin: 'https://www.linkedin.com/in/phuctm97/',
    description: (
      <>
        Built 8 startups in 12 months • Sold 3/8 startups • Building{' '}
        <Link href='https://vibingbase.com' target='_blank' className='link'>
          vibingbase.com
        </Link>
        .
      </>
    ),
    location: 'Vietnam'
  },
  {
    name: 'David Park',
    image: David,
    url: 'https://x.com/dayonefoundry',
    twitter: 'https://x.com/dayonefoundry',
    github: 'https://github.com/davidvypark',
    linkedin: 'https://www.linkedin.com/in/david-park-69587844/',
    description: (
      <>
        Built Raya & Kippo and then 120 other apps you&apos;ve never heard of
        because they failed.
      </>
    ),
    location: 'USA'
  }
]

import Link from 'next/link'

import type { Person } from '@/components/people-grid'
import AlexReibman from '@/public/people/alex-reibman.jpg'
import DanielNguyen from '@/public/people/daniel-nguyen.jpg'
import DavidZhang from '@/public/people/dzhng.jpg'
import StevePeak from '@/public/people/steve-peak.jpg'

export const mentors: Person[] = [
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
    name: 'Daniel Nguyen',
    image: DanielNguyen,
    url: 'https://x.com/daniel_nguyenx',
    twitter: 'https://x.com/daniel_nguyenx',
    description: (
      <>
        Rockstar Vietnamese indie hacker. Founder of{' '}
        <Link href='https://boltai.com' target='_blank' className='link'>
          BoltAI
        </Link>
        , the best AI app for Mac.
      </>
    ),
    location: 'Vietnam'
  },
  {
    name: 'Alex Reibman',
    image: AlexReibman,
    url: 'https://x.com/AlexReibman',
    twitter: 'https://x.com/AlexReibman',
    github: 'https://github.com/areibman',
    linkedin: 'https://www.linkedin.com/in/alex-reibman-67951589/',
    description: (
      <>
        Serial venture-backed founder &amp; AI eng; formerly co-founder of{' '}
        <Link href='https://www.agentops.ai/' target='_blank' className='link'>
          AgentOps
        </Link>
        ; now investing via{' '}
        <Link href='https://agentfund.com/' target='_blank' className='link'>
          Agent Fund
        </Link>{' '}
        and building AI experiments.
      </>
    ),
    location: 'USA'
  }
]

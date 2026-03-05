import Link from 'next/link'

import type { Person } from '@/components/people-grid'
import AlexVanLe from '@/public/people/alex-van-le.jpg'
import AlexZhang from '@/public/people/alex-zhang.jpg'
import AndrewZacker from '@/public/people/andrew-zacker.jpg'
import Avery from '@/public/people/avery.jpg'
import Bhanu from '@/public/people/bhanu.jpg'
import ChrisWoggon from '@/public/people/chris-woggin.jpg'
import DavidIshag from '@/public/people/david-ishg.jpg'
import Elitza from '@/public/people/elitza.jpg'
import Eugene from '@/public/people/eugene.jpg'
import FlorinPop from '@/public/people/florin-pop.jpg'
import JonathanParra from '@/public/people/jonathan-parra.jpg'
import Praneeth from '@/public/people/praneeth.jpg'
import Sai from '@/public/people/sai.jpg'
import Winston from '@/public/people/winston.jpg'
import Yeonji from '@/public/people/yeonji.jpg'

export const residents: Person[] = [
  {
    name: 'Florin Pop',
    image: FlorinPop,
    url: 'https://x.com/florinpop17',
    twitter: 'https://x.com/florinpop17',
    youtube: 'https://www.youtube.com/@florinpop',
    github: 'https://github.com/florinpop17',
    linkedin: 'https://www.linkedin.com/in/florinpop17',
    description: (
      <>
        <Link href='https://x.com/florinpop17' target='_blank' className='link'>
          200k followers on X
        </Link>
        ;{' '}
        <Link
          href='https://www.youtube.com/@florinpop'
          target='_blank'
          className='link'
        >
          170k followers on YT
        </Link>
        ; $500k in sales; dev influencer &amp; indie hacker shipping like crazy.
      </>
    ),
    location: 'Romania'
  },
  {
    name: 'Andrew Zacker',
    image: AndrewZacker,
    url: 'https://x.com/andrewzacker',
    twitter: 'https://x.com/andrewzacker',
    github: 'https://github.com/zacker-tech',
    youtube: 'https://www.youtube.com/@andrew.zacker',
    description: (
      <>
        Indie hacker, shipping like crazy (5 launches in 2 months), and
        documenting the journey. Working together with{' '}
        <Link href='https://x.com/florinpop17' target='_blank' className='link'>
          Florin
        </Link>
        .
      </>
    ),
    location: 'Poland'
  },
  {
    name: 'Eugene Zolotarenko',
    image: Eugene,
    url: 'https://x.com/eugZolotarenko',
    twitter: 'https://x.com/eugZolotarenko',
    github: 'https://github.com/eugeneZolotarenko',
    linkedin: 'https://www.linkedin.com/in/eugenezolotarenko/',
    description: (
      <>
        Co-Founder of{' '}
        <Link href='https://www.outrank.so' target='_blank' className='link'>
          Outrank
        </Link>
        , over $3M ARR, growing organic traffic on auto-pilot. Working with{' '}
        <Link href='https://x.com/tibo_maker' target='_blank' className='link'>
          Tibo Maker
        </Link>
        .
      </>
    ),
    location: 'Poland'
  },
  {
    name: 'Avery',
    image: Avery,
    url: 'https://x.com/averycode',
    twitter: 'https://x.com/averycode',
    github: 'https://github.com/averygan',
    linkedin: 'https://www.linkedin.com/in/averygan',
    description: (
      <>
        Psych major turned indie hacker; building{' '}
        <Link href='https://offscript.sh/' target='_blank' className='link'>
          Offscript
        </Link>{' '}
        dev agency and{' '}
        <Link href='https://rankd.dev' target='_blank' className='link'>
          Rankd
        </Link>
        , ASO optimization. Ex Apple/HubSpot.
      </>
    ),
    location: 'Singapore'
  },
  {
    name: 'Bhanu Teja P',
    image: Bhanu,
    url: 'https://x.com/pbteja1998',
    twitter: 'https://x.com/pbteja1998',
    github: 'https://github.com/pbteja1998',
    linkedin: 'https://www.linkedin.com/in/pbteja1998/',
    description: (
      <>
        Co-Founder of{' '}
        <Link
          href='https://missioncontrolhq.ai'
          target='_blank'
          className='link'
        >
          Mission Control HQ
        </Link>{' '}
        (17k MRR) and{' '}
        <Link href='https://sitegpt.ai/' target='_blank' className='link'>
          SiteGPT
        </Link>{' '}
        (19k MRR). 54k followers on X, serial founder with multiple exits.
      </>
    ),
    location: 'India'
  },
  {
    name: 'Sai Dheeraj P',
    image: Sai,
    url: 'https://x.com/saidheeraj_96',
    twitter: 'https://x.com/saidheeraj_96',
    linkedin: 'https://www.linkedin.com/in/dheerajpachipulusu/',
    description: (
      <>
        Co-Founder of{' '}
        <Link
          href='https://missioncontrolhq.ai'
          target='_blank'
          className='link'
        >
          Mission Control HQ
        </Link>{' '}
        and{' '}
        <Link href='https://sitegpt.ai/' target='_blank' className='link'>
          SiteGPT
        </Link>
        .
      </>
    ),
    location: 'India'
  },
  {
    name: 'Winston Iskandar',
    image: Winston,
    url: 'https://x.com/WinstonIsk',
    twitter: 'https://x.com/WinstonIsk',
    github: 'https://github.com/winstoniskandar',
    linkedin: 'https://www.linkedin.com/in/winstoniskandar',
    description: (
      <>
        Stanford CS student &amp; Co-Founder of{' '}
        <Link href='https://similate.ai/' target='_blank' className='link'>
          Similate.ai
        </Link>
        , a simulation platform for human behavior.
      </>
    ),
    location: 'USA'
  },
  {
    name: 'Alex Zhang',
    image: AlexZhang,
    url: 'https://x.com/alexzhang104',
    twitter: 'https://x.com/alexzhang104',
    linkedin: 'https://www.linkedin.com/in/zhangalexanderx',
    description: (
      <>
        Stanford CS student &amp; Co-Founder of{' '}
        <Link href='https://similate.ai/' target='_blank' className='link'>
          Similate.ai
        </Link>
        , a simulation platform for human behavior.
      </>
    ),
    location: 'USA'
  },
  {
    name: 'Praneeth Pike',
    image: Praneeth,
    url: 'https://x.com/praneethpike',
    twitter: 'https://x.com/praneethpike',
    github: 'https://github.com/Praneeth-pike',
    linkedin: 'https://www.linkedin.com/in/praneethykasula/',
    description: (
      <>
        Founder of{' '}
        <Link
          href='https://www.rabbitholes.ai/'
          target='_blank'
          className='link'
        >
          RabbitHoles.ai
        </Link>
        , a canvas-based UX for genAI with over $100k in revenue. Also runs a
        design agency.
      </>
    ),
    location: 'India'
  },
  {
    name: 'Elitza Vasileva',
    image: Elitza,
    url: 'https://x.com/ElitzaVasileva',
    twitter: 'https://x.com/ElitzaVasileva',
    github: 'https://github.com/elitza-vasileva',
    linkedin: 'https://www.linkedin.com/in/elitza-vasileva/',
    description: (
      <>
        Founder of{' '}
        <Link href='https://own.page' target='_blank' className='link'>
          own.page
        </Link>
        , a link-in-bio / personal website builder with over 3k users and
        growing fast.
      </>
    ),
    location: 'Austria'
  },
  {
    name: 'Alexander Van Le',
    image: AlexVanLe,
    url: 'https://x.com/qwertyu_alex',
    twitter: 'https://x.com/qwertyu_alex',
    github: 'https://github.com/qwertyu-alex',
    linkedin: 'https://www.linkedin.com/in/alexandervle/',
    description: (
      <>
        Co-Founder of{' '}
        <Link href='https://www.starpop.ai/' target='_blank' className='link'>
          Starpop
        </Link>
        , AI UGC videos, $15k MRR.
      </>
    ),
    location: 'Denmark'
  },
  {
    name: 'David Ishag',
    image: DavidIshag,
    url: 'https://x.com/david_ishg',
    twitter: 'https://x.com/david_ishg',
    github: 'https://github.com/Davidshag',
    linkedin: 'https://www.linkedin.com/in/david-ishag-a18782352/',
    description: (
      <>
        Co-Founder of{' '}
        <Link href='https://www.starpop.ai/' target='_blank' className='link'>
          Starpop
        </Link>
        , AI UGC videos, $15k MRR.
      </>
    ),
    location: 'Switzerland'
  },
  {
    name: 'Christopher Woggon',
    image: ChrisWoggon,
    url: 'https://x.com/chrissyinspace',
    twitter: 'https://x.com/chrissyinspace',
    github: 'https://github.com/chrissy0',
    linkedin: 'https://www.linkedin.com/in/christopher-woggon-3b2774271/',
    description: (
      <>
        Building{' '}
        <Link
          href='https://www.tinylaunch.com/'
          target='_blank'
          className='link'
        >
          TinyLaunch
        </Link>
        , a launch platform for indie products, $42k revenue so far. Also
        building a portfolio of small bets.
      </>
    ),
    location: 'Germany'
  },
  {
    name: 'Yeonji',
    image: Yeonji,
    url: 'https://x.com/yeonjidev',
    twitter: 'https://x.com/yeonjidev',
    github: 'https://github.com/oyaa52',
    linkedin:
      'https://www.linkedin.com/in/%EC%97%B0%EC%A7%80-%EC%9E%84-396570223/',
    description: (
      <>
        Building a portfolio of small bets alongside{' '}
        <Link
          href='https://x.com/chrissyinspace'
          target='_blank'
          className='link'
        >
          Christopher Woggon
        </Link>
        .
      </>
    ),
    location: 'South Korea'
  },
  {
    name: 'Jonathan Parra',
    image: JonathanParra,
    url: 'https://x.com/jondeparra',
    twitter: 'https://x.com/jondeparra',
    github: 'https://github.com/jondeparra',
    linkedin: 'https://www.linkedin.com/in/jondeparra/',
    description: (
      <>
        The Paywall guy. Prev{' '}
        <Link href='https://superwall.com' target='_blank' className='link'>
          Superwall
        </Link>{' '}
        (YC S21). Agency building mobile apps including Prove It ($600k MRR),
        and currently a Pokémon Go-like app for bird watchers.
      </>
    ),
    location: 'USA'
  }
]

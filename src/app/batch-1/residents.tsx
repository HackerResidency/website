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
    github: 'https://github.com/florinpop17',
    linkedin: 'https://www.linkedin.com/in/florinpop17',
    description: (
      <>
        200k followers on X; 150k followers on YT; dev influencer &amp; indie
        hacker shipping like crazy. From Romania.
      </>
    )
  },
  {
    name: 'Andrew Zacker',
    image: AndrewZacker,
    url: 'https://x.com/andrewzacker',
    twitter: 'https://x.com/andrewzacker',
    github: 'https://github.com/zacker-tech',
    linkedin: 'https://www.linkedin.com/in/andrewzacker/',
    description: (
      <>
        Indie hacker shipping like crazy alongside{' '}
        <Link href='https://x.com/florinpop17' target='_blank' className='link'>
          Florin Pop
        </Link>
        . From Poland.
      </>
    )
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
        . From Poland.
      </>
    )
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
        , ASO optimization. Ex Apple/HubSpot. From Singapore.
      </>
    )
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
          MissionControlHQ
        </Link>{' '}
        (17k MRR) and{' '}
        <Link href='https://sitegpt.ai/' target='_blank' className='link'>
          SiteGPT
        </Link>{' '}
        (19k MRR). 54k followers on X, serial founder with multiple exits. From
        India.
      </>
    )
  },
  {
    name: 'Sai Dheeraj P',
    image: Sai,
    url: 'https://x.com/saidheeraj_96',
    twitter: 'https://x.com/saidheeraj_96',
    description: (
      <>
        Co-Founder of{' '}
        <Link
          href='https://missioncontrolhq.ai'
          target='_blank'
          className='link'
        >
          MissionControlHQ
        </Link>{' '}
        and{' '}
        <Link href='https://sitegpt.ai/' target='_blank' className='link'>
          SiteGPT
        </Link>
        . Serial founder with multiple exits. From India.
      </>
    )
  },
  {
    name: 'Praneeth Pike',
    image: Praneeth,
    url: 'https://x.com/praneethpike',
    twitter: 'https://x.com/praneethpike',
    github: 'https://github.com/Praneeth-pike',
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
        design agency. From India.
      </>
    )
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
        , a simulation platform for human behavior. From SF.
      </>
    )
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
        , a simulation platform for human behavior. From SF.
      </>
    )
  },
  {
    name: 'Elitza Vasileva',
    image: Elitza,
    url: 'https://x.com/ElitzaVasileva',
    twitter: 'https://x.com/ElitzaVasileva',
    github: 'https://github.com/elitza-vasileva',
    description: (
      <>
        Founder of{' '}
        <Link href='https://own.page' target='_blank' className='link'>
          own.page
        </Link>
        , a link-in-bio / personal website builder with over 3k users and
        growing fast. From Vienna, Austria.
      </>
    )
  },
  {
    name: 'Alexander Van Le',
    image: AlexVanLe,
    url: 'https://x.com/qwertyu_alex',
    twitter: 'https://x.com/qwertyu_alex',
    github: 'https://github.com/qwertyu-alex',
    description: (
      <>Co-Founder of Starpop, AI UGC videos, $15k MRR. From Denmark.</>
    )
  },
  {
    name: 'David Ishag',
    image: DavidIshag,
    url: 'https://x.com/david_ishg',
    twitter: 'https://x.com/david_ishg',
    description: (
      <>Co-Founder of Starpop, AI UGC videos, $15k MRR. From Switzerland.</>
    )
  },
  {
    name: 'Christopher Woggon',
    image: ChrisWoggon,
    url: 'https://x.com/chrissyinspace',
    twitter: 'https://x.com/chrissyinspace',
    github: 'https://github.com/chrissy0',
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
        building a portfolio of small bets. From Germany.
      </>
    )
  },
  {
    name: 'Yeonji',
    image: Yeonji,
    url: 'https://x.com/yeonjidev',
    twitter: 'https://x.com/yeonjidev',
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
        , a launch platform for indie products, alongside{' '}
        <Link
          href='https://x.com/chrissyinspace'
          target='_blank'
          className='link'
        >
          Christopher Woggon
        </Link>
        . From Germany.
      </>
    )
  },
  {
    name: 'Jonathan Parra',
    image: JonathanParra,
    url: 'https://x.com/jondeparra',
    twitter: 'https://x.com/jondeparra',
    description: (
      <>
        The Paywall guy. Prev Superwall (YC S21). Agency building mobile apps
        including Prove It ($600k MRR), and currently a Pokémon Go-like app for
        bird watchers. From Las Vegas.
      </>
    )
  }
]

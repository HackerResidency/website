import Link from 'next/link'

import type { Person } from '@/components/people-grid'
import AlexNguyen from '@/public/people/alex-nguyen.jpg'
import AyushSoni from '@/public/people/ayush-soni.jpg'
import BrianShin from '@/public/people/brian-shin.jpg'
import FaiNe from '@/public/people/fai-ne.jpg'
import HassanBazzi from '@/public/people/hassan-bazzi.jpg'
import JosefButtgen from '@/public/people/josef-buttgen.png'
import Lilian from '@/public/people/lilian.jpg'
import MilesFeldstein from '@/public/people/miles-feldstein.jpg'
import RobHallam from '@/public/people/rob-hallam.png'
import ThomasSanlis from '@/public/people/thomas-sanlis.jpg'

export const residents: Person[] = [
  {
    name: 'Alex Nguyen',
    image: AlexNguyen,
    url: 'https://x.com/alexcooldev',
    twitter: 'https://x.com/alexcooldev',
    description: (
      <>
        Multiple AI apps ~$35k MRR; runs a large TikTok growth hacking
        community; currently building Cursor for TikTok marketing.
      </>
    ),
    location: 'Ho Chi Minh City'
  },
  {
    name: 'Rob Hallam',
    image: RobHallam,
    url: 'https://x.com/robj3d3',
    twitter: 'https://x.com/robj3d3',
    description: (
      <>
        Working with{' '}
        <Link href='https://x.com/tibo_maker' target='_blank' className='link'>
          Tibo Maker
        </Link>{' '}
        on a Cursor for X; $200k ARR growing fast.
      </>
    ),
    location: 'UK'
  },
  {
    name: 'Brian Shin',
    image: BrianShin,
    url: 'https://x.com/brianshinsh',
    twitter: 'https://x.com/brianshinsh',
    description: (
      <>
        Building{' '}
        <Link href='http://once.film' target='_blank' className='link'>
          Once
        </Link>
        ; previous apps $700k ARR and $50k ARR respectively; raised over $15M
        venture. +1{' '}
        <Link
          href='https://www.linkedin.com/in/yen-kim-2541a9240'
          target='_blank'
          className='link'
        >
          Kim
        </Link>
        .
      </>
    ),
    location: 'Seoul'
  },
  {
    name: 'Lilian',
    image: Lilian,
    url: 'https://x.com/lilianbuilds',
    twitter: 'https://x.com/lilianbuilds',
    description: (
      <>
        Building{' '}
        <Link
          href='https://x.com/lilianbuilds/status/1926027004928762161'
          target='_blank'
          className='link'
        >
          Brainpower
        </Link>
        ; awesome energy, hacker &amp; community builder; training to be a BJJ
        world champ 🤯
      </>
    ),
    location: 'NY'
  },
  {
    name: 'Thomas Sanlis',
    image: ThomasSanlis,
    url: 'https://x.com/T_Zahil',
    twitter: 'https://x.com/T_Zahil',
    description: (
      <>
        Building PH competitor{' '}
        <Link href='https://www.uneed.best/' target='_blank' className='link'>
          Uneed
        </Link>{' '}
        for the last 6 years; started gaining traction in the past year; large
        community of indie hackers.
      </>
    ),
    location: 'France'
  },
  {
    name: 'Miles Feldstein',
    image: MilesFeldstein,
    url: 'https://x.com/MilesFeldstein',
    twitter: 'https://x.com/MilesFeldstein',
    description: (
      <>
        Prev co-founded{' '}
        <Link
          href='https://www.hyperwriteai.com/'
          target='_blank'
          className='link'
        >
          HyperWrite
        </Link>{' '}
        (raised $5.2M); now building{' '}
        <Link href='https://vost.ai' target='_blank' className='link'>
          Vost
        </Link>
        , a Loveable for creators to build cookie-cutter genAI apps; partnered
        w/ the yeti guys from TikTok w/ over 1.2M followers.
      </>
    ),
    location: 'NY'
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
        21yo with 5 exits; $450k+ ARR across multiple SaaS; building{' '}
        <Link href='https://www.revid.ai/' target='_blank' className='link'>
          revid.ai
        </Link>{' '}
        and a portfolio of other AI apps; top 100 Shopify plugin authors in the
        world.
      </>
    ),
    location: 'Goa, India'
  },
  {
    name: 'Josef Büttgen',
    image: JosefButtgen,
    url: 'https://x.com/josefbuettgen',
    twitter: 'https://x.com/josefbuettgen',
    description: (
      <>
        Building{' '}
        <Link href='https://www.trysetter.com' target='_blank' className='link'>
          Setter
        </Link>
        ; him and his gf{' '}
        <Link
          href='https://x.com/Melanie_Klenner'
          target='_blank'
          className='link'
        >
          Mellie
        </Link>{' '}
        have been in the Bali indie scene for a long time; great vibes.
      </>
    ),
    location: 'Bali / Germany'
  },
  {
    name: 'Fai Fai',
    image: FaiNe,
    url: 'https://x.com/fai_ne',
    twitter: 'https://x.com/fai_ne',
    description: (
      <>
        Former VC in Thailand who ran a venture studio in Bangkok; building{' '}
        <Link href='https://beluga.ai' target='_blank' className='link'>
          Beluga
        </Link>
        , Cursor for people learning how to code.
      </>
    ),
    location: 'Bangkok / SF'
  },
  {
    name: 'Hassan Bazzi',
    image: HassanBazzi,
    url: 'https://x.com/habazzi',
    twitter: 'https://x.com/habazzi',
    description: (
      <>
        Serial technical founder w/ 2 exits; building{' '}
        <Link href='https://fload.com' target='_blank' className='link'>
          Fload
        </Link>
        , AI employees for mobile apps.{' '}
        <Link
          href='https://www.instagram.com/kirakingkong'
          target='_blank'
          className='link'
        >
          +1 Kira King Kong
        </Link>
        .
      </>
    ),
    location: 'Lebanon / Michigan / Copenhagen'
  }
]

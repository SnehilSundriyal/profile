import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import logoAirbnb from '../../public/images/logos/airbnb.svg'
import logoFacebook from '../../public/images/logos/facebook.svg'
import logoPlanetaria from '../../public/images/logos/planetaria.svg'
import logoStarbucks from '../../public/images/logos/starbucks.svg'
import image1 from '../../public/image-1.jpg'
import image2 from '../../public/image-2.jpg'
import image3 from '../../public/image-3.jpg'
import image4 from '../../public/image-4.jpg'
import image5 from '../../public/image-5.jpg'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { FlipWords } from '@/components/ui/flip-words';
import { Case } from '@/components/ui/cases-with-infinite-scroll'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-[#bea882] stroke-[#1C0F00FF] dark:fill-[#1c0f00] dark:stroke-[#bea882]"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-[#1C0F00FF] dark:stroke-[#bea882]"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 "
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-[#bea882] stroke-[#1C0F00FF] dark:fill-[#1c0f00] dark:stroke-[#bea882]"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-[#1C0F00FF] dark:stroke-[#bea882]"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-[#1C0F00FF] transition group-hover:fill-[#4F2A10FF] dark:fill-[#dfc28d] dark:group-hover:fill-[#b09a76]" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-[#2c1500] p-6 dark:border-black"
    >
      <h2 className="flex text-sm font-semibold text-[#2c1500] dark:text-[#dfc28d]">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-[#40120b] dark:text-[#b09a76]">
        Get notified when I publish something new.
      </p>
      <div className="mt-6 flex items-center">
        <span className="flex min-w-0 flex-auto p-px">
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            required
            className="w-full appearance-none rounded-[calc(var(--radius-md)-1px)] bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-zinc-800/5 outline outline-[#2c1500] placeholder:text-[#40210b] focus:ring-4 focus:ring-teal-800/10 focus:outline-teal-800 sm:text-sm dark:bg-gray-300 dark:text-[#2c1500] dark:outline-black dark:placeholder:text-[#40210b] dark:focus:ring-teal-400/10 dark:focus:outline-teal-400"
          />
        </span>
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Planetaria',
      title: 'CEO',
      logo: logoPlanetaria,
      start: '2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Airbnb',
      title: 'Product Designer',
      logo: logoAirbnb,
      start: '2014',
      end: '2019',
    },
    {
      company: 'Facebook',
      title: 'iOS Software Engineer',
      logo: logoFacebook,
      start: '2011',
      end: '2014',
    },
    {
      company: 'Starbucks',
      title: 'Shift Supervisor',
      logo: logoStarbucks,
      start: '2008',
      end: '2011',
    },
  ]

  return (
    <div className="rounded-2xl border border-[#2c1500] p-6 dark:border-[#dfc28d]">
      {/*<h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">*/}
      {/*  <BriefcaseIcon className="h-6 w-6 flex-none" />*/}
      {/*  <span className="ml-3">Work</span>*/}
      {/*</h2>*/}
      {/*<ol className="mt-6 space-y-4">*/}
      {/*  {resume.map((role, roleIndex) => (*/}
      {/*    <Role key={roleIndex} role={role} />*/}
      {/*  ))}*/}
      {/*</ol>*/}
      <Button href="/resume.pdf" variant="primary" className="group w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-white transition group-active:stroke-[#2c1500] dark:stroke-[#2c1500] dark:group-hover:stroke-white dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

const words = ["obsessive web developer.", "engineer.", "amateur musician."]

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <link rel="icon" href="/favicon.ico" />

        <div className="max-w-4xl">
          <h1
            className="grid grid-cols-1 sm:grid-cols-2 text-4xl sm:text-5xl font-bold tracking-tight text-[#2c1500] dark:text-[#dfc28d]">
            <div className="col-span-1 sm:col-span-2 ml-2">
              Hey, I am Snehil and I am an
            </div>
            <div className="col-span-1 sm:col-span-2">
              <FlipWords
                duration={2000}
                words={words}
                className=""
              />{" "}
            </div>
          </h1>

          <p className="mt-6 text-base text-[#40210b] dark:text-[#b09a76]">
            I’m a software developer, born and raised in Chandigarh,
            India. I’m a student at BITS Pilani, Pilani, Rajasthan, India (IN). I am
            currently pursuing an M.Sc. in Physics and B.E. in Electronics and
            Electrical Engineering.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://x.com/snehilll_"
              aria-label="Follow on X"
              icon={XIcon}
            />
            <SocialLink
              href="mailto:snehilsundriyal@gmail.com"
              icon={MailIcon}
              aria-label="Contact Me"
            />
            <SocialLink
              href="https://github.com/SnehilSundriyal"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/snehil-sundriyal-348060219/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>

      {/*<div className="hidden lg:block"><Case /></div>*/}
      {/*<div className="lg:hidden"><Photos /></div>*/}
      <Photos />


      <Container className="mt-10 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
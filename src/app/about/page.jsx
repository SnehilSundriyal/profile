import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  // InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '../../../public/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-[#381900FF] transition hover:text-[#06923E] dark:text-[#dfc28d] dark:hover:text-[#06923E]"
      >
        <Icon className="h-6 w-6 flex-none fill-[#2c1500] dark:fill-[#dfc28d] transition group-hover:fill-[#06923E]" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Snehil Sundriyal. I live in Chandigarh, where I am attempting to get through life.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-background object-cover dark:bg-background"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-[#2c1500] sm:text-5xl dark:text-[#dfc28d]">
            I’m Snehil Sundriyal, born and raised in Chandigarh, India (IN).
          </h1>
          <div className="mt-6 space-y-7 text-base text-[#40210b] dark:text-[#b09a76]">
            <p>
              I have always been surrounded by gadgets and technology in my household,
              getting to play video games, listen to music, watch my favourite animated movies, (Ice Age II every weekend was a must!),
              on my computer, since the age of 2.
            </p>
            <p>
              At the age of 13, I stumbled upon a YouTube video - <em>The ULTIMATE RGB PC Build Guide!</em>.
              Being a kid obsessed with video games, it made me realise how I only knew very little of the <em>ENORMOUS</em> world of technology, and for me it hasn't stopped growing since!
              I spent a few hours a day learning more about how PC components work together to make my favourite games playable.
              I worked with my Uncle on various different motherboards during summer breaks, helping him assemble and/or fix a bunch of PCs for his clients.
            </p>
            <p>
              A few years down the line, that interest evolved into building highly functional and scalable applications,
              contributing drop by drop in this vast ocean of technology, stretching endlessly into our future. I also dwell in
              IoT, attempting to build better and more useful devices, which, at the very least convey my ability to build, and to enjoy the process of it all.
            </p>
            <p>
              As of now, I am only a student at Birla Institute of Technology & Science (BITS) Pilani, Pilani Campus. I am pursuing an M.Sc. in Physics as well as
              a B.E. in Electronics & Electrical Engineering, graduating in 2027. I am open to interning/working part time remotely. You have means to contact me in case you wish to know more.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/snehilll_" icon={XIcon}>
              Follow on X
            </SocialLink>
            {/*<SocialLink href="#" icon={InstagramIcon} className="mt-4">*/}
            {/*  Follow on Instagram*/}
            {/*</SocialLink>*/}
            <SocialLink href="https://github.com/SnehilSundriyal" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/snehil-sundriyal-348060219/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:snehilsundriyal@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-[#2c1500] pt-8 dark:border-[#dfc28d]"
            >
              snehilsundriyal@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}

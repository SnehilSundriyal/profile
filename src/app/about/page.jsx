import Image from 'next/image'
import { Container } from '@/components/Container'
import { SocialListLink } from '@/components/SocialLink'
import { site, socials } from '@/data/site'
import portraitImage from '../../../public/images/portrait.jpg'

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
              className="aspect-square rotate-3 rounded-2xl bg-surface-raised object-cover"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            I’m Snehil Sundriyal, born and raised in Chandigarh, India (IN).
          </h1>
          <div className="mt-6 space-y-7 text-base text-ink-muted">
            <p>
              I have always been surrounded by gadgets and technology in my household -
              playing video games, listening to music, watching my favourite animated movies (must watch Ice Age II every weekend!),
              on my computer, since the age of 2.
            </p>
            <p>
              At the age of 13, I stumbled upon a YouTube video - <em>The ULTIMATE RGB PC Build Guide!</em>.
              Being a kid obsessed with video games, it made me realise how I only knew very little of the <em>ENORMOUS</em> world of technology, and for me it hasn’t stopped growing since!
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
            {socials.map((s, i) => (
              <SocialListLink key={s.href} href={s.href} icon={s.icon} className={i > 0 ? 'mt-4' : ''}>
                {s.label}
              </SocialListLink>
            ))}
            <SocialListLink
              href={`mailto:${site.email}`}
              icon="mail"
              className="mt-8 border-t border-line pt-8"
            >
              {site.email}
            </SocialListLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}

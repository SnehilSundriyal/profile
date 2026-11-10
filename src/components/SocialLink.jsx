import Link from 'next/link'
import clsx from 'clsx'

import { brandIcons } from '@/components/Icons'
import { socials, site } from '@/data/site'

/** Icon-only link (home hero). */
export function SocialLink({ icon, className, ...props }) {
  let Icon = brandIcons[icon]
  return (
    <Link className={clsx('group -m-1 p-1', className)} {...props}>
      <Icon className="h-6 w-6 fill-ink transition group-hover:fill-ink-muted" />
    </Link>
  )
}

/** Icon + label list item (About sidebar). */
export function SocialListLink({ icon, href, className, children }) {
  let Icon = brandIcons[icon]
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-ink transition hover:text-accent"
      >
        <Icon className="h-6 w-6 flex-none fill-ink transition group-hover:fill-accent" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

/** The row of social icons, driven by src/data/site.js. */
export function SocialLinks({ className, withEmail = true }) {
  return (
    <div className={clsx('flex gap-6', className)}>
      {socials.map((s) => (
        <SocialLink key={s.href} href={s.href} icon={s.icon} aria-label={s.label} />
      ))}
      {withEmail && (
        <SocialLink href={`mailto:${site.email}`} icon="mail" aria-label="Email me" />
      )}
    </div>
  )
}

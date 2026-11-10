import Image from 'next/image'

import { Button } from '@/components/Button'
import { ArrowDownIcon, BriefcaseIcon } from '@/components/Icons'
import { site } from '@/data/site'
import { work } from '@/data/work'

function dateParts(value) {
  return typeof value === 'string'
    ? { label: value, dateTime: value }
    : value
}

function Role({ role }) {
  let start = dateParts(role.start)
  let end = dateParts(role.end)

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-surface shadow-md ring-1 shadow-ink/5 ring-ink/5 dark:bg-canvas dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-ink">{role.company}</dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-ink-muted">{role.title}</dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-link"
          aria-label={`${start.label} until ${end.label}`}
        >
          <time dateTime={start.dateTime}>{start.label}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={end.dateTime}>{end.label}</time>
        </dd>
      </dl>
    </li>
  )
}

export function Resume() {
  return (
    <div className="rounded-2xl border border-line p-6">
      <h2 className="flex text-sm font-semibold text-ink">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {work.map((role) => (
          <Role key={role.company} role={role} />
        ))}
      </ol>
      <Button href={site.resume} download variant="primary" className="group mt-3 w-full">
        Download Resume
        <ArrowDownIcon className="h-4 w-4 stroke-current" />
      </Button>
    </div>
  )
}

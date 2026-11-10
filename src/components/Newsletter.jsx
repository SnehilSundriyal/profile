import { Button } from '@/components/Button'
import { MailOutlineIcon } from '@/components/Icons'

export function Newsletter() {
  return (
    <form action="/thank-you" className="rounded-2xl border border-line p-6">
      <h2 className="flex text-sm font-semibold text-ink">
        <MailOutlineIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-ink-muted">
        Get notified when I publish something new.
      </p>
      <div className="mt-6 flex items-center">
        <span className="flex min-w-0 flex-auto p-px">
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            required
            className="w-full appearance-none rounded-[calc(var(--radius-md)-1px)] bg-field px-3 py-[calc(--spacing(2)-1px)] text-ink shadow-md shadow-ink/5 outline outline-line placeholder:text-ink-muted focus:ring-4 focus:ring-accent/10 focus:outline-accent sm:text-sm dark:text-canvas dark:placeholder:text-canvas/70"
          />
        </span>
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

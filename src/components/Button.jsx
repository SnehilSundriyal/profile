import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-[#16610E] font-semibold text-white hover:bg-[#86AB89] active:bg-zinc-800 active:text-zinc-100/70 dark:bg-[#B6F500] dark:text-[#40210b] dark:hover:bg-[#06923E] dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
  secondary:
    'bg-[#B6F500] font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70',
}

export function Button({ variant = 'primary', className, ...props }) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}

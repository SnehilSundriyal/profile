import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-accent font-semibold text-on-accent hover:bg-accent-hover active:bg-ink active:text-canvas/70',
  secondary:
    'bg-surface-raised font-medium text-ink hover:bg-surface active:bg-surface active:text-ink/60',
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

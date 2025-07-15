import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-[#2c1500] sm:text-5xl dark:text-[#dfc28d]">
          {title}
        </h1>
        <p className="mt-6 text-base text-[#40210b] dark:text-[#b09a76]">
          {intro}
        </p>
      </header>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  )
}

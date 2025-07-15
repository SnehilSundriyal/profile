import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export default function NotFound() {
  return (
    <Container className="flex h-full items-center pt-16 sm:pt-32">
      <div className="flex flex-col items-center">
        <p className="text-base font-semibold text-[#1C0F00] dark:text-[#bea882]">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#2c1500] sm:text-5xl dark:text-[#dfc28d]">
          Page not found
        </h1>
        <p className="mt-4 text-base text-[#40210b] dark:text-[#b09a76]">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Button href="/" variant="secondary" className="mt-4">
          Go back home
        </Button>
      </div>
    </Container>
  )
}

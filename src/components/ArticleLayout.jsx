'use client'

import { useContext } from 'react'
import { useRouter } from 'next/navigation'

import { AppContext } from '@/app/providers'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { ArrowLeftIcon } from '@/components/Icons'
import { formatDate } from '@/lib/formatDate'

export function ArticleLayout({ article, children }) {
  let router = useRouter()
  let { previousPathname } = useContext(AppContext)

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          {previousPathname && (
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to articles"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-accent shadow-md ring-1 shadow-ink/5 ring-line-soft transition hover:cursor-pointer hover:bg-accent-hover lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-on-accent transition" />
            </button>
          )}
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                {article.title}
              </h1>
              <time
                dateTime={article.date}
                className="order-first flex items-center text-base text-ink-muted"
              >
                <span className="h-4 w-0.5 rounded-full bg-ink" />
                <span className="ml-3">{formatDate(article.date)}</span>
              </time>
            </header>
            <Prose className="mt-8 text-ink" data-mdx-content>
              {children}
            </Prose>
          </article>
        </div>
      </div>
    </Container>
  )
}

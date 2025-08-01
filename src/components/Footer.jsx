import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-[#16610e] dark:hover:text-[#b6f500]"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-[#2c1500] pt-10 pb-16 dark:border-[#dfc28d]">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/articles">Articles</NavLink>
                {/*<NavLink href="/speaking">Speaking</NavLink>*/}
                {/*<NavLink href="/uses">Uses</NavLink>*/}
              </div>
              <p className="text-sm text-zinc-800 dark:text-zinc-300">
                &copy; {new Date().getFullYear()} Snehil Sundriyal. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}

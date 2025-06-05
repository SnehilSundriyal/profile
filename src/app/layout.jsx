import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Snehil Sundriyal',
    default:
      'Snehil - Software designer, engineer and a musician.',
  },
  description:
    'I’m Snehil Sundriyal, a software designer based in Chandigarh, India. I’m a student in BITS Pilani, Pilani, Rajasthan. I am currently pursuing an M.Sc. in Physics and B.E. in Electronics and Electrical Engineering.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}

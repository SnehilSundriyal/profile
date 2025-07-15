import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import localFont from 'next/font/local'
import { Montserrat, Raleway } from 'next/font/google'

import '@/styles/tailwind.css'

const sfPro = localFont({
  src: '../assets/fonts/SF-Pro-Display-Semibold.otf',
  weight: '400',
  variable: '--font-sf-pro',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

const oswald = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
})

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
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased ${montserrat.variable}`} suppressHydrationWarning>
      <body className={`flex h-full${oswald.className} bg-[#bea882] dark:bg-[#1C0F00FF]`}>
        <Providers>
          <div className="flex w-full ">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}

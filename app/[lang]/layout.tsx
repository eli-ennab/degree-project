import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import { Metadata } from 'next'
import { LanguageWrapper } from '@/context/LanguageContext'
import Footer from '@/components/Footer/Footer'
import StoryblokProvider from '@/components/StoryblokProvider'
import {
  Libre_Baskerville,
  Nanum_Myeongjo,
  Noto_Serif_Display,
  Playfair_Display,
  Syne,
} from 'next/font/google'

const libreBaskerville = Libre_Baskerville({
  variable: '--font-libre-baskerville',
  weight: ['400'],
  subsets: ['latin'],
})

const nanumMyeongjo = Nanum_Myeongjo({
  variable: '--font-nanum-myengjo',
  weight: ['700'],
  subsets: ['latin'],
})

const noto = Noto_Serif_Display({
  variable: '--font-noto-serif-display',
  weight: ['600'],
  subsets: ['latin'],
})

const playfair = Playfair_Display({
  variable: '--font-playfair-display',
  weight: ['400'],
  subsets: ['latin'],
})

const syne = Syne({
  variable: '--font-syne',
  weight: ['800'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Nioosha Shams',
  description: 'The Digital Representation of Nioosha Shams',
  metadataBase: new URL('https://fed22m-exjobb-eli-ennab.vercel.app'),
  authors: [{ name: 'Eli Ennab' }],
}

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
})

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: {
    lang: string
  }
}) {
  return (
    <StoryblokProvider>
      <LanguageWrapper>
        <html
          className={`${libreBaskerville.variable} ${nanumMyeongjo.variable} ${noto.variable} ${playfair.variable} ${syne.variable}`}
          lang={params.lang}
        >
          <body>
            {children}
            <Footer />
          </body>
        </html>
      </LanguageWrapper>
    </StoryblokProvider>
  )
}

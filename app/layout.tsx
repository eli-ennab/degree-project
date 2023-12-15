import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import { Metadata } from 'next'
import StoryblokProvider from '@/components/StoryblokProvider'
import Navigation from '@/components/Navigation/Navigation'
import { LanguageWrapper } from '@/context/LanguageContext'
import Footer from '@/components/Footer/Footer'
import { Noto_Serif_Display, Syne } from 'next/font/google'

const syne = Syne({
  variable: '--font-syne',
  weight: ['800'],
  subsets: ['latin'],
})

const noto = Noto_Serif_Display({
  variable: '--font-noto',
  weight: ['400'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Website - Nioosha Shams',
    template: '%s - Nioosha Shams',
  },
  description: 'A Digital Representation of Nioosha Shams',
}

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoryblokProvider>
      <LanguageWrapper>
        <html className={`${syne.variable} ${noto.variable}`} lang={'sv'}>
          <body>
            <Navigation />
            {children}
            <Footer />
          </body>
        </html>
      </LanguageWrapper>
    </StoryblokProvider>
  )
}

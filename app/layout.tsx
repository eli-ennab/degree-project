import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import { Metadata } from 'next'
import {
  Nanum_Myeongjo,
  Noto_Kufi_Arabic,
  Noto_Serif_Display,
  Old_Standard_TT,
  Syne,
} from 'next/font/google'
import { LanguageWrapper } from '@/context/LanguageContext'
import Footer from '@/components/Footer/Footer'
import StoryblokProvider from '@/components/StoryblokProvider'

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

const notoArabic = Noto_Kufi_Arabic({
  variable: '--font-noto-kufi-arabic',
  weight: ['600'],
  subsets: ['arabic'],
})

const oldStandard = Old_Standard_TT({
  variable: '--font-old-standard-tt',
  weight: ['400'],
  subsets: ['latin'],
})

const syne = Syne({
  variable: '--font-syne',
  weight: ['800'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Nioosha Shams',
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
        <html
          className={`${nanumMyeongjo.variable} ${notoArabic.variable} ${noto.variable} ${oldStandard.variable} ${syne.variable}`}
          lang={'sv'}
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

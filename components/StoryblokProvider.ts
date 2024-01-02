'use client'
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'

import BookItem from './BookItem/BookItem'
import BookGrid from './BookGrid/BookGrid'
import Footer from './Footer/Footer'
import Headline from './Headline/Headline'
import Hero from './Hero/Hero'
import ImageText from './ImageText/ImageText'
import Navigation from './Navigation/Navigation'
import Page from './Page'

const components = {
  bookItem: BookItem,
  bookGrid: BookGrid,
  footer: Footer,
  headline: Headline,
  hero: Hero,
  imageText: ImageText,
  navigation: Navigation,
  page: Page,
}

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components,
})

export default function StoryblokProvider({ children }: any) {
  return children
}

'use client'
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'

import BookItem from './BookItem/BookItem'
import BookGrid from './BookGrid/BookGrid'
import Footer from './Footer/Footer'
import Navigation from './Navigation/Navigation'
import Page from './Page'
import Teaser from './Teaser/Teaser'
import ImageText from './ImageText/ImageText'

const components = {
  bookItem: BookItem,
  bookGrid: BookGrid,
  footer: Footer,
  imageText: ImageText,
  navigation: Navigation,
  teaser: Teaser,
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

'use client'
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'

import ArticleItem from './ArticleItem/ArticleItem'
import ArticleGrid from './ArticleGrid/ArticleGrid'
import Footer from './Footer/Footer'
import Headline from './Headline/Headline'
import Hero from './Hero/Hero'
import InfoBlok from './infoBlok/InfoBlok'
import Navigation from './Navigation/Navigation'
import Page from './Page'

const components = {
  articleItem: ArticleItem,
  articleGrid: ArticleGrid,
  footer: Footer,
  headline: Headline,
  hero: Hero,
  infoBlok: InfoBlok,
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

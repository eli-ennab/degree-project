'use client'
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'

import ArticleItem from './ArticleItem/ArticleItem'
import ArticleGrid from './ArticleGrid/ArticleGrid'
import Divider from './Divider/Divider'
import Footer from './Footer/Footer'
import Headline from './Headline/Headline'
import Hero from './Hero/Hero'
import ImageBlok from './ImageBlok/ImageBlok'
import InfoBlok from './infoBlok/InfoBlok'
import LinkGrid from './LinkGrid/LinkGrid'
import Links from './Links/Links'
import Navigation from './Navigation/Navigation'
import Page from './Page'

const components = {
  articleItem: ArticleItem,
  articleGrid: ArticleGrid,
  divider: Divider,
  footer: Footer,
  headline: Headline,
  hero: Hero,
  imageBlok: ImageBlok,
  infoBlok: InfoBlok,
  linkGrid: LinkGrid,
  links: Links,
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

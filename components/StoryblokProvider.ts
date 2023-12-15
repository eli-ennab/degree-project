'use client'
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
 
import Feature from './Feature'
import Footer from './Footer'
import Grid from './Grid'
import Navigation from './Navigation'
import Page from './Page'
import Teaser from './Teaser'
 
const components = {
  navigation: Navigation,
  footer: Footer,
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
}
 
storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components
})
 
export default function StoryblokProvider({ children }: any) {
  return children
}
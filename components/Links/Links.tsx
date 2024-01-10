'use client'
import { storyblokEditable } from '@storyblok/react/rsc'
import { container } from './styles.css'

export default function Links({ blok }: any) {
  return <div {...storyblokEditable(blok)} className={container}></div>
}

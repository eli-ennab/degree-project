import { storyblokEditable } from '@storyblok/react/rsc'
import type { THeadline } from '@/types/Storyblok.types'
import { headLine } from './styles.css'

export default function Headline({ blok }: THeadline) {
  return (
    <h2
      {...storyblokEditable(blok)}
      className={headLine({
        backgroundColor: blok.backgroundColor,
        color: blok.color,
      })}
    >
      {blok.headline}
    </h2>
  )
}

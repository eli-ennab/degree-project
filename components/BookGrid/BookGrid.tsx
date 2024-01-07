import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc'
import { grid } from './styles.css'

export default function BookGrid({ blok }: any) {
  return (
    <div {...storyblokEditable(blok)} className={grid}>
      {blok.columns.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
}
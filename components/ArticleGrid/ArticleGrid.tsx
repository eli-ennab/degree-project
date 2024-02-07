import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc'
import type { TItemGrid } from '@/types/Storyblok.types'
import { grid } from './styles.css'

export default function ArticleGrid({ blok }: TItemGrid) {
  return (
    <div {...storyblokEditable(blok)} className={grid}>
      {blok.columns.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
}

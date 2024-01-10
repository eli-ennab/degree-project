import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc'
import { grid } from './styles.css'
import { TItemGrid } from '@/types/Item.types'

export default function ArticleGrid({ blok }: TItemGrid) {
  return (
    <div {...storyblokEditable(blok)} className={grid}>
      {blok.columns.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
}

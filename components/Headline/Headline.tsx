import { storyblokEditable } from '@storyblok/react/rsc'
import { useParams } from 'next/navigation'
import { THeadline } from '@/types/Storyblok.types'
import { container, headLine } from './styles.css'

export default function Headline({ blok }: THeadline) {
  const params = useParams()

  return (
    <div className={container}>
      <h2
        {...storyblokEditable(blok)}
        className={headLine({
          backgroundColor: blok.backgroundColor,
          color: blok.color,
          textAlign: params.lang === 'sv' ? 'sv' : 'fa',
        })}
      >
        {blok.headline}
      </h2>
    </div>
  )
}

import { storyblokEditable } from '@storyblok/react/rsc'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { container, headLine, image } from './styles.css'
import { THero } from '@/types/Hero.types'

export default function Hero({ blok }: THero) {
  const params = useParams()

  return (
    <div {...storyblokEditable(blok)} className={container}>
      <h2
        className={headLine(
          params.lang === 'sv' ? { textAlign: 'sv' } : { textAlign: 'fa' }
        )}
      >
        {blok.headline}
      </h2>
      <Image
        src={blok.image.filename}
        alt={blok.image.alt}
        height={Number(blok.height)}
        width={Number(blok.width)}
        className={image}
        priority={true}
      />
    </div>
  )
}

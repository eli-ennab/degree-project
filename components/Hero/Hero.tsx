import { storyblokEditable } from '@storyblok/react/rsc'
import Image from 'next/image'
import type { THero } from '@/types/Storyblok.types'
import { container, image, imageWrapper } from './styles.css'

export default function Hero({ blok }: THero) {
  return (
    <div {...storyblokEditable(blok)} className={container}>
      <div className={imageWrapper}>
        <Image
          src={blok.image.filename}
          alt={blok.image.alt}
          height={Number(blok.height)}
          width={Number(blok.width)}
          className={image}
          priority={true}
        />
      </div>
    </div>
  )
}

import { storyblokEditable } from '@storyblok/react/rsc'
import Image from 'next/image'
import type { TImageBlok } from '@/types/Storyblok.types'
import { container, image, imageWrapper } from './styles.css'

export default function ImageBlok({ blok }: TImageBlok) {
  return (
    <div {...storyblokEditable(blok)} className={container}>
      <div className={imageWrapper}>
        <Image
          src={blok.image.filename}
          alt={blok.image.alt}
          height={500}
          width={400}
          className={image}
          priority={true}
        />
      </div>
    </div>
  )
}

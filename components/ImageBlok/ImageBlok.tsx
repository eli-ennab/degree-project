'use client'
import { useEffect, useState } from 'react'
import { storyblokEditable } from '@storyblok/react/rsc'
import Image from 'next/image'
import { TImageBlok } from '@/types/Storyblok.types'
import { container, image, imageWrapper, text } from './styles.css'

export default function ImageBlok({ blok }: TImageBlok) {
  const [showSmooth, setShowSmooth] = useState(false)

  useEffect(() => {
    setShowSmooth(true)
  }, [])

  return (
    <div
      {...storyblokEditable(blok)}
      className={container}
      style={{
        opacity: showSmooth ? 1 : 0,
        transform: showSmooth ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.7s ease-in-out, transform 0.7s ease-in-out',
      }}
    >
      <div className={imageWrapper}>
        <Image
          src={blok.image.filename}
          alt={blok.image.alt}
          height={500}
          width={400}
          className={image}
          priority={true}
        />
        <span className={text}>{blok.text}</span>
      </div>
    </div>
  )
}

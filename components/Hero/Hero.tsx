'use client'
import { storyblokEditable } from '@storyblok/react/rsc'
import Image from 'next/image'
import { container, image, imageWrapper, text } from './styles.css'
import { THero } from '@/types/Storyblok.types'
import { useEffect, useState } from 'react'

export default function Hero({ blok }: THero) {
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
          height={Number(blok.height)}
          width={Number(blok.width)}
          className={image}
          priority={true}
        />
        <span className={text}>{blok.text}</span>
      </div>
    </div>
  )
}

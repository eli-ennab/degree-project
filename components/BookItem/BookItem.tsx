'use client'
import { storyblokEditable } from '@storyblok/react/rsc'
import { useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { container, image, text, title } from './styles.css'

export default function BookItem({ blok }: any) {
  const params = useParams()
  const [frontImage, setFrontImage] = useState(true)

  const toggleImage = () => {
    setFrontImage(!frontImage)
  }

  return (
    <div {...storyblokEditable(blok)} className={container}>
      <div onClick={toggleImage} className={image}>
        <Image
          src={frontImage ? blok.imageFront.filename : blok.imageBack.filename}
          alt={frontImage ? blok.imageFront.alt : blok.imageBack.alt}
          width={250}
          height={400}
        />
      </div>
      <span
        className={text(
          params.lang === 'sv' ? { textAlign: 'sv' } : { textAlign: 'fa' }
        )}
      >
        <h3 className={title}>{blok.title}</h3>
        <p
          className={text(
            params.lang === 'sv' ? { textAlign: 'sv' } : { textAlign: 'fa' }
          )}
        >
          {blok.description}
        </p>
      </span>
    </div>
  )
}
'use client'
import { storyblokEditable } from '@storyblok/react/rsc'
import { useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { image, text, title } from './styles.css'

const BookItem = ({ blok }: any) => {
  const params = useParams()
  const [frontImage, setFrontImage] = useState(true)

  const toggleImage = () => {
    setTimeout(() => {
      setFrontImage(!frontImage)
    }, 100)
  }

  return (
    <div {...storyblokEditable(blok)}>
      <div onClick={toggleImage} className={image}>
        <Image
          src={frontImage ? blok.imageFront.filename : blok.imageBack.filename}
          alt={frontImage ? blok.imageFront.alt : blok.imageBack.alt}
          width={220}
          height={350}
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

export default BookItem

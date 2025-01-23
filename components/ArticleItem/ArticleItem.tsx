'use client'
import { storyblokEditable } from '@storyblok/react/rsc'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SlLink } from 'react-icons/sl'
import type { TItem } from '@/types/Storyblok.types'
import {
  container,
  image,
  imageContainer,
  link,
  textContainer,
  title,
} from './styles.css'

export default function ArticleItem({ blok }: TItem) {
  const [frontImage, setFrontImage] = useState(true)

  const toggleImage = () => {
    setFrontImage(!frontImage)
  }

  return (
    <div {...storyblokEditable(blok)} className={container}>
      <div onClick={toggleImage} className={imageContainer}>
        <Image
          src={frontImage ? blok.imageFront.filename : blok.imageBack.filename}
          alt={frontImage ? blok.imageFront.alt : blok.imageBack.alt}
          width={250}
          height={400}
          className={image}
        />
      </div>
      <div className={textContainer}>
        <h3 className={title}>{blok.title}</h3>
        <p>{blok.description}</p>
        {blok.link && (
          <Link
            href={blok.link.url}
            target="_blank"
            className={link}
            aria-label={`Link to ${blok.linkText}`}
          >
            <SlLink /> {blok.linkText}
          </Link>
        )}
      </div>
    </div>
  )
}

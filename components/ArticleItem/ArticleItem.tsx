'use client'
import { storyblokEditable } from '@storyblok/react/rsc'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { SlLink } from 'react-icons/sl'
import type { TItem } from '@/types/Storyblok.types'
import {
  container,
  image,
  imageContainer,
  link,
  text,
  textContainer,
  title,
} from './styles.css'

export default function ArticleItem({ blok }: TItem) {
  const params = useParams()
  const [frontImage, setFrontImage] = useState(true)
  const [showSmooth, setShowSmooth] = useState(false)

  const toggleImage = () => {
    setFrontImage(!frontImage)
  }

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
      <div
        onClick={toggleImage}
        className={
          imageContainer()
          // params.lang === 'sv' ? { order: 'sv' } : { order: 'fa' }
        }
      >
        <Image
          src={frontImage ? blok.imageFront.filename : blok.imageBack.filename}
          alt={frontImage ? blok.imageFront.alt : blok.imageBack.alt}
          width={250}
          height={400}
          className={image}
        />
      </div>
      <div
        className={
          textContainer()
          // params.lang === 'sv' ? { order: 'sv' } : { order: 'fa' }
        }
      >
        <div
          className={
            text()
            // params.lang === 'sv' ? { textAlign: 'sv' } : { textAlign: 'fa' }
          }
        >
          <h3 className={title}>{blok.title}</h3>
          <p
            className={
              text()
              // params.lang === 'sv' ? { textAlign: 'sv' } : { textAlign: 'fa' }
            }
          >
            {blok.description}
          </p>
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
    </div>
  )
}

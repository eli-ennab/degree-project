'use client'
import { storyblokEditable } from '@storyblok/react/rsc'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { SlLink } from 'react-icons/sl'
import { container, image, link, text, title } from './styles.css'
import { TItem } from '@/types/Item.types'

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
      <div onClick={toggleImage} className={image}>
        <Image
          src={frontImage ? blok.imageFront.filename : blok.imageBack.filename}
          alt={frontImage ? blok.imageFront.alt : blok.imageBack.alt}
          width={250}
          height={400}
          loading={'lazy'}
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
      </span>
    </div>
  )
}

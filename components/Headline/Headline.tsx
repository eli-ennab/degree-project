'use client'
import { useEffect, useState } from 'react'
import { storyblokEditable } from '@storyblok/react/rsc'
import type { THeadline } from '@/types/Storyblok.types'
import { headLine } from './styles.css'

export default function Headline({ blok }: THeadline) {
  const [showSmooth, setShowSmooth] = useState(false)

  useEffect(() => {
    setShowSmooth(true)
  }, [])

  return (
    <h2
      {...storyblokEditable(blok)}
      style={{
        opacity: showSmooth ? 1 : 0,
        transform: showSmooth ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.7s ease-in-out, transform 0.7s ease-in-out',
      }}
      className={headLine({
        backgroundColor: blok.backgroundColor,
        color: blok.color,
      })}
    >
      {blok.headline}
    </h2>
  )
}

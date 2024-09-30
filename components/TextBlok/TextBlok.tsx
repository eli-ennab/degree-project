'use client'
import { storyblokEditable } from '@storyblok/react/rsc'
import type { TTextBlok } from '@/types/Storyblok.types'
import { useEffect, useState } from 'react'
import { container, text, wrapper } from './styles.css'

export default function TextBlok({ blok }: TTextBlok) {
  const [showSmooth, setShowSmooth] = useState(false)

  useEffect(() => {
    setShowSmooth(true)
  }, [])

  return (
    <div
      className={wrapper({ alignment: blok.alignment })}
      style={{
        opacity: showSmooth ? 1 : 0,
        transform: showSmooth ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.7s ease-in-out, transform 0.7s ease-in-out',
      }}
    >
      <div
        {...storyblokEditable(blok)}
        className={container({
          backgroundColor: blok.backgroundColor,
          color: blok.textColor,
          width: blok.width,
        })}
      >
        <h2 className={text}>{blok?.text.content[0].content[0].text}</h2>
      </div>
    </div>
  )
}

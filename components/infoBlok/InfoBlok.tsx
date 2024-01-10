'use client'
import { storyblokEditable } from '@storyblok/react/rsc'
import { useParams } from 'next/navigation'
import { wrapper, container, text } from './styles.css'
import { TInfoBlok } from '@/types/InfoBlok.types'
import { useEffect, useState } from 'react'

export default function InfoBlok({ blok }: TInfoBlok) {
  const params = useParams()
  const [showSmooth, setShowSmooth] = useState(false)

  useEffect(() => {
    setShowSmooth(true)
  }, [])

  return (
    <div
      className={wrapper({ alignment: blok.alignment })}
      style={{
        opacity: showSmooth ? 1 : 0,
        transition: 'opacity .9s ease-in-out',
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
        <h2
          className={text(
            params.lang === 'sv' ? { textAlign: 'sv' } : { textAlign: 'fa' }
          )}
        >
          {blok?.text.content[0].content[0].text}
        </h2>
      </div>
    </div>
  )
}

'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { NavigationData } from './types'
import { container, links } from './styles.css'

interface NavigationProps extends NavigationData {
  lang: 'sv' | 'fa-ir'
}

const Navigation = ({ data, lang }: NavigationProps) => {
  const { title } = data
  const params = useParams()
  const router = useRouter()

  return (
    <div className={container}>
      <h1>{title}</h1>
      <div className={links}>
        <Link href="">hem</Link>
        <button onClick={() => router.push(`${lang}/work`)}>vad jag gör</button>
        <button onClick={() => router.push(`${lang}/guestbook`)}>
          gästbok
        </button>
        {lang === 'sv' ? (
          <Link href="/fa-ir">byt till persiska</Link>
        ) : (
          <Link href="/sv">byt till svenska</Link>
        )}
      </div>
    </div>
  )
}

export default Navigation

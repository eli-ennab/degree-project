import React from 'react'
import Link from 'next/link'
import { NavigationData } from './types'
import { container, links } from './styles.css'

interface NavigationProps extends NavigationData {
  lang: 'sv' | 'fa-ir'
}

const Navigation = ({ data, lang }: NavigationProps) => {
  const { title } = data

  console.log(lang)
  return (
    <div className={container}>
      <h1>{title}</h1>
      <div className={links}>
        <Link href="">hem</Link>
        <Link href="">vad jag gör</Link>
        <Link href="">gästbok</Link>
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

'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useParams, usePathname } from 'next/navigation'
import { CgKey } from 'react-icons/cg'
import { SlArrowUp } from 'react-icons/sl'
import { arrow, container, link, key } from './styles.css'

export default function Footer() {
  const [isScrolled, setIsScrolled] = useState(false)
  const params = useParams()
  const pathname = usePathname()

  const isBrowser = () => typeof window !== 'undefined'

  const scrollToTop = () => {
    if (!isBrowser()) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <footer className={container}>
      {!params.slug &&
        (pathname.endsWith('sv') || pathname.endsWith('fa-ir')) && (
          <Link href={'/admin'} className={key}>
            <CgKey />
          </Link>
        )}

      {pathname.endsWith('guestbook') && (
        <Link href={'guestbook/create'} className={link}>
          skriv ett meddelande i gästboken
        </Link>
      )}

      {isScrolled && <SlArrowUp onClick={scrollToTop} className={arrow} />}
    </footer>
  )
}

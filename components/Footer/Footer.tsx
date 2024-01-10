'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useParams, usePathname } from 'next/navigation'
import { CgKey } from 'react-icons/cg'
import { SlArrowUp } from 'react-icons/sl'
import { SlEnvolope } from 'react-icons/sl'
import { arrow, container, envelope, key } from './styles.css'
import { useLanguageContext } from '@/context/LanguageContext'

export default function Footer() {
  const [isScrolled, setIsScrolled] = useState(false)
  const params = useParams()
  const pathname = usePathname()
  const { language } = useLanguageContext()

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
          <Link href={`/${language}/admin`} className={key}>
            <CgKey />
          </Link>
        )}

      {pathname.endsWith('guestbook') && (
        <Link href={'guestbook/create'} className={envelope}>
          <SlEnvolope />
        </Link>
      )}

      {isScrolled && <SlArrowUp onClick={scrollToTop} className={arrow} />}
    </footer>
  )
}

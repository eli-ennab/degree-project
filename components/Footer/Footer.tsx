'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { SlArrowUp } from 'react-icons/sl'
import { arrow, container, link } from './styles.css'

export default function Footer() {
  const [isScrolled, setIsScrolled] = useState(false)
  const params = useParams()

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
      {!params.slug && (
        <Link href={'/admin'} className={link}>
          admin
        </Link>
      )}

      {isScrolled && <SlArrowUp onClick={scrollToTop} className={arrow} />}
    </footer>
  )
}

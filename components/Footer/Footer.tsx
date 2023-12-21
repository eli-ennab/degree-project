'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SlArrowUp } from 'react-icons/sl'
import { arrow, container, link } from './styles.css'

const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false)
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
      <Link href={'/admin'} className={link}>
        admin
      </Link>
      {isScrolled && <SlArrowUp onClick={scrollToTop} className={arrow} />}
    </footer>
  )
}

export default Footer

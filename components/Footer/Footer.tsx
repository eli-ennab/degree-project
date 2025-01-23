'use client'
import { useEffect, useState } from 'react'
import { SlArrowUp } from 'react-icons/sl'
import { arrow, container } from './styles.css'

export default function Footer() {
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
      {isScrolled && <SlArrowUp onClick={scrollToTop} className={arrow} />}
    </footer>
  )
}

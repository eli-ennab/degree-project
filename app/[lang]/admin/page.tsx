'use client'
import { PiLockSimple } from 'react-icons/pi'
import Link from 'next/link'
import { SlArrowLeft } from 'react-icons/sl'
import { useLanguageContext } from '@/context/LanguageContext'
import { container, link, lock } from './styles.css'

export default function Admin() {
  const { language } = useLanguageContext()

  return (
    <>
      <Link
        href={`/${language}`}
        className={link}
        aria-label={'Link to go back'}
      >
        <SlArrowLeft />
      </Link>
      <div className={container}>
        <PiLockSimple className={lock} />
      </div>
    </>
  )
}

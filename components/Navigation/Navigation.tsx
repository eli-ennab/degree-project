'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useLanguageContext } from '@/context/LanguageContext'
import { container, link, links, title } from './styles.css'

const Navigation = () => {
  const router = useRouter()
  const { language, setLanguage } = useLanguageContext()

  const handleLanguageSwitch = () => {
    const newLanguage = language === 'sv' ? 'fa-ir' : 'sv'
    setLanguage(newLanguage)
    router.push(`/${newLanguage}`)
  }

  return (
    <header className={container}>
      <div>
        <h1 onClick={() => router.push(`/${language}`)} className={title}>
          Nioosha Shams
        </h1>
      </div>

      <ul className={links}>
        <Link href={`/${language}/gastbok`} className={link}>
          Gästbok
        </Link>
        <Link href={`/${language}/about`} className={link}>
          Om
        </Link>

        <a onClick={handleLanguageSwitch} className={link}>
          {language === 'sv' ? 'تغییر به فارسی' : 'Byt till svenska'}
        </a>
      </ul>
    </header>
  )
}

export default Navigation

'use client'
import { useLanguageContext } from '@/context/LanguageContext'
import { container, languageSwitch, links } from './styles.css'
import { useRouter } from 'next/navigation'

const Navigation = () => {
  const { language, setLanguage } = useLanguageContext()
  const router = useRouter()

  const handleLanguageSwitch = () => {
    router.push(language === 'sv' ? 'fa-ir' : 'sv')
    setLanguage(language === 'sv' ? 'fa-ir' : 'sv')
  }

  return (
    <header className={container}>
      <div>
        <h1>Nioosha Shams</h1>
      </div>

      <ul className={links}>
        <li>{language}</li>
      </ul>
      <button onClick={handleLanguageSwitch} className={languageSwitch}>
        {language === 'sv' ? 'byt till persiska' : 'byt till svenska'}
      </button>
    </header>
  )
}

export default Navigation

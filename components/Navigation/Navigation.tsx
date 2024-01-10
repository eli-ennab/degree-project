'use client'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useLanguageContext } from '@/context/LanguageContext'
import { container, link, links, title } from './styles.css'

const navigation = [
  { name: 'Nioosha', href: '/nioosha' },
  { name: 'Said and written', href: '/written' },
  { name: 'Guestbook', href: '/guestbook' },
]

export default function Navigation() {
  const router = useRouter()
  const pathname = usePathname()
  const { language, setLanguage } = useLanguageContext()

  const handleLanguageSwitch = () => {
    const newLanguage = language === 'sv' ? 'fa-ir' : 'sv'
    setLanguage(newLanguage)

    const newPathname = pathname.replace(`/${language}`, `/${newLanguage}`)
    router.push(newPathname)
  }

  return (
    <header className={container}>
      <div>
        <h1 onClick={() => router.push(`/${language}`)} className={title}>
          Nioosha Shams
        </h1>
      </div>

      <ul className={links}>
        {navigation.map((nav) => (
          <li key={nav.name}>
            <Link href={`/${language}${nav.href}`} className={link}>
              {nav.name}
            </Link>
          </li>
        ))}

        <li>
          <a onClick={handleLanguageSwitch} className={link}>
            {language === 'sv' ? 'تغییر به فارسی' : 'Byt till svenska'}
          </a>
        </li>
      </ul>
    </header>
  )
}

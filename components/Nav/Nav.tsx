'use client'
import { storyblokEditable } from '@storyblok/react/rsc'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useLanguageContext } from '@/context/LanguageContext'
import { container, link, links, title } from './styles.css'

export default function Nav({ blok }: any) {
  const router = useRouter()
  const pathname = usePathname()
  const { language, setLanguage } = useLanguageContext()

  const handleLanguageSwitch = () => {
    const newLanguage = language === 'sv' ? 'fa-ir' : 'sv'
    setLanguage(newLanguage)

    const newPathname = pathname.replace(`/${language}`, `/${newLanguage}`)
    router.push(newPathname)
  }

  const blokLinkData = blok?.links
    .map((linkGrid: any) =>
      linkGrid.links.map((linkItem: any) => ({
        name: linkItem.name,
        href: linkItem.href,
      }))
    )
    .flat()

  return (
    <header className={container}>
      <div>
        <h1 onClick={() => router.push(`/${language}`)} className={title}>
          Nioosha Shams
        </h1>
      </div>
      <div {...storyblokEditable(blok)}>
        <ul className={links}>
          {blokLinkData?.map((linkData: any, index: number) => (
            <li key={index}>
              <Link href={`/${language}${linkData.href}`} className={link}>
                {linkData.name}
              </Link>
            </li>
          ))}
          <li>
            <a onClick={handleLanguageSwitch} className={link}>
              {language === 'sv' ? 'تغییر به فارسی' : 'Byt till svenska'}
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

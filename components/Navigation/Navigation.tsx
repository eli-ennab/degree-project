'use client'
import { useEffect, useState } from 'react'
import { storyblokEditable } from '@storyblok/react/rsc'
import Link from 'next/link'
import { useRouter, usePathname, useParams } from 'next/navigation'
import { useMediaQuery } from 'react-responsive'
import { SlArrowLeft } from 'react-icons/sl'
import { TfiClose } from 'react-icons/tfi'
import { LiaGripLinesSolid } from 'react-icons/lia'
import { useLanguageContext } from '@/context/LanguageContext'
import type { TLink } from '@/types/Storyblok.types'
import { media } from '@/vanilla_extract/styles.css'
import {
  button,
  container,
  icon,
  link,
  links,
  logo,
  menuIcon,
  navigation,
} from './styles.css'

export default function Navigation({ blok }: any) {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const { language, setLanguage } = useLanguageContext()
  const [open, setOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const isTabletOrMobile = useMediaQuery({
    query: `(max-width: ${media.tablet})`,
  })

  const handleLanguageSwitch = () => {
    const newLanguage = language === 'sv' ? 'fa-ir' : 'sv'
    setLanguage(newLanguage)

    const newPathname = pathname.replace(`/${language}`, `/${newLanguage}`)
    router.push(newPathname)
  }

  const blokLinkData = blok?.links
    .map((linkGrid: any) =>
      linkGrid.links.map((linkItem: TLink) => ({
        name: linkItem.name,
        href: linkItem.href,
      }))
    )
    .flat()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return null
  }

  return isLoaded ? (
    <header className={container} dir={'ltr'}>
      <div>
        <h1
          onClick={() => router.push(`/${language}`)}
          className={logo({
            fontSize: params.lang === 'sv' ? 'sv' : 'fa',
          })}
        >
          {blok?.links[0]?.logo ? blok.links[0].logo : 'Nioosha Shams'}
        </h1>
      </div>

      {isTabletOrMobile && !pathname.startsWith(`/${language}/guestbook`) && (
        <button onClick={() => setOpen(!open)} className={button} id="icon">
          {open ? (
            <TfiClose className={menuIcon} />
          ) : (
            <LiaGripLinesSolid className={menuIcon} />
          )}
        </button>
      )}

      {isTabletOrMobile && pathname.startsWith(`/${language}/guestbook`) && (
        <Link
          href={`/${language}`}
          className={button}
          aria-label={'Link to go back to homepage'}
        >
          <SlArrowLeft />
        </Link>
      )}

      {(isTabletOrMobile && open) || !isTabletOrMobile ? (
        <div
          {...storyblokEditable(blok)}
          className={navigation(
            isTabletOrMobile && open
              ? { screen: 'mobile', state: 'open' }
              : { screen: 'desktop' }
          )}
        >
          <ul className={links}>
            {blokLinkData?.map((linkData: any, index: number) => (
              <li key={index}>
                <Link
                  href={`/${language}/${linkData.href}`}
                  className={link}
                  aria-label={`Link to go to ${linkData.name}`}
                >
                  {linkData.name}
                </Link>
              </li>
            ))}

            {pathname.startsWith(`/${language}/guestbook`) ? (
              <Link
                href={`/${language}`}
                className={icon}
                aria-label={'Link to go back to homepage'}
              >
                <SlArrowLeft />
              </Link>
            ) : (
              <li>
                <a
                  onClick={handleLanguageSwitch}
                  className={link}
                  aria-label={
                    'Link to switch between swedish and persian language content'
                  }
                >
                  {language === 'sv' ? 'فارسی' : 'Svenska'}
                </a>
              </li>
            )}
          </ul>
        </div>
      ) : null}
    </header>
  ) : null
}

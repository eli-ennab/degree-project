'use client'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { RiLoginCircleLine } from 'react-icons/ri'
import { useAuth } from '@/context/AuthContext'
import { useLanguageContext } from '@/context/LanguageContext'
import Button from '../Button/Button'
import { container, loginIcon, logoutButton, logoutIcon } from './styles.css'

export default function AdminNavigation() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const { language } = useLanguageContext()

  console.log(pathname)

  return (
    <div className={container}>
      {user ? (
        <Button
          className={logoutButton}
          onClick={() => {
            logout()
            router.push('/admin')
          }}
        >
          <RiLoginCircleLine className={logoutIcon} />
        </Button>
      ) : (
        <>
          <Link href={'/admin/login'}>
            {pathname === `/${language}/admin` ? (
              <RiLoginCircleLine className={loginIcon} />
            ) : (
              'no login'
            )}
          </Link>
        </>
      )}
    </div>
  )
}

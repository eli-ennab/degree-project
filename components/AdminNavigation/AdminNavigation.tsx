'use client'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import Button from '../Button/Button'
import { container, link } from './styles.css'

export default function AdminNavigation() {
  const { user, logout } = useAuth()
  const router = useRouter()

  return (
    <div className={container}>
      {user ? (
        <Button
          onClick={() => {
            logout()
            router.push('/admin')
          }}
        >
          Sign out
        </Button>
      ) : (
        <>
          <Link href={'/admin/login'} className={link}>
            login
          </Link>
        </>
      )}
    </div>
  )
}

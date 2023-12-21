'use client'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import { container, link } from './styles.css'
import { useRouter } from 'next/navigation'

const AdminNavigation = () => {
  const { user, logout } = useAuth()
  const router = useRouter()
  return (
    <div className={container}>
      {user ? (
        <button
          onClick={() => {
            logout()
            router.push('/admin')
          }}
        >
          sign out
        </button>
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

export default AdminNavigation

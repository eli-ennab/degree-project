'use client'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import { container } from './styles.css'
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
          Sign out
        </button>
      ) : (
        <>
          <Link href={'/admin/signup'}>Signup</Link>
          <Link href={'/admin/login'}>Login</Link>
        </>
      )}
    </div>
  )
}

export default AdminNavigation

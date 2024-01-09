'use client'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
import { container, field, formWrapper, link } from './styles.css'

export default function Login() {
  const { login } = useAuth()
  const router = useRouter()

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleLogin = async (e: any) => {
    e.preventDefault()

    try {
      await login(data.email, data.password)
      router.push('/admin/dashboard')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={container}>
      <Link href={'/'} className={link}>
        go back
      </Link>
      <form onSubmit={handleLogin} className={formWrapper}>
        <input
          type="email"
          placeholder="Enter email"
          required
          onChange={(e: any) =>
            setData({
              ...data,
              email: e.target.value.trim(),
            })
          }
          value={data.email}
          className={field}
        />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e: any) =>
            setData({
              ...data,
              password: e.target.value.trim(),
            })
          }
          value={data.password}
          className={field}
        />

        <button type="submit">enter</button>
      </form>
    </div>
  )
}

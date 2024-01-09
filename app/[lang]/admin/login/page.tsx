'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import {
  button,
  container,
  field,
  formLabel,
  formWrapper,
  link,
} from './styles.css'

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
    <>
      <Link href={'/'} className={link} style={{ padding: '90px' }}>
        go back
      </Link>
      <div className={container}>
        <form onSubmit={handleLogin} className={formWrapper}>
          <label className={formLabel}>Admin login</label>
          <input
            type="email"
            placeholder="Email"
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

          <button type="submit" className={button}>
            Enter
          </button>
        </form>
      </div>
    </>
  )
}

'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FirebaseError } from 'firebase/app'
import { useAuth } from '@/context/AuthContext'
import Button from '@/components/Button/Button'
import {
  container,
  error,
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
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleLogin = async (e: any) => {
    e.preventDefault()

    try {
      await login(data.email, data.password)
      router.push('/admin/dashboard')
      setErrorMessage(null)
    } catch (error) {
      if (error instanceof FirebaseError) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage('Something went wrong, try again.')
      }
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
          {errorMessage && <span className={error}>{errorMessage}</span>}

          <Button type="submit">Enter</Button>
        </form>
      </div>
    </>
  )
}

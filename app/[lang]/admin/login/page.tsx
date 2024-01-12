'use client'
import React from 'react'
import { useState } from 'react'
import { FirebaseError } from 'firebase/app'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SlArrowLeft } from 'react-icons/sl'
import { useAuth } from '@/context/AuthContext'
import { useLanguageContext } from '@/context/LanguageContext'
import {
  button,
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
  const { language } = useLanguageContext()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await login(data.email, data.password)
      router.push(`/${language}/admin/dashboard`)
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
      <Link
        href={`/${language}`}
        className={link}
        aria-label={'Link to go to homepage'}
      >
        <SlArrowLeft />
      </Link>
      <div className={container}>
        <form onSubmit={handleLogin} className={formWrapper}>
          <label className={formLabel}>Admin login</label>
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setData({
                ...data,
                password: e.target.value.trim(),
              })
            }
            value={data.password}
            className={field}
          />
          {errorMessage && <span className={error}>{errorMessage}</span>}

          <button id="text" type="submit" className={button}>
            Enter
          </button>
        </form>
      </div>
    </>
  )
}

'use client'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { container } from '../styles.css'

export default function Login() {
  const { user, login } = useAuth()
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
      <h2>Sign up</h2>

      <form onSubmit={handleLogin}>
        <label>Email address</label>
        <input
          type="email"
          placeholder="Enter email"
          required
          onChange={(e: any) =>
            setData({
              ...data,
              email: e.target.value,
            })
          }
          value={data.email}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e: any) =>
            setData({
              ...data,
              password: e.target.value,
            })
          }
          value={data.password}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

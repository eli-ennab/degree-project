'use client'
import React from 'react'
import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { container } from '../styles.css'

export default function Signup() {
  const { user, signup } = useAuth()

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleSignup = async (e: any) => {
    e.preventDefault()

    try {
      await signup(data.email, data.password)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={container}>
      <h2>Sign up</h2>

      <form onSubmit={handleSignup}>
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

        <button type="submit">Signup</button>
      </form>
    </div>
  )
}

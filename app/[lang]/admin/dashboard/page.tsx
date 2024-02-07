'use client'
import AdminDashboard from '@/components/AdminDashboard/AdminDashboard'
import { useAuth } from '@/context/AuthContext'

export default function Dashboard() {
  const { user } = useAuth()
  return <div dir={'auto'}>{user ? <AdminDashboard /> : null}</div>
}

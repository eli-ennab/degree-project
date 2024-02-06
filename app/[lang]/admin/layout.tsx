import { AuthContextProvider } from '@/context/AuthContext'
import AdminNavigation from '@/components/AdminNavigation/AdminNavigation'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthContextProvider>
      <AdminNavigation />
      {children}
    </AuthContextProvider>
  )
}

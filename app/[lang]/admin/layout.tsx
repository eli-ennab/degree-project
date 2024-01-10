import { AuthContextProvider } from '@/context/AuthContext'
import AdminNavigation from '@/components/AdminNavigation/AdminNavigation'

export const metadata = {
  title: 'Nioosha Shams',
  description: 'A Digital Representation of Nioosha Shams',
}

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

import { Noto_Serif_Display, Syne } from 'next/font/google'
import { AuthContextProvider } from '@/context/AuthContext'
import AdminNavigation from '@/components/AdminNavigation/AdminNavigation'

const syne = Syne({
  variable: '--font-syne',
  weight: ['800'],
  subsets: ['latin'],
})

const noto = Noto_Serif_Display({
  variable: '--font-noto',
  weight: ['400'],
  subsets: ['latin'],
})

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

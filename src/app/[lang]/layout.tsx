import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nioosha Shams',
  description: 'The Digital Representation of Nioosha Shams',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  )
}

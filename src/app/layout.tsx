import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextJS 13 with Drizzle ORM',
  description: 'Generated by create next app',
}

const urls = {
  Home: '/',
  Person: '/person',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar urls={urls} />
        {children}
      </body>
    </html>
  )
}

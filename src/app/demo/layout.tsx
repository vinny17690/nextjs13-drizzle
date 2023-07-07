// Demo layout

import Link from 'next/link';
import { Inter } from 'next/font/google'
import NavBar from '../NavBar';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Demo Route',
  description: 'This is demo route with its own layout',
}

const urls = {
  Contact: 'contact',
  Twitter: 'twitter',
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar urls={urls} prefix='/demo' />
      {children}
    </>
  )
}

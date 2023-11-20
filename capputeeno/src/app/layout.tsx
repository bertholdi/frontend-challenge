
import type { Metadata } from 'next'
import { Saira } from 'next/font/google'
import './globals.css'
import { Header } from './components/header'

const saira = Saira({ 
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Capooteeno',
  description: 'Loja Virtual',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={saira.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}

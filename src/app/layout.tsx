import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css'

const nunito = Nunito_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:'Shop',
  description:'lojas para alimentos dos animais de estimação',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}

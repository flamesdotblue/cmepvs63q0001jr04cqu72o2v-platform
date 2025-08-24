import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Kitty 'Slugger' Paws — Neo‑Brutal Baseball Portfolio",
  description: 'The official neo‑brutal portfolio of baseball phenom Kitty, with stats, highlights, and upcoming games.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body">
        {children}
      </body>
    </html>
  )
}

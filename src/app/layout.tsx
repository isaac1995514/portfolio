import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { logo } from '/images'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Isaac Leong',
    description: 'Portfolio of Isaac Leong',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}

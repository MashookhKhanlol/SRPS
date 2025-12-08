import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "PM Surya Ghar: Mufti Bijli Yojana - National Portal",
  description:
    "PM Surya Ghar Mufti Bijli Yojana - Government of India initiative for residential solar installations with subsidies",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: "index, follow",
  openGraph: {
    title: "PM Surya Ghar: Mufti Bijli Yojana",
    description: "Government of India residential solar subsidy scheme",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}

import { ClerkProvider } from "@clerk/nextjs"

import { TailwindIndicator } from "@/components/tailwind-indicator"

import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          {children}
          <TailwindIndicator />
        </body>
      </html>
    </ClerkProvider>
  )
}
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "./components-app/sidebar"

const inter = Inter({ subsets: ["latin"] })

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </body>
    </html>
  )
}


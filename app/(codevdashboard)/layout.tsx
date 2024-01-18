import React from "react"
import { Outfit } from "next/font/google"

const outfit = Outfit({
  subsets: ["latin"],
  // variable: "--font-outfit",
})
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.className} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}

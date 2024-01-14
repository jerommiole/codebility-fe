import React from "react"
import { Outfit } from "next/font/google"
import Sidebar from "../../Components/sidebar"
import Contain from "../../Components/Contain"

const outfit = Outfit({
  subsets: ["latin"],
  // variable: "--font-outfit",
})
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <Contain>
        <main className="container w-full rounded-md bg-figmamuted p-4 shadow-stiglitz">{children}</main>
      </Contain>
    </>
  )
}

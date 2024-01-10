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
        <main className="w-[100%] overflow-x-hidden rounded-md border bg-figmamuted shadow-stiglitz dark:border-none dark:shadow-none lg:h-[100%] lg:overflow-y-hidden lg:px-[17px] lg:py-[51px]">
          {children}
        </main>
      </Contain>
    </>
  )
}

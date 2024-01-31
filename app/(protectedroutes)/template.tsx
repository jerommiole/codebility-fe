"use client"

import React, { useEffect, useState } from "react"

import Sidebar from "../../Components/sidebar"
import Contain from "../../Components/Contain"
import { useSession } from "next-auth/react"
import Loader from "Components/loader"
import { useRouter } from "next/navigation"

export default function Template({ children }: { children: React.ReactNode }) {
  const session = useSession()
  const router = useRouter()
  console.log(session)
  if (session?.status === "loading")
    return (
      <div className="fixed left-0 top-0 z-20 flex h-screen w-screen flex-col items-center justify-center gap-10 bg-black">
        <Loader />
        <div className="flex items-center justify-center gap-5">
          <div className="text-primaryColor">Please wait</div>
          <div className="dots translate-y-1"></div>
        </div>
      </div>
    )
  if (session?.status === "authenticated")
    return (
      <>
        <Sidebar />
        <Contain>{children}</Contain>
      </>
    )
}

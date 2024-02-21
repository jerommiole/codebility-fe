"use client"

import React, { useEffect, useMemo, useState } from "react"

import Sidebar from "../../Components/Sidebar1"
import Contain from "../../Components/Contain"
import { useSession } from "next-auth/react"
import Loader from "Components/loader"
import useGoogleAuthCookie from "hooks/use-cookie"
import { useRouter } from "next/navigation"

export default function Template({ children }: { children: React.ReactNode }) {
  const session = useSession()
  const googleAuth = useGoogleAuthCookie()
  const router = useRouter()
  // if (session?.status === "loading" || googleAuth?.status === "loading")
  //   return (
  //     <div className="fixed left-0 top-0 z-20 flex h-screen w-screen flex-col items-center justify-center gap-10 bg-black">
  //       <Loader />
  //       <div className="flex items-center justify-center gap-5">
  //         <div className="text-primaryColor">Please wait</div>
  //         <div className="dots translate-y-1"></div>
  //       </div>
  //     </div>
  //   )
  // if (session?.status === "authenticated" || googleAuth?.status === "authenticated")
  // TODO:
  return (
    <>
      <Sidebar />
      <Contain>{children}</Contain>
    </>
  )
}

"use client"

import React, { useEffect, useState } from "react"

import Sidebar from "../../Components/sidebar"
import Contain from "../../Components/Contain"
import { useSession } from "next-auth/react"
import Loader from "Components/loader"
import { useRouter } from "next/navigation"

export default function Template({ children }: { children: React.ReactNode }) {
  const session = useSession()
  console.log(session)
  const router = useRouter()
  // const getUser = async () => {
  //   try {
  //     const url = `${process.env.NEXT_PUBLIC_BASE_API}/auth/login/success`

  //     fetch(url, {
  //       method: "GET",
  //       credentials: "include",
  //     })
  //       .then((data) => {
  //         console.log(data)
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  // getUser()
  // console.log("rendering...")

  //Uncomment this for securing the codevdashboard

  // useEffect(() => {
  //   if (session?.status === "unauthenticated") {
  //     router.push("/signin")
  //   }
  // }, [router, session?.status])

  // Uncomment this to enable loading screen

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
  return (
    <>
      <Sidebar />
      <Contain>{children}</Contain>
    </>
  )
}

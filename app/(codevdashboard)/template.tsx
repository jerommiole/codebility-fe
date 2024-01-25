"use client"

import React, { useEffect } from "react"

import Sidebar from "../../Components/sidebar"
import Contain from "../../Components/Contain"

export default async function Template({ children }: { children: React.ReactNode }) {
  const getUser = async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_BASE_API}/auth/login/success`

      const response = await fetch(url, {
        method: "GET",
        credentials: "include",
      })

      const data = await response.json()
      console.log("data", data)
      // setUser(data.user._json);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUser()
    console.log("rendering...")
  }, [])

  return (
    <>
      <Sidebar />
      <Contain>{children}</Contain>
    </>
  )
}

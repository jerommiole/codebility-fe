"use client"

import { getCookies } from "lib/cookies"
import { useEffect, useState } from "react"

type cookieState = {
  status: "loading" | "unauthenticated" | "authenticated"
  data: any | null
}

function useGoogleAuthCookie() {
  const [cookie, setCookie] = useState<cookieState>({
    status: "loading",
    data: null,
  })
  useEffect(() => {
    async function newC() {
      const cookies = await getCookies()
      if (!cookies) {
        setCookie((prev) => ({
          ...prev,
          status: "unauthenticated",
          data: cookies,
        }))
        return null
      }
      setCookie((prev) => ({
        ...prev,
        status: "authenticated",
        data: cookies,
      }))
    }
    newC()
  }, [])
  return cookie
}

export default useGoogleAuthCookie

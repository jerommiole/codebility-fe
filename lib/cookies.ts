"use server"
import { cookies } from "next/headers"
import { getServerSession } from "next-auth"
import { jwtDecode } from "jwt-decode"

export async function getCookies() {
  const allCookies = await cookies()
  const googleAuthCookie = allCookies.get("x-auth-cookie")
  if (!googleAuthCookie) return null

  return jwtDecode(googleAuthCookie?.value as string)
}

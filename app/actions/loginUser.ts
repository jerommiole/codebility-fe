"use server"

import { cookies } from "next/headers"
import { FieldValues } from "react-hook-form"
import { loginUser } from "../api"

export async function loginUserAction(data: FieldValues) {
  const user: any = await loginUser(data)
  if (user && user.data) {
    cookies().set({
      name: "codebility-auth",
      value: user.data.token,
      httpOnly: false,
      secure: true,
      path: "/",
    })
    return { success: true, message: "Logged In" }
  }
  return user
}

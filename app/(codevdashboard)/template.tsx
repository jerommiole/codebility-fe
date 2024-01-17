import { SessionProvider } from "next-auth/react"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

import Sidebar from "../../Components/sidebar"
import Contain from "../../Components/Contain"
import React from "react"
import { authOptions } from "../../lib/authOptions"

export default async function Template({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return redirect("/signin")
  }

  return (
    <>
      <Sidebar user={session.user} />
      <Contain user={session.user}>{children}</Contain>
    </>
  )
}

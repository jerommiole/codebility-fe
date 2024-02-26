"use client"

import Sidebar from "@/Components/shared/dashboard/LeftSidebar"
import Navbar from "@/Components/shared/dashboard/Navbar"
import useGoogleAuthCookie from "hooks/use-cookie"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useNavStore } from "hooks/use-sidebar"

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

  const { activeNav } = useNavStore()

  return (
    <main className="relative">
      <div className="flex">
        <Sidebar />
        <Navbar />
        <section className="max-md:pb-14 flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 sm:px-14">
          <div className=" w-full max-w-4xl">{children}</div>
        </section>
      </div>
    </main>
  )
}

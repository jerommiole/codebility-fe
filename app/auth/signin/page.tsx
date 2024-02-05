"use client"

import AuthForm from "./components/SignInForm"
import Image from "next/image"

import SignUpButton from "./components/signInFooter"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import Loader from "Components/loader"
import useGoogleAuthCookie from "hooks/use-cookie"
import { getCookies } from "lib/cookies"

function Sign() {
  const session = useSession()
  const router = useRouter()
  const googleAuthCredentials = useGoogleAuthCookie()
  // const [currentUser, setCurrentUser] = useState<any>({})
  useEffect(() => {
    if (session?.status === "authenticated" || googleAuthCredentials?.status === "authenticated") {
      router.push("/dashboard")
    }
  }, [session?.status, googleAuthCredentials?.status, router])

  // console.log(currentUser)
  if (
    session?.status === "loading" ||
    session?.status === "authenticated" ||
    googleAuthCredentials?.status === "loading" ||
    googleAuthCredentials?.status === "authenticated"
  )
    return (
      <div className="fixed left-0 top-0 z-20 flex h-screen w-screen flex-col items-center justify-center gap-10 bg-black">
        <Loader />
        <div className="flex items-center justify-center gap-5">
          <div className="text-primaryColor">Please wait</div>
          <div className="dots translate-y-1"></div>
        </div>
      </div>
    )
  if (session?.status === "unauthenticated")
    return (
      <div className="flex h-screen py-4 sm:py-0">
        <div className="flex flex-1 flex-col overflow-auto">
          <div className="h-full px-8">
            <div className="flex h-full flex-col sm:mx-auto sm:max-w-[40rem] sm:py-10">
              <div className="relative -ml-1 h-10 w-[12rem]">
                <Image
                  className="cursor-pointer object-cover"
                  onClick={() => router.push("/")}
                  src="/codebilityLogoBlue.png"
                  fill
                  alt="codebilityLogoBlue"
                />
              </div>

              <h1 className="my-2 text-3xl font-semibold sm:my-5">Lorem Ipsum</h1>
              <div className=" flex flex-1 flex-col justify-center">
                <AuthForm />
              </div>
              <SignUpButton />
            </div>
          </div>
        </div>
        <div className="relative hidden flex-1 justify-between md:flex md:flex-col">
          <div className="absolute inset-0 ">
            <Image
              src="/SigninSplash.png"
              sizes="100%"
              priority
              quality={80}
              alt="splash-signin"
              fill
              className="object-cover"
            />
          </div>

          <div className="z-10 mt-32 p-10 text-right">
            <h1 className=" text-5xl font-semibold text-white">
              Lorem ipsum dolor <br /> sit amet
            </h1>
          </div>
          <div className="z-10 px-20 py-32 2xl:px-32">
            <div className="2xl:ml-32">
              <h1 className="text-5xl font-semibold text-white">Lorem ipsum</h1>
              <p className="text-base">Nisi lacus sed viverra tellus in hac habitasse platea dictumst</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Sign

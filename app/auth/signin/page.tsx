"use client"

import AuthForm from "./components/AuthForm"
import Image from "next/image"

import SignUpButton from "./components/signUpButton"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { useEffect } from "react"

function Sign() {
  const session = useSession()
  const router = useRouter()
  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/dashboard")
    }
  }, [session?.status, router])
  if (session?.status === "unauthenticated")
    return (
      <div className="flex h-screen">
        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="h-full px-8">
            <div className="flex h-full flex-col overflow-x-hidden py-8 sm:mx-auto sm:max-w-[40rem] sm:py-10">
              <Image
                className="cursor-pointer"
                onClick={() => router.push("/")}
                src="/codebilityLogoBlue.png"
                width={220}
                height={50}
                alt="codebilityLogoBlue"
              />
              <h1 className="my-2 text-3xl font-semibold sm:my-5">Lorem Ipsum</h1>
              <div className=" flex flex-1 flex-col justify-center">
                <AuthForm />{" "}
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

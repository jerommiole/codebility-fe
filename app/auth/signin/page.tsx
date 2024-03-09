"use client"

import AuthForm from "./SigninForm"

import useGoogleAuthCookie from "hooks/use-cookie"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import SigninFooter from "../SigninFooter"
import { LogoCodebilityBlue } from "@/public/assets/svgs"

const Sign = () => {
  // const session = useSession()
  // const router = useRouter()
  // const googleAuthCredentials = useGoogleAuthCookie()
  // useEffect(() => {
  //   console.log(session)
  //   if (session?.status === "authenticated" || googleAuthCredentials?.status === "authenticated") {
  //     router.push("/dashboard")
  //   }
  // }, [session?.status, googleAuthCredentials?.status, router])

  // TODO:
  // if (
  //   session?.status === "loading" ||
  //   session?.status === "authenticated" ||
  //   googleAuthCredentials?.status === "loading" ||
  //   googleAuthCredentials?.status === "authenticated"
  // )
  //   return (
  //     <div className="fixed left-0 top-0 z-20 flex h-screen w-screen flex-col items-center justify-center gap-10 bg-black">
  //       <Loader />
  //       <div className="flex items-center justify-center gap-5">
  //         <div className="text-primaryColor">Please wait</div>
  //         <div className="dots translate-y-1"></div>
  //       </div>
  //     </div>
  //   )
  // if (session?.status === "unauthenticated")
  // TODO:

  return (
    <div className="flex min-h-screen flex-col bg-black-400 text-white lg:flex-row">
      <div className="flex basis-[50%] flex-col justify-between gap-6 p-10">
        <Link href="/">
          <Image src="/assets/svgs/codebility-blue.svg" width={300} height={67} alt="Codebility Logo" />
        </Link>
        <p className="text-2xl">Pioneering Passion, Crafting Futures</p>

        <AuthForm />

        <div className="flex flex-col gap-4 lg:gap-10">
          <p className="md:text-md text-center text-sm lg:text-lg">
            Don't have an account?{" "}
            <Link href="/auth/signup" className="text-blue-100 hover:underline">
              Sign Up
            </Link>
          </p>

          <SigninFooter />
        </div>
      </div>

      <div className="relative hidden basis-[50%] lg:flex">
        <Image
          src="/assets/images/blindfoldedman-full.jpg"
          priority
          quality={100}
          alt="blindedfolded"
          width={1080}
          height={675}
          className="w-full object-cover object-left opacity-45"
        />
      </div>
    </div>
  )
}

export default Sign

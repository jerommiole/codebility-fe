"use client"

import Image from "next/image"
import AuthForm from "./components/SignInForm"

import loginImageBackground from "@/public/assets/images/blindfoldedman-full.jpg"
import useGoogleAuthCookie from "hooks/use-cookie"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import SignUpButton from "./components/signInFooter"
import codebilityLogoBlue from "@/public/assets/images/codebility-logo-blue-transparent.png"

function Sign() {
  const session = useSession()
  const router = useRouter()
  const googleAuthCredentials = useGoogleAuthCookie()
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
    <div className="flex h-screen bg-black-500 py-4 text-primaryColor sm:py-0">
      <div className="flex flex-1 flex-col overflow-auto">
        <div className="h-full px-8">
          <div className="flex h-full flex-col sm:mx-auto sm:max-w-[40rem] sm:py-10">
            <div className="relative -ml-1 h-10 w-[12rem]">
              <Image
                className="cursor-pointer object-cover"
                onClick={() => router.push("/")}
                src={codebilityLogoBlue}
                fill
                alt="codebilityLogoBlue"
              />
            </div>

            <p className="my-2 text-2xl  sm:my-5">Pioneering Passion, Crafting Futures</p>
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
            src={loginImageBackground}
            sizes="100%"
            priority
            quality={80}
            alt="splash-signin"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Sign

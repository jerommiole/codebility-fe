"use client"

import Image from "next/image"
import SignUpForm from "./components/SignUpForm"
import { useRouter } from "next/navigation"
import { useModal } from "hooks/use-modal"

const SignUp = () => {
  const router = useRouter()
  const { onOpen } = useModal()
  return (
    <div className="flex h-screen w-full py-4 sm:py-0">
      <div className="relative hidden flex-1 justify-between md:flex md:flex-col">
        <div className="absolute inset-0">
          <Image
            src="/signup-splash.png"
            sizes="100%"
            priority
            quality={80}
            alt="splash-signup"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <div className="h-full px-8">
          <div className="flex h-full flex-col sm:mx-auto sm:max-w-[40rem] sm:py-10">
            <div className="relative -ml-2 h-10 w-[12rem]">
              <Image
                className="cursor-pointer object-cover"
                onClick={() => router.push("/")}
                fill
                src="/codebilityLogoBlue.png"
                alt="codebilityLogoBlue"
              />
            </div>
            <p className="text-base">Nisi lacus sed viverra tellus in hac habitasse platea dictumst</p>
            <SignUpForm />
            <div className="mb-10 text-center text-sm">
              Have An Account?{" "}
              <span
                onClick={() => router.push("/auth/signin")}
                className="cursor-pointer text-blue-500 hover:underline"
              >
                Sign In
              </span>
            </div>
            <div className="flex justify-between">
              <span onClick={() => onOpen("privacyPolicy")} className="cursor-pointer text-sm hover:underline">
                Privacy Policy
              </span>
              <span onClick={() => onOpen("termsAndCondition")} className="cursor-pointer text-sm hover:underline">
                Terms and Conditions
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp

"use client"

import Image from "next/image"
import SignUpForm from "./components/SignUpForm"
import { useRouter } from "next/navigation"
import { useModal } from "hooks/use-modal"

const SignUp = () => {
  const router = useRouter()
  const { onOpen } = useModal()
  return (
    <div className="flex h-screen w-full">
      <div className="relative hidden flex-1 justify-between lg:flex lg:flex-col">
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
        <div className="z-10 ml-20 mt-32 w-[24rem]">
          <p>
            Nisi lacus sed viverra tellus in hac habitasse platea dictumst Nisi lacus sed viverra tellus in hac
            habitasse platea
          </p>
        </div>
        <div className="z-10 flex flex-col">
          <div className="mb-32 ml-20 flex w-[28rem] flex-col">
            <h1 className="text-5xl font-semibold text-white">Lorem ipsum dolor sit amet</h1>
            <p className="mt-5 text-base">Nisi lacus sed viverra tellus in hac habitasse platea dictumst</p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="overflow-y-auto px-8">
          <div className="overflow-x-hidden py-8 sm:mx-auto sm:max-w-[40rem] sm:py-10">
            <Image
              className="cursor-pointer"
              onClick={() => router.push("/")}
              src="/codebilityLogoBlue.png"
              width={220}
              height={50}
              alt="codebilityLogoBlue"
            />
            <p className="my-4 text-base">Nisi lacus sed viverra tellus in hac habitasse platea dictumst</p>
            <h1 className="my-8 text-xl">Sign Up</h1>
            <SignUpForm />
            <div className="my-10 text-center sm:my-20">
              Have An Account?{" "}
              <span onClick={() => router.push("/signin")} className="cursor-pointer text-blue-500 hover:underline">
                Sign In
              </span>
            </div>
            <div className="flex justify-between">
              <span onClick={() => onOpen("privacyPolicy")} className="cursor-pointer hover:underline">
                Privacy Policy
              </span>
              <span onClick={() => onOpen("termsAndCondition")} className="cursor-pointer hover:underline">
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

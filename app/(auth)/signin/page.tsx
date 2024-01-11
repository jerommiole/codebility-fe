"use client"

import { useModal } from "hooks/use-modal"
import AuthForm from "./components/AuthForm"
import Image from "next/image"
import { useRouter } from "next/navigation"

const Sign = () => {
  const router = useRouter()
  const { onOpen } = useModal()
  return (
    //
    <div className="flex h-screen">
      <div className="flex flex-1 flex-col justify-center">
        <div className="overflow-y-auto px-12 py-20 lg:px-32 2xl:px-36">
          <Image src="/codebilityLogoBlue.png" width={220} height={50} alt="codebilityLogoBlue" />
          <h1 className="my-5 text-5xl font-semibold">Lorem Ipsum</h1>
          <h2 className="my-14 text-xl">Sign in</h2>
          <AuthForm />
          <div className="my-20 text-center">
            Don't have an account?{" "}
            <span onClick={() => router.push("/signup")} className="cursor-pointer text-blue-500 hover:underline">
              Sign Up
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
      <div className="relative hidden flex-1 justify-between  lg:flex lg:flex-col">
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

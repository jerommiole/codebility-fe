"use client"

import Image from "next/image"
import SignUpForm from "./components/SignUpForm"
import { useRouter } from "next/navigation"
import { useModal } from "hooks/use-modal"
import SigninFooter from "../SigninFooter"
import Link from "next/link"

const SignUp = () => {
  const router = useRouter()
  const { onOpen } = useModal()

  return (
    <div className="flex h-screen flex-col bg-black-400 text-white lg:flex-row">
      <div className="relative hidden basis-[50%] lg:flex">
        <Image
          src="/assets/images/blindfoldedman-full.jpg"
          priority
          quality={100}
          alt="blindedfolded"
          width={1080}
          height={675}
          className="w-full object-cover object-right opacity-45"
        />
      </div>
      <div className="flex basis-[50%] flex-col justify-between gap-6 p-10">
        <Link href="/">
          <Image
            className="h-[45px] w-[200px] cursor-pointer object-cover"
            src="/assets/svgs/codebility-blue.svg"
            width={200}
            height={45}
            alt="Codebility Logo"
          />
        </Link>
        <p className="text-2xl">Pioneering Passion, Crafting Futures</p>

        <SignUpForm />

        <p className="md:text-md text-center text-sm lg:text-lg">
          Have An Account?{" "}
          <Link href="/auth/signin" className="text-blue-100 hover:underline">
            Sign In
          </Link>
        </p>

        <SigninFooter />
      </div>
    </div>
  )
}

export default SignUp

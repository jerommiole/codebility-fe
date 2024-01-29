"use client"
import { useEffect, useState } from "react"
import SignInputs from "Components/SignInputs"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import Loader from "Components/loader"
import { Button } from "Components/ui/button"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { SignInValidation } from "lib/validations/auth"
import { z } from "zod"
import SignInInputs from "Components/SigninInputs"
import { loginUser } from "app/api"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import NextAuth from "next-auth"

type Inputs = z.infer<typeof SignInValidation>

const AuthForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const session = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/dashboard")
    }
  }, [session?.status, router])

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(SignInValidation),
  })

  const googleAuth = () => {
    window.open("http://localhost:9000/api/v1/development/auth/google", "_self")
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true)
    const result = await signIn("credentials", {
      redirect: false,
      ...data,
    })
    console.log(result)
    if (!result?.ok) {
      setIsLoading(false)
    }
  }

  const socialAction = (action: string) => {
    console.log(action)
  }
  // if (isLoading)
  //   return (
  //     <div className="fixed left-0 top-0 z-20 flex h-screen w-screen flex-col items-center justify-center gap-10 bg-black">
  //       <Loader />
  //       <div className="flex items-center justify-center gap-5">
  //         <div className="text-primaryColor">Please wait</div>
  //         <div className="dots translate-y-1"></div>
  //       </div>
  //     </div>
  //   )

  return (
    <div className="relative">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <SignInInputs
          id="email"
          label="Email"
          placeholder="LoremIpsum@gmail.com"
          register={register}
          errors={errors}
          disabled={isLoading}
          type="email"
          required
        />
        <SignInInputs
          id="password"
          label="Password"
          placeholder="********************"
          register={register}
          errors={errors}
          disabled={isLoading}
          type="password"
          required
        />
        <Button
          type="submit"
          className="mt-4 bg-[#6a78f2] p-5 text-sm font-bold text-white hover:bg-[#3c448b] sm:p-8 sm:text-lg"
          disabled={isLoading}
        >
          Sign In
        </Button>
        <div className="inline-flex w-full items-center justify-center">
          <hr className="my-4 h-[2px] w-full border-0 bg-gray-200 dark:bg-gray-600 sm:my-8" />
          <span className="absolute left-1/2 -translate-x-1/2 bg-white px-3 text-xs font-medium text-gray-900 dark:bg-background dark:text-white">
            OR
          </span>
        </div>
        <div className="flex justify-evenly gap-2">
          <div
            className="flex flex-1 cursor-pointer items-center justify-center gap-4 rounded-md border p-2 sm:w-36 2xl:w-auto"
            onClick={googleAuth}
          >
            <Image src="/google-sign.png" width={20} height={20} alt="facebook-logo" className="h-7 w-7" />
            <p className="hidden 2xl:block">Sign up with Google</p>
          </div>
          <div className="flex flex-1 cursor-pointer items-center justify-center gap-4 rounded-md border p-2 sm:w-36 2xl:w-auto">
            <Image src="/facebook-sign.png" width={20} height={20} alt="facebook-logo" className="h-7 w-7" />
            <p className="hidden 2xl:block">Sign up with Facebook</p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AuthForm

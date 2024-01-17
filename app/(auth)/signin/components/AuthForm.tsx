"use client"

import SignInputs from "Components/SignInputs"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { useCallback, useEffect, useState } from "react"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "Components/ui/button"
import Image from "next/image"

const AuthForm = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {}, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }

  const socialAction = (action: string) => {
    console.log(action)
  }

  return (
    <div className="relative">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <SignInputs
          id="email"
          label="Email"
          placeholder="LoremIpsum@gmail.com"
          register={register}
          errors={errors}
          disabled={isLoading}
          type="email"
          required
        />
        <SignInputs
          id="password"
          label="Password"
          placeholder="********************"
          register={register}
          errors={errors}
          disabled={isLoading}
          type="password"
          required
        />
        <Button type="submit" className="mt-10 bg-[#6a78f2] p-8 text-white hover:bg-[#3c448b]">
          Sign In
        </Button>
        <div className="mt-3 inline-flex w-full items-center justify-center">
          <hr className="my-8 h-[2px] w-full border-0 bg-gray-200 dark:bg-gray-600" />
          <span className="absolute left-1/2 -translate-x-1/2 bg-white px-5 font-medium text-gray-900 dark:bg-background dark:text-white">
            or
          </span>
        </div>
        <div className="flex justify-evenly">
          <div
            className="flex w-36 cursor-pointer items-center justify-center gap-4 rounded-md bg-gray-800 p-2 2xl:w-auto 2xl:bg-transparent"
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          >
            <Image src="/google-sign.png" width={20} height={20} alt="facebook-logo" className="h-7 w-7" />
            <p className="hidden 2xl:block">Sign up with Google</p>
          </div>
          <div className="flex w-36 cursor-pointer items-center justify-center gap-4 rounded-md bg-gray-800 p-2 2xl:w-auto 2xl:bg-transparent">
            <Image src="/facebook-sign.png" width={20} height={20} alt="facebook-logo" className="h-7 w-7" />
            <p className="hidden 2xl:block">Sign up with Facebook</p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AuthForm

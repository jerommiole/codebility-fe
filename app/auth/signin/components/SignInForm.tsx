"use client"
import { useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { Button } from "Components/ui/button"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { SignInValidation } from "lib/validations/auth"
import { z } from "zod"
import SignInInputs from "Components/SigninInputs"
import { signIn } from "next-auth/react"
import toast from "react-hot-toast"
import { redirect, useRouter } from "next/navigation"

type Inputs = z.infer<typeof SignInValidation>

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

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
    window.open(`${process.env.NEXT_PUBLIC_BASE_API}/auth/google`, "_self")
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true)
    const result = await signIn("credentials", {
      redirect: false,
      ...data,
    })
    if (!result || result.status === 5000) {
      toast.error("Something went wrong")
      setIsLoading(false)
      return null
    }
    if (!result?.ok) {
      setIsLoading(false)
      toast.error("Invalid Credentials")
    } else {
      toast.success("Logged In")
    }
  }

  const socialAction = async (action: string) => {
    setIsLoading(true)

    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error("Invalid Credentials")
        }

        if (callback?.ok && !callback?.error) {
          toast.success("Logged In!")
        }
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <div className="relative flex flex-1 flex-col items-center justify-center">
      <div className="w-full">
        <h2 className="text-md mb-5 sm:text-xl">Sign in</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <SignInInputs
            id="email"
            label="Email"
            placeholder="LoremIpsum@gmail.com"
            register={register}
            errors={errors}
            disabled={isLoading}
            type="email"
          />
          <SignInInputs
            id="password"
            label="Password"
            placeholder="********************"
            register={register}
            errors={errors}
            disabled={isLoading}
            type="password"
          />
          <Button
            type="submit"
            className="sm:text-md mt-4 bg-[#6a78f2] p-5 text-sm font-bold text-white hover:bg-[#3c448b]"
            disabled={isLoading}
          >
            Sign In
          </Button>
          <div className="inline-flex w-full items-center justify-center">
            <hr className="my-2 h-[2px] w-full border-0 bg-gray-200 dark:bg-gray-600" />
            <span className="absolute left-1/2 -translate-x-1/2 bg-white px-3 text-xs font-medium text-gray-900 dark:bg-background dark:text-white">
              OR
            </span>
          </div>
          <div className="flex justify-evenly gap-2">
            <div
              onClick={googleAuth}
              className="flex flex-1 cursor-pointer items-center justify-center rounded-md border p-2 hover:bg-gray-700"
            >
              <div className="flex items-center gap-2">
                <div className="relative h-6 w-6">
                  <Image src="/google-sign.png" alt="facebook-logo" fill className="object-cover" />
                </div>
                <p className="hidden text-sm lg:block">Sign in with Google</p>
              </div>
            </div>
            <div className="flex flex-1 cursor-pointer items-center justify-center rounded-md border p-2 hover:bg-gray-700">
              <div className="flex items-center gap-2">
                <div className="relative h-6 w-6">
                  <Image src="/facebook-sign.png" alt="facebook-logo" fill className="object-cover" />
                </div>
                <p className="hidden text-sm lg:block">Sign in with Facebook</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignInForm

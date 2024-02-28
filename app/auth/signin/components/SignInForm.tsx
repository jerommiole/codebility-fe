"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import SignInInputs from "Components/SigninInputs"
import { Button } from "Components/ui/button"
import { SignInValidation } from "lib/validations/auth"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { z } from "zod"

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
    if (!result || result.status === 500) {
      toast.error("Something went wrong")
      setIsLoading(false)
      return null
    }
    if (!result?.ok) {
      setIsLoading(false)
      toast.error("Invalid Credentials")
    } else {
      toast.success("Logged In")
      router.push("/dashboard")
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
        </form>
      </div>
    </div>
  )
}

export default SignInForm

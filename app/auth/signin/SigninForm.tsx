"use client"

import { Button } from "@/Components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import SignInInputs from "@/app/auth/signin/SigninInputs"
import { SignInValidation } from "lib/validations/auth"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { z } from "zod"
import { loginUserAction } from "@/app/actions/loginUser"

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

  // const googleAuth = () => {
  //   window.open(`${process.env.NEXT_PUBLIC_BASE_API}/auth/google`, "_self")
  // }

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true)
    const result = await loginUserAction(data)
    if (!result || result.status === 500) {
      toast.error("Something went wrong")
      setIsLoading(false)
      return null
    }
    if (!result?.success) {
      setIsLoading(false)
      toast.error("Invalid Credentials")
    } else {
      toast.success("Logged In")
      router.push("/dashboard")
    }
  }

  // const socialAction = async (action: string) => {
  //   setIsLoading(true)

  //   signIn(action, { redirect: false })
  //     .then((callback) => {
  //       if (callback?.error) {
  //         toast.error("Invalid Credentials")
  //       }

  //       if (callback?.ok && !callback?.error) {
  //         toast.success("Logged In!")
  //       }
  //     })
  //     .finally(() => setIsLoading(false))
  // }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg lg:text-2xl">Sign in</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-8">
          <SignInInputs
            id="email"
            label="Email"
            placeholder="Email"
            register={register}
            errors={errors}
            disabled={isLoading}
            type="email"
          />
          <SignInInputs
            id="password"
            label="Password"
            placeholder="Password"
            register={register}
            errors={errors}
            disabled={isLoading}
            type="password"
          />
          <Button type="submit" variant="default" className="text-lg" disabled={isLoading}>
            Sign In
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm

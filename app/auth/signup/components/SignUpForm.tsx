"use client"

import SignInputs from "@/app/auth/signup/SignupInputs"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { useEffect, useState, useRef } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "Components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { useModal } from "hooks/use-modal"
import { useTechStackStore } from "hooks/use-techstack"
import { SignUpValidation } from "lib/validations/auth"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import clsx from "clsx"
import { useSchedule } from "hooks/use-timeavail"
import { signupUser } from "app/api"
import toast from "react-hot-toast"
import { makeApiCallWithTimeout } from "lib/timeoutcall"

import facebookIcon from "@/public/assets/icons/icon-facebook.svg"
import googleIcon from "@/public/assets/icons/icon-google.svg"

type Inputs = z.infer<typeof SignUpValidation>

const steps = [
  {
    id: "Step 1",
    fields: ["name", "address", "email", "githubLink", "portfolioLink"],
  },
  {
    id: "Step 2",
    fields: ["techstacks", "password", "confirmPassword", "schedule", "position"],
  },
]

const AuthForm = () => {
  const router = useRouter()
  const [previousStep, setPreviousStep] = useState(1)
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const div_1 = useRef<HTMLDivElement>(null)
  const div_2 = useRef<HTMLDivElement>(null)
  const { stack, clearStack, setStack } = useTechStackStore()
  const { time, clearTime } = useSchedule()
  const delta = currentStep - previousStep
  const [emailExist, setEmailExist] = useState(false)
  const [rawErrors, setRawErrors] = useState<string[]>([])

  type FieldName = keyof Inputs

  const next = async () => {
    const fields = steps[currentStep - 1]?.fields
    const output = await trigger(fields as FieldName[], { shouldFocus: true })
    if (!output) return
    setPreviousStep(currentStep)
    setCurrentStep((step) => step + 1)
  }

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep)
      setCurrentStep((step) => step - 1)
    }
  }

  useEffect(() => {}, [])
  const { onOpen } = useModal()

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    setValue,
    setError,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(SignUpValidation),
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    //TODO: Finalizing Sign up backend
    setEmailExist(false)
    setIsLoading(true)
    const createdUser: any = await makeApiCallWithTimeout(signupUser(data), 2000)
    console.log(createdUser)
    if (!createdUser || createdUser.status === 500) {
      toast.error("Something went wrong")
      setIsLoading(false)
      return null
    }
    if (createdUser.rawErrors) {
      createdUser.rawErrors.map((rawError: string) => {
        toast.error(rawError)
      })
      setCurrentStep(1)
      setIsLoading(false)
      return null
    }
    if (
      createdUser &&
      createdUser.data?.errorCode === "P2002" &&
      createdUser.data?.errorTarget?.includes("email_address")
    ) {
      setIsLoading(false)
      setCurrentStep(1)
      setEmailExist(true)
      toast.error("Sign up failed")
      return null
    }
    clearTime()
    clearStack()
    reset()
    setCurrentStep(1)
    toast.success("Account Created")
    router.push("/auth/signin")
    return null
  }

  const string = stack.map((item, i) => item.name).join(", ")
  const newTime = (time.from || time.to) && `${time.from} - ${time.to}`

  const socialAction = (action: string) => {}

  return (
    <div className="relative flex flex-1 flex-col items-center justify-center py-2">
      <div className="w-full">
        <h1 className="mb-4 text-xl">Sign Up</h1>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          {currentStep === 1 && (
            <motion.div
              className="flex w-full flex-col gap-4 px-2"
              id="page1"
              ref={div_1}
              initial={{ x: delta >= 1 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <SignInputs
                id="name"
                label="Name"
                placeholder="John Doe"
                register={register}
                errors={errors}
                disabled={isLoading}
                type="text"
                required
              />
              <SignInputs
                id="address"
                label="Address"
                placeholder="City, Province/State, Zip Code ,Country"
                register={register}
                errors={errors}
                disabled={isLoading}
                type="text"
                required
              />
              <SignInputs
                id="email"
                label="Email"
                placeholder="LoremIpsum@gmail.com"
                register={register}
                errors={errors}
                disabled={isLoading}
                type="email"
                emailAlreadyExist={emailExist}
                required
              />
              <SignInputs
                id="githubLink"
                label="Github Link"
                placeholder="eg. (https://github.com/LoremIpsum)"
                register={register}
                errors={errors}
                disabled={isLoading}
                type="text"
                required
              />
              <SignInputs
                id="portfolioLink"
                label="Portfolio Link"
                placeholder="eg. (portfolio.vercel.app)"
                register={register}
                errors={errors}
                disabled={isLoading}
                type="text"
                required
              />
            </motion.div>
          )}
          {currentStep === 2 && (
            <motion.div
              className="flex w-full flex-col gap-4 px-2"
              id="page2"
              ref={div_2}
              initial={{ x: delta >= 1 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <SignInputs
                onClick={(e) => {
                  onOpen("techStackModal")
                }}
                id="techstacks"
                label="Tech Stacks"
                placeholder="Java, Node, Python"
                register={register}
                errors={errors}
                disabled={isLoading}
                type="text"
                values={string}
                required
                readonly
                setValue={setValue}
              />
              <SignInputs
                id="password"
                label="Password"
                placeholder="***************"
                register={register}
                errors={errors}
                disabled={isLoading}
                type="password"
                required
              />
              <SignInputs
                id="confirmPassword"
                label="Confirm Password"
                placeholder="***************"
                register={register}
                errors={errors}
                disabled={isLoading}
                type="password"
                required
              />
              <SignInputs
                id="schedule"
                label="Schedule"
                placeholder="5:30 pm Onwards"
                register={register}
                errors={errors}
                disabled={isLoading}
                values={newTime}
                onClick={() => onOpen("scheduleModal")}
                type="text"
                required
                readonly
                setValue={setValue}
              />
              <SignInputs
                id="position"
                label="Position"
                placeholder="Front End Developer"
                register={register}
                errors={errors}
                disabled={isLoading}
                type="text"
                required
              />
            </motion.div>
          )}
          <div className={clsx("flex gap-2", currentStep === 2 ? "" : "flex-col")}>
            {currentStep === 1 && (
              <Button
                onClick={() => next()}
                type="button"
                className="mt-8 bg-[#6a78f2] p-5 text-sm font-bold text-white hover:bg-[#3c448b]"
                disabled={isLoading}
              >
                Next
              </Button>
            )}
            {currentStep === 2 && (
              <>
                <Button
                  onClick={() => prev()}
                  type="button"
                  className={clsx(
                    "mt-8 bg-[#8e47f7] p-5 text-sm font-bold text-white hover:bg-[#8e47f7]/80",
                    currentStep === 2 && "flex-1"
                  )}
                  disabled={isLoading}
                >
                  Previous
                </Button>
                <Button
                  type="submit"
                  className={clsx(
                    "mt-8 bg-[#6a78f2] p-5 text-sm font-bold text-white hover:bg-[#6a78f2] sm:hover:bg-[#3c448b]",
                    currentStep === 2 && "flex-1"
                  )}
                  disabled={isLoading}
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default AuthForm

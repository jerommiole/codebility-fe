"use client"

import SignInputs from "Components/SignInputs"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { useCallback, useEffect, useState, useRef } from "react"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "Components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

import slack from "public/slack-signup.png"
import facebook from "public/facebook-sign.png"
import google from "public/google-sign.png"
import github from "public/github-signup.png"
import { useModal } from "hooks/use-modal"
import { useTechStackStore } from "hooks/use-techstack"
import { SignUpValidation } from "lib/validations/auth"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import clsx from "clsx"

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

  const delta = currentStep - previousStep
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

  const icons = [
    {
      name: "Google",
      icon: google,
    },
    {
      name: "Facebook",
      icon: facebook,
    },
  ]

  useEffect(() => {}, [])
  const { onOpen } = useModal()

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(SignUpValidation),
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
    reset()
  }

  const socialAction = (action: string) => {
    console.log(action)
  }

  const { stack } = useTechStackStore()

  const string = stack.map((item, i) => item.name)

  return (
    <div className="relative">
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
              onClick={() => onOpen("techStackModal")}
              id="techstacks"
              label="Tech Stacks"
              placeholder="Java, Node, Python"
              register={register}
              errors={errors}
              disabled={isLoading}
              type="text"
              values={string.join(", ")}
              onChange={() => {
                console.log("wew")
              }}
              required
              readonly
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
              type="text"
              required
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
              className="mt-8 bg-[#6a78f2] p-5 text-sm font-bold text-white hover:bg-[#3c448b] sm:p-8 sm:text-lg"
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
                  "mt-8 bg-[#8e47f7] p-5 text-sm font-bold text-white hover:bg-[#8e47f7]/80 sm:p-8 sm:text-lg",
                  currentStep === 2 && "flex-1"
                )}
              >
                Previous
              </Button>
              <Button
                type="submit"
                className={clsx(
                  "mt-8 bg-[#6a78f2] p-5 text-sm font-bold text-white hover:bg-[#3c448b] sm:p-8 sm:text-lg",
                  currentStep === 2 && "flex-1"
                )}
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
        <div className="inline-flex w-full items-center justify-center">
          <hr className="my-4 h-[2px] w-full border-0 bg-gray-200 dark:bg-gray-600 sm:my-8" />
          <span className="absolute left-1/2 -translate-x-1/2 bg-white px-3 text-xs font-medium text-gray-900 dark:bg-background dark:text-white">
            OR
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {icons.map((item, index) => (
            <div
              key={`div-${item.name}-${index}`}
              className="flex cursor-pointer items-center justify-center rounded-md border p-2 hover:bg-gray-700"
            >
              <div className="flex gap-2">
                <Image src={item.icon} width={20} height={20} alt="facebook-logo" className="h-7 w-7" />
                <p className="hidden 2xl:block">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  )
}

export default AuthForm

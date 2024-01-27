"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { useModal } from "hooks/use-modal"

const SignUpButton = () => {
  const router = useRouter()
  const { onOpen } = useModal()

  return (
    <>
      <div className="my-10 text-center sm:my-20">
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
    </>
  )
}

export default SignUpButton

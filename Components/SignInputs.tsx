"use client"

import clsx from "clsx"
import { FieldError, FieldErrors, FieldErrorsImpl, FieldValues, Merge, UseFormRegister } from "react-hook-form"
import { EyeCloseSVG, EyeSVG } from "./logos"
import { useEffect, useState } from "react"
import { SignUpValidation, SignInValidation } from "lib/validations/auth"
import { z } from "zod"

type Inputs = z.infer<typeof SignUpValidation>

interface InputProps {
  label: string
  id:
    | "name"
    | "address"
    | "email"
    | "githubLink"
    | "portfolioLink"
    | "techstacks"
    | "password"
    | "confirmPassword"
    | "schedule"
    | "position"
  type?: string
  required?: boolean
  register: UseFormRegister<Inputs>
  errors: FieldErrors
  disabled?: boolean
  placeholder?: string
  values?: string
  onClick?: () => void
  onChange?: () => void
  readonly?: boolean
}

const SignInputs = ({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
  placeholder,
  onClick,
  values,
  onChange,
  readonly,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="flex flex-col" onClick={onClick}>
      <label htmlFor={id} className={clsx("text-xs sm:ml-5", errors[id] && "text-red-500")}>
        {label}
      </label>
      <div className="relative flex flex-col">
        <input
          id={id}
          type={!showPassword ? type : "text"}
          autoComplete={id}
          disabled={disabled}
          {...register(id)}
          className={clsx(
            "text-md border-b-2 bg-transparent p-2 placeholder:text-gray-600 focus:outline-none sm:p-5 sm:text-xl",
            errors[id] ? "border-red-500" : "border-white",
            disabled && "cursor-default opacity-50",
            readonly && "cursor-default",
            type === "password" && "pr-16"
          )}
          placeholder={placeholder}
          value={values}
          onChange={onChange}
          readOnly={readonly}
        />
        {type === "password" && (
          <div className="absolute right-4 top-[50%] w-6 -translate-y-[50%] cursor-pointer sm:right-6 sm:w-8">
            {showPassword ? (
              <EyeCloseSVG onClick={() => setShowPassword((prev) => !prev)} className="text-[#9747ff]" />
            ) : (
              <EyeSVG onClick={() => setShowPassword((prev) => !prev)} className="" />
            )}
          </div>
        )}
      </div>
      {errors[id]?.message && (
        <p className="mt-2 text-sm text-red-400">{(errors[id]?.message as string) || "An error occurred"}</p>
      )}
    </div>
  )
}

export default SignInputs

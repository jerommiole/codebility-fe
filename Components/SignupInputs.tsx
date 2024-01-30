"use client"

import {
  FieldError,
  FieldErrors,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form"
import { EyeCloseSVG, EyeSVG } from "./logos"
import { useEffect, useMemo, useRef, useState } from "react"
import { SignUpValidation, SignInValidation } from "lib/validations/auth"
import { z } from "zod"
import { cn } from "lib/utils"

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
  onClick?: (e?: any) => void
  onChange?: (e: any) => void
  readonly?: boolean
  setValue?: any
}

const SignUpInputs = ({
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
  setValue,
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const newVal = useMemo(() => {
    return values
  }, [values])
  useEffect(() => {
    if (inputRef.current && readonly) {
      inputRef.current.value = newVal ?? ""
      setValue(id, newVal ?? "")
    }
  }, [newVal])
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="flex flex-col" onClick={onClick}>
      <label htmlFor={id} className={cn("flex items-center justify-between text-xs", errors[id] && "text-red-500")}>
        {label}
        {errors[id]?.message && (
          <p className="rounded-xl bg-red-900 p-1 px-2 text-xs text-white">
            {(errors[id]?.message as string) || "An error occurred"}
          </p>
        )}
      </label>
      <div className="relative flex flex-col">
        {readonly ? (
          <input
            id={id}
            type={!showPassword ? type : "text"}
            autoComplete={id}
            disabled={disabled}
            {...register(id)}
            className={cn(
              "text-md border-b-2 bg-transparent p-2 text-sm placeholder:text-gray-600 focus:outline-none",
              errors[id] ? "border-red-500" : "border-white",
              disabled && "cursor-default opacity-50",
              readonly && "cursor-default",
              type === "password" && "pr-16"
            )}
            placeholder={placeholder}
            ref={inputRef}
            // defaultValue={s}
            // value={s}
            // onChange={(e) => {
            //   console.log("wew")
            // }}
            readOnly={readonly}
          />
        ) : (
          <input
            id={id}
            type={!showPassword ? type : "text"}
            autoComplete={id}
            disabled={disabled}
            {...register(id)}
            className={cn(
              "text-md border-b-2 bg-transparent p-2 text-sm placeholder:text-gray-600 focus:outline-none",
              errors[id] ? "border-red-500" : "border-white",
              disabled && "cursor-default opacity-50",
              readonly && "cursor-default",
              type === "password" && "pr-16"
            )}
            placeholder={placeholder}
            readOnly={readonly}
          />
        )}
        {type === "password" && (
          <div className="absolute right-4 top-[50%] w-6 -translate-y-[50%] cursor-pointer sm:right-6">
            {showPassword ? (
              <EyeCloseSVG onClick={() => setShowPassword((prev) => !prev)} className="text-[#9747ff]" />
            ) : (
              <EyeSVG onClick={() => setShowPassword((prev) => !prev)} className="" />
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default SignUpInputs

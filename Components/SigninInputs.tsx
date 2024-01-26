"use client"

import clsx from "clsx"
import { FieldError, FieldErrors, FieldErrorsImpl, FieldValues, Merge, UseFormRegister } from "react-hook-form"
import { EyeSVG } from "./logos"
import { useEffect, useState } from "react"
import { SignInValidation } from "lib/validations/auth"
import { z } from "zod"

type Inputs = z.infer<typeof SignInValidation>

interface InputProps {
  label: string
  id: "email" | "password"
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

const SignInInputs = ({
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
      <label htmlFor={id} className={clsx("ml-5", errors[id] && "text-red-500")}>
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
          <EyeSVG
            onClick={() => setShowPassword((prev) => !prev)}
            className={`absolute right-5 top-[50%] -translate-y-[50%] cursor-pointer ${
              showPassword && "text-[#9747ff]"
            }`}
          />
        )}
      </div>
      {errors[id]?.message && (
        <p className="mt-2 text-sm text-red-400">{(errors[id]?.message as string) || "An error occurred"}</p>
      )}
    </div>
  )
}

export default SignInInputs

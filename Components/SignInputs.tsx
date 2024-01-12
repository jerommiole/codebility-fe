"use client"

import clsx from "clsx"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"
import { EyeSVG } from "./logos"
import { useState } from "react"

interface InputProps {
  label: string
  id: string
  type?: string
  required?: boolean
  register: UseFormRegister<FieldValues>
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
  console.log(showPassword)
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
          {...register(id, { required })}
          className={clsx(
            "border-b-2 bg-transparent p-5 text-xl placeholder:text-gray-600 focus:outline-none",
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
    </div>
  )
}

export default SignInputs

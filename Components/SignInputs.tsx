import clsx from "clsx"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

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
  return (
    <div className="flex flex-col" onClick={onClick}>
      <label htmlFor={id} className={clsx("ml-5", errors[id] && "text-red-500")}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        autoComplete={id}
        disabled={disabled}
        {...register(id, { required })}
        className={clsx(
          "border-b-2 bg-transparent p-5 text-xl placeholder:text-gray-600 focus:outline-none",
          errors[id] ? "border-red-500" : "border-white",
          disabled && "cursor-default opacity-50",
          readonly && "cursor-default"
        )}
        placeholder={placeholder}
        value={values}
        onChange={onChange}
        readOnly={readonly}
      />
    </div>
  )
}

export default SignInputs

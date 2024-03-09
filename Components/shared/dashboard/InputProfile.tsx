interface Props {
  label: string
  type?: string
  disabled?: boolean
}

const InputProfile = ({ label, type, disabled }: Props) => {
  const placeholderColor = disabled ? "lightgray dark:placeholder-gray" : "black-100 dark:placeholder-white"
  const textColor = disabled ? "lightgray" : "black-100"

  return (
    <div className="flex w-full flex-row justify-between gap-1 border-b border-gray p-4 dark:border-darkgray">
      <div className="flex basis-[15%] items-center pl-2">
        <p className="text-sm text-gray">{label}</p>
      </div>
      <div className="basis-[85%]">
        <input
          type={type}
          className={`w-full border-transparent bg-transparent text-lg text-${textColor} placeholder-${placeholderColor} focus:outline-none dark:text-white `}
          placeholder={label}
          disabled={disabled}
        />
      </div>
    </div>
  )
}

export default InputProfile

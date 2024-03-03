import React from "react"

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className="border-light_dark w-full rounded border bg-transparent px-3 py-2 text-sm focus:outline-none"
      {...props}
    />
  )
}

export default Input

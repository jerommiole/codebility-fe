import React from "react"

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input className="w-full rounded border border-gray03 bg-transparent px-3 py-2 focus:outline-none" {...props} />
  )
}

export default Input

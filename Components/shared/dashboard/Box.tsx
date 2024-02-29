import React, { ReactNode } from "react"

interface Box {
  children: ReactNode
  className?: string
}

const Box: React.FC<Box> = ({ children, className }) => {
  return (
    <div className={`background-light900_dark200 text-dark100_light900 rounded-lg p-6 ${className}`}>{children}</div>
  )
}

export default Box

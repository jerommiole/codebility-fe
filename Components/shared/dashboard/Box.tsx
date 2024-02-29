import React, { ReactNode } from "react"

interface Box {
  children: ReactNode
  className?: string
}

const Box: React.FC<Box> = ({ children, className }) => {
  return (
    <div className={`background-lightbox_darkbox light-border text-dark100_light900 rounded-lg p-6 ${className}`}>
      {children}
    </div>
  )
}

export default Box

import React, { ReactNode } from "react"

interface Box {
  children: ReactNode
  className?: string
  onClick?: () => void
}

const Box: React.FC<Box> = ({ children, className, onClick }) => {
  return (
    <div
      className={`background-lightbox_darkbox light-border text-dark100_light900 rounded-lg p-6 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Box

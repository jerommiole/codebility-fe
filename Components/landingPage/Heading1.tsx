import React, { ReactNode } from "react"

interface Heading1 {
  children: ReactNode
}

const Heading1: React.FC<Heading1> = ({ children }) => {
  return <h1 className="mb-4 text-2xl font-semibold uppercase text-primaryColor md:text-5xl">{children}</h1>
}

export default Heading1

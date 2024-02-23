import React, { ReactNode } from "react"

interface Heading2 {
  children: ReactNode
}

const Heading2: React.FC<Heading2> = ({ children }) => {
  return <h2 className="mb-4 text-2xl font-semibold uppercase text-primaryColor md:text-5xl">{children}</h2>
}

export default Heading2

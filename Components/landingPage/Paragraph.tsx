import React, { ReactNode } from "react"

interface Paragraph {
  children: ReactNode
}

const Paragraph: React.FC<Paragraph> = ({ children }) => {
  return <p className="text-sm text-primaryColor">{children}</p>
}
export default Paragraph

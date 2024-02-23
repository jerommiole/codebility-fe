import React, { ReactNode } from "react"

interface Paragraph {
  children: ReactNode
}

const Paragraph: React.FC<Paragraph> = ({ children }) => {
  return <p className="mb-3 text-sm text-[#8E8E8E]">{children}</p>
}
export default Paragraph

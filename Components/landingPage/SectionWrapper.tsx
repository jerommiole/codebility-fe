import React, { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
}

const SectionWrapper: React.FC<SectionProps> = ({ children }) => {
  return <section className="mx-auto max-w-[1400px] p-5 md:p-16 lg:p-20">{children}</section>
}

export default SectionWrapper

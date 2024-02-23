import React, { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
}

const SectionWrapper: React.FC<SectionProps> = ({ children }) => {
  return <section className="mx-auto max-w-[1400px] px-5 py-5 md:p-16 lg:p-20 lg:py-40">{children}</section>
}

export default SectionWrapper

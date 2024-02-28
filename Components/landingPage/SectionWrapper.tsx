import React, { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
}

const SectionWrapper: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section className={`mx-auto max-w-[1400px] px-5 py-5 md:p-16 lg:p-20 lg:py-40 ${className}`}>{children}</section>
  )
}

export default SectionWrapper

import React, { ReactNode } from "react"

interface SectionProps {
  children: ReactNode,
  style?: object
}

const SectionWrapper: React.FC<SectionProps> = ({ children, style }) => {
  return <section className="mx-auto max-w-[1400px] px-5 py-5 md:p-16 lg:p-20 lg:py-40" style={style}>{children}</section>
}

export default SectionWrapper

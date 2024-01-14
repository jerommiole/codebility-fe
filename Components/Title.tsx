import React from "react"
interface Props {
  title: string
  subtitle: string
}
const Title = ({ title, subtitle }: Props) => {
  return (
    <div className="mt-5 flex flex-1 flex-col sm:mt-0 ">
      <h1 className="text-4xl font-semibold uppercase md:text-5xl">{title}</h1>
      <p className="max-w[22rem] mt-5">{subtitle}</p>
    </div>
  )
}

export default Title

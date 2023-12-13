import React from "react"
interface Props {
  title: string
  subtitle: string
}
const Title = ({ title, subtitle }: Props) => {
  return (
    <div className="flex flex-1 flex-col ">
      <h1 className="text-5xl font-semibold uppercase lg:text-4xl xl:text-5xl">{title}</h1>
      <p className="mt-5 w-[22rem] ">{subtitle}</p>
    </div>
  )
}

export default Title

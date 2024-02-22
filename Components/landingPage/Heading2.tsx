import React from "react"

interface Header2Props {
  text: string
}

const Header2: React.FC<Header2Props> = ({ text }) => {
  return <h2 className="text-2xl font-semibold text-primaryColor md:text-5xl">{text}</h2>
}

export default Header2

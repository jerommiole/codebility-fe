import React from "react"

interface IntroTextProps {
  text: string
}

const IntroText: React.FC<IntroTextProps> = ({ text }) => {
  return <p className="text-sm text-primaryColor">{text}</p>
}

export default IntroText

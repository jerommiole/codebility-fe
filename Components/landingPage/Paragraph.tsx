import React from "react"

interface ParagraphProps {
  text: string
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  return <p className="text-sm text-primaryColor">{text}</p>
}

export default Paragraph

import React from "react"

type TextAlign = "left" | "center" | "right"

interface CardProps {
  title: string
  description: string
  imageUrl: string
  CardColor?: string
  Align?: TextAlign
  link?: string
  icon?: string
  centerText?: string
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  link,
  CardColor = "black",
  Align = "left",
  icon,
  centerText,
}) => {
  const cardStyle: React.CSSProperties = {
    backgroundColor: CardColor,
    textAlign: Align,
  }

  const imageClassName = ` h-[25px]  md:mt-10 mb-4 rounded-md ${Align === "center" ? "mx-auto" : ""}`

  return (
    <div className=" xl:max-size-[250px]  p-4 shadow-md md:p-6" style={cardStyle}>


      <img src={imageUrl} alt={title} className={imageClassName} style={cardStyle} />
      <h2
        className={`text-md mb-2 font-semibold text-primaryColor ${centerText ? "text-center" : ""}`}
        style={cardStyle}
      >
        {title}
      </h2>
      <p className={`text-sm text-secondaryColor ${centerText ? "text-center" : ""}`}>{description}</p>

      <button
        className="flex items-center justify-center gap-2 mt-5 text-sm duration-300 hover:translate-x-2 hover:font-semibold"
        style={{ color: "#31AFC4" }}
      >
        {link} <img src={icon} alt="" className="h-[8px]" />
      </button>
    </div>
  )
}

export default Card

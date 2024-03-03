import React from "react"

interface Props {
  name?: string
}

const RenderTag = ({ name }: Props) => {
  return (
    <div className="background-lightsmallbox_darksmallbox inline-flex items-center rounded-md px-2 py-1 text-xs uppercase text-blue-100">
      {name} Sample
    </div>
  )
}

export default RenderTag

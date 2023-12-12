"use client"

import React from "react"
import { HamburgSVG } from "Components/logos"
import { Toggle } from "@/components/ui/toggle"
import { useNavStore } from "store/Post"

const ToggleMenu = () => {
  const { activeNav, toggleNav } = useNavStore()
  return (
    <Toggle
      pressed={activeNav ? true : false}
      onClick={() => toggleNav()}
      className="z-5 fixed right-10 top-0 hidden tablet:block"
    >
      <HamburgSVG />
    </Toggle>
  )
}

export default ToggleMenu

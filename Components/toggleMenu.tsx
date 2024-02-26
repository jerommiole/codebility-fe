"use client"

import React from "react"
import { HamburgSVG } from "Components/logos"
import { Toggle } from "Components/ui/toggle"
import { useNavStore } from "hooks/use-sidebar"

const ToggleMenu = () => {
  const { activeNav, toggleNav } = useNavStore()
  return (
    <Toggle pressed={activeNav ? true : false} onClick={() => toggleNav()}>
      <HamburgSVG />
    </Toggle>
  )
}

export default ToggleMenu

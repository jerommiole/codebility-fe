"use client"

import React from "react"
import { useNavStore } from "../hooks/use-sidebar"

const Blinds = () => {
  const { activeNav, toggleNav } = useNavStore()
  return (
    <button
      onClick={() => toggleNav()}
      className={`blinds  ${activeNav ? "opacity-100 tablet:w-full" : "opacity-0 tablet:w-0"}`}
    ></button>
  )
}

export default Blinds

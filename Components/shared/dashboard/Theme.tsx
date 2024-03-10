"use client"

import React from "react"
import Image from "next/image"
import { useTheme } from "@/context/ThemeProvider"

import { themes } from "@/constants"

const Theme = () => {
  const { mode, setMode } = useTheme()

  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light"
    setMode(newMode)
    localStorage.theme = newMode
  }

  return (
    <>
      {/* <div>
        {mode === "light" ? (
          <Image src="/assets/svgs/icon-sun.svg" alt="Sun" width={20} height={20} className="active-theme" />
        ) : (
          <Image src="/assets/svgs/icon-moon.svg" alt="Moon" width={20} height={20} className="active-theme" />
        )}
      </div> */}
      {/*<div className="flex gap-4">
        {themes.map((item) => (
          <div
            key={item.value}
            onClick={() => {
              setMode(item.value)

              if (item.value !== "system") {
                localStorage.theme = item.value
              } else {
                localStorage.removeItem("theme")
              }
            }}
            className="flex cursor-pointer items-center gap-4 px-2.5 py-2 focus:bg-light-800 dark:focus:bg-dark-400"
          >
            <Image
              src={item.icon}
              alt={item.value}
              width={16}
              height={16}
              className={`${mode === item.value && "active-theme"}`}
            />
            <p
              className={`body-semibold text-light-500 ${
                mode === item.value ? "text-primary-500" : "text-dark100_light900"
              }`} 
            >
              {item.label}  
            </p>
          </div>
        ))} */}

      <div className="flex gap-4">
        <div onClick={toggleTheme} className="flex cursor-pointer items-center gap-4 py-2 focus:bg-light-800 dark:focus:bg-dark-400">
          <Image
            src={`/assets/svgs/${mode === "light" ? "icon-moon.svg" : "icon-sun.svg"}`}
            alt={mode === "light" ? "Moon" : "Sun"}
            width={20}
            height={20}
            className="active"
            style={{ filter: mode === 'light' ? 'invert(1)' : 'none' }}
          />
          <p
            className={`body-semibold text-light-500 ${
              mode === "light" ? "text-primary-500" : "text-dark100_light900"
            }`}
          >
          
          </p>
        </div>
      </div>
    </>
  )
}

export default Theme

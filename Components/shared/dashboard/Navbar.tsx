"use client"

import Image from "next/image"
import React from "react"

import avatar from "@/public/assets/images/default-avatar-male.png"
import useGoogleAuthCookie from "hooks/use-cookie"

const Navbar = () => {
  const gooogleAuth = useGoogleAuthCookie()

  return (
    <>
      <nav className="shadow-light-300 fixed top-0 z-10 w-full border-b bg-white">
        <div className="flex justify-end gap-6 px-8 py-3 ">
          <div>Bell</div>
          <div>Switch</div>
          <div className="flex gap-1">
            <Image
              src={gooogleAuth?.data?.image ?? avatar}
              alt="Avatar"
              width={50}
              height={50}
              className="rounded-full bg-[#1e1b4b] object-contain"
            />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

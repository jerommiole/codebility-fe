"use client"

import Image from "next/image"
import React from "react"

import avatar from "@/public/assets/images/default-avatar-male.png"
import useGoogleAuthCookie from "hooks/use-cookie"
import ToggleMenu from "@/Components/toggleMenu"
import Link from "next/link"

const Navbar = () => {
  const gooogleAuth = useGoogleAuthCookie()

  return (
    <>
      <nav className="shadow-light-300 fixed top-0 z-10 w-full border-b bg-white">
        <div className="flex px-8 py-3">
          <div className="flex flex-1 lg:hidden">
            <ToggleMenu />
          </div>
          <div className="flex flex-1 justify-end gap-6">
            <div>Bell</div>
            <div>Switch</div>
            <div className="flex gap-1">
              <Link href="/profile">
                <Image
                  src={gooogleAuth?.data?.image ?? avatar}
                  alt="Avatar"
                  width={50}
                  height={50}
                  className="rounded-full bg-[#1e1b4b] object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

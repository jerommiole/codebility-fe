"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

import { sidebarLinks } from "@/constants"
import { usePathname } from "next/navigation"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/Components/ui/sheet"

const NavContent = () => {
  const pathname = usePathname()

  return (
    <section className="flex h-full flex-col gap-2 pt-4">
      {sidebarLinks.map((item) => {
        const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route
        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`${
                isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>{item.label}</p>
            </Link>
          </SheetClose>
        )
      })}
    </section>
  )
}

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/svgs/icon-hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="invert-colors lg:hidden"
        />
      </SheetTrigger>
      <SheetContent side="left" className="background-light900_dark200 border-none">
        <Link href="/" className="flex items-center gap-1">
          <Image src="/assets/svgs/codebility-violet.svg" width={147} height={30} alt="Codebility violet logo" />
        </Link>
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav

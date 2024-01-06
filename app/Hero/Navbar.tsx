"use client"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"
import React, { useState } from "react"
import { Menu, MenuIcon, X } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

const links = [
  {
    name: "HOME",
    href: "/Home",
  },

  {
    name: "ABOUT",
    href: "/About",
  },

  {
    name: "WORK",
    href: "/Work",
  },

  {
    name: "CONTACT",
    href: "/Contact",
  },
]

const Navbar = () => {
  const pathname = usePathname()
  return (
    <header className="mb-2  bg-transparent">
      <div className=" z-30 flex items-center justify-between px-16 py-4">
        <div className="hidden lg:block">
          <Link href="/">
            <Image src="/companyLogo.png" alt="CodebilityLogo" width={260} height={49} />
          </Link>
        </div>

        <ul className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link className="text-lg font-semibold text-primary" href={link.href}>
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-200 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </ul>

        {/*  */}
        <div className="block lg:hidden ">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="bg-transparent">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex h-screen flex-col items-center justify-center bg-transparent  backdrop-blur-sm ">
              <SheetHeader>
                <ul className="space-y-14 ">
                  {links.map((link, idx) => (
                    <div key={idx}>
                      {pathname === link.href ? (
                        <Link href={link.href}>{link.name}</Link>
                      ) : (
                        <Link
                          href={link.href}
                          className="border-b-2 border-transparent text-lg font-semibold text-gray-50 transition duration-100 hover:border-primary hover:text-primary"
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </ul>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <div className="block lg:hidden">
          <Link href="/">
            <Image src="/companyLogo.png" alt="CodebilityLogo" width={180} height={49} />
          </Link>
        </div>
        <div className="lg:hidden" />
      </div>
    </header>
  )
}

export default Navbar

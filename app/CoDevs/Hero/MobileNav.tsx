"use client"
import { Button } from "Components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "Components/ui/sheet"
import { MenuIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

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

const MobileNav = () => {
  const pathname = usePathname()
  return (
    <header className="relative z-30 flex  justify-between bg-transparent px-5 py-5 ">
      <Sheet>
        <SheetTrigger asChild>
          <Button>
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <nav className=" flex h-screen flex-col items-center justify-center gap-11">
              {links.map((link, idx) => (
                <div key={idx}>
                  {pathname === link.href ? (
                    <Link className="text-lg font-semibold text-primary" href={link.href}>
                      {link.name}
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-lg font-semibold text-gray-50 transition duration-100 hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <Link href="/">
        <div className="">
          <Image src="/companyLogo.png" alt="Codebility" width={180} height={49} className="cursor-pointer" />
        </div>
      </Link>
      <div />
    </header>
  )
}

export default MobileNav

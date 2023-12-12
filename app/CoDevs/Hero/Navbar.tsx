"use client"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"
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

const Navbar = () => {
  const pathname = usePathname()
  return (
    <header className="mb-2  bg-transparent">
      <div className="hidden items-center justify-between px-16 py-4 md:flex ">
        <Link href="/">
          <Image src="/companyLogo.png" alt="CodebilityLogo" width={260} height={49} />
        </Link>

        <nav className=" flex gap-12 2xl:ml-16">
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
        </nav>
      </div>
    </header>
  )
}

export default Navbar

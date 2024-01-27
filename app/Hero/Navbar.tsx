"use client"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"
import React, { useState } from "react"
import { Menu, MenuIcon, X } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "Components/ui/sheet"
import { Button } from "Components/ui/button"
import { Inter, Rowdies, Iceland } from "next/font/google"
import { motion } from "framer-motion"
const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Co Devs",
    href: "#codevs",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Why Choose Us?",
    href: "#join",
  },
]

const inter = Inter({
  weight: "200",
  style: "normal",
  subsets: ["latin"],
})
const rowdies = Rowdies({
  weight: "300",
  subsets: ["latin"],
})

// Animation variants
const HeaderAnimation = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const Navbar = () => {
  const pathname = usePathname()
  return (
    <header className= "w-full mx-auto shadow-lg bg-zinc-950">
      <div className="flex items-center justify-between py-6 border-b border-zinc-900 ">
        <motion.div
          className="mx-auto flex max-w-7xl items-center justify-between px-3.5 lg:w-full"
          variants={HeaderAnimation}
          initial="hidden"
          animate="visible"
        >
          <div className="hidden lg:flex">
            <Link href="/">
              <motion.div variants={item}>
                <Image src="/codebilitylogo.svg" alt="CodebilityLogo" width={130} height={35} />
              </motion.div>
            </Link>
          </div>

          <ul className={` hidden gap-10 lg:flex 2xl:ml-16 `}>
            {links.map((link, idx) => (
              <motion.li key={idx} variants={item}>
                {pathname === link.href ? (
                  <Link href={link.href}>
                    <div className="text-base text-primary">{link.name}</div>
                  </Link>
                ) : (
                  <Link href={link.href}>
                    <div className="text-base text-gray-200 transition duration-300 hover:scale-105 hover:text-primary">
                      {link.name}
                    </div>
                  </Link>
                )}
              </motion.li>
            ))}
          </ul>

          <div className="items-center hidden gap-4 text-base font-inter lg:flex">
            <motion.div variants={item}>
              <Link href="/signin" className="px-5 py-2 text-black bg-white rounded-full">
                Login
              </Link>
            </motion.div>
            <motion.div variants={item}>
              <Link href="/signup">Sign Up</Link>
            </motion.div>
          </div>
        </motion.div>
        {/*  */}
        <div className="flex flex-row-reverse items-center justify-between w-full px-5 lg:hidden ">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="bg-transparent ">
                <MenuIcon className="text-gray-300" />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col items-center justify-center h-screen bg-transparent backdrop-blur-sm ">
              <SheetHeader>
                <ul className={`space-y-14  `}>
                  {links.map((link, idx) => (
                    <div key={idx}>
                      {pathname === link.href ? (
                        <Link href={link.href}>{link.name}</Link>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-lg font-semibold transition duration-100 border-b-2 border-transparent text-gray-50 hover:border-primary hover:text-primary"
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </ul>
                <div className="items-center pt-10 text-lg font-inter lg:flex">
                  <div>
                    <Link href="/">Login</Link>
                  </div>
                  <div className="px-5 py-1 my-5 text-black bg-white rounded-full">
                    <Link href="/">Sign Up</Link>
                  </div>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <div className="block lg:hidden">
            <Link href="/">
              <Image src="/codebilitylogo.svg" alt="CodebilityLogo" width={110} height={49} />
            </Link>
          </div>
        </div>

        <div className="lg:hidden" />
      </div>
    </header>
  )
}

export default Navbar

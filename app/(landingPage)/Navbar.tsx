import { navLinks } from "@/constants"
import { Button } from "Components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "Components/ui/sheet"
import { MenuIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const Navbar = () => {
  const pathname = usePathname()

  const [color, setColor] = useState(false)

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener("scroll", changeColor)

  return (
    <>
      <nav
        className={`fixed z-50 hidden w-full items-center justify-between gap-5 p-6 lg:flex xl:px-12
      ${color ? "bg-black-100" : "bg-transparent"}`}
      >
        <Link href="/" className="hidden lg:block">
          <Image
            className="h-auto w-[147px]"
            src="/assets/svgs/codebility-blue.svg"
            alt="Codebility Logo"
            priority
            width={147}
            height={30}
          />
        </Link>
        <ul className="hidden gap-10 lg:flex">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              {pathname === link.href ? (
                <Link href={link.href}>
                  <p className="text-lg text-primary">{link.name}</p>
                </Link>
              ) : (
                <Link href={link.href}>
                  <p className="text-lg text-white transition duration-300 hover:scale-105 hover:text-primary">
                    {link.name}
                  </p>
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="font-inter hidden items-center gap-4 text-base lg:flex">
          <Link href="/auth/signin">
            <Button className="h-10 w-28 bg-transparent p-0.5 xl:h-12 xl:w-36">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-transparent text-sm text-white lg:text-lg">
                Login
              </span>
            </Button>
          </Link>
          <Link href="/auth/signin">
            <Button className="h-10 w-28 rounded-full bg-gradient-to-r from-teal via-blue-100 to-violet p-0.5 hover:bg-gradient-to-br xl:h-12 xl:w-36">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-black-100 text-sm text-white lg:text-lg">
                Sign Up
              </span>
            </Button>
          </Link>
        </div>
        {/*  */}
      </nav>
      <div
        className={`${
          color ? "bg-black-100" : "bg-transparent"
        } fixed z-50 flex w-full items-center justify-between py-6  ps-5 lg:hidden`}
      >
        <div className="block lg:hidden">
          <Link href="/">
            <Image src="/assets/svgs/codebility-blue.svg" alt="CodebilityLogo" width={110} height={49} />
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button className="bg-transparent ">
              <MenuIcon className="text-gray-300" />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex h-screen flex-col items-center justify-center bg-black-100">
            <SheetHeader>
              <ul className={`space-y-14 text-center `}>
                {navLinks.map((link, idx) => (
                  <div key={idx}>
                    {pathname === link.href ? (
                      <Link href={link.href}>{link.name}</Link>
                    ) : (
                      <Link
                        href={link.href}
                        className="border-b-2 border-transparent text-lg font-semibold text-gray-50 transition duration-100"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </ul>
              <div className="font-inter flex flex-col items-center space-y-5 pt-10 text-center text-base text-white lg:flex">
                <Link href="/auth/signin">
                  <Button className="h-10 w-28 bg-transparent p-0.5 xl:h-12 xl:w-36">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-transparent text-sm text-white lg:text-lg">
                      Login
                    </span>
                  </Button>
                </Link>
                <Link href="/auth/signin">
                  <Button className="h-12 w-36 rounded-full bg-gradient-to-r from-teal via-blue-100 to-violet p-0.5 hover:bg-gradient-to-br">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-black-100 text-sm text-white lg:text-lg">
                      Sign Up
                    </span>
                  </Button>
                </Link>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}

export default Navbar

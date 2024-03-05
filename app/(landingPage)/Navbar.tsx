import { navLinks } from "@/constants"
import { Button } from "Components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

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

  const changeBG = () => {
    console.log(window.scrollY)
  }

  window.addEventListener("scroll", changeBG)
  window.addEventListener("scroll", changeColor)

  return (
    <nav
      className={`flex-between fixed z-50 w-full gap-5 p-6 px-12 
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
      <Link href="/auth/signin">
        <Button className="h-12 w-36 rounded-full bg-gradient-to-r from-teal via-blue-100 to-violet p-0.5 hover:bg-gradient-to-br">
          <span className="flex h-full w-full items-center justify-center rounded-full bg-black-100 text-sm text-white lg:text-lg">
            Login
          </span>
        </Button>
      </Link>
    </nav>
  )
}

export default Navbar

"use client"

import { sidebarLinks } from "@/constants"
import { useNavStore } from "hooks/use-sidebar"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const LeftSidebar = () => {
  const { isToggleOpen, toggleNav } = useNavStore()
  const pathname = usePathname()

  return (
    <section className="light-border shadow-light-300 background-light900_dark200 sticky left-0 top-0 z-20 flex h-screen flex-col gap-14 overflow-y-auto border-r p-6 dark:shadow-none max-lg:hidden">
      <div className="flex justify-stretch gap-4 max-lg:hidden">
        <div className={`transition-all ${!isToggleOpen ? "flex-0" : "flex-1"} flex overflow-hidden`}>
          <Link href="/">
            <Image
              src="/assets/svgs/codebility-white.svg"
              width={147}
              height={30}
              alt="Codebility white logo"
              className={`hidden h-[40px] transition-all dark:block ${!isToggleOpen && "w-0"}`}
            />
            <Image
              src="/assets/svgs/codebility-black.svg"
              width={147}
              height={30}
              alt="Codebility black logo"
              className={`h-[40px] transition-all dark:hidden ${!isToggleOpen && "w-0"}`}
            />
          </Link>
        </div>

        <Image
          onClick={() => toggleNav()}
          src="/assets/svgs/icon-codebility.svg"
          width={30}
          height={40}
          alt="logo"
          className={`toggle-logo-btn ${isToggleOpen ? "close-nav" : "open-nav mx-auto"}`}
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 max-lg:hidden">
        {sidebarLinks.map((item) => {
          const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route

          return (
            <Link
              href={item.route}
              key={item.label}
              className={`${
                isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"
              }  flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"} ${isToggleOpen ? "block" : "hidden"}`}>
                {item.label}
              </p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default LeftSidebar

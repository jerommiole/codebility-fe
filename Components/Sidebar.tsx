"use client"

import React from "react"
import { getSession, signOut } from "next-auth/react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "Components/ui/tooltip"

import logoPic from "@/public/assets/images/logo.png"
import logoChar from "@/public/assets/images/codebility-logo-icon-full-colored.png"
import logoDark from "@/public/assets/images/codebility-logo-black.png"

import { usePathname, useRouter } from "next/navigation"

import {
  DashboardSVG,
  TimeTrackerSVG,
  TodoSVG,
  ProjectsSVG,
  OrgchartSVG,
  InternSVG,
  ClientSVG,
  LogoutSVG,
} from "Components/logos"

import Image from "next/image"
import { useNavStore } from "hooks/use-sidebar"
import Link from "next/link"
import toast from "react-hot-toast"
import useGoogleAuthCookie from "hooks/use-cookie"

const Sidebar = () => {
  const { activeNav, toggleNav } = useNavStore()

  const handleLogOutGoogle = () => {}

  const sidebarData = [
    { href: "/dashboard", passedComponent: <DashboardSVG />, label: "Dashboard" },
    { href: "/time-tracker", passedComponent: <TimeTrackerSVG />, label: "Time Tracker" },
    { href: "/todo", passedComponent: <TodoSVG />, label: "To Do" },
    { href: "/projects-completed", passedComponent: <ProjectsSVG />, label: "Projects Completed" },
    { href: "/orgchart", passedComponent: <OrgchartSVG />, label: "Org Chart" },
    { href: "/interns", passedComponent: <InternSVG />, label: "Interns" },
    { href: "/clients", passedComponent: <ClientSVG />, label: "Clients" },
    { href: "/applicants", passedComponent: <ClientSVG />, label: "Applicants" },
  ]

  return (
    <>
      <Blinds />
      <nav
        className={`nav ${activeNav ? "tablet:w-[310px]" : "tablet:w-[0px]"} ${
          activeNav ? "w-[310px]" : "w-[103px]"
        } z-50 border shadow-stiglitz dark:border-none dark:shadow-none`}
      >
        <div className="logo-container">
          <div className={`transition-all ${!activeNav ? "flex-0" : "flex-1"} flex overflow-hidden`}>
            <Link href="/">
              <Image
                src={logoPic}
                width={147}
                height={30}
                alt="logo"
                className={`hidden h-[30px] transition-all dark:block ${!activeNav && "w-0"}`}
              />
              <Image
                src={logoDark}
                width={147}
                height={30}
                alt="logo"
                className={`h-[40px] transition-all dark:hidden ${!activeNav && "w-0"}`}
              />
            </Link>
          </div>

          <Image
            onClick={() => toggleNav()}
            src={logoChar}
            width={30}
            height={40}
            alt="logo"
            className={`toggle-logo-btn ${activeNav ? "close-nav" : "open-nav mx-auto"}`}
          />
        </div>

        <div className="navigation">
          {sidebarData.map((item, index) => (
            <SidebarItems key={index} href={item.href} passedComponent={item.passedComponent}>
              {item.label}
            </SidebarItems>
          ))}
          <div className="mt-auto flex flex-col">
            <SidebarItems lastItem passedComponent={<LogoutSVG />}>
              Sign Out
            </SidebarItems>
          </div>
        </div>
      </nav>
    </>
  )
}

interface SidebarItemsProps {
  passedComponent: React.ReactElement<any>
  lastItem?: boolean
  children: React.ReactNode
  href?: string
}

const SidebarItems: React.FC<SidebarItemsProps> = ({ passedComponent: Component, lastItem, children, href = "" }) => {
  const router = useRouter()
  const pathname = usePathname()
  const googleAuthSession = useGoogleAuthCookie()
  const { activeNav, closeNav } = useNavStore()
  const isActive = (pathname.includes(href) && href?.length > 1) || pathname === href
  const handleSignout = async () => {
    if (googleAuthSession.status === "authenticated") {
      signOut({ callbackUrl: "/auth/signout" })
      return null
    }
    signOut()
  }
  if (!activeNav) {
    return (
      <TooltipProvider>
        <Tooltip delayDuration={200}>
          <TooltipTrigger className={`${lastItem && "mt-auto"}`}>
            {href ? (
              <Link href={href}>
                <div className={`nav-items ${isActive && "bg-muted"}`} onClick={closeNav}>
                  {Component &&
                    React.cloneElement(Component, { className: `${isActive ? "text-primary" : "text-foreground"}` })}
                  {children}
                </div>
              </Link>
            ) : (
              <div onClick={handleSignout} className={`nav-items ${isActive && "bg-muted"}`}>
                {Component &&
                  React.cloneElement(Component, { className: `${isActive ? "text-primary" : "text-foreground"}` })}
                {children}
              </div>
            )}
          </TooltipTrigger>

          <TooltipContent side="right">
            <p>{children}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  } else {
    return (
      <>
        {href ? (
          <Link href={href}>
            <div className={`nav-items ${isActive && "bg-muted"}`} onClick={closeNav}>
              {Component &&
                React.cloneElement(Component, { className: `${isActive ? "text-primary" : "text-foreground"}` })}
              {children}
            </div>
          </Link>
        ) : (
          <div onClick={handleSignout} className={`nav-items ${isActive && "bg-muted"}`}>
            {Component &&
              React.cloneElement(Component, { className: `${isActive ? "text-primary" : "text-foreground"}` })}
            {children}
          </div>
        )}
      </>
    )
  }
}

const Blinds = () => {
  const { activeNav, toggleNav } = useNavStore()
  return (
    <button
      onClick={() => toggleNav()}
      className={`blinds  ${activeNav ? "opacity-100 tablet:w-full" : "opacity-0 tablet:w-0"}`}
    ></button>
  )
}

export default Sidebar

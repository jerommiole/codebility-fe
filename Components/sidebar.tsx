"use client"

import React from "react"
import { signOut, useSession } from "next-auth/react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "Components/ui/tooltip"

import logoPic from "public/Logo.png"
import logoChar from "public/logoChar.png"
import logoDark from "public/logoBlack.png"

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

const Sidebar = () => {
  const { activeNav, toggleNav } = useNavStore()

  const handleLogOutGoogle = () => {
    window.open("http://localhost:9000/api/v1/development/auth/google", "_self")
  }

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
          <SidebarItems href="/dashboard" passedComponent={<DashboardSVG />}>
            Dashboard
          </SidebarItems>
          <SidebarItems href="/time-tracker" passedComponent={<TimeTrackerSVG />}>
            Time Tracker
          </SidebarItems>
          <SidebarItems href="/todo" passedComponent={<TodoSVG />}>
            To Do
          </SidebarItems>
          <SidebarItems href="/projects-completed" passedComponent={<ProjectsSVG />}>
            Projects Completed
          </SidebarItems>
          <SidebarItems href="/orgchart" passedComponent={<OrgchartSVG />}>
            Org Chart
          </SidebarItems>
          <SidebarItems href="/Interns" passedComponent={<InternSVG />}>
            Interns
          </SidebarItems>
          <SidebarItems href="/clients" passedComponent={<ClientSVG />}>
            Clients
          </SidebarItems>
          <div className="mt-auto flex flex-col" onClick={handleLogOutGoogle}>
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
  const { activeNav, closeNav } = useNavStore()
  const isActive = (pathname.includes(href) && href?.length > 1) || pathname === href
  const handleSignout = () => {
    if (lastItem && !href) {
      signOut()
    }
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

"use client"

import React from "react"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "Components/ui/tooltip"

import logoPic from "public/Logo.png"
import logoChar from "public/logoChar.png"
import logoDark from "public/logoBlack.png"

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

  return (
    <>
      <Blinds />
      <nav
        className={`nav ${activeNav ? "tablet:w-[310px]" : "tablet:w-[0px]"} ${
          activeNav ? "w-[310px]" : "w-[103px]"
        } z-50 border shadow-stiglitz dark:border-none dark:shadow-none`}
      >
        <div className="logo-container">
          <div className={`transition-all ${!activeNav ? "flex-0" : "flex-1"} overflow-hidden`}>
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
          <SidebarItems
            active
            passedComponent={
              <Link href="/dashboard">
                <DashboardSVG />
              </Link>
            }
          >
            <Link href="/dashboard">Dashboard</Link>
          </SidebarItems>
          <SidebarItems
            passedComponent={
              <Link href="/time-tracker">
                <TimeTrackerSVG />
              </Link>
            }
          >
            <Link href="/time-tracker">Time Tracker</Link>
          </SidebarItems>
          <SidebarItems
            passedComponent={
              <Link href="/todo">
                <TodoSVG />
              </Link>
            }
          >
            <Link href="/todo">To Do</Link>
          </SidebarItems>
          <SidebarItems
            passedComponent={
              <Link href="/projects-completed">
                <ProjectsSVG />
              </Link>
            }
          >
            <Link href="/projects-completed">Projects Completed</Link>
          </SidebarItems>
          <SidebarItems
            passedComponent={
              <Link href="/orgchart">
                <OrgchartSVG />
              </Link>
            }
          >
            <Link href="/orgchart">Org Chart</Link>
          </SidebarItems>
          <SidebarItems
            passedComponent={
              <Link href="/Interns">
                <InternSVG />
              </Link>
            }
          >
            <Link href="/Interns">Interns</Link>
          </SidebarItems>
          <SidebarItems
            passedComponent={
              <Link href="/clients">
                <ClientSVG />
              </Link>
            }
          >
            <Link href="/clients">Clients</Link>
          </SidebarItems>
          <div className="mt-auto flex flex-col">
            <SidebarItems
              lastItem
              passedComponent={
                <Link href="/">
                  <LogoutSVG />
                </Link>
              }
            >
              <Link href="/">Sign Out</Link>
            </SidebarItems>
          </div>
        </div>
      </nav>
    </>
  )
}

interface SidebarItemsProps {
  passedComponent: React.ReactElement<any>
  active?: boolean
  lastItem?: boolean
  children: React.ReactNode
}

const SidebarItems: React.FC<SidebarItemsProps> = ({ passedComponent: Component, active, lastItem, children }) => {
  const { activeNav } = useNavStore()
  if (!active && !activeNav)
    return (
      <TooltipProvider>
        <Tooltip delayDuration={200}>
          <TooltipTrigger className={`${lastItem && "mt-auto"}`}>
            <div className={`nav-items ${active && "bg-muted"} `}>
              {Component &&
                React.cloneElement(Component, { className: `${active ? "text-primary" : "text-foreground"}` })}
              {children}
            </div>
          </TooltipTrigger>

          <TooltipContent side="right">
            <p>{children}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  else
    return (
      <div className={`nav-items ${active && "bg-muted"} ${lastItem && "mt-auto"}`}>
        {Component && React.cloneElement(Component, { className: `${active ? "text-primary" : "text-foreground"}` })}
        {children}
      </div>
    )
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

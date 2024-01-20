"use client"

import React from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"

import personIcon from "../../../../../public/sampleProfile/settings/person.png"
import bellIcon from "../../../../../public/sampleProfile/settings/bell.png"
import gearIcon from "../../../../../public/sampleProfile/settings/gear.png"
import logIcon from "../../../../../public/sampleProfile/settings/log.png"
import infoIcon from "../../../../../public/sampleProfile/settings/info.png"

import { cn } from "../../../../../lib/utils"
const SettingMenu = () => {
  const pathname = usePathname()

  const profileMenuList = [
    {
      title: "Profile Info",
      icon: personIcon,
      href: "/profile",
    },
    {
      title: "Change Password",
      icon: personIcon,
      href: "/change-password",
    },
    {
      title: "Notifications",
      icon: bellIcon,
      href: "/notifications",
    },
    {
      title: "Settings",
      icon: gearIcon,
      href: "/settings",
    },
    {
      title: "Activity Log",
      icon: logIcon,
      href: "/activity-log",
    },
    {
      title: "About",
      icon: infoIcon,
      href: "/about",
    },
  ]

  return (
    <ul className="flex flex-col gap-3 px-6">
      {profileMenuList.map((profile) => {
        const active = pathname === `/dashboard${profile.href}` ? "bg-gray02" : null
        return (
          <div
            className={cn(
              `flex w-full cursor-pointer items-center gap-10 rounded-sm px-4 py-2 hover:bg-gray02`,
              `${active}`
            )}
            key={profile.title}
          >
            <div>
              <Image src={profile.icon} alt={profile.title} width="14" height="14" />
            </div>

            <li className="text-left text-sm">{profile.title}</li>
          </div>
        )
      })}
      <div className="border-b">&nbsp;</div>
    </ul>
  )
}

export default SettingMenu

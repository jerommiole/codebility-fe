import React from "react"
import Image from "next/image"

import personIcon from "public/sampleProfile/settings/person.png"
import bellIcon from "public/sampleProfile/settings/bell.png"
import gearIcon from "public/sampleProfile/settings/gear.png"
import logIcon from "public/sampleProfile/settings/log.png"
import infoIcon from "public/sampleProfile/settings/info.png"

const ProfilePage = () => {
  const profileMenuList = [
    {
      title: "Profile Info",
      icon: personIcon,
      href: "/profile-info",
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
    <div className="p-[1.63rem]">
      <div className="h-full w-[19.3125rem] border-r">
        <p className="text-sm font-medium">CODEBILITY ACCOUNT</p>
        <div className="w-full p-2 py-3">
          <ul className="">
            {profileMenuList.map((profile, i) => (
              <div className="flex w-full gap-10 px-4 py-2" key={`profile-${i}`}>
                <Image src={profile.icon} alt={profile.title} width="16" height="16" />
                <li className="text-left text-sm">{profile.title}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage

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
    <div className="h-full p-[1.63rem]">
      <div className="h-full w-[19.3125rem] border-r">
        <div className=" w-full p-2 py-3">
          <p className="mb-[2.5rem] pl-8 text-xl font-medium">CODEBILITY ACCOUNT</p>
          <ul className="flex flex-col gap-3 px-6">
            {profileMenuList.map((profile) => (
              <div className="hover:bg-gray02 flex w-full cursor-pointer items-center gap-10 rounded-sm px-4 py-2">
                <div>
                  <Image src={profile.icon} alt={profile.title} width="14" height="14" />
                </div>

                <li className="text-left text-sm">{profile.title}</li>
              </div>
            ))}
            <div className="border-b">&nbsp;</div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage

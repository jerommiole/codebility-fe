"use client"

import React from "react"
import Image from "next/image"

import personIcon from "public/sampleProfile/settings/person.png"
import bellIcon from "public/sampleProfile/settings/bell.png"
import gearIcon from "public/sampleProfile/settings/gear.png"
import logIcon from "public/sampleProfile/settings/log.png"
import infoIcon from "public/sampleProfile/settings/info.png"
import { SvgBin, SvgCamera, SvgCircleAvatar, SvgEdit, SvgEdit2, SvgPlusCircleBlue } from "../../../../assets/icons"
import Input from "../../../../Components/ui/forms/input"
import UserInfoForm from "../../../../Components/profile/UserInfoForm"
import { usePathname } from "next/navigation"
import { cn } from "../../../../lib/utils"
import ContactSocialsInfoForm from "../../../../Components/profile/ContactSocialsInfoForm"

const ProfilePage = () => {
  const pathname = usePathname()

  const profileMenuList = [
    {
      title: "Profile Info",
      icon: personIcon,
      href: "/profile",
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

  const contactInfoList = {
    phone: "+63901234123",
    github: "dummy.github.io",
    facebook: "https://www.facebook.com",
    whatsApp: "https://www.facebook.com",
    telegram: "https://www.facebook.com",
    skype: "https://www.facebook.com",
    linkedIn: "https://www.facebook.com",
  }

  const OutlineButton = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="flex items-center gap-2.5 border border-gray03 px-[13px] py-[9px] text-xs text-secondaryColor">
        {children}
      </div>
    )
  }

  const ProfileCard = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="border-box mb-4 w-full rounded-sm border border-gray03 py-11">
        <div className="mx-auto w-full max-w-[679px]">{children}</div>
      </div>
    )
  }

  return (
    <div className="h-full p-[1.63rem]">
      <div className="flex h-full w-full">
        <div className="h-full w-[19.3125rem] border-r">
          <div className=" w-full p-2 py-3">
            <p className="mb-[2.5rem] pl-8 text-xl font-medium">CODEBILITY ACCOUNT</p>
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
          </div>
        </div>
        <div className="grow overflow-auto pl-5">
          <div className="mb-9 pt-4">
            <h1 className="mb-2 text-4xl">Personal Info</h1>
            <p className="text-xs text-secondaryColor">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.{" "}
            </p>
          </div>
          <ProfileCard>
            <h3 className="text-center text-xl">User Info</h3>
            <p className="text-center text-xs text-secondaryColor">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.{" "}
            </p>

            <div className="pt-[39px]">
              <div className="flex space-x-14">
                <div className="relative">
                  <SvgCircleAvatar />
                  <div className="absolute inset-0 h-full">
                    <div className="flex h-full flex-col items-center justify-center">
                      <SvgCamera />
                      <p className="text-center text-[10px]">Upload Photo</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-end gap-1">
                  <p className="text-sm font-light">Profile Picture</p>
                  <p className="text-sm font-light text-secondaryColor">
                    dummy text of the printing and typesetting industry.{" "}
                  </p>
                  <div className="flex items-center gap-[8px]">
                    <OutlineButton>
                      <SvgEdit />
                      Change
                    </OutlineButton>
                    <OutlineButton>
                      <SvgBin />
                      Remove
                    </OutlineButton>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <UserInfoForm />
              </div>
            </div>
          </ProfileCard>
          <ProfileCard>
            <div className="flex items-center justify-between">
              <h3 className="mb-[17px] text-xl">About Me</h3>
              <SvgEdit fill="#363636" />
            </div>

            <p className="text-sm text-secondaryColor">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of
              the printing and typesetting industry.
            </p>
          </ProfileCard>
          <ProfileCard>
            <h3 className="text-xl">Contact and Socials Info</h3>
            <p className="text-sm text-secondaryColor">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className="pt-4">
              <ContactSocialsInfoForm data={contactInfoList} />
              {/* <ul>
                {contactInfoList.map((item) => {
                  return (
                    <li
                      className="flex items-center justify-between border-b border-gray03 py-[19px] pl-[39px]"
                      key={item.name}
                    >
                      <div className="flex items-center">
                        <p className="w-24 text-xs text-secondaryColor">{item.name}</p>
                        <p className="text-md text-white">{item.description}</p>
                      </div>
                      <SvgEdit fill="#363636" />
                    </li>
                  )
                })}
              </ul>*/}
            </div>
          </ProfileCard>
          <ProfileCard>
            <h3 className="text-xl">Contact and Socials Info</h3>
            <p className="text-sm text-secondaryColor">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className="pt-4">
              <button className="flex items-center gap-2 rounded border border-gray03 px-4 py-3.5">
                <SvgPlusCircleBlue />
                Add Skills and Stack
              </button>
            </div>
          </ProfileCard>
          <ProfileCard>
            <h3 className="text-xl">Work Experience</h3>
            <p className="text-sm text-secondaryColor">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className="pt-4">
              <button className="flex items-center gap-2 rounded border border-gray03 px-4 py-3.5">
                <SvgPlusCircleBlue />
                Add Work Experience
              </button>
            </div>
          </ProfileCard>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage

import React from "react"
import Image from "next/image"

import personIcon from "public/sampleProfile/settings/person.png"
import bellIcon from "public/sampleProfile/settings/bell.png"
import gearIcon from "public/sampleProfile/settings/gear.png"
import logIcon from "public/sampleProfile/settings/log.png"
import infoIcon from "public/sampleProfile/settings/info.png"
import { SvgBin, SvgCamera, SvgCircleAvatar, SvgEdit, SvgPlusCircleBlue } from "../../../../assets/icons"

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

  const userInfoList = [
    {
      name: "Name",
      description: "Mr.Dummy",
    },
    {
      name: "Address",
      description: "Dummy St. Lorem Ipsum City Philippines",
    },
    {
      name: "Email",
      description: "Dummy@gmail.com",
    },
    {
      name: "Gender",
      description: "Fe/Male",
    },
  ]

  const contactInfoList = [
    {
      name: "Email",
      description: "Dummy@gmail.com",
    },
    {
      name: "Phone",
      description: "+63901234123",
    },
    {
      name: "Github",
      description: "dummy.github.io",
    },
    {
      name: "Facebook",
      description: "https://www.facebook.com/",
    },
    {
      name: "WhatsApp",
      description: "https://www.facebook.com/",
    },
    {
      name: "Telegram",
      description: "https://www.facebook.com/",
    },
    {
      name: "Skype",
      description: "https://www.facebook.com/",
    },
    {
      name: "LinkedIn",
      description: "https://www.facebook.com/",
    },
  ]

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
              {profileMenuList.map((profile) => (
                <div className="flex w-full cursor-pointer items-center gap-10 rounded-sm px-4 py-2 hover:bg-gray02">
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
                    <div className="flex items-center gap-2.5 border border-gray03 px-[13px] py-[9px] text-xs text-secondaryColor">
                      <SvgEdit />
                      Change
                    </div>
                    <div className="flex items-center gap-2.5 border border-gray03 px-[13px] py-[9px] text-xs text-secondaryColor">
                      <SvgBin />
                      Remove
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <ul>
                  {userInfoList.map((item) => {
                    return (
                      <li
                        className="flex items-center justify-between border-b border-gray03 py-[19px] pl-[39px]"
                        key={item.name}
                      >
                        <div className="flex items-center">
                          <p className="w-24 text-xs text-secondaryColor">{item.name}</p>
                          <p className="text-md text-white">{item.description}</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M12.6583 1.3418L14.6583 3.3418L13.1337 4.86713L11.1337 2.86713L12.6583 1.3418ZM5.33301 10.6671H7.33301L12.191 5.80913L10.191 3.80913L5.33301 8.66713V10.6671Z"
                            fill="#363636"
                          />
                          <path
                            d="M12.6667 12.6667H5.43867C5.42133 12.6667 5.40333 12.6733 5.386 12.6733C5.364 12.6733 5.342 12.6673 5.31933 12.6667H3.33333V3.33333H7.898L9.23133 2H3.33333C2.598 2 2 2.59733 2 3.33333V12.6667C2 13.4027 2.598 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V6.888L12.6667 8.22133V12.6667Z"
                            fill="#363636"
                          />
                        </svg>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </ProfileCard>
          <ProfileCard>
            <h3 className="mb-[17px] text-xl">About Me</h3>
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
              <ul>
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M12.6583 1.3418L14.6583 3.3418L13.1337 4.86713L11.1337 2.86713L12.6583 1.3418ZM5.33301 10.6671H7.33301L12.191 5.80913L10.191 3.80913L5.33301 8.66713V10.6671Z"
                          fill="#363636"
                        />
                        <path
                          d="M12.6667 12.6667H5.43867C5.42133 12.6667 5.40333 12.6733 5.386 12.6733C5.364 12.6733 5.342 12.6673 5.31933 12.6667H3.33333V3.33333H7.898L9.23133 2H3.33333C2.598 2 2 2.59733 2 3.33333V12.6667C2 13.4027 2.598 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V6.888L12.6667 8.22133V12.6667Z"
                          fill="#363636"
                        />
                      </svg>
                    </li>
                  )
                })}
              </ul>
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

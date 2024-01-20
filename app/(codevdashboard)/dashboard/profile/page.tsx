"use server"

import React from "react"
import { Toaster } from "react-hot-toast"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

// components
import ContactSocialsInfoForm from "../../../../Components/profile/ContactSocialsInfoForm"
import UserInfo from "./components/UserInfo"
import SettingMenu from "./components/SettingMenu"

// icons
import { SvgEdit, SvgPlusCircleBlue } from "../../../../assets/icons"

//  utils
import { authOptions } from "../../../../lib/authOptions"

const contactInfoList = {
  phone: "+63901234123",
  github: "dummy.github.io",
  facebook: "https://www.facebook.com",
  whatsApp: "https://www.facebook.com",
  telegram: "https://www.facebook.com",
  skype: "https://www.facebook.com",
  linkedIn: "https://www.facebook.com",
}
export default async function ProfilePage() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return redirect("/")
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
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex h-full w-full">
        <div className="h-full w-[19.3125rem] border-r">
          <div className=" w-full p-2 py-3">
            <p className="mb-[2.5rem] pl-8 text-xl font-medium">CODEBILITY ACCOUNT</p>
            <SettingMenu />
          </div>
        </div>
        <div className="grow overflow-auto pl-5">
          <div className="mb-9 pt-4">
            <h1 className="mb-2 text-4xl">Personal Info</h1>
            <p className="text-xs text-secondaryColor">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.{" "}
            </p>
          </div>
          <UserInfo user={session?.user} />
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

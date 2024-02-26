"use client"

import H1 from "@/Components/landingPage/H1"

const ProfilePage = () => {
  return (
    <div className="flex flex-col gap-6">
      <H1 className="text-[#0E0E0C]">Account Settings</H1>
      <div className="flex flex-row gap-6 ">
        <div className="flex flex-col gap-4 bg-red-400">
          <p>Profile Info</p>
        </div>
        <div className="flex flex-row gap-6 bg-red-400"></div>
      </div>
    </div>
  )
}

export default ProfilePage

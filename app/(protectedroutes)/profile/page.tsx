"use client"

import H1 from "@/Components/landingPage/H1"
import { Input } from "@/Components/ui/input"
import Image from "next/image"
import avatar from "@/public/assets/images/default-avatar-male.png"

const ProfilePage = () => {
  return (
    <div className="flex flex-col gap-6">
      <H1 className="text-[#0E0E0C]">Account Settings</H1>
      <div className="flex flex-row gap-6">
        <div className="flex basis-1/4 flex-col gap-4 bg-gray-100">
          <p>Profile Info</p>
        </div>
        <div className="flex basis-3/4 flex-col gap-4 bg-gray-100 p-6">
          <p>Profile Info</p>
          <p>Manage your account information</p>

          <div className="flex gap-2">
            <Image src={avatar} alt="Avatar" width={80} height={80} />
            <div>
              <p>Profile Image</p>
              <p>Upload Image</p>
              <p>Remove Image</p>
            </div>
          </div>

          <div className="flex gap-4">
            <p>Pronoun</p>
            <Input placeholder="Pronoun" />
          </div>
          <div className="flex gap-4">
            <p>Name</p>
            <Input placeholder="Name" />
          </div>
          <div className="flex gap-4">
            <p>Address</p>
            <Input placeholder="Address" />
          </div>
          <div className="flex gap-4">
            <p>Email</p>
            <Input placeholder="Email" />
          </div>

          <div className="flex gap-4">
            <p>About</p>
            <Input placeholder="About" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage

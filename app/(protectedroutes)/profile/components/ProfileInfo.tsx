import React from "react"
import { Input } from "@/Components/ui/input"
import Image from "next/image"
import avatar from "@/public/assets/images/default-avatar-male.png"
import Box from "@/Components/shared/dashboard/Box"

const ProfileInfo = () => {
  return (
    <Box>
      <div className="flex basis-3/4 flex-col gap-4">
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
    </Box>
  )
}

export default ProfileInfo

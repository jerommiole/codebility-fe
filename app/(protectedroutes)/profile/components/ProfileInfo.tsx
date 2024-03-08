import React, { useState } from "react"
import Image from "next/image"
import avatar from "@/public/assets/images/default-avatar-male.png"
import Box from "@/Components/shared/dashboard/Box"
import { Paragraph } from "@/Components/shared/home"
import { InputProfile } from "@/Components/shared/dashboard"
import Link from "next/link"
import { IconEdit } from "@/public/assets/svgs"
import { Button } from "@/Components/ui/button"

const ProfileInfo = () => {
  const [isEditMode, setIsEditMode] = useState(false)

  const handleEditClick = () => {
    setIsEditMode(!isEditMode)
  }
  const handleSaveClick = () => {
    setIsEditMode(false)
  }

  return (
    <div className="flex flex-col gap-6">
      <Box className="relative flex flex-col gap-2">
        <Link href={`#`}>
          <IconEdit className="w-15 h-15 absolute right-6 top-6" onClick={handleEditClick} />
        </Link>
        <p className="text-2xl">Profile Info</p>
        <Paragraph>Manage your account information</Paragraph>

        <div className="flex gap-4">
          <Image src={avatar} alt="Avatar" width={80} height={80} className="rounded-full bg-blue-100 bg-cover" />
          <div className="flex flex-col justify-center gap-2">
            <p>Profile Image</p>
            <div className="flex gap-4">
              <Link href={`#`}>
                <p className="text-blue-100">Upload Image</p>
              </Link>
              <Link href={`#`}>
                <p className="text-violet">Remove Image</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <InputProfile label="Pronoun" disabled={!isEditMode} />
            <InputProfile label="Name" disabled={!isEditMode} />
            <InputProfile label="Address" disabled={!isEditMode} />
            <InputProfile label="Time Schedule" disabled={!isEditMode} />
          </div>
          {isEditMode ? (
            <div className="flex justify-end gap-2">
              <Button variant="hollow" onClick={handleSaveClick}>
                Cancel
              </Button>
              <Button variant="default" onClick={handleSaveClick}>
                Save
              </Button>
            </div>
          ) : null}
        </div>
      </Box>

      <Box className="relative">
        <Link href={`#`}>
          <IconEdit className="w-15 h-15 absolute right-6 top-6" />
        </Link>
        <p className="text-2xl">About</p>
      </Box>

      <Box className="relative">
        <Link href={`#`}>
          <IconEdit className="w-15 h-15 absolute right-6 top-6" />
        </Link>
        <p className="text-2xl">Contact Info</p>
        <div className="flex flex-col">
          <InputProfile label="Email" disabled />
          <InputProfile label="Phone" disabled />
          <InputProfile label="Website" disabled />
          <InputProfile label="Github" disabled />
          <InputProfile label="Facebook" disabled />
          <InputProfile label="Linkedin" disabled />
          <InputProfile label="Telegram" disabled />
          <InputProfile label="Whatsapp" disabled />
          <InputProfile label="Skype" disabled />
        </div>
      </Box>

      <Box className="relative">
        <Link href={`#`}>
          <IconEdit className="w-15 h-15 absolute right-6 top-6" />
        </Link>
        <p className="text-2xl">Experience</p>
      </Box>
      <Box className="relative">
        <Link href={`#`}>
          <IconEdit className="w-15 h-15 absolute right-6 top-6" />
        </Link>
        <p className="text-2xl">Skills</p>
      </Box>
    </div>
  )
}

export default ProfileInfo

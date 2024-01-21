"use client"

import React, { useState } from "react"
import Image from "next/image"
import toast from "react-hot-toast"

import UserInfoForm from "../../../../../Components/profile/UserInfoForm"

import { SvgBin, SvgCamera, SvgEdit } from "../../../../../assets/icons"
import { upload } from "../../../../../lib/upload"

const UserInfo = ({ user }: any) => {
  const [isLoading, setIsLoading] = useState(false)
  const [imageData, setImageData] = useState<string | null>(user?.image)
  const ProfileCard = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="border-box mb-4 w-full rounded-sm border border-gray03 py-11">
        <div className="mx-auto w-full max-w-[679px]">{children}</div>
      </div>
    )
  }

  const OutlineButton = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => {
    return (
      <div
        className="flex cursor-pointer items-center gap-2.5 border border-gray03 px-[13px] py-[9px] text-xs text-secondaryColor transition duration-300 hover:-translate-y-0.5"
        onClick={onClick}
      >
        {children}
      </div>
    )
  }

  const handleUploadAvatar = async (event: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    const file: any = event.target.files[0]
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"]

    if (allowedTypes.includes(file.type)) {
      const reader = new FileReader()

      reader.onload = () => {
        const image: any = reader.result
        setImageData(image)
      }

      reader.readAsDataURL(file)
      await upload(event, (link) => {
        setImageData(link)
      })
    } else {
      console.log("The selected file is not an image in one of the supported formats.")
    }
  }

  const handleRemoveAvatar = () => {
    setImageData(null)
  }

  const handleSaveChanges = async () => {
    setIsLoading(true)

    const email = user?.email
    const updatedData = { image: imageData }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/google/user/${email}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      })
      if (response.ok) {
        toast.success("Profile image updated successfully")
      } else {
        toast.error("Failed to update user:")
      }
    } catch (error: any) {
      toast.error("Error updating user:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ProfileCard>
      <h3 className="text-center text-xl">User Info</h3>
      <p className="text-center text-xs text-secondaryColor">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.{" "}
      </p>

      <div className="pt-[39px]">
        <div className="flex space-x-14">
          <div className="relative h-[100px] w-[100px]">
            {imageData ? (
              <>
                <div className="absolute inset-0 z-10">
                  <label className="top-0 flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-full bg-black/20 hover:bg-black/50">
                    <SvgCamera />
                    <input type="file" className="hidden" onChange={handleUploadAvatar} />
                    <p className="text-center text-[10px]">Upload Photo</p>
                  </label>
                </div>

                <div className="absolute inset-0">
                  <div className="flex h-full w-full items-center justify-center">
                    <Image src={imageData} alt="avatar" className="rounded-full" fill />
                  </div>
                </div>
              </>
            ) : (
              <label className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-full bg-gray03">
                <SvgCamera />
                <input type="file" className="hidden" onChange={handleUploadAvatar} />
                <p className="text-center text-[10px]">Upload Photo</p>
              </label>
            )}
          </div>
          <div className="flex flex-col justify-end gap-1">
            <p className="text-sm font-light">Profile Picture</p>
            <p className="text-sm font-light text-secondaryColor">
              dummy text of the printing and typesetting industry.{" "}
            </p>
            <div className="flex items-center gap-[8px]">
              <button
                className="flex cursor-pointer items-center gap-2.5 border border-gray03 px-[13px] py-[9px] text-xs text-secondaryColor transition duration-300 hover:-translate-y-0.5"
                onClick={handleSaveChanges}
              >
                {isLoading ? (
                  <p>Saving ...</p>
                ) : (
                  <>
                    <SvgEdit />
                    Save
                  </>
                )}
              </button>
              <OutlineButton onClick={handleRemoveAvatar}>
                <SvgBin />
                Remove
              </OutlineButton>
            </div>
          </div>
        </div>
        <div className="w-full">
          <UserInfoForm user={user} />
        </div>
      </div>
    </ProfileCard>
  )
}

export default UserInfo

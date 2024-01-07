import React from "react"
import { Avatars } from "../../../Components/exports"

interface props {
  Honorifics: string
  Name: string
  Email: string
  DP: string
}

const Dashboard_Avatar = ({ Honorifics, Name, Email, DP }: props) => {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-5">
      <div className="">
        <span className="text-[32px] font-semibold">Dashboard</span>
      </div>
      <div className="">
        <Avatars custmwdt={300} custmhgt={300} Avatarimg={DP} Position={""} Honorifics={""} Name={""} Avatarbg={""} />
      </div>
      <div className="flex flex-col items-center">
        <span className="text-[15px] font-medium">
          {Honorifics} {Name}
        </span>
        <span className="text-[12px] font-light text-[#8E8E8E]">{Email}</span>
      </div>
    </div>
  )
}

export default Dashboard_Avatar

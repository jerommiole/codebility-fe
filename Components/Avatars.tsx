import React from "react"
import { Avatar } from "@/components/ui/avatar"
import { Arrow } from "../app/CoDevs/Assets/exports"
import Image from 'next/image'
import Link from 'next/link'
interface props{
  Position?:string;
  Honorifics?:string;
  Name?:string;
  Avatarimg?:any;
  Avatarbg?:string;
  custmwdt?:any;
  custmhgt?:any;
  className?:string;
  linkHref?:string;
}
const Avatars = ({Position,Honorifics,Name,Avatarimg,custmwdt,custmhgt,className,linkHref}:props) => {
  return (
      <div className="">
            <Avatar className={` ${className} `}>
                  <Image alt='dp' width={custmwdt} height={custmhgt} src={Avatarimg}/>
            </Avatar>
          <div className="flex flex-col md:space-y-2 space-y-0">
              <span className="md:text-2xl text-base font-medium text-white">{Honorifics} {Name}</span>
              <span className="md:text-sm text-xs text-[#8E8E8E]">{Position}</span>
              {linkHref && (
          <Link className="flex space-x-4 text-[#6A78F2] font-medium md:text-lg text-sm" href={linkHref}>
            <span>Read Bio</span>
            {Arrow && <Image alt='arrow' src={Arrow} />}
          </Link>
        )}
            </div>
      </div>

  )
}

export default Avatars

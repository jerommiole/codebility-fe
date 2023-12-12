import React from 'react'
import { Avatar } from "@/components/ui/avatar"
import { Arrow } from "../app/CoDevs/Assets/exports"
import Image from 'next/image'
import Link from 'next/link'
interface props{
  Position?:string;
  Honorifics?:string;
  Name?:string;
  Avatarimg:string;
  Avatarbg?:string;
  custmwdt?:any;
  custmhgt?:any;
  linkHref?:string;
  className?:string;


}
const Avatars = ({Position,Honorifics,Name,Avatarimg,Avatarbg,custmwdt,custmhgt,linkHref,className}:props) => {
  return (
      <div className="">
            <Avatar className={` ${className} `}>
                  <Image alt='dp' src={Avatarimg} width={custmwdt} height={custmhgt}/>
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

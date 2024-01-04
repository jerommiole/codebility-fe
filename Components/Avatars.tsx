import React from "react"
import Avatar from "Components/ui/avatar"
// import { Arrow } from "/app/CoDevs/Assets/exports"
import { Arrow,Waves } from "app/CoDevs/Assets/exports"
import Image from "next/image"
import Link from "next/link"
interface props {
  Position?: string;
  Honorifics?: string;
  Name?: string;
  Avatarimg: any;
  Avatarbg?: string;
  custmwdt?: number;
  custmhgt?:number;
  linkHref?:any;
}
const Avatars = ({Position,Honorifics,Name,Avatarimg,custmwdt,custmhgt,linkHref}:props) => {
  return (
      <div className=" w-32 h-[218px] flex flex-col justify-center items-center ">
          <div className="flex justify-center items-end w-32 h-32 relative">
            <div className="z-10 w-full justify-center flex"><Image className="object-center" alt='dp' width={custmwdt} height={custmhgt} src={Avatarimg}/></div>
             <div className="absolute bottom-0 flex justify-center w-full h-12 ">

              </div>



            <div className="absolute  bg-[#02FFE2] w-[70px] h-[60px]"></div>

          </div>



          <div className="flex flex-col items-center space-y-1 p-2 w-full relative bg-[#171717] rounded-3xl">

              <div className="absolute top-[-15px]"><Image className="h-[50.24px] object-contain" alt='dp'src={Waves}/></div>



          <span className="text-sm font-semibold text-[#6A78F2] z-40">{Honorifics} {Name}</span>

              <span className="text-[12px] text-[#8E8E8E]">{Position}</span>
              <div className="flex items-center w-full space-x-4">
                <span className="text-[0.6rem]  text-center text-[#FDB7D0] rounded-full w-[50%] h-4 bg-[#363636]">FS</span>
                <span className="text-[0.6rem] text-center text-[#02FFE2] rounded-full w-[50%] h-4 bg-[#363636]">BE</span>
                <span className="text-[0.6rem] font-medium text-center text-[#6A78F2] rounded-full w-[100%] h-4 bg-[#363636]">UI/UX</span>
              </div>
          <Link className="flex space-x-4 text-[#6A78F2] font-medium text-sm" href={'#'}>
            <span>Read Bio</span>
            <Image alt='arrow' src={Arrow} />
          </Link>

            </div>
      </div>

  )
}

export default Avatars

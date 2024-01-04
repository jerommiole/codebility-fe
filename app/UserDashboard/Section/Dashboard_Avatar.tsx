import React from 'react'
import {Avatars} from '../../../Components/exports'

interface props{
  Honorifics:string;
  Name: string;
  Email:string;
  DP: string;
}


const Dashboard_Avatar = ({Honorifics,Name,Email,DP}:props) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 h-full">
        <div className=""><span className='text-[32px] font-semibold'>Dashboard</span></div>
        <div className="">
          <Avatars custmwdt={300} custmhgt={300} Avatarimg={DP} className='bg-[#C108FE] w-[180px] h-[180px]' Position={''} Honorifics={''} Name={''} Avatarbg={''} />
        </div>
        <div className="flex flex-col items-center">
            <span className='font-medium text-[15px]'>{Honorifics} {Name}</span>
            <span className='text-[#8E8E8E] text-[12px] font-light'>{Email}</span>
        </div>
    </div>
  )
}

export default Dashboard_Avatar

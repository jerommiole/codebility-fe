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
        <div className=""><span className='text-3xl font-semibold'>Dashboard</span></div>
        <div className="">
          <Avatars custmwdt={200} custmhgt={200} Avatarimg={DP} className='bg-[#C108FE] w-[170px] h-[170px]'/>
        </div>
        <div className="flex flex-col items-center">
            <span className='font-bold'>{Honorifics} {Name}</span>
            <span className='text-[#8E8E8E] font-light'>{Email}</span>
        </div>
    </div>
  )
}

export default Dashboard_Avatar

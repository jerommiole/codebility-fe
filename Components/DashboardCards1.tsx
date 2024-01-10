import React,{useState,useEffect} from 'react'
import {Dots} from "../app/UserDashboard/Assets/exports";
import Image from 'next/image'
import StyledRadio from './StyledRadio';
interface props{

  DataNotes:string;

}


const DashboardCards1 = ({DataNotes}:props) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
    console.log("Checked state is now:", !isChecked);
  };


  return (
    <>
      <div className="flex flex-col w-[200px] bg-[#181818] bg-opacity-[50%] rounded p-3">
        <div className="flex">
          <div className="flex-grow">
            <StyledRadio
              id="customCheckbox"
              checked={isChecked}
              onChange={toggleCheck}

            />


          </div>
          <div className="flex-grow flex justify-end space-x-1 ">
              <Image alt='BG' src={Dots} loading="lazy"/>
              <Image alt='BG' src={Dots} loading="lazy"/>
              <Image alt='BG' src={Dots} loading="lazy"/>
          </div>
        </div>
        <span className="text-right w-full text-[10px] text-[#8E8E8E]">11/28/2023</span>
        <span className="text-white">Lorem Ipsum </span>
        <span className="text-right w-full text-sm text-[#8E8E8E] mt-4">
          {DataNotes}
        </span>

      </div>

    </>

  )
}

export default DashboardCards1

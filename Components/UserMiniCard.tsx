import React,{useState} from 'react'
import Link from 'next/link';
import StyledRadio from './StyledRadio';

interface props{
    notetitles:string;
}


const UserMiniCard = ({notetitles}:props) => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheck = () => {
      setIsChecked(!isChecked);
      console.log("Checked state is now:", !isChecked);
    };
  return (
    <div className="flex  w-full h-full p-5 bg-[#181818] bg-opacity-[50%] rounded">
        <div className="flex space-x-4">
                <StyledRadio
                    id="customCheckbox"
                    checked={isChecked}
                    onChange={toggleCheck}

                    />
                    <span>{notetitles}</span>
        </div>
        <div className="flex-grow text-right text-[#6A78F2]">
            <Link  href="#">
                View
          </Link>
          </div>

    </div>
  )
}

export default UserMiniCard

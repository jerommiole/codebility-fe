import React from 'react'
import UserMiniCard from './UserMiniCard'




const DashboardCards2 = () => {
  return (
    <div className="flex flex-col w-full h-full p-5 space-y-3">
        <div className="flex flex-col">
            <span>Today</span>
            <span>Loream Ipsum</span>
            <span className="w-full text-right">Add</span>
        </div>
        <div className="grid grid-rows-1 gap-4">
            <UserMiniCard notetitles="Lorem Impsum"/>
            <UserMiniCard notetitles="Lorem Impsum"/>
            <UserMiniCard notetitles="Lorem Impsum"/>

        </div>



    </div>
  )
}

export default DashboardCards2

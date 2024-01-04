import React from "react"
import { Sec1, Sec2, Sec3 } from "./Section/index"
const CoDevs = () => {
  return (
    <div className="bg-backgroundColor text-primaryColor flex h-screen w-full flex-col items-center justify-center space-y-[15px] md:px-[200px] px-[50px] py-[30px]">
      {/* Column1 */}
      <Sec1 />
      {/* Column 2 */}
      <Sec2 />
      {/* Column 3 */}
      <Sec3 />
    </div>
  )
}

export default CoDevs
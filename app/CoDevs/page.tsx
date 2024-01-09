import React from "react"
import { Sec1, Sec2 } from "./Section/index"
const CoDevs = () => {
  return (
    <div
      id="team"
      className="flex h-auto w-full flex-col items-center justify-center space-y-[15px] bg-backgroundColor px-[50px] py-[30px] text-primaryColor md:px-[240px]"
    >
      {/* Column1 */}

      <Sec1 />

      {/* Column 2 */}

      <Sec2 />
      <p className="h-[15vh] md:w-1/2 w-full text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s,
      </p>

      </div>
  )
}

export default CoDevs

import React from "react"

const Section1 = () => {
  return (
    <div className="flex h-[15vh] w-full flex-col  items-center justify-center md:flex-row">
      <div className="flex w-full flex-col md:w-1/2">
        <div className="">
          <span className="text-xl font-medium md:text-2xl">LOREM IPSUM</span>
        </div>
        <div className="mb-3 h-[3px] w-[30px] bg-black dark:bg-white"></div>
        <div className="">
          <span className="text-3xl font-normal md:text-6xl">LOREM IPSUM</span>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="flex h-full w-full items-end text-left text-[12px] md:w-[80%] md:text-base">
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s,
          </span>
        </div>
      </div>
    </div>
  )
}

export default Section1

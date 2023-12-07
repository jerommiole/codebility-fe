import React from "react"

const Section1 = () => {
  return (
    <div className="flex md:flex-row flex-col  h-[15vh] w-full justify-center">
      <div className="flex md:w-1/2 w-full flex-col">
        <div className="">
          <span className="md:text-2xl text-xl font-medium">LOREM IPSUM</span>
        </div>
        <div className="mb-3 h-[3px] w-[30px] dark:bg-white bg-black"></div>
        <div className="">
          <span className="md:text-6xl text-3xl font-normal">LOREM IPSUM</span>
        </div>
      </div>
      <div className="md:w-1/2 w-full">
        <div className="flex h-full md:w-[80%] w-full items-end text-left md:text-base text-[12px]">
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

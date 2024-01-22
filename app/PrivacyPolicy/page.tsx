"use cleint"
import Image from "next/image"
import React from "react"
const page = () => {
  return (
    <section className="h-screen w-screen overflow-y-auto bg-backgroundColor text-primaryColor">
      <div className="flex flex-col items-center justify-center px-2 py-10 sm:px-[97px] sm:py-[98px]">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl sm:text-4xl">Privacy Policy</h1>
          <p className="text-center text-lg">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
        </div>
        <div className="flex items-center justify-center py-[47px]">
          <h1 className="text-2xl">Lorem Ipsum has been the industry's</h1>
        </div>
        {/*  */}
        <div className="flex flex-col gap-[18px] px-8">
          <div className="flex items-start gap-x-5 ">
            <Image src="./simple-icons.svg" width={30} height={25} alt="" style={{ width: "30px", height: "25px" }} />
            <div className="flex flex-col items-start justify-start gap-y-2  ">
              <h1 className="text-xl">Lorem Ipsum</h1>
              <p>
                Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                book
              </p>
            </div>
            <Image src="/simple-icons.svg" width={30} height={25} alt="" style={{ width: "30px", height: "25px" }} />
            <div className="flex flex-col items-start justify-start gap-y-2  ">
              <h1 className="text-xl">Lorem Ipsum</h1>
              <p>
                Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                book
              </p>
            </div>
          </div>
          {/*  */}
          <div className="flex items-start gap-x-5 ">
            <Image src="/simple-icons.svg" width={30} height={25} alt="" style={{ width: "30px", height: "25px" }} />
            <div className="flex flex-col items-start justify-start gap-y-2  ">
              <h1 className="text-xl">Lorem Ipsum</h1>
              <p>
                Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                book
              </p>
            </div>
            <Image src="/simple-icons.svg" width={30} height={25} alt="" style={{ width: "30px", height: "25px" }} />
            <div className="flex flex-col items-start justify-start gap-y-2  ">
              <h1 className="text-xl">Lorem Ipsum</h1>
              <p>
                Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                book
              </p>
            </div>
          </div>
          {/*  */}

          <div className="flex items-start gap-x-5 ">
            <Image src="/simple-icons.svg" width={30} height={25} alt="" style={{ width: "30px", height: "25px" }} />
            <div className="flex flex-col items-start justify-start gap-y-2  ">
              <h1 className="text-xl">Lorem Ipsum</h1>
              <p>
                Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                book
              </p>
            </div>
            <Image src="/simple-icons.svg" width={30} height={25} alt="" style={{ width: "30px", height: "25px" }} />
            <div className="flex flex-col items-start justify-start gap-y-2  ">
              <h1 className="text-xl">Lorem Ipsum</h1>
              <p>
                Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                book
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="items-start pt-[47px]">
          <h1>
            Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </h1>
        </div>
      </div>
    </section>
  )
}

export default page

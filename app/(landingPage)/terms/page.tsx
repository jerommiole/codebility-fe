import Image from "next/image"
import React from "react"

const page = () => {
  return (
    <section className="h-screen w-screen overflow-y-auto bg-backgroundColor text-primaryColor">
      <div className="px-8 py-8 sm:px-[95px] sm:pt-[61px]">
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl">Terms and Condition</h1>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          <h1 className="text-2xl">Lorem Ipsum has been the industry's</h1>
          {/*  */}
          <div className=" flex flex-col gap-4 ">
            <div className="flex items-start gap-5 ">
              <Image
                src="/carbon_condition-point.svg"
                width={30}
                height={25}
                alt=""
                style={{ width: "30px", height: "25px" }}
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-xl">Lorem Ipsum</h1>
                <p>
                  Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                  specimen book Since the 1500s
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 ">
              <Image
                src="/carbon_condition-point.svg"
                width={30}
                height={25}
                alt=""
                style={{ width: "30px", height: "25px" }}
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-xl">Lorem Ipsum</h1>
                <p>
                  Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                  specimen book Since the 1500s,
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 ">
              <Image
                src="/carbon_condition-point.svg"
                width={30}
                height={25}
                alt=""
                style={{ width: "30px", height: "25px" }}
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-xl">Lorem Ipsum</h1>
                <p>
                  Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                  specimen book Since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                  a type specimen book
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 ">
              <Image
                src="/carbon_condition-point.svg"
                width={30}
                height={25}
                alt=""
                style={{ width: "30px", height: "25px" }}
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-xl">Lorem Ipsum</h1>
                <p>
                  Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                  specimen book Since the 1500s
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 ">
              <Image
                src="/carbon_condition-point.svg"
                width={30}
                height={25}
                alt=""
                style={{ width: "30px", height: "25px" }}
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-xl">Lorem Ipsum</h1>
                <p>
                  Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                  specimen book Since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                  a type specimen book
                </p>
              </div>
            </div>
          </div>
          {/* footer */}
          <div>
            <h1>
              Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
              book Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
              specimen book
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page

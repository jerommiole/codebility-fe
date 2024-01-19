import Link from "next/link"
import Image from "next/image"
import { interns, positionsSm, positions } from "../(codevdashboard)/Interns/DummyData"
import FilterCodev from "./components/filterCodev"

async function getCodevs() {
  const headers = { Accept: "application/json" }
  const res = await fetch("http://localhost:4000/api/v1/development/users", { headers })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  /*if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }*/

  return res.json()
}

export default async function Codevs() {
  const data = await getCodevs()

  console.log(data)

  return (
    <div className="flex w-full flex-col items-center justify-center bg-backgroundColor py-10 text-primaryColor">
      {/* TEXT SECTION */}
      <div className="w-80 max-w-7xl md:flex md:w-screen md:items-center md:justify-between md:px-16 lg:w-[90%] xl:w-[80%] xl:px-0">
        <div>
          <p>Lorem Lorem</p>
          <div className="mb-3 h-[3px] w-[30px] bg-white"></div>
          <h1 className="text-4xl font-medium md:text-5xl">LOREM IPSUM</h1>
        </div>
        <div>
          <p className="mt-1 max-w-[260px] text-sm xl:max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s,
          </p>
        </div>
      </div>

      <div className="mb-5 mt-7 flex w-80 max-w-7xl flex-col items-center justify-center gap-1 rounded-3xl bg-white bg-opacity-5 p-5 md:w-[85%] lg:w-[90%] xl:w-[80%]">
        <h3 className="text-xl uppercase text-secondaryColor">Meet our</h3>
        <h2 className="fw-bold text-3xl uppercase">Co Devs</h2>
        <p className="text-sm text-secondaryColor">Lorem Ipsum is simply dummy text</p>
        <FilterCodev />
      </div>

      <div className="mt-5 flex w-80 items-center justify-center text-center text-xs md:w-screen md:px-20 lg:w-[90%] lg:text-sm xl:max-w-lg xl:px-0">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s,
        </p>
      </div>
    </div>
  )
}

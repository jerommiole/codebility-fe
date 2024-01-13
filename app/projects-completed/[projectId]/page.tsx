"use client";

import Image from "next/image"
import { projects } from "../DummyData"
import { Iceland } from "next/font/google"
import { useRouter } from "next/navigation"

const iceland = Iceland({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
})

const Id = ({ params }: any) => {
  const id = params.projectId
  const router = useRouter();

  const projectData = projects.find((data) => data.projectId === parseInt(id))

  return (
    <>
      <div className="mx-5 my-10 flex max-w-7xl flex-col items-center justify-center gap-5 lg:mx-auto">
        <div className="flex w-full flex-col gap-5 md:flex-row-reverse md:items-center md:justify-between md:px-10 ">
          <div title="Back" onClick={() => router.back()} className="flex h-10 w-16 items-center justify-center rounded-3xl bg-slate-900 dark:bg-[#363636] dark:bg-opacity-20 hover:cursor-pointer">
            <Image src="/tdesign_backtop.svg" alt="Go back" width={20} height={20} />
          </div>
          <div className="flex flex-col items-center justify-center md:items-start md:self-start">
            <h1 className={`text-6xl font-semibold uppercase ${iceland.className}`}>{projectData?.projectName}</h1>
            <p className="max-w-[250px] text-xs dark:text-secondaryColor">{projectData?.projectDesc}</p>
          </div>
        </div>
        <div className="w-80 md:w-1/2">
          <Image
            src={`${projectData?.projectImg}`}
            alt={`${projectData?.projectName}`}
            priority
            width={1000}
            height={1000}
            quality={100}
            className="w-full"
          />
        </div>

        <div className="mx-auto w-80 space-y-5 self-start md:w-full md:px-10">
          <h2 className="text-2xl">Contributors</h2>
          <div className="grid grid-cols-2 place-items-center gap-y-10 transition-transform md:grid-cols-4 lg:grid-cols-5 lg:gap-y-7 xl:grid-cols-7">
            {projectData?.contributors.map((intern) => (
              <div key={intern.id} className="flex w-28 flex-col gap-1">
                <div className={`mx-auto rounded-full ${intern.backgroundColor} bg-opacity-30`}>
                  <Image src={intern.internImg} alt={intern.name} width={80} height={80} className="w-32" />
                </div>
                <div className="text-center text-xs">
                  <h1>{intern.name}</h1>
                  <p className="text-secondaryColor">{intern.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Id

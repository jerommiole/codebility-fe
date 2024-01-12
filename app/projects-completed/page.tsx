import Image from "next/image"
import { projects } from "./DummyData"
import Link from "next/link"
import Sidebar from "Components/sidebar"

const ProjectsCompleted = () => {
  return (
    <div className="flex h-screen w-full bg-[#0E0E0E] ">
      <Sidebar />
      <div className="mx-auto flex w-screen max-w-7xl flex-col gap-5 py-14">
        {/* ADD, FILTER, AND SEARCH ON TOP FOR TABLET AND DESKTOP SCREEN*/}
        <div className="mx-auto flex w-full flex-row-reverse gap-5 xl:w-[80%]">
          <div className="relative hidden md:flex md:w-60">
            <input
              type="text"
              placeholder="Search members"
              className="h-10 w-full rounded-full border border-[#8E8E8E] border-opacity-50 bg-inherit px-5 text-xs focus:outline-none"
            />
            <Image src="/Search.svg" alt="search" width={30} height={30} className="absolute right-1 top-1.5 p-1.5" />
          </div>

          <div className="hidden gap-5 md:flex md:items-center md:justify-center">
            <div className="flex items-center justify-center gap-3 hover:cursor-pointer">
              <p className="fw-semibold text-xs dark:text-primaryColor">Add</p>
              <Image src="/addclient.svg" alt="Add" priority width={13} height={13} className="w-auto" />
            </div>
            <div className="flex items-center justify-center gap-3 hover:cursor-pointer">
              <p className="fw-semibold text-xs dark:text-primaryColor">Filter</p>
              <Image src="/filter.svg" alt="Add" priority width={13} height={13} className="w-auto" />
            </div>
          </div>
        </div>

        {/* TITLE AND DESCRIPTION */}
        <div className="flex w-full flex-col items-start justify-center gap-5 md:w-[80%] md:ml-20 md:mt-5 md:justify-start lg:ml-32 xl:mx-auto xl:w-[80%]">
          <div className="mx-auto flex flex-col items-center justify-center gap-7 md:mx-0 md:items-start md:gap-1 md:px-10 xl:px-0">
            <h1 className={`text-3xl font-semibold uppercase dark:text-[#EAEAEA] xl:text-4xl`}>Projects Completed</h1>
            <p className="max-w-xs px-2 text-center text-xs dark:text-secondaryColor md:max-w-lg md:text-start xl:max-w-2xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry.
            </p>
          </div>

          {/* ADD, FILTER, AND SEARCH FOR MOBILE SCREEN*/}
          <div className="mx-auto flex w-80 flex-col gap-3 md:hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Search members"
                className="h-10 w-full rounded-full border border-[#8E8E8E] border-opacity-50 bg-inherit px-5 text-xs focus:outline-none"
              />
              <Image src="/Search.svg" alt="search" width={30} height={30} className="absolute right-1 top-1.5 p-1.5" />
            </div>

            <div className="flex justify-end gap-5">
              <div className="flex items-center justify-center gap-3 hover:cursor-pointer">
                <p className="text-xs dark:text-primaryColor">Add</p>
                <Image src="/addClient.svg" alt="Add" priority width={13} height={13} className="w-auto" />
              </div>
              <div className="flex items-center justify-center gap-3 hover:cursor-pointer">
                <p className="text-xs dark:text-primaryColor">Filter</p>
                <Image src="/filter.svg" alt="Add" priority width={13} height={13} className="w-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* COMPLETED PROJECTS */}
        <div className="mx-auto mt-5 grid h-96 w-80  grid-cols-1 place-items-center gap-y-5 overflow-y-scroll text-center md:h-[600px] md:w-[80%] md:ml-20 md:p-10 lg:ml-32 lg:grid-cols-2 lg:p-0 xl:grid-cols-3 xl:h-[485px] xl:w-[85%] xl:gap-x-0">
          {projects.map((project) => (
            <div
              key={project.projectId}
              className="relative flex w-80 flex-col gap-3 rounded-sm bg-slate-100 p-4 dark:bg-[#131313] md:w-96 lg:w-80"
            >
              <div className="h-40">
                <Image
                  src={project.projectImg}
                  alt={project.projectName}
                  priority
                  width={1000}
                  height={1000}
                  quality={100}
                  className="h-full object-contain md:object-cover"
                />
              </div>

              <div className="fw-semibold flex flex-col gap-3 text-start">
                <h1 className="text-2xl uppercase">CODEBILITY</h1>
                <p className="text-xs text-secondaryColor">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry.
                </p>
                <Link href={`projects-completed/${project.projectId}`}>
                  <button className="fw-semibold self-start bg-slate-200 px-4 py-2 text-xs dark:bg-darkBlueColor">
                    View Details
                  </button>
                </Link>
              </div>

              <Link href={`${project.projectUrl}`}>
                <div className="absolute -right-3 top-8 flex h-10 w-32 items-center justify-center gap-3 rounded-sm bg-slate-100 dark:bg-footerColor">
                  <p className="fw-semibold text-xs dark:text-darkBlueColor">See Website</p>
                  <Image src="/back.svg" alt="see website" priority width={15} height={15} className="w-auto" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsCompleted

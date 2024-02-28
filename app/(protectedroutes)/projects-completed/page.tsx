import Image from "next/image"
import { projects } from "./DummyData"
import Link from "next/link"
import Sidebar from "@/Components/shared/dashboard/LeftSidebar"
import H1 from "@/Components/shared/dashboard/H1"

const ProjectsCompleted = () => {
  return (
    <div className="flex flex-col gap-6">
      <H1>Projects Completed</H1>
      <div>
        <div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-4">
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

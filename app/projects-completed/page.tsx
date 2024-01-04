import Image from "next/image"
import { projects } from "./DummyData"
import Link from "next/link"

const ProjectsCompleted = () => {
  return (
    <div>
      <div className="max-w-7xl w-80 md:w-screen md:p-10 lg:w-2/3 lg:p-0 mx-auto my-10 text-center grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
        {projects.map((project) => (
          <div key={project.projectId}>
            <Link href={`projects-completed/${project.projectId}`} className="flex flex-col gap-3">
              <h1 className="text-2xl">{project.projectName}</h1>
              <div className="w-full">
                <Image
                  src={project.projectImg}
                  alt={project.projectName}
                  priority
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-full object-contain"
                />
              </div>
            </Link>
            <Link href={project.projectUrl}>
              <p className="text-sm mt-3 text-secondaryColor">Visit Website</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsCompleted

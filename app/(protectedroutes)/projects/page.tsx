"use client"

import H1 from "@/Components/shared/dashboard/H1"
import ProjectCard from "./ProjectCard"
import { useEffect, useState } from "react"
import axios from "axios"
import { Button } from "@/Components/ui/button"
import { IconAdd, IconFilter } from "@/public/assets/svgs"
import { Search } from "lucide-react"
import { useModal } from "@/hooks/use-modal"
import Loading from "./loading"

const getProjects = async () => {
  const res = await axios.get("https://codebility-be.onrender.com/api/v1/production/projects")
  return res.data.data
}

const Projects = () => {
  const [projects, setProjects] = useState([])

  const { onOpen } = useModal()

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getProjects()
      setProjects(projects)
    }

    fetchProjects()
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between gap-4">
        <H1>Projects</H1>
        <div className="flex items-center gap-4">
          {/* Input Hollow for Search */}
          <Search className="mr-3 cursor-pointer text-xs invert-0 dark:invert md:hidden" />
          <div className="relative hidden md:block lg:w-60">
            <Search className="absolute left-2 top-2.5 text-gray invert-0 dark:invert" size={20} />
            <input
              type="text"
              className="border-gray-100 h-10 w-full rounded-lg border bg-transparent py-1.5 ps-10 text-gray focus:outline-none"
              placeholder="Search projects..."
            />
          </div>
          {/* Select Filter */}
          <IconFilter
            className="mr-3 cursor-pointer invert dark:invert-0 xs:text-xl md:hidden"
            onClick={() => onOpen("projectEditModal")}
          />
          <Button
            className="text-dark border-gray-100 text-gray-100 hidden w-24 items-center border bg-transparent text-gray md:flex"
            onClick={() => onOpen("projectEditModal")}
          >
            <IconFilter className="mr-3 invert dark:invert-0" />
            Filter
          </Button>
          <Button variant="default" className="w-[130px] items-center" onClick={() => onOpen("projectAddModal")}>
            <IconAdd className="mr-2" />
            Add Project
          </Button>
        </div>
      </div>
      {projects.length === 0 && <Loading />}
      {projects.length > 0 && <ProjectCard projects={projects} />}
    </div>
  )
}

export default Projects

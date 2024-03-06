"use client"

import H1 from "@/Components/shared/dashboard/H1"
import ProjectCard from "./ProjectCard"
import { useEffect, useState } from "react"
import axios from "axios"

const getProjects = async () => {
  const res = await axios.get("https://codebility-be.onrender.com/api/v1/production/projects")
  return res.data.data
}

const Projects = async () => {
  const projects = await getProjects()
  // const [data, setData] = useState<any[]>([])
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   const fetchProjectsData = async () => {
  //     try {
  //       const response = await axios("https://codebility-be.onrender.com/api/v1/production/projects")
  //       if (!response) {
  //         throw new Error("Failed to fetch data from the server.")
  //       }
  //       setData(response.data.data)
  //       setIsLoading(false)
  //     } catch (error) {
  //       console.error(error)
  //     } finally {
  //       setTimeout(() => {
  //         setIsLoading(false)
  //       }, 1000)
  //     }
  //   }
  //   fetchProjectsData()
  // }, [])

  // console.log(data)

  return (
    <div className="flex flex-col gap-4">
      <H1>Projects</H1>
      <ProjectCard projects={projects} />
    </div>
  )
}

export default Projects

"use client"

import H1 from "@/Components/shared/dashboard/H1"
import ProjectCard from "./ProjectCard"
import { useEffect, useState } from "react"
import axios from "axios"

const Projects = () => {
  const [data, setData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const response = await axios("https://codebility-be.onrender.com/api/v1/production/projects")
        if (!response) {
          throw new Error("Failed to fetch data from the server.")
        }
        setData(response.data.data)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      } finally {
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
      }
    }
    fetchProjectsData()
  }, [])

  console.log(data)

  return (
    <div className="flex flex-col gap-4">
      <H1>Projects</H1>
      {isLoading ? (
        <div className="flex h-screen items-center justify-center">
          <div className="CodevsSpinner"></div>
        </div>
      ) : (
        <ProjectCard projects={data} />
      )}
    </div>
  )
}

export default Projects

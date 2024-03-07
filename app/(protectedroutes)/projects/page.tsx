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

  return (
    <div className="flex flex-col gap-4">
      <H1>Projects</H1>
      <ProjectCard projects={projects} />
    </div>
  )
}

export default Projects

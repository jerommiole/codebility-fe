"use client"

import Image from "next/image"
import Link from "next/link"
import defaultImageThumb from "@/public/assets/images/thumb-apexpoint.png"
import Box from "@/Components/shared/dashboard/Box"
import { Button } from "@/Components/ui/button"
import { Paragraph } from "@/Components/landingPage"
import { IconGithub, IconLink } from "@/public/assets/svgs"

const ProjectCard = ({ projects }: { projects: any }) => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {projects.map((project: any) => (
        <Box key={project.id} className="flex flex-col gap-2 border">
          <Image
            alt="Thumbnail"
            src={project.project_imgURL || defaultImageThumb}
            width={640}
            height={433}
            className="mb-2 h-full w-full rounded-lg bg-cover object-contain"
          />
          <p className="text-lg font-semibold uppercase">{project.project_name}</p>
          <div className="flex gap-2">
            <Link href={project.github_link} target="_blank">
              <IconGithub className="h-18 w-18 invert dark:invert-0" />
            </Link>
            <Link href="https://apexpointv2.vercel.app/" target="_blank">
              <IconLink className="h-18 w-18 invert dark:invert-0" />
            </Link>
          </div>
          <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Paragraph>

          <div className="flex justify-end">
            <Link href={`/projects/${project.id}`}>
              <Button variant="default">Explore</Button>
            </Link>
          </div>
        </Box>
      ))}
    </div>
  )
}

export default ProjectCard

"use client"

import { Paragraph } from "@/Components/shared/home"
import Box from "@/Components/shared/dashboard/Box"
import H1 from "@/Components/shared/dashboard/H1"
import { IconGithub, IconLink } from "@/public/assets/svgs"
import { Project } from "@/types"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import defaultAvatarMale from "public/assets/images/default-avatar-male.png"
import defaultAvatarFemale from "public/assets/images/default-avatar-female.png"
import { Button } from "@/Components/ui/button"
import { useModal } from "@/hooks/use-modal"

const ProjectPage = ({ params }: { params: { id: string } }) => {
  const id = params.id
  const [project, setProject] = useState<Project | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const { onOpen } = useModal()

  const { project_name, github_link, createdAt, users, clientId } = project || {}

  useEffect(() => {
    const fetchProjectsData = async (id: string) => {
      try {
        const response = await axios("https://codebility-be.onrender.com/api/v1/production/projects/" + id)
        if (!response) {
          throw new Error("Failed to fetch data from the server.")
        }
        setProject(response.data.data)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchProjectsData(id)
  }, [id])

  return (
    <Box>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col justify-center gap-4 text-center lg:text-left">
          <Image
            src="/assets/images/thumb-apexpoint.png"
            width={1080}
            height={768}
            alt={`${project_name} Thumbnail`}
            className="mb-2 h-full w-full rounded-lg bg-cover object-contain"
          />
          <H1 className="uppercase">{project_name} APEXPOINT</H1>
          <Button variant="default" onClick={() => onOpen("projectEditModal")}>
            Edit
          </Button>
          <div className="flex justify-center gap-2 lg:justify-start">
            <Link href={github_link ?? "https://github.com/"} target="_blank">
              <IconGithub className="h-18 w-18 invert dark:invert-0" />
            </Link>
            <Link href="https://apexpointv2.vercel.app/" target="_blank">
              <IconLink className="h-18 w-18 invert dark:invert-0" />
            </Link>
          </div>
          <p>Summary</p>
          <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Paragraph>
          <p>Contributors</p>

          <div className="mx-auto flex flex-row gap-4 text-center lg:mx-0">
            {users &&
              users.map((user) => (
                <div key={user.id} className="flex justify-center">
                  <Link href={`/codevs/${user.id}`} target="_blank">
                    {" "}
                    {/* Add the link for the user profile */}
                    <Image
                      alt="Avatar"
                      src={user.image_icon || defaultAvatarMale}
                      width={100}
                      height={100}
                      className="h-[50px] w-[50px] rounded-full bg-blue-500 bg-cover md:h-[100px] md:w-[100px]"
                    />
                    <p className="pt-3 font-semibold">{user.name}</p>
                  </Link>
                  <Paragraph>{user.position}</Paragraph>
                </div>
              ))}
            {/* 
            <Link href="/codevs/65c53f7588b5ce680ecc2575" target="_blank">
              <Image
                alt="Avatar"
                src={defaultAvatarMale}
                width={100}
                height={100}
                className="h-[100px] w-[100px] rounded-full bg-blue-500 bg-cover"
              />
              <p className="pt-3 font-semibold ">Name</p>
              <Paragraph>FE Developer</Paragraph>
            </Link>
            <Link href="/codevs/65c53f7588b5ce680ecc2575" target="_blank">
              <Image
                alt="Avatar"
                src={defaultAvatarMale}
                width={100}
                height={100}
                className="h-[100px] w-[100px] rounded-full bg-blue-500 bg-cover"
              />
              <p className="pt-3 font-semibold ">Name</p>
              <Paragraph>FE Developer</Paragraph>
            </Link> */}
          </div>
        </div>
      </div>
    </Box>
  )
}

export default ProjectPage

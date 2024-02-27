import React from "react"

import H1 from "@/Components/shared/dashboard/H1"
import { SvgGithub } from "@/public/assets/icons"
import { Checkbox } from "Components/ui/checkbox"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "Components/ui/table"
import axios from "axios"
import Link from "next/link"
import { IconEmail, IconGithub, IconLink } from "@/public/assets/svgs"
import { User } from "@/types"

interface ApplicantData {
  about_me: string | null
  address: string
  addtl_skills: string[]
  clientId: string | null
  created_at: string
  education: string | null
  email_address: string
  fb_link: string | null
  github_link: string
  id: string
  image_icon: string | null
  linkedin_link: string | null
  name: string
  password: string
  phone_no: string | null
  portfolio_website: string
  position: string[]
  projects: string[]
  roleType: string
  schedule: string
  short_bio: string | null
  skype_link: string | null
  tech_stacks: string[]
  telegram_link: string | null
  updated_at: string
  userType: string
  whatsapp_link: string | null
}

interface TechStackIcons {
  [key: string]: React.ReactNode
}

// TODO:
// - destructure the props
// import { User } from "@/types"
// import TechSatckIcons from "@/components/techStackIcons"

const getApplicants = async () => {
  const res = await axios.get("https://codebility-be.onrender.com/api/v1/production/users/applicant")

  return res.data.data
}

const ApplicantsPage = async () => {
  const applicants = await getApplicants()

  return (
    <div className="flex flex-col gap-6">
      <H1>Applicants List</H1>
      <Table>
        <TableCaption>
          {applicants.length > 0 ? `${applicants.length} list of Applicants.` : "No list of Applicants"}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead className="min-w-[150px] text-center">Name</TableHead>
            <TableHead>Gmail</TableHead>
            <TableHead>Github</TableHead>
            <TableHead>Portfolio</TableHead>
            <TableHead className="min-w-[200px] text-center">Tech Stack</TableHead>
            <TableHead></TableHead>
            <TableHead className="text-center">Approval</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicants.length > 0 &&
            applicants.map((applicant: ApplicantData) => (
              <TableRow key={applicant.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{applicant.name}</TableCell>
                <TableCell className="text-center">
                  <Link href={`mailto:${applicant.email_address}`}>
                    <div className="flex justify-center">
                      <IconEmail className="h-[18px] w-[18px] text-[#31AFC4]" />
                    </div>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={applicant.github_link} target="_blank">
                    <div className="flex justify-center">
                      <IconLink className="h-[18px] w-[18px] text-[#31AFC4]" />
                    </div>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={applicant.portfolio_website} target="_blank">
                    <div className="flex justify-center">
                      <IconGithub className="h-[18px] w-[18px] text-[#31AFC4]" />
                    </div>
                  </Link>
                </TableCell>
                <TableCell className="h-full w-full">
                  <div className="flex h-full w-full flex-wrap items-center justify-center gap-2 ">
                    {/* Render Svg components only on the client-side  */}
                    {applicant.tech_stacks.map((techstack: string) => (
                      // <div key={techstack}>{techStackIcons[techstack]}</div>
                      <div key={techstack}>
                        <SvgGithub />
                      </div>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-center"></TableCell>
                <TableCell className="">
                  <div className="flex h-full w-full items-center justify-center gap-4">
                    <button className="hover:underline">Accept</button>
                    <button className="hover:underline">Deny</button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default ApplicantsPage

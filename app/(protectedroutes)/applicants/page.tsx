import React from "react"

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "Components/ui/table"
import { Checkbox } from "Components/ui/checkbox"
import axios from "axios"
import { SvgGithub } from "@/public/assets/icons"

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

// const techStackIcons: TechStackIcons = {
//   Angular: <SvgAngular />,
//   Apache: <SvgApache />,
//   AWS: <SvgAWS />,
//   Bootstrap: <SvgBootstrap />,
//   CSS: <SvgCSS />,
//   Django: <SvgDjango />,
//   Express: <SvgExpress />,
//   Firebase: <SvgFirebase />,
//   Html: <SvgHTML />,
//   Java: <SvgJava />,
//   Javascript: <SvgJavascript />,
//   Jquery: <SvgJquery />,
//   Kotlin: <SvgKotlin />,
//   Github: <SvgGithub />,
//   Mongodb: <SvgMongoDB />,
//   Mui: <SvgMUI />,
//   Mysql: <SvgMySQL />,
//   Node: <SvgNode />,
//   Oracle: <SvgOracle />,
//   Postgresql: <SvgPostgreSql />,
//   Python: <SvgPython />,
//   React: <SvgReact />,
//   Ruby: <SvgRuby />,
//   Shadcnui: <SvgShadcnUI />,
//   Solidity: <SvgSolidity />,
//   Swift: <SvgSwift />,
//   Typescript: <SvgTypescript />,
//   Vue: <SvgVue />,
// }

const getApplicants = async () => {
  const res = await axios.get("https://codebility-be.onrender.com/api/v1/production/users/applicant")

  return res.data.data
}

const ApplicantsPage = async () => {
  const applicants = await getApplicants()
  console.log(applicants)
  return (
    <div className="h-full w-full">
      <h1 className="mb-4 ms-5 text-2xl text-gray-900">Applicants Records</h1>
      <Table>
        <TableCaption>
          {applicants.length > 0 ? `${applicants.length} list of Applicants.` : "No list of Applicants"}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead className="min-w-[150px] text-center">Name</TableHead>
            <TableHead className="min-w-[150px] text-center">Gmail</TableHead>
            <TableHead className="min-w-[200px] text-center">Github Link</TableHead>
            <TableHead className="min-w-[250px] text-center">Portfolio Link</TableHead>
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
                <TableCell className="text-center">{applicant.name}</TableCell>
                <TableCell className="text-center">{applicant.email_address}</TableCell>
                <TableCell className="text-center">{applicant.github_link}</TableCell>
                <TableCell className="text-center">{applicant.portfolio_website}</TableCell>
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

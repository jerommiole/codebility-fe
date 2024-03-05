import React from "react"
import H1 from "@/Components/shared/dashboard/H1"
import { Checkbox } from "Components/ui/checkbox"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "Components/ui/table"
import axios from "axios"
import Link from "next/link"

// Importing SVG icons for various tech stacks
import {
  IconAWS,
  IconAngular,
  IconApache,
  IconBootstrap,
  IconCSS,
  IconDjango,
  IconEmail,
  IconExpress,
  IconFirebase,
  IconGithub,
  IconHTML,
  IconJQuery,
  IconJavaScript,
  IconJava,
  IconKotlin,
  IconLink,
  IconMUI,
  IconMongoDB,
  IconMySQL,
  IconNodeJS,
  IconOracle,
  IconPostgreSQL,
  IconPython,
  IconReact,
  IconRuby,
  IconShadcnUI,
  IconSolidity,
  IconSwift,
  IconTypeScript,
  IconVue,
} from "@/public/assets/svgs"
import { User, TechStackIcons } from "@/types"

// Mapping of tech stack names to respective SVG icons
const techStackIcons: TechStackIcons = {
  Angular: <IconAngular />,
  Apache: <IconApache />,
  AWS: <IconAWS />,
  Bootstrap: <IconBootstrap />,
  CSS: <IconCSS />,
  Django: <IconDjango />,
  Express: <IconExpress />,
  Firebase: <IconFirebase />,
  Html: <IconHTML />,
  Java: <IconJava />,
  Javascript: <IconJavaScript />,
  Jquery: <IconJQuery />,
  Kotlin: <IconKotlin />,
  Github: <IconGithub />,
  Mongodb: <IconMongoDB />,
  Mui: <IconMUI />,
  Mysql: <IconMySQL />,
  Node: <IconNodeJS />,
  Oracle: <IconOracle />,
  Postgresql: <IconPostgreSQL />,
  Python: <IconPython />,
  React: <IconReact />,
  Ruby: <IconRuby />,
  Shadcnui: <IconShadcnUI />,
  Solidity: <IconSolidity />,
  Swift: <IconSwift />,
  Typescript: <IconTypeScript />,
  Vue: <IconVue />,
}

// Function to fetch applicants data asynchronously
const getApplicants = async () => {
  const res = await axios.get("https://codebility-be.onrender.com/api/v1/production/users/applicant")
  return res.data.data
}

// Main component to display list of applicants
const ApplicantsPage = async () => {
  // Fetching applicants data
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
            {/* Table headers */}
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
            applicants.map(({ id, name, email_address, github_link, portfolio_website, tech_stacks }: User) => (
              <TableRow key={id}>
                {/* Table cells for each applicant */}
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell className="text-center">
                  {/* Link to email address */}
                  <Link href={`mailto:${email_address}`}>
                    <div className="flex justify-center">
                      <IconEmail className="h-[18px] w-[18px] text-[#31AFC4]" />
                    </div>
                  </Link>
                </TableCell>
                <TableCell>
                  {/* Link to Github profile */}
                  {github_link && (
                    <Link href={github_link} target="_blank">
                      <div className="flex justify-center">
                        <IconGithub className="h-[18px] w-[18px] text-[#31AFC4]" />
                      </div>
                    </Link>
                  )}
                </TableCell>
                <TableCell>
                  {/* Link to portfolio website */}
                  {portfolio_website && (
                    <Link href={portfolio_website} target="_blank">
                      <div className="flex justify-center">
                        <IconLink className="h-[18px] w-[18px] text-[#31AFC4]" />
                      </div>
                    </Link>
                  )}
                </TableCell>
                <TableCell className="h-full w-full">
                  {/* Displaying tech stack icons */}
                  <div className="flex h-full w-full flex-wrap items-center justify-center gap-2 ">
                    {/* Render Svg components only on the client-side  */}
                    {tech_stacks?.map((techstack: string) => <div key={techstack}>{techStackIcons[techstack]}</div>)}
                  </div>
                </TableCell>
                <TableCell className="text-center"></TableCell>
                {/* Buttons for approval */}
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

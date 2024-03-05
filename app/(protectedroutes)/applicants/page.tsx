import Box from "@/Components/shared/dashboard/Box"
import H1 from "@/Components/shared/dashboard/H1"
import { IconEmail, IconGithub, IconLink } from "@/public/assets/svgs"
import { User } from "@/types"
import { Checkbox } from "Components/ui/checkbox"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "Components/ui/table"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"

const getApplicants = async () => {
  const res = await axios.get("https://codebility-be.onrender.com/api/v1/production/users/applicant")
  return res.data.data
}

const ApplicantsPage = async () => {
  const applicants = await getApplicants()

  return (
    <Box className="flex flex-col gap-6">
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
            applicants.map(({ id, name, email_address, github_link, portfolio_website, tech_stacks }: User) => (
              <TableRow key={id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <p>{name}</p>
                </TableCell>
                <TableCell className="text-center">
                  <Link href={`mailto:${email_address}`}>
                    <div className="flex justify-center">
                      <IconEmail className="h-[18px] w-[18px] invert dark:invert-0" />
                    </div>
                  </Link>
                </TableCell>
                <TableCell>
                  {github_link && (
                    <Link href={github_link} target="_blank">
                      <div className="flex justify-center">
                        <IconGithub className="h-[18px] w-[18px] invert dark:invert-0" />
                      </div>
                    </Link>
                  )}
                </TableCell>
                <TableCell>
                  {portfolio_website && (
                    <Link href={portfolio_website} target="_blank">
                      <div className="flex justify-center">
                        <IconLink className="h-[18px] w-[18px] invert dark:invert-0" />
                      </div>
                    </Link>
                  )}
                </TableCell>
                <TableCell className="h-full w-full">
                  <div className="flex h-full w-full flex-wrap items-center justify-center gap-2 ">
                    {tech_stacks &&
                      tech_stacks.map((stack: any, i: any) => (
                        <div key={i} className="flex items-center">
                          <Image
                            src={`/assets/svgs/icon-${stack}.svg`}
                            alt={stack + " icon"}
                            width={20}
                            height={20}
                            title={stack}
                            className="h-auto w-auto transition duration-300 hover:-translate-y-0.5"
                          />
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
    </Box>
  )
}

export default ApplicantsPage

import React, { useState } from "react"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "Components/ui/table"
import { Checkbox } from "Components/ui/checkbox"
import dynamic from "next/dynamic"

const Image = dynamic(() => import("next/image"), { ssr: false }) // Import Image dynamically with ssr: false

const applicants = [
  {
    name: "Mr.Lorem Ipsum",
    gmail: "IpsumL@gmail.com",
    github: "loremIpsum@github.io",
    portfolio: "LoremIpsum.com",
    techstacks: ["/techstacks/html.png", "/techstacks/css.png", "/techstacks/javascript.png"],
  },
  {
    name: "Mr.Lorem Ipsum",
    gmail: "IpsumL@gmail.com",
    github: "loremIpsum@github.io",
    portfolio: "LoremIpsum.com",
    techstacks: [""],
  },
  {
    name: "Mr.Lorem Ipsum",
    gmail: "IpsumL@gmail.com",
    github: "loremIpsum@github.io",
    portfolio: "LoremIpsum.com",
    techstacks: ["/techstacks/node.png", "/techstacks/express.jpg", "/techstacks/mongodb.png"],
  },
  {
    name: "Mr.Lorem Ipsum",
    gmail: "IpsumL@gmail.com",
    github: "loremIpsum@github.io",
    portfolio: "LoremIpsum.com",
    techstacks: [
      "/techstacks/react.png",
      "/techstacks/nextjs.png",
      "/techstacks/tailwind.png",
      "/techstacks/typescript.png",
      "/techstacks/nextjs.png",
      "/techstacks/tailwind.png",
      "/techstacks/typescript.png",
    ],
  },
]

const ApplicantsPage = () => {
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
            <TableHead className="text-center">Name</TableHead>
            <TableHead className="text-center">Gmail</TableHead>
            <TableHead className="text-center">Github Link</TableHead>
            <TableHead className="text-center">Portfolio Link</TableHead>
            <TableHead className="text-center">Tech Stack</TableHead>
            <TableHead className="text-center"></TableHead>
            <TableHead className="text-center">Approval</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicants.map((applicant) => (
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="text-center">{applicant.name}</TableCell>
              <TableCell className="text-center">{applicant.gmail}</TableCell>
              <TableCell className="text-center">{applicant.github}</TableCell>
              <TableCell className="text-center">{applicant.portfolio}</TableCell>
              <TableCell className="flex w-full items-center justify-center gap-2 text-center">
                {/* Render Image components only on the client-side */}
                {applicant.techstacks.map((techstack, index) => (
                  <Image key={index} src={techstack} width={15} height={5} alt="" />
                ))}
              </TableCell>
              <TableCell className="text-center"></TableCell>
              <TableCell className="flex items-center justify-center gap-4">
                <button className="hover:underline">Accept</button>
                <button className="hover:underline">Deny</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default ApplicantsPage

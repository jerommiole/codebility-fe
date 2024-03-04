"use client"

import imgCodebilityThumb from "@/public/assets/images/bio-project-thumb.png"
import { User } from "@/types"
import CodevHeading from "Components/landingPage/CodevHeading"
import SectionWrapper from "Components/landingPage/SectionWrapper"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { SvgCodebilityIconBlack, SvgDownload, SvgEmail, SvgGithub, SvgLink, SvgLinkedin } from "public/assets/icons"
import { useEffect, useState } from "react"
import { workExperienceData } from "../constant"
import { H1, Paragraph } from "@/Components/landingPage"

const CodevBioPage = ({ params }: { params: { id: string } }) => {
  const id = params.id
  const [data, setData] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const {
    name,
    short_bio,
    image_icon,
    address,
    email_address,
    github_link,
    fb_link,
    linkedin_link,
    whatsapp_link,
    skype_link,
    telegram_link,
    portfolio_website,
    tech_stacks,
    addtl_skills,
    about_me,
    education,
    created_at,
    updated_at,
    schedule,
    position,
    projects,
    clientId,
  } = data || {}

  useEffect(() => {
    const fetchUsersData = async (id: string) => {
      try {
        const response = await axios("https://codebility-be.onrender.com/api/v1/production/users/" + id)
        if (!response) {
          throw new Error("Failed to fetch data from the server.")
        }
        setData(response.data.data)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchUsersData(id)
  }, [id])

  return (
    <>
      <div className="bg-black-400">
        <SectionWrapper>
          <div className="flex flex-col gap-20">
            <div className="text-center">
              <H1>Biography</H1>
            </div>

            <div className="flex flex-col gap-20 bg-black-500 p-10">
              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="order-3 my-auto flex basis-2/5 flex-col text-primaryColor lg:order-1">
                  <p className="text-center text-lg font-semibold md:text-3xl lg:text-left">
                    {name && name.length > 0 ? name : "Null"}
                  </p>
                  <p className="text-center text-lg text-secondaryColor lg:text-left">
                    {position && position[0] ? position : "Null"}
                  </p>
                  <p className="text-center text-lg text-secondaryColor lg:text-left">
                    {address && address ? address : "Null"}
                  </p>
                  <div className="mt-2 flex flex-row justify-center gap-2 lg:justify-start">
                    {email_address && (
                      <Link href={`mailto:${email_address}`}>
                        <SvgEmail />
                      </Link>
                    )}
                    {github_link && (
                      <Link href={github_link} target="_blank">
                        <SvgGithub />
                      </Link>
                    )}
                    {portfolio_website && (
                      <Link href={portfolio_website} target="_blank">
                        <SvgLink />
                      </Link>
                    )}
                    {fb_link && (
                      <Link href={fb_link} target="_blank">
                        <SvgGithub />
                        {/* Change to FB Icon */}
                      </Link>
                    )}
                    {linkedin_link && (
                      <Link href={linkedin_link} target="_blank">
                        <SvgLinkedin />
                      </Link>
                    )}
                  </div>
                </div>
                <div className="order-2 basis-1/5 lg:order-2">
                  <div className="flex justify-center">
                    <Image
                      alt="Avatar"
                      src={image_icon ?? "/sampleProfile/profile.png"}
                      width={200}
                      height={200}
                      className="h-[80px] w-[80px] rounded-lg bg-[#1e1b4b] bg-cover object-contain md:h-[96px] md:w-[96px] lg:h-[180px] lg:w-[180px]"
                    />
                  </div>
                </div>
                <div className="order-1 basis-2/5 lg:order-3">
                  <div className="relative">
                    <div className="invisible absolute right-0 lg:visible">
                      <SvgCodebilityIconBlack />
                    </div>
                    <div className="absolute right-0 top-0">
                      <SvgDownload />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="flex basis-2/5 flex-col gap-4 text-secondaryColor">
                  <div>
                    <CodevHeading>About me</CodevHeading>
                    <p className="text-sm">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s,
                    </p>
                    <p>{short_bio}</p>
                  </div>
                  <div>
                    <CodevHeading>Education</CodevHeading>
                    <p className="text-sm">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s,
                    </p>
                    <p>{education}</p>
                  </div>
                  <div className="flex flex-col">
                    <CodevHeading>Skills</CodevHeading>
                    <div className="flex flex-wrap gap-2">
                      {tech_stacks &&
                        tech_stacks.map((stack: any, i: any) => (
                          <div key={i} className="flex items-center">
                            <Image
                              src={`/assets/svgs/icon-${stack}.svg`}
                              alt={stack + " icon"}
                              width={20}
                              height={20}
                              title={stack}
                              className="transition duration-300 hover:-translate-y-0.5"
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                <div className="flex basis-3/5 flex-col gap-2">
                  <CodevHeading>Work Experience</CodevHeading>

                  {workExperienceData.map((item, i) => (
                    <div key={`skill-${i}`} className="relative border-l border-teal pb-6 pl-10">
                      <div className="absolute -left-[4px] bottom-0 top-0 h-2 w-2 animate-ping rounded-full bg-teal" />
                      <div className="absolute -left-[4px] bottom-0 top-0 h-2 w-2 rounded-full bg-teal " />

                      <div className="flex flex-col gap-4 border-b border-black-100 pb-6 text-secondaryColor">
                        <div>
                          <p className="text-lg font-bold lg:text-xl">{item.position}</p>
                          <p className="text-sm lg:text-lg">{item.company}</p>
                          <p className="text-xs lg:text-sm">
                            {item.fromYear} - {item.toYear}
                          </p>

                          <p className="text-xs lg:text-sm">{item.location}</p>
                        </div>

                        <ul className="pl-4">
                          {item.tasks?.map((task: any, i: any) => (
                            <li className="list-disc text-xs lg:text-sm" key={i}>
                              {task}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies?.map((tech: any, i: any) => (
                            <div key={i} className="flex items-center">
                              <Image
                                src={`/assets/svgs/icon-${tech}.svg`}
                                alt={tech + " icon"}
                                width={20}
                                height={20}
                                title={tech}
                                className="transition duration-300 hover:-translate-y-0.5"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <CodevHeading>Codebility Projects</CodevHeading>
                <div className="flex flex-col gap-2 lg:flex-row lg:gap-10">
                  <div className="h-full w-full">
                    <Image
                      src={imgCodebilityThumb}
                      width={700}
                      height={800}
                      alt="Codebility Project"
                      className="h-full w-full rounded-lg bg-cover object-contain"
                    />
                  </div>
                  <div className="my-auto flex flex-col gap-2 text-secondaryColor">
                    <div>
                      <p className="text-lg font-bold text-secondaryColor lg:text-xl">CODEBILITY </p>
                      <p className="text-xs text-secondaryColor lg:text-sm">2023 - 2024</p>
                    </div>
                    <p className="text-xs lg:text-sm">
                      At Codebility, we undertook a dynamic and comprehensive project to design and develop a
                      feature-rich website, seamlessly integrating an eye-catching landing page with a robust Content
                      Management System (CMS). This project aimed to provide Codebility with a modern and user-friendly
                      online presence, enabling efficient content management and easy navigation for both visitors and
                      administrators.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center">
                        <Image
                          src="/assets/svgs/icon-angular.svg"
                          alt="Angular icon"
                          width={20}
                          height={20}
                          title="angular"
                          className="transition duration-300 hover:-translate-y-0.5"
                        />
                      </div>
                      <div className="flex items-center">
                        <Image
                          src="/assets/svgs/icon-react.svg"
                          alt="React icon"
                          width={20}
                          height={20}
                          title="react"
                          className="transition duration-300 hover:-translate-y-0.5"
                        />
                      </div>
                      <div className="flex items-center">
                        <Image
                          src="/assets/svgs/icon-typescript.svg"
                          alt="TypeScript icon"
                          width={20}
                          height={20}
                          title="typescript"
                          className="transition duration-300 hover:-translate-y-0.5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <CodevHeading>Personal Projects</CodevHeading>
                <div className="flex flex-col gap-2 lg:flex-row lg:gap-10">
                  <div className="h-full w-full">
                    <Image
                      src={imgCodebilityThumb}
                      width={700}
                      height={800}
                      alt="Codebility Project"
                      className="h-full w-full rounded-lg bg-cover object-contain"
                    />
                  </div>
                  <div className="my-auto flex flex-col gap-2 text-secondaryColor">
                    <div>
                      <p className="text-lg font-bold text-secondaryColor lg:text-xl">CODEBILITY </p>
                      <p className="text-xs text-secondaryColor lg:text-sm">2023 - 2024</p>
                    </div>
                    <p className="text-xs lg:text-sm">
                      At Codebility, we undertook a dynamic and comprehensive project to design and develop a
                      feature-rich website, seamlessly integrating an eye-catching landing page with a robust Content
                      Management System (CMS). This project aimed to provide Codebility with a modern and user-friendly
                      online presence, enabling efficient content management and easy navigation for both visitors and
                      administrators.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center">
                        <Image
                          src="/assets/svgs/icon-angular.svg"
                          alt="Angular icon"
                          width={20}
                          height={20}
                          title="Angular"
                          className="transition duration-300 hover:-translate-y-0.5"
                        />
                      </div>
                      <div className="flex items-center">
                        <Image
                          src="/assets/svgs/icon-react.svg"
                          alt="React icon"
                          width={20}
                          height={20}
                          title="React"
                          className="transition duration-300 hover:-translate-y-0.5"
                        />
                      </div>
                      <div className="flex items-center">
                        <Image
                          src="/assets/svgs/icon-typescript.svg"
                          alt="TypeScript icon"
                          width={20}
                          height={20}
                          title="TypeScript"
                          className="transition duration-300 hover:-translate-y-0.5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Link href="/">
                <Image src="/assets/svgs/codebility-white.svg" alt="CodebilityLogo" width={147} height={30} />
              </Link>
              <Paragraph>© 2024 CODEBILITY. All Right Reserved</Paragraph>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </>
  )
}
export default CodevBioPage

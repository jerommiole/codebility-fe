"use client"

import ButtonLink from "@/Components/shared/home/ButtonLink"
import Image from "next/image"
import Link from "next/link"
import defaultAvatarMale from "public/assets/images/default-avatar-male.png"
import defaultAvatarFemale from "public/assets/images/default-avatar-female.png"
import { SvgEmail, SvgGithub, SvgLink, SvgLinkedin } from "public/assets/icons"
import { IconGithub } from "@/public/assets/svgs"

const CodevsCard = ({ users }: { users: any }) => {
  return (
    <div className="m-auto w-full max-w-5xl">
      <div className="grid place-items-center gap-4 xs:grid-cols-2 sm:place-items-start md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {users.map((user: any, index: number) => (
          <div key={user.id} className="mx-auto h-full w-full rounded-lg bg-black-100 lg:bg-transparent">
            <div className="flex flex-col items-center gap-2 rounded-lg p-4 text-center">
              <Link href={`/codevs/${user.id}`}>
                <Image
                  alt="Avatar"
                  src={
                    user.image_icon
                      ? user.image_icon
                      : user.pronoun === ("male" || "he" || "him" || "his")
                      ? defaultAvatarFemale
                      : defaultAvatarMale
                  }
                  width={100}
                  height={100}
                  className="rounded-lg bg-blue-500 bg-cover"
                />
              </Link>
              <p className="pt-3 font-semibold text-white">{user.name}</p>
              <p className="text-[#8E8E8E]">{user.position}</p>
              <div className="flex flex-row items-center justify-center gap-2">
                {user.email_address && (
                  <Link href={`mailto:${user.email_address}`}>
                    <SvgEmail height={16} />
                  </Link>
                )}
                {user.github_link && (
                  <Link href={user.github_link} target="_blank">
                    <IconGithub className="h-[20px] w-[20px] text-white" />
                  </Link>
                )}
                {user.linkedin_link && (
                  <Link href={user.linkedin_link} target="_blank">
                    <SvgLinkedin />
                  </Link>
                )}
                {user.portfolio_website && (
                  <Link href={user.portfolio_website} target="_blank">
                    <SvgLink />
                  </Link>
                )}
              </div>
              <ButtonLink>
                <Link className="text-teal" href={`/codevs/${user.id}`}>
                  Read Bio
                </Link>
              </ButtonLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CodevsCard

"use client"

import Image from "next/image"
import Link from "next/link"
import defaultAvatarMale from "public/assets/images/default-avatar-male.png"
import defaultAvatarFemale from "public/assets/images/default-avatar-female.png"
import { SvgEmail, SvgLink, SvgLinkedin } from "public/assets/icons"
import { IconGithub } from "@/public/assets/svgs"
import { ButtonLink } from "@/Components/shared/home"
import Box from "@/Components/shared/dashboard/Box"

const InternCard = ({ user }: { user: any }) => {
  return (
    <Box key={user.id} className="mx-auto h-full w-full rounded-lg">
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
        <p className="pt-3 font-semibold">{user.name}</p>
        <p className="">{user.position}</p>
        <div className="flex flex-row items-center justify-center gap-2">
          {user.email_address && (
            <Link href={`mailto:${user.email_address}`}>
              <SvgEmail height={16} className="invert dark:invert-0" />
            </Link>
          )}
          {user.github_link && (
            <Link href={user.github_link} target="_blank">
              <IconGithub className="h-[20px] w-[20px] invert dark:invert-0" />
            </Link>
          )}
          {user.linkedin_link && (
            <Link href={user.linkedin_link} target="_blank">
              <SvgLinkedin className="invert dark:invert-0" />
            </Link>
          )}
          {user.portfolio_website && (
            <Link href={user.portfolio_website} target="_blank">
              <SvgLink className="invert dark:invert-0" />
            </Link>
          )}
        </div>
        <ButtonLink>
          <Link className="text-teal" href={`/codevs/${user.id}`}>
            Read Bio
          </Link>
        </ButtonLink>
      </div>
    </Box>
  )
}

export default InternCard

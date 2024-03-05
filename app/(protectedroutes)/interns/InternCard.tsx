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
    <Box
      key={user.id}
      className="flex flex-col items-center gap-2 rounded-lg bg-[#121212] p-4 text-center lg:bg-transparent"
    >
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
          className="rounded-lg bg-[#1e1b4b] bg-cover"
        />
        <p className="text-darkBlueColor pt-3 font-semibold">{user.name}</p>
      </Link>
      <p>{user.position}</p>
      <div className="flex flex-row justify-center gap-2">
        {user.email_address && (
          <Link href={`mailto:${user.email_address}`}>
            <SvgEmail height={16} className="invert dark:invert-0" />
          </Link>
        )}
        {user.github_link && (
          <Link href={user.github_link} target="_blank">
            <IconGithub className="invert dark:invert-0" />
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
        <Link className="text-[#31AFC4]" href={`/codevs/${user.id}`}>
          Read Bio
        </Link>
      </ButtonLink>
    </Box>
  )
}

export default InternCard

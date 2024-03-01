"use client"

import ButtonLink from "Components/landingPage/ButtonLink"
import Image from "next/image"
import Link from "next/link"
import defaultAvatarMale from "public/assets/images/default-avatar-male.png"
import defaultAvatarFemale from "public/assets/images/default-avatar-female.png"
import { SvgEmail, SvgLink, SvgLinkedin } from "public/assets/icons"
import { IconGithub } from "@/public/assets/svgs"

const InternCard = ({ user }: { user: any }) => {
  return (
    <div
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
        <p className="pt-3 font-semibold text-darkBlueColor">{user.name}</p>
      </Link>
      <p className="text-[#8E8E8E]">{user.position}</p>
      <div className="flex flex-row justify-center gap-2">
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
        {/* /codevs/${user.id} */}
        <Link className="text-[#31AFC4]" href={`/codevs/${user.id}`}>
          Read Bio
        </Link>
      </ButtonLink>
    </div>
  )
}

export default InternCard

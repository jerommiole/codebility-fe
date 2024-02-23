"use client"

import ButtonLink from "Components/landingPage/ButtonLink"
import Image from "next/image"
import Link from "next/link"
import defaultAvatarMale from "public/assets/images/default-avatar-male.png"
import defaultAvatarFemale from "public/assets/images/default-avatar-female.png"
import { SvgEmail, SvgGithub, SvgLink, SvgLinkedin } from "public/assets/icons"

const CodevsCard = ({ users }: { users: any }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
      {users.map((user: any) => (
        <div
          key={user.id}
          className="flex flex-col items-center gap-2 rounded-lg bg-[#121212] p-4 text-center lg:bg-transparent"
        >
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
            className="rounded-full bg-[#583DFF] bg-cover"
          />
          <p className="font-semibold text-darkBlueColor">{user.name}</p>
          <p className="text-[#8E8E8E]">{user.position}</p>
          <div className="flex flex-row justify-center gap-2">
            {user.email_address && (
              <Link href={`mailto:${user.email_address}`}>
                <SvgEmail height={16} />
              </Link>
            )}
            {user.github_link && (
              <Link href={user.github_link} target="_blank">
                <SvgGithub />
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
            <Link className="text-[#31AFC4]" href={`#`}>
              Read Bio
            </Link>
          </ButtonLink>
        </div>
      ))}
    </div>
  )
}

export default CodevsCard

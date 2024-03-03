import { Avatar } from "@radix-ui/react-avatar"
import Image from "next/image"
import defaultAvatarMale from "public/assets/images/default-avatar-male.png"
import defaultAvatarFemale from "public/assets/images/default-avatar-female.png"

interface Props {
  imgURL?: string
}

const RenderTeam = ({ imgURL }: Props) => {
  return (
    <>
      <Avatar className={`h-[30px] w-[30px] rounded-full bg-blue-100`}>
        <Image alt="Avatar" src={imgURL ? defaultAvatarFemale : defaultAvatarMale} width={30} height={30} />
      </Avatar>
    </>
  )
}

export default RenderTeam

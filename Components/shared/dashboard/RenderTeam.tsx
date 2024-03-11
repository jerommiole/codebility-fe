import { Avatar } from "@radix-ui/react-avatar"
import Image from "next/image"
import defaultAvatarMale from "public/assets/images/default-avatar-male.png"
import defaultAvatarFemale from "public/assets/images/default-avatar-female.png"

interface Props {
  imgURL?: string
}

const RenderTeam = ({ imgURL }: Props) => {
  return (
    <div className="m-1 inline-flex h-[30px] w-[30px] items-center rounded-full bg-blue-600">
      <Image alt="avatar" src={imgURL ? defaultAvatarFemale : defaultAvatarMale} width={30} height={30} />
    </div>
  )
}

export default RenderTeam

import Image from "next/image"
import Avatar from "Components/ui/avatar"
import Hero from "@/public/assets/images/default-avatar-male.png"

interface InternCardProps {
  image: string
  name: string
  position: string
  roles: string
  bgColor: string
}

const InternCard = ({ image, name, position, roles, bgColor }: InternCardProps) => {
  return (
    <>
      <div className="flex w-full flex-col gap-2">
        <div className="flex justify-center">
          <Avatar className={`h-24 w-24 bg-green-900 lg:h-36 lg:w-36 `}>
            <Image alt="avatar" src={Hero} width={140} height={140} />
          </Avatar>
        </div>
        <div className="flex flex-col text-center">
          <p className="text-darkBlueColor font-semibold">{name}</p>
          <p className="text-sm dark:text-secondaryColor">{position}</p>
        </div>
      </div>
    </>
  )
}

export default InternCard

"use client"

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Avatar from "Components/ui/avatar"
import Hero from "public/hero.png"
import Image, { StaticImageData } from "next/image"
import { CallSVG, EmailSVG, LocationSVG, LinkedinSVG } from "./logos"
import { useModal } from "hooks/use-modal"

interface Description {
  label: string
  sublabel: string
}

interface Props {
  image?: string | StaticImageData
  imgBgColor: string
  name?: string
  time?: string
  date?: string
  company?: string
  subtext?: string
  phonenumber?: string
  linkedin?: string
  email?: string
  address?: string
  description?: Description[]
  footerText?: string
}

const ClientCards = ({
  image,
  imgBgColor,
  name,
  time,
  date,
  company,
  subtext,
  phonenumber,
  linkedin,
  email,
  address,
  description,
  footerText,
}: Props) => {
  const { onOpen } = useModal()
  const data = {
    image,
    imgBgColor,
    name: name ? name : "Lorem Ipsum",
    time: time ? time : "08:00 am - 02:00 pm",
    date: date ? date : "11/29/30",
    company: company ? company : "Company Ipsum",
    subtext: subtext ? subtext : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptatem.",
    phonenumber: phonenumber ? phonenumber : "+63238729789",
    linkedin: linkedin ? linkedin : "Lorem",
    email: email ? email : "lorem@gmail.com",
    address: address ? address : "Philippines",
    description: description
      ? description
      : [
          {
            label: "Lorem Ipsum",
            sublabel:
              "Since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book",
          },
          {
            label: "Lorem Ipsum",
            sublabel:
              "Since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book",
          },
          {
            label: "Lorem Ipsum",
            sublabel:
              "Since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book",
          },
          {
            label: "Lorem Ipsum",
            sublabel:
              "Since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book",
          },
          {
            label: "Lorem Ipsum",
            sublabel:
              "Since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book",
          },
        ],
    footerText: footerText
      ? footerText
      : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, enim ipsa nemo cum labore fugiat quia possimus itaque eligendi tenetur.",
  }
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border bg-card-client px-5 py-[37px] dark:border-none md:flex-row lg:flex-col lg:px-[37px] xl:flex-row">
      <div className="flex flex-col items-center md:gap-2">
        {/* imgBgColor must follow tailwind coloring system. bg-{color you want}-{shade} */}
        <Avatar className={`h-24 w-24 ${imgBgColor} lg:h-36 lg:w-36 `}>
          <Image alt="dp" src={image || Hero} />
        </Avatar>
        <p className="text-sm md:mt-5">{name || "Lorem Ipsum"}</p>
        <h2 className="text-lg ">{time || "08:00 am - 02:00 pm"}</h2>
      </div>
      <div className="flex flex-1 flex-col md:ml-10 lg:ml-0 xl:ml-10">
        <p className="mt-4 self-end text-xs text-muted-foreground sm:my-0">{date || "11/29/30"}</p>
        <h1 className="self-center text-2xl font-bold md:self-start lg:self-center xl:self-start">
          {company || "Company Ipsum"}
        </h1>
        <p className="mt-2  text-center text-muted-foreground md:pr-20 md:text-start lg:pr-0 lg:text-center xl:pr-20 xl:text-start">
          {subtext || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptatem."}
        </p>
        <div className="sm: mt-10 grid grid-cols-2 gap-2">
          <div className="flex items-center rounded-md border bg-muted py-[18px] pl-4 dark:border-none dark:bg-muted">
            <CallSVG className="text-text4 dark:text-primary" />
            <p className="ml-[15px] text-xs lg:ml-2">{phonenumber || "+63238729789"}</p>
          </div>
          <div className="flex items-center rounded-md border bg-muted py-[18px] pl-4 dark:border-none dark:bg-muted">
            <LinkedinSVG className="text-text4 dark:text-primary" />
            <p className="ml-[15px] text-xs lg:ml-2">{linkedin || "Lorem"}</p>
          </div>
          <div className="flex items-center rounded-md border bg-muted py-[18px] pl-4 dark:border-none dark:bg-muted">
            <EmailSVG className="text-text4 dark:text-primary" />
            <p className="ml-[15px] overflow-hidden text-ellipsis text-xs lg:ml-2">{email || "lorem@gmail.com"}</p>
          </div>
          <div className="flex items-center rounded-md border py-[18px] pl-4 dark:border-none dark:bg-muted">
            <LocationSVG className="text-text4 dark:text-primary" />
            <p className="ml-[15px] text-ellipsis text-xs lg:ml-2">{address || "Philippines"}</p>
          </div>
        </div>
        <p
          onClick={() => {
            onOpen("companyProfile", data)
          }}
          className="mt-2 cursor-pointer self-center text-xs text-text2 hover:underline md:mt-10 md:self-end lg:mt-2 lg:self-center xl:mt-10 xl:self-end"
        >
          View Details
        </p>
      </div>
    </div>
  )
}

export default ClientCards

"use client"

import Box from "@/Components/shared/dashboard/Box"
import BoxInset from "@/Components/shared/dashboard/BoxInset"
import { Paragraph } from "@/Components/shared/home"
import { Button } from "@/Components/ui/button"
import { useModal } from "hooks/use-modal"
import Image from "next/image"
import { Client } from "@/types"
import { IconEmail, IconLinkedIn, IconMapPin, IconTelephone } from "@/public/assets/svgs"
import { SvgCodebilityIconBlack } from "@/public/assets/icons"

const ClientCards = ({ clients }: { clients: Client[] }) => {
  const { onOpen } = useModal()

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {clients.map(({ id, company_name, location, email, contact_number, linkedin_link }: Client) => (
        <Box key={id} className="relative flex flex-col gap-6 p-5 ">
          <div className="invisible absolute right-10 top-2 md:visible lg:invisible xl:visible">
            <SvgCodebilityIconBlack className="text-gray" />
          </div>
          <div className="flex justify-center md:justify-start lg:justify-center xl:justify-start">
            <div className="relative my-auto h-[120px] w-[120px] rounded-full bg-dark-400 p-6">
              <Image
                alt="Thumbnail"
                src="/assets/svgs/icon-company.svg" //need to update backend with real images data
                width={100}
                height={100}
                className="mb-2 h-full w-full rounded-lg bg-cover object-contain"
              />
            </div>
          </div>
          <div className="relative flex h-full flex-col items-center justify-between gap-4 md:items-start lg:items-center xl:items-start">
            <p className="text-center font-semibold uppercase md:text-start md:text-xl lg:text-center xl:text-start ">
              {company_name}
            </p>
            <div className="space-y-4 text-xs md:w-full lg:w-auto xl:w-full">
              <div className="flex items-center gap-4 text-gray">
                <IconMapPin className="invert dark:invert-0" />
                {location}
              </div>
              <div className="flex items-center gap-4 text-gray">
                <IconEmail className="invert dark:invert-0" />
                {email}
              </div>
              <div className="flex items-center gap-4 text-gray">
                <IconLinkedIn className="invert dark:invert-0" />
                {linkedin_link}
              </div>
              <div className="flex w-full items-start justify-between gap-10">
                <div className="flex items-center gap-4 text-gray">
                  <IconTelephone className="invert dark:invert-0" />
                  {contact_number}
                </div>
                <Button
                  variant="hollow"
                  className="hidden transform border-gray text-gray md:block lg:hidden xl:block"
                  onClick={() => onOpen("companyViewModal")}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-end md:hidden lg:flex xl:hidden">
            <Button
              variant="hollow"
              className="transform border-gray text-gray"
              onClick={() => onOpen("companyViewModal")}
            >
              Learn More
            </Button>
          </div>
        </Box>
      ))}
    </div>
  )
}

export default ClientCards

"use client"

import Box from "@/Components/shared/dashboard/Box"
import BoxInset from "@/Components/shared/dashboard/BoxInset"
import { Paragraph } from "@/Components/shared/home"
import { Button } from "@/Components/ui/button"
import { useModal } from "hooks/use-modal"
import Image from "next/image"
import { Client } from "@/types"

const ClientCards = ({ clients }: { clients: Client[] }) => {
  const { onOpen } = useModal()

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {clients.map((client: Client) => (
        <Box key={client.id} className="flex gap-6 lg:flex-col xl:flex-row">
          <div className="flex">
            <div className="relative my-auto h-[120px] w-[120px] rounded-full bg-white p-6">
              <Image
                alt="Thumbnail"
                src={"/assets/svgs/icon-codebility.svg"} //need to update backend with real images data
                width={100}
                height={100}
                className="mb-2 h-full w-full rounded-lg bg-cover object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold uppercase">{client.company_name}</p>
            <Paragraph>{client.company_hist}</Paragraph>
            <div className="grid gap-2 lg:grid-cols-1 xl:grid-cols-2">
              <BoxInset icon="telephone" label={client.contact_number} iconClassName="invert dark:invert-0" />
              <BoxInset icon="linkedin" label={client.linkedin_link} iconClassName="invert dark:invert-0" />
              <BoxInset icon="email" label={client.email} iconClassName="invert dark:invert-0" />
              <BoxInset icon="map-pin" label={client.location} iconClassName="invert dark:invert-0" />
            </div>

            <div className="flex justify-end">
              <Button
                className="link mt-2"
                // onClick={() => {
                //   onOpen("companyProfile", client)
                // }}
                onClick={() => onOpen("companyViewModal")}
              >
                Learn More
              </Button>
            </div>
          </div>
        </Box>
      ))}
    </div>
  )
}

export default ClientCards
